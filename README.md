# 몰루? — MVP

2026 LikeLion Univ. 14th Ideathon · LikeLion_SCNU 5팀

스마트폰으로 비추기만 하세요. 멀티모달 AI(Gemini 3.1 Pro)가 화면을 직접 보고 어디가 평소와 다른지 짚어드립니다.

- **현재 상태**: 본선용 웹 프로토타입. 랜딩 페이지(WebNav + Hero)만 구현됨. 다음은 사진 업로드 기반 AI 진단 데모.
- **스택**: Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4
- **톤**: A 따뜻한 노트 — Gaegu(캘리) + Nanum Myeongjo(디스플레이) + Pretendard(UI)

---

## 로컬 개발

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # 프로덕션 빌드
npm run lint
```

빌드 산출물은 `.next/standalone/`에 자급 가능한 Node 서버 번들로 떨어집니다 (`output: "standalone"`).

---

## 서버 배포 (Ubuntu + Docker + Cloudflare Tunnel)

대상: Ubuntu 22.04/24.04, Docker 설치된 호스트, 호스트에 `cloudflared` 데몬이 이미 돌고 있고 `likelionscnu.site` 도메인이 Cloudflare DNS에 있는 상태.

### 1) 서버 사전 준비 (한 번만)

```bash
# Docker 미설치 시
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker $USER
newgrp docker   # 또는 재로그인
```

### 2) 코드 가져오기

```bash
sudo mkdir -p /opt/molu && sudo chown $USER:$USER /opt/molu
cd /opt/molu
git clone https://github.com/Hbin77/molu-mvp.git .
```

### 3) 빌드 + 실행

```bash
docker compose up -d --build
docker compose ps                   # 헬스체크가 healthy로 바뀌는지 확인
docker compose logs -f web          # 로그 스트리밍
curl -I http://127.0.0.1:3000/      # HTTP/1.1 200 OK 확인
```

이제 컨테이너는 호스트의 `127.0.0.1:3000`에만 노출됩니다 (외부 인터넷 직접 노출 X).

> **포트 충돌이 날 때** — 호스트의 다른 컨테이너가 이미 3000을 잡고 있으면
> `.env` 파일에 `HOST_PORT=3300` 같은 식으로 지정 후 다시 띄우세요.
> ```bash
> cp .env.example .env && nano .env     # HOST_PORT=3300 으로 수정
> docker compose down && docker compose up -d
> curl -I http://127.0.0.1:3300/
> ```
> 이 경우 아래 cloudflared ingress의 service URL도 `http://localhost:3300`로 맞춰주세요.

> **백엔드(`molu-api`)와 연결할 때** — 백엔드는 **외부 노출 안 함**. 두 컨테이너가 공유
> docker 네트워크 `molu-net`에 함께 들어가고, Next.js가 서버 사이드에서 `/api/v1/*`을
> 컨테이너 이름으로 프록시합니다 (CORS 없음, public 엔드포인트 없음).
>
> 사전 1회: `docker network create molu-net` (이미 있으면 OK).
> 자세한 순서는 [`molu-api` README](https://github.com/Hbin77/molu-api#README) 참조.

### 4) Cloudflare Tunnel ingress에 서브도메인 추가

호스트에서 cloudflared가 이미 도는 상태라면, `~/.cloudflared/config.yml` 또는 `/etc/cloudflared/config.yml`을 편집합니다:

```yaml
tunnel: <TUNNEL_ID>
credentials-file: /home/ubuntu/.cloudflared/<TUNNEL_ID>.json
ingress:
  - hostname: mvp.likelionscnu.site
    service: http://localhost:3000
  # 기존 다른 라우트들 (있다면 위쪽에 유지)
  - service: http_status:404
```

DNS 라우트 등록(처음 한 번):

```bash
cloudflared tunnel route dns <TUNNEL_ID> mvp.likelionscnu.site
sudo systemctl restart cloudflared      # 또는: cloudflared service restart
```

이제 https://mvp.likelionscnu.site 로 접속하면 됩니다. SSL은 Cloudflare가 자동 처리.

---

## 운영 절차

### 업데이트 배포

```bash
cd /opt/molu
git pull
docker compose up -d --build       # 이미지 재빌드, 컨테이너 무중단 교체에 가깝게 갱신
docker image prune -f              # 이전 dangling 이미지 정리
```

### 롤백

```bash
git log --oneline -5
git checkout <이전 커밋 해시>
docker compose up -d --build
```

### 로그·상태 확인

```bash
docker compose ps                    # 컨테이너 헬스 상태
docker compose logs --tail=200 web   # 최근 로그
docker stats molu-mvp                # CPU/메모리
```

### 컨테이너 재시작 / 정지

```bash
docker compose restart
docker compose down                  # 정지+제거 (볼륨 보존)
```

---

## 보안 노트

- 컨테이너 포트는 `127.0.0.1:3000`에만 바인딩되어 있어 호스트 인터넷에 **직접 노출되지 않습니다**. 외부 진입점은 Cloudflare Tunnel 한 곳 뿐.
- 비root 사용자(`nextjs`, UID 1001)로 프로세스 실행.
- `.env`류 비밀 파일은 절대 커밋하지 마세요 — `.dockerignore`로 빌드 컨텍스트에서도 제외됩니다.

---

## 디렉토리

```
app/                    # Next.js App Router (layout, page)
components/
  ui/                   # MolluLogo, Icon
  illustrations/        # Washer SVG
  landing/              # WebNav, Hero, PhoneMockup
public/                 # 정적 자산
Dockerfile              # 멀티스테이지 (deps → builder → runner)
docker-compose.yml      # 단일 서비스, loopback 바인딩
```
