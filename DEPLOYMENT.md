# 🚀 배포 가이드

## GitHub Pages 자동 배포 설정

이 프로젝트는 GitHub Actions를 통해 자동으로 빌드되고 GitHub Pages에 배포됩니다.

---

## 📋 사전 준비

### 1. GitHub 저장소 생성

```bash
# 로컬에서 Git 초기화 (이미 완료된 경우 생략)
git init
git add .
git commit -m "Initial commit: Next.js project setup"

# GitHub에 저장소 생성 후 연결
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 2. GitHub Pages 활성화

1. GitHub 저장소 페이지로 이동
2. **Settings** 탭 클릭
3. 왼쪽 메뉴에서 **Pages** 클릭
4. **Source** 섹션에서:
   - Source: **GitHub Actions** 선택
5. 저장

---

## 🔧 Next.js 설정 업데이트

### basePath 설정 (중요!)

`next.config.ts` 파일에서 저장소 이름에 맞게 `basePath`를 설정해야 합니다.

**예시 1: 사용자 페이지 (username.github.io)**
```typescript
// basePath 설정 불필요
const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};
```

**예시 2: 프로젝트 페이지 (username.github.io/repo-name)**
```typescript
const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/YOUR_REPO_NAME',  // ⚠️ 저장소 이름으로 변경!
  images: { unoptimized: true },
  trailingSlash: true,
};
```

---

## 🚀 배포 프로세스

### 자동 배포 (권장)

코드를 `main` 브랜치에 푸시하면 자동으로 배포됩니다:

```bash
git add .
git commit -m "feat: Add new feature"
git push origin main
```

### 배포 확인

1. **GitHub Actions 페이지 확인**
   - 저장소 → **Actions** 탭
   - 최근 워크플로우 실행 확인
   - 빌드 로그 및 배포 상태 확인

2. **배포 링크 확인**
   - Actions 워크플로우 완료 후 **Summary** 섹션에서 배포 링크 확인
   - 또는 직접 접속:
     - 사용자 페이지: `https://YOUR_USERNAME.github.io/`
     - 프로젝트 페이지: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

---

## 📊 GitHub Actions 워크플로우 설명

### 워크플로우 파일: `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]      # main 브랜치에 푸시 시 실행
  workflow_dispatch:        # 수동 실행 가능
```

### 빌드 단계

1. **Checkout**: 코드 체크아웃
2. **Setup Node.js**: Node.js 20 설치
3. **Install dependencies**: `npm ci`로 의존성 설치
4. **Build**: `npm run build`로 Next.js 빌드
5. **Upload artifact**: 빌드 결과물 업로드

### 배포 단계

1. **Deploy to GitHub Pages**: 빌드 결과물을 GitHub Pages에 배포
2. **Deployment Complete**: 배포 완료 메시지 및 링크 표시

---

## 🔍 배포 상태 확인 방법

### 1. GitHub Actions 로그

```
저장소 → Actions → 최근 워크플로우 클릭
```

**확인 사항:**
- ✅ Build 단계 성공
- ✅ Deploy 단계 성공
- 🔗 배포 링크 (Summary 섹션)

### 2. 로컬에서 빌드 테스트

배포 전에 로컬에서 빌드를 테스트할 수 있습니다:

```bash
# 프로덕션 빌드
npm run build

# 빌드 결과물 확인
ls out/

# 로컬 서버로 테스트 (선택사항)
npx serve out
```

---

## 🐛 문제 해결

### 문제 1: 404 에러

**원인**: `basePath` 설정이 잘못됨

**해결**:
1. `next.config.ts`에서 `basePath` 확인
2. 저장소 이름과 일치하는지 확인
3. 슬래시(`/`) 포함 여부 확인

```typescript
// ❌ 잘못된 예
basePath: 'repo-name',      // 슬래시 없음
basePath: '/repo-name/',    // 끝에 슬래시

// ✅ 올바른 예
basePath: '/repo-name',     // 앞에만 슬래시
```

### 문제 2: CSS/JS 파일 로드 실패

**원인**: 정적 파일 경로 문제

**해결**:
1. `next.config.ts`에서 `assetPrefix` 추가:

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/YOUR_REPO_NAME',
  assetPrefix: '/YOUR_REPO_NAME',
  images: { unoptimized: true },
  trailingSlash: true,
};
```

### 문제 3: 이미지가 표시되지 않음

**원인**: Next.js Image 최적화가 static export에서 지원 안 됨

**해결**:
1. `next.config.ts`에 `images.unoptimized: true` 설정 (이미 완료)
2. 또는 `<img>` 태그 사용

### 문제 4: GitHub Actions 빌드 실패

**원인**: 의존성 설치 또는 빌드 오류

**해결**:
1. Actions 로그 확인
2. 로컬에서 `npm run build` 테스트
3. `package.json` 의존성 확인

---

## 📝 배포 체크리스트

배포 전에 다음 사항을 확인하세요:

- [ ] `next.config.ts`에서 `basePath` 설정 (프로젝트 페이지인 경우)
- [ ] `package.json`에서 프로젝트 이름 확인
- [ ] 로컬에서 `npm run build` 성공 확인
- [ ] GitHub 저장소 생성 및 연결
- [ ] GitHub Pages 설정 (Source: GitHub Actions)
- [ ] `.github/workflows/deploy.yml` 파일 존재 확인
- [ ] `main` 브랜치에 코드 푸시
- [ ] GitHub Actions 워크플로우 실행 확인
- [ ] 배포 링크 접속 및 동작 확인

---

## 🎯 배포 후 확인 사항

### 기능 테스트

- [ ] 홈페이지 로드 확인
- [ ] 모든 페이지 라우팅 동작 확인
- [ ] 이미지 로드 확인
- [ ] CSS 스타일 적용 확인
- [ ] JavaScript 동작 확인
- [ ] 모바일 반응형 확인

### 성능 테스트

- [ ] Lighthouse 점수 확인 (목표: 90+)
- [ ] Core Web Vitals 확인
- [ ] 로딩 속도 확인

---

## 🔄 업데이트 배포

코드를 수정한 후 배포하는 방법:

```bash
# 1. 변경사항 커밋
git add .
git commit -m "feat: Update homepage design"

# 2. 푸시 (자동 배포 트리거)
git push origin main

# 3. GitHub Actions에서 배포 상태 확인
# 4. 배포 완료 후 사이트 확인
```

---

## 📚 참고 자료

- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Deploying Next.js to GitHub Pages](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)

---

## 💡 추가 팁

### 커스텀 도메인 설정

GitHub Pages에서 커스텀 도메인을 사용하려면:

1. `public/CNAME` 파일 생성:
   ```
   www.yourdomain.com
   ```

2. DNS 설정:
   ```
   A Record: 185.199.108.153
   A Record: 185.199.109.153
   A Record: 185.199.110.153
   A Record: 185.199.111.153
   ```

3. GitHub 저장소 Settings → Pages에서 Custom domain 설정

### 배포 알림 설정

Slack이나 Discord로 배포 알림을 받으려면 워크플로우에 알림 단계 추가:

```yaml
- name: Notify Slack
  uses: 8398a7/action-slack@v3
  with:
    status: ${{ job.status }}
    webhook_url: ${{ secrets.SLACK_WEBHOOK }}
```

---

**배포 성공을 기원합니다! 🚀**
