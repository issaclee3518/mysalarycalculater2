// 근로소득 간이세액표 데이터 (2024년 개정)
const taxTable = {
    // 월급여(천원) 범위별 세액표
    ranges: [
        { min: 0, max: 100, family: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { min: 100, max: 200, family: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { min: 200, max: 300, family: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { min: 300, max: 400, family: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { min: 400, max: 500, family: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { min: 500, max: 600, family: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { min: 600, max: 700, family: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { min: 700, max: 800, family: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { min: 800, max: 900, family: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { min: 900, max: 1000, family: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { min: 1000, max: 1100, family: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { min: 1100, max: 1200, family: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { min: 1200, max: 1300, family: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { min: 1300, max: 1400, family: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { min: 1400, max: 1500, family: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { min: 1500, max: 1600, family: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { min: 1600, max: 1700, family: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { min: 1700, max: 1800, family: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { min: 1800, max: 1900, family: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { min: 1900, max: 2000, family: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { min: 2000, max: 2100, family: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { min: 2100, max: 2200, family: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { min: 2200, max: 2300, family: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { min: 2300, max: 2400, family: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { min: 2400, max: 2500, family: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { min: 2500, max: 2600, family: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { min: 2600, max: 2700, family: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { min: 2700, max: 2800, family: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { min: 2800, max: 2900, family: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { min: 2900, max: 3000, family: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { min: 3000, max: 3100, family: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { min: 3100, max: 3200, family: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { min: 3200, max: 3300, family: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { min: 3300, max: 3400, family: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { min: 3400, max: 3500, family: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { min: 3500, max: 3520, family: [127220, 102220, 62460, 49340, 37630, 32380, 0, 0, 0, 0, 0] },
        { min: 3520, max: 3600, family: [130000, 105000, 65000, 52000, 40000, 35000, 0, 0, 0, 0, 0] },
        { min: 3600, max: 3700, family: [135000, 110000, 70000, 57000, 45000, 40000, 0, 0, 0, 0, 0] },
        { min: 3700, max: 3800, family: [140000, 115000, 75000, 62000, 50000, 45000, 0, 0, 0, 0, 0] },
        { min: 3800, max: 3900, family: [145000, 120000, 80000, 67000, 55000, 50000, 0, 0, 0, 0, 0] },
        { min: 3900, max: 4000, family: [150000, 125000, 85000, 72000, 60000, 55000, 0, 0, 0, 0, 0] },
        { min: 4000, max: 4100, family: [155000, 130000, 90000, 77000, 65000, 60000, 0, 0, 0, 0, 0] },
        { min: 4100, max: 4200, family: [160000, 135000, 95000, 82000, 70000, 65000, 0, 0, 0, 0, 0] },
        { min: 4200, max: 4300, family: [165000, 140000, 100000, 87000, 75000, 70000, 0, 0, 0, 0, 0] },
        { min: 4300, max: 4400, family: [170000, 145000, 105000, 92000, 80000, 75000, 0, 0, 0, 0, 0] },
        { min: 4400, max: 4500, family: [175000, 150000, 110000, 97000, 85000, 80000, 0, 0, 0, 0, 0] },
        { min: 4500, max: 4600, family: [180000, 155000, 115000, 102000, 90000, 85000, 0, 0, 0, 0, 0] },
        { min: 4600, max: 4700, family: [185000, 160000, 120000, 107000, 95000, 90000, 0, 0, 0, 0, 0] },
        { min: 4700, max: 4800, family: [190000, 165000, 125000, 112000, 100000, 95000, 0, 0, 0, 0, 0] },
        { min: 4800, max: 4900, family: [195000, 170000, 130000, 117000, 105000, 100000, 0, 0, 0, 0, 0] },
        { min: 4900, max: 5000, family: [200000, 175000, 135000, 122000, 110000, 105000, 0, 0, 0, 0, 0] }
    ]
};

// 자녀 세액공제 금액 (2024년 개정)
const childDeduction = {
    1: 12500,   // 1명: 12,500원
    2: 29160,   // 2명: 29,160원
    3: 29160 + 25000,  // 3명: 29,160원 + 25,000원
    4: 29160 + 25000 * 2,  // 4명: 29,160원 + 25,000원 × 2
    5: 29160 + 25000 * 3,  // 5명: 29,160원 + 25,000원 × 3
    6: 29160 + 25000 * 4,  // 6명: 29,160원 + 25,000원 × 4
    7: 29160 + 25000 * 5,  // 7명: 29,160원 + 25,000원 × 5
    8: 29160 + 25000 * 6,  // 8명: 29,160원 + 25,000원 × 6
    9: 29160 + 25000 * 7,  // 9명: 29,160원 + 25,000원 × 7
    10: 29160 + 25000 * 8, // 10명: 29,160원 + 25,000원 × 8
    11: 29160 + 25000 * 9  // 11명: 29,160원 + 25,000원 × 9
};

// 세금 계산 함수
function calculateTax(monthlySalary, familyCount, childCount) {
    const salaryInThousands = Math.floor(monthlySalary / 1000);
    
    // 해당 급여 범위 찾기
    const range = taxTable.ranges.find(r => 
        salaryInThousands >= r.min && salaryInThousands < r.max
    );
    
    if (!range) {
        // 범위를 벗어나는 경우 최대 세액 적용
        const maxRange = taxTable.ranges[taxTable.ranges.length - 1];
        return maxRange.family[familyCount - 1] || 0;
    }
    
    // 기본 세액
    let baseTax = range.family[familyCount - 1] || 0;
    
    // 자녀 세액공제 적용
    if (childCount > 0 && childCount <= 11) {
        const deduction = childDeduction[childCount] || 0;
        baseTax = Math.max(0, baseTax - deduction);
    }
    
    return baseTax;
}

// 숫자 포맷팅 함수
function formatNumber(num) {
    return new Intl.NumberFormat('ko-KR').format(num);
}

// DOM 요소들
const form = document.getElementById('taxCalculator');
const resultSection = document.getElementById('result');
const resultSalary = document.getElementById('resultSalary');
const resultFamily = document.getElementById('resultFamily');
const resultChildren = document.getElementById('resultChildren');
const resultTax = document.getElementById('resultTax');

// 폼 제출 이벤트 리스너
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const monthlySalary = parseInt(document.getElementById('monthlySalary').value);
    const familyCount = parseInt(document.getElementById('familyCount').value);
    const childCount = parseInt(document.getElementById('childCount').value);
    
    // 입력값 검증
    if (!monthlySalary || monthlySalary <= 0) {
        alert('월 급여액을 올바르게 입력해주세요.');
        return;
    }
    
    if (childCount > familyCount - 1) {
        alert('자녀 수는 전체 가족 수보다 많을 수 없습니다.');
        return;
    }
    
    // 세금 계산
    const taxAmount = calculateTax(monthlySalary, familyCount, childCount);
    
    // 결과 표시
    resultSalary.textContent = formatNumber(monthlySalary) + '원';
    resultFamily.textContent = familyCount + '명';
    resultChildren.textContent = childCount + '명';
    resultTax.textContent = formatNumber(taxAmount) + '원';
    
    // 결과 섹션 표시
    resultSection.style.display = 'block';
    resultSection.scrollIntoView({ behavior: 'smooth' });
    
    // 계산 결과를 전역 변수에 저장 (소셜 공유용)
    window.calculationResult = {
        monthlySalary,
        familyCount,
        childCount,
        taxAmount
    };
});

// 폼 리셋 이벤트 리스너
form.addEventListener('reset', function() {
    resultSection.style.display = 'none';
    window.calculationResult = null;
});

// 소셜 공유 함수들
function shareToTwitter() {
    if (!window.calculationResult) return;
    
    const { monthlySalary, familyCount, childCount, taxAmount } = window.calculationResult;
    const text = `근로소득세 계산 결과\n월 급여: ${formatNumber(monthlySalary)}원\n가족 수: ${familyCount}명\n자녀 수: ${childCount}명\n월 납부 세금: ${formatNumber(taxAmount)}원\n\n소득세 계산기로 확인해보세요!`;
    const url = encodeURIComponent(window.location.href);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`;
    
    window.open(twitterUrl, '_blank', 'width=600,height=400');
}

function shareToFacebook() {
    if (!window.calculationResult) return;
    
    const url = encodeURIComponent(window.location.href);
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    
    window.open(facebookUrl, '_blank', 'width=600,height=400');
}

function shareToKakao() {
    if (!window.calculationResult) return;
    
    const { monthlySalary, familyCount, childCount, taxAmount } = window.calculationResult;
    const text = `근로소득세 계산 결과\n월 급여: ${formatNumber(monthlySalary)}원\n가족 수: ${familyCount}명\n자녀 수: ${childCount}명\n월 납부 세금: ${formatNumber(taxAmount)}원`;
    
    // 카카오톡 공유 (모바일에서만 작동)
    if (navigator.userAgent.match(/KAKAOTALK/i)) {
        const kakaoUrl = `kakaotalk://sharer?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(text)}`;
        window.location.href = kakaoUrl;
    } else {
        // 웹에서 카카오톡 공유
        alert('카카오톡 앱에서 공유하거나 링크를 복사해서 공유해주세요.\n\n' + text);
    }
}

function shareToNaver() {
    if (!window.calculationResult) return;
    
    const { monthlySalary, familyCount, childCount, taxAmount } = window.calculationResult;
    const text = `근로소득세 계산 결과\n월 급여: ${formatNumber(monthlySalary)}원\n가족 수: ${familyCount}명\n자녀 수: ${childCount}명\n월 납부 세금: ${formatNumber(taxAmount)}원`;
    
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent('소득세 계산기 - 근로소득세 계산 결과');
    const naverUrl = `https://share.naver.com/web/shareView?url=${url}&title=${title}`;
    
    window.open(naverUrl, '_blank', 'width=600,height=400');
}

function shareToBand() {
    if (!window.calculationResult) return;
    
    const { monthlySalary, familyCount, childCount, taxAmount } = window.calculationResult;
    const text = `근로소득세 계산 결과\n월 급여: ${formatNumber(monthlySalary)}원\n가족 수: ${familyCount}명\n자녀 수: ${childCount}명\n월 납부 세금: ${formatNumber(taxAmount)}원`;
    
    // 밴드 공유 (모바일에서만 작동)
    if (navigator.userAgent.match(/BAND/i)) {
        const bandUrl = `bandapp://share?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(text)}`;
        window.location.href = bandUrl;
    } else {
        // 웹에서 밴드 공유
        alert('밴드 앱에서 공유하거나 링크를 복사해서 공유해주세요.\n\n' + text);
    }
}

// 입력값 실시간 검증
document.getElementById('monthlySalary').addEventListener('input', function(e) {
    const value = parseInt(e.target.value);
    if (value && value < 0) {
        e.target.value = '';
    }
});

document.getElementById('childCount').addEventListener('change', function(e) {
    const childCount = parseInt(e.target.value);
    const familyCount = parseInt(document.getElementById('familyCount').value);
    
    if (childCount > familyCount - 1) {
        alert('자녀 수는 전체 가족 수보다 많을 수 없습니다.');
        e.target.value = Math.max(0, familyCount - 1);
    }
});

document.getElementById('familyCount').addEventListener('change', function(e) {
    const familyCount = parseInt(e.target.value);
    const childCount = parseInt(document.getElementById('childCount').value);
    
    if (childCount > familyCount - 1) {
        document.getElementById('childCount').value = Math.max(0, familyCount - 1);
    }
});

// 페이지 로드 시 애니메이션
document.addEventListener('DOMContentLoaded', function() {
    // 폼 요소들에 순차적으로 애니메이션 적용
    const formElements = document.querySelectorAll('.form-group');
    formElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // 버튼 애니메이션
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((button, index) => {
        button.style.opacity = '0';
        button.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            button.style.transition = 'all 0.6s ease';
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
        }, (formElements.length + index) * 100);
    });
});

// 스크롤 시 헤더 효과
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// 키보드 접근성 개선
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && e.target.tagName !== 'BUTTON') {
        const form = e.target.closest('form');
        if (form) {
            e.preventDefault();
            form.dispatchEvent(new Event('submit'));
        }
    }
});

// 모바일 터치 최적화
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
    
    // 터치 시 버튼 피드백
    const buttons = document.querySelectorAll('.btn, .social-btn');
    buttons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        button.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });
}
