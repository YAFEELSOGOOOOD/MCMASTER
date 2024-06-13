// 각 팀의 점수
let manutdScore = 0;
let mancityScore = 0;

// HTML 요소 가져오기
const manutdScoreElement = document.getElementById('manutd-score');
const mancityScoreElement = document.getElementById('mancity-score');
const manutdElement = document.getElementById('manutd');
const mancityElement = document.getElementById('mancity');

// 클릭 이벤트 핸들러 설정
manutdElement.addEventListener('click', () => {
    manutdScore++;
    manutdScoreElement.textContent = manutdScore;
});

mancityElement.addEventListener('click', () => {
    mancityScore++;
    mancityScoreElement.textContent = mancityScore;
});