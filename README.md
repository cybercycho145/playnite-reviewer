# Playnite Sorter

Playnite에서 내보낸 게임 목록 CSV를 한 게임씩 보면서 `메모`와 `완료 상태`만 수정하기 위한 개인용 정적 웹앱입니다.

## 올릴 파일

HowLongToBeat 표시까지 쓸 경우 새 GitHub 저장소에는 아래 파일만 올리면 됩니다.

- `index.html`
- `styles.css`
- `app.js`
- `doro.png`
- `powershellcommand.txt`
- `README.md`
- `hltb.csv` (HowLongToBeat 시간을 표시할 경우)

`allgames.csv`, `allgames-reviewed.csv`, 개인 게임 목록 CSV, 디자인 참고 파일은 저장소에 올리지 않는 것을 권장합니다.

## 사용 방법

1. GitHub Pages로 사이트를 엽니다.
2. `CSV 임포트`로 Playnite에서 내보낸 CSV를 불러옵니다.
3. 게임별로 메모를 적고 완료 상태를 고릅니다.
4. 중간 저장이 필요하면 Dropbox를 연결한 뒤 `Dropbox에 지금 저장`을 누릅니다. Dropbox에는 `plsort.json`으로 저장됩니다.
5. 마지막에는 `CSV 익스포트`로 `allgames-reviewed.csv`와 `powershellcommand.txt`를 내보냅니다.
6. 다운로드 폴더에 저장된 `powershellcommand.txt`를 열고, 그 내용을 Playnite 내장 PowerShell에 입력합니다.

같은 폴더에 `hltb.csv`가 있으면 게임 이름과 소스를 기준으로 HowLongToBeat의 Main Story, Main + Sides, Completionist 시간이 화면에 함께 표시됩니다.

## CSV에서 바꾸는 값

앱은 최종 CSV를 만들 때 게임별로 아래 두 열만 수정합니다.

- `메모`
- `완료 상태`

나머지 열은 Playnite에서 다시 가져올 수 있도록 원래 값을 유지합니다.

## Dropbox 설정

Dropbox 연동은 브라우저에서 직접 Dropbox API를 호출합니다. `app.js` 안에 Dropbox 앱 키가 들어 있습니다.

새 GitHub 저장소 이름을 바꾸면 GitHub Pages 주소도 바뀌므로, Dropbox 앱 설정의 Redirect URI에 새 주소를 추가해야 합니다. 이 앱의 저장소 이름은 `playnite_sorter`를 기준으로 합니다.

예시:

```text
https://cybercycho145.github.io/playnite_sorter/
```

로컬에서 테스트할 경우에는 로컬 서버 주소도 Redirect URI에 추가해야 합니다.

연결 버튼을 누른 뒤 주소에 `?code=...&state=...`가 붙은 채로 멈추면, 새로 올린 `index.html`과 `app.js`가 모두 반영됐는지 확인하고 브라우저를 강력 새로고침합니다. Dropbox 앱 설정의 Redirect URI에는 실제 GitHub Pages 주소인 `https://cybercycho145.github.io/playnite_sorter/`처럼 끝의 `/`까지 포함한 주소를 넣어야 합니다.

## GitHub Pages

정적 파일만 쓰는 앱이라 별도 빌드 과정은 필요 없습니다. GitHub Pages 설정에서 branch를 `main`, folder를 `/root`로 지정하면 됩니다.
