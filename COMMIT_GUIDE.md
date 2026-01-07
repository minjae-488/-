# 🚀 커밋 및 배포 가이드

## 📝 커밋 전 체크리스트

배포하기 전에 다음 사항을 확인하세요:

- [x] ✅ 로컬 빌드 성공 (`npm run build`)
- [ ] 📝 `next.config.ts`에서 `basePath` 설정 (저장소 이름에 맞게)
- [ ] 👤 README.md에서 개인 정보 업데이트
- [ ] 🔍 코드 리뷰 및 테스트 완료

---

## 🎯 첫 배포 단계

### 1. GitHub 저장소 생성

1. GitHub에서 새 저장소 생성
2. 저장소 이름 입력 (예: `sjsf-website`)
3. Public 또는 Private 선택
4. **Create repository** 클릭

### 2. basePath 설정 (중요!)

`next.config.ts` 파일을 열고 저장소 이름에 맞게 수정:

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/YOUR_REPO_NAME',  // ⚠️ 저장소 이름으로 변경!
  images: { unoptimized: true },
  trailingSlash: true,
};
```

**예시:**
- 저장소 이름이 `sjsf-website`라면 → `basePath: '/sjsf-website'`
- 사용자 페이지 (`username.github.io`)라면 → basePath 주석 처리

### 3. Git 초기화 및 커밋

```bash
# Git 초기화 (이미 완료된 경우 생략)
git init

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit: Next.js project with GitHub Actions deployment"

# 원격 저장소 연결
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# main 브랜치로 변경
git branch -M main

# 푸시
git push -u origin main
```

### 4. GitHub Pages 설정

1. GitHub 저장소 페이지로 이동
2. **Settings** 탭 클릭
3. 왼쪽 메뉴에서 **Pages** 클릭
4. **Source** 섹션에서:
   - Source: **GitHub Actions** 선택
5. 저장 (자동 저장됨)

### 5. 배포 확인

1. **Actions** 탭으로 이동
2. "Deploy to GitHub Pages" 워크플로우 실행 확인
3. 빌드 및 배포 완료 대기 (약 2-3분)
4. **Summary** 섹션에서 배포 링크 확인
5. 링크 클릭하여 사이트 확인

---

## 🔄 이후 배포 (업데이트)

코드를 수정한 후 배포하는 방법:

```bash
# 1. 변경사항 확인
git status

# 2. 파일 추가
git add .

# 3. 커밋 (의미있는 메시지 작성)
git commit -m "feat: Add interactive dashboard"

# 4. 푸시 (자동 배포 트리거)
git push origin main
```

**커밋 메시지 컨벤션:**
- `feat:` - 새로운 기능 추가
- `fix:` - 버그 수정
- `docs:` - 문서 수정
- `style:` - 코드 포맷팅
- `refactor:` - 코드 리팩토링
- `test:` - 테스트 추가
- `chore:` - 빌드 설정 등

---

## 📊 배포 상태 확인

### GitHub Actions에서 확인

1. 저장소 → **Actions** 탭
2. 최근 워크플로우 클릭
3. 각 단계별 로그 확인:
   - ✅ Checkout
   - ✅ Setup Node.js
   - ✅ Install dependencies
   - ✅ Build Next.js
   - ✅ Upload artifact
   - ✅ Deploy to GitHub Pages

### 배포 링크 찾기

**방법 1: Actions Summary**
- 워크플로우 완료 후 Summary 섹션에 링크 표시

**방법 2: 직접 접속**
- `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

**방법 3: Settings → Pages**
- Settings → Pages에서 "Your site is live at" 링크 확인

---

## 🐛 문제 해결

### 문제 1: 404 Not Found

**증상:** 사이트 접속 시 404 에러

**원인:** `basePath` 설정 오류

**해결:**
1. `next.config.ts`에서 `basePath` 확인
2. 저장소 이름과 정확히 일치하는지 확인
3. 슬래시 위치 확인 (`/repo-name` ✅, `repo-name` ❌)

### 문제 2: 빌드 실패

**증상:** GitHub Actions에서 빌드 실패

**원인:** 코드 오류 또는 의존성 문제

**해결:**
1. 로컬에서 `npm run build` 실행
2. 에러 메시지 확인 및 수정
3. 다시 커밋 및 푸시

### 문제 3: CSS/JS 로드 안 됨

**증상:** 사이트는 열리지만 스타일이 깨짐

**원인:** 정적 파일 경로 문제

**해결:**
1. `next.config.ts`에 `assetPrefix` 추가:
```typescript
const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/YOUR_REPO_NAME',
  assetPrefix: '/YOUR_REPO_NAME',
  images: { unoptimized: true },
  trailingSlash: true,
};
```

### 문제 4: 배포는 성공했지만 사이트가 안 열림

**증상:** Actions는 성공했지만 사이트 접속 불가

**원인:** GitHub Pages 활성화 안 됨

**해결:**
1. Settings → Pages 확인
2. Source가 "GitHub Actions"로 설정되어 있는지 확인
3. 몇 분 대기 후 다시 시도

---

## 📋 배포 전 최종 체크리스트

- [ ] `next.config.ts`의 `basePath` 설정 확인
- [ ] `package.json`의 프로젝트 이름 확인
- [ ] README.md의 개인 정보 업데이트
- [ ] 로컬에서 `npm run build` 성공 확인
- [ ] `.github/workflows/deploy.yml` 파일 존재 확인
- [ ] GitHub 저장소 생성 완료
- [ ] GitHub Pages 설정 완료 (Source: GitHub Actions)
- [ ] 첫 커밋 및 푸시 완료
- [ ] Actions 워크플로우 실행 확인
- [ ] 배포 링크 접속 및 동작 확인

---

## 🎉 배포 성공 후

### 1. 사이트 테스트

- [ ] 모든 페이지 로드 확인
- [ ] 링크 동작 확인
- [ ] 이미지 로드 확인
- [ ] 모바일 반응형 확인
- [ ] 브라우저 콘솔 에러 확인

### 2. 성능 측정

```bash
# Lighthouse 점수 확인
npx lighthouse https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/ --view
```

### 3. 공유하기

- README에 라이브 데모 링크 추가
- 포트폴리오에 프로젝트 추가
- LinkedIn/GitHub 프로필에 공유

---

## 💡 추가 팁

### 커스텀 도메인 사용

1. `public/CNAME` 파일 생성:
```
www.yourdomain.com
```

2. DNS 설정 (도메인 제공업체):
```
A Record: 185.199.108.153
A Record: 185.199.109.153
A Record: 185.199.110.153
A Record: 185.199.111.153
```

3. GitHub Settings → Pages에서 Custom domain 입력

### 배포 알림 받기

GitHub 저장소 → Settings → Notifications에서 Actions 알림 활성화

---

**배포 성공을 기원합니다! 🚀**

문제가 발생하면 [DEPLOYMENT.md](./DEPLOYMENT.md)를 참조하거나 GitHub Issues에 질문을 남겨주세요.
