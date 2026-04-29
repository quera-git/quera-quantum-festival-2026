const LANGUAGE_STORAGE_KEY = 'qicb-preferred-language';

const LANGUAGE_OPTIONS = {
  ko: { code: 'KR', flag: '🇰🇷' },
  en: { code: 'EN', flag: '🇺🇸' }
};

const translations = {
  ko: {
    'brand.name': 'Qu<span style="color:#D21732">ERA</span> Quantum Festival 2026',
    'brand.homeAria': 'QuERA 홈으로',
    'nav.about': '소개',
    'nav.schedule': '일정',
    'nav.venue': '장소',
    'nav.faq': 'FAQ',
    'nav.register': '지금 등록하기',
    'nav.toggle': '주요 메뉴 열기',
    'hero.date': '2026.05.22 (금) - 05.23 (토) · 부산대학교',
    'hero.kpi.seminar': '📚 세미나',
    'hero.kpi.tutorial': '🛠️ 튜토리얼',
    'hero.kpi.quantum': '⚛️ 양자컴퓨팅',
    'hero.kpi.challenge': '🏆 챌린지',
    'hero.kpi.networking': '👥 네트워킹',
    'about.title': '행사 소개',
    'about.description':
      '<strong>제2회 Qu<span style="color:#D21732">ERA</span> Quantum Festival</strong>은 부산대학교 양자컴퓨팅 동아리 <strong>Qu<span style="color:#D21732">ERA</span></strong>가 주최하는 1박 2일 양자컴퓨팅 행사입니다. 이번 행사는 <strong>QCNN(Quantum Convolutional Neural Network)</strong>을 메인 주제로, 양자 컴퓨팅을 처음 접하는 초보자도 강연·실습·해커톤·네트워킹을 통해 양자 회로 설계와 AI 응용을 직접 경험할 수 있도록 구성되어 있습니다.',
    'about.audience': '<strong>대상:</strong> 부산대학교 학생 (전공 무관)',
    'about.requirements': '<strong>준비물:</strong> 노트북(RAM 8GB+), Python 3.10+, Qiskit, IBM Quantum 계정',
    'about.level': '<strong>난이도:</strong> 입문~초급 (기초 파이썬·선형대수 권장)',
    'about.team': '<strong>참가 형태:</strong> 팀 또는 개인 신청 (개인 신청자 자동 팀 매칭)',
    'about.deadline': '<strong>신청 마감:</strong> 2026년 5월 17일',
    'schedule.title': '일정(안)',
    'schedule.part1.title': '<span style="color:#E99998">5/22 (금)</span> · 강의 + 실습 + 챌린지 킥오프',
    'schedule.part1.item1': '10:00 - 10:20 · 개회식',
    'schedule.part1.item2': '10:20 - 11:20 · Seminar 1: Quantum Computing 기초',
    'schedule.part1.item3': '11:30 - 12:30 · Tutorial 1: 환경 세팅 + Qiskit 기초',
    'schedule.part1.item4': '13:30 - 14:30 · Tutorial 2: 회로·게이트·측정 심화',
    'schedule.part1.item5': '14:40 - 15:20 · Tutorial 3: parameterized circuit, 데이터 인코딩',
    'schedule.part1.item6': '15:30 - 16:00 · Seminar 2: CNN과 QCNN',
    'schedule.part1.item7': '16:00 - 18:00 · 챌린지 Day 1 (킥오프 / 문제 공개)',
    'schedule.part2.title': '<span style="color:#4A86E8">5/23 (토)</span> · 챌린지 마감 + 발표 + 시상',
    'schedule.part2.item1': '10:00 - 12:30 · 챌린지 Day 2 (제출 마감)',
    'schedule.part2.item2': '12:30 - 13:30 · 점심 식사 / 1차 채점 진행',
    'schedule.part2.item3': '13:30 - 14:30 · 팀별 발표',
    'schedule.part2.item4': '14:45 - 15:30 · 결과 발표 · 시상식 · 폐회식',
    'cta.preregister': '사전 등록하기',
    'cta.moreInfo': '상세 안내(노션)',
    'venue.title': '장소',
    'venue.address':
      '<strong>부산대학교 IT관 정보컴퓨터공학부 306호</strong><br />부산광역시 금정구 부산대학로63번길 2 (장전동)',
    'venue.note': '세부 입장 동선은 행사 전 참가자 안내 메일로 공지됩니다.',
    'faq.title': 'FAQ',
    'faq.q1': '비전공자도 참여 가능한가요?',
    'faq.a1': '네. 사전 자료를 제공하고, Day 1의 기초 강의·튜토리얼을 통해 처음 접하는 분도 따라올 수 있도록 구성됩니다.',
    'faq.q2': '참가비가 있나요?',
    'faq.a2': '무료입니다. 5월 17일까지 사전 등록만 해주세요.',
    'faq.q3': '무엇을 설치해야 하나요?',
    'faq.a3': 'Python 3.10+, Qiskit 라이브러리, IBM Quantum 계정. 자세한 가이드는 노션 페이지에서 안내합니다.',
    'faq.q4': '팀을 미리 구성해야 하나요?',
    'faq.a4': '팀 또는 개인으로 신청 가능하며, 개인 신청자는 운영진이 자동으로 팀 매칭을 도와드립니다.',
    'footer.copy': '© 2026 Qu<span style="color:#D21732">ERA</span> · 부산대학교 양자컴퓨팅동아리',
    'footer.email': 'Email: hjkim2124@pusan.ac.kr',
    'footer.github': 'GitHub',
    'scrollTop.aria': '맨 위로 이동',
    'language.button.aria': '언어 변경',
    'language.menu.aria': '언어 선택',
    'language.option.ko': '한국어 (KR)',
    'language.option.en': '영어 (EN)',
    'meta.title': '제2회 QuERA Quantum Festival | 부산',
    'meta.description': '2026년 5월 22~23일 부산대학교에서 열리는 제2회 QuERA Quantum Festival. QCNN을 주제로 한 1박 2일 양자컴퓨팅 강의·실습·해커톤.',
    'meta.ogTitle': '제2회 QuERA Quantum Festival | 부산',
    'meta.ogDescription': 'QCNN을 주제로 한 1박 2일 양자컴퓨팅 해커톤. 5월 17일까지 무료 등록!',
    'meta.ogLocale': 'ko_KR'
  },
  en: {
    'brand.name': 'Qu<span style="color:#D21732">ERA</span> Quantum Festival 2026',
    'brand.homeAria': 'Go to QuERA home',
    'nav.about': 'About',
    'nav.schedule': 'Schedule',
    'nav.venue': 'Venue',
    'nav.faq': 'FAQ',
    'nav.register': 'Register Now',
    'nav.toggle': 'Open main menu',
    'hero.date': 'May 22 (Fri) - 23 (Sat), 2026 · Pusan National University',
    'hero.kpi.seminar': '📚 Seminars',
    'hero.kpi.tutorial': '🛠️ Tutorials',
    'hero.kpi.quantum': '⚛️ Quantum Computing',
    'hero.kpi.challenge': '🏆 Challenge',
    'hero.kpi.networking': '👥 Networking',
    'about.title': 'About the Event',
    'about.description':
      '<strong>The 2nd Qu<span style="color:#D21732">ERA</span> Quantum Festival</strong> is a two-day quantum computing event hosted by <strong>Qu<span style="color:#D21732">ERA</span></strong>, the quantum computing club at Pusan National University. This edition focuses on <strong>QCNN (Quantum Convolutional Neural Network)</strong>, offering newcomers a chance to experience quantum circuit design and AI applications through talks, hands-on labs, hackathon, and networking.',
    'about.audience': '<strong>Who:</strong> Pusan National University students (any major)',
    'about.requirements': '<strong>What to bring:</strong> Laptop (8GB+ RAM), Python 3.10+, Qiskit, IBM Quantum account',
    'about.level': '<strong>Level:</strong> Beginner–intro (basic Python & linear algebra recommended)',
    'about.team': '<strong>Format:</strong> Team or individual registration (individuals will be auto-matched)',
    'about.deadline': '<strong>Registration deadline:</strong> May 17, 2026',
    'schedule.title': 'Schedule (Tentative)',
    'schedule.part1.title': '<span style="color:#E99998">May 22 (Fri)</span> · Lectures + Labs + Challenge Kickoff',
    'schedule.part1.item1': '10:00 - 10:20 · Opening Ceremony',
    'schedule.part1.item2': '10:20 - 11:20 · Seminar 1: Quantum Computing Basics',
    'schedule.part1.item3': '11:30 - 12:30 · Tutorial 1: Setup + Qiskit Basics',
    'schedule.part1.item4': '13:30 - 14:30 · Tutorial 2: Circuits, Gates, Measurement',
    'schedule.part1.item5': '14:40 - 15:20 · Tutorial 3: Parameterized Circuits & Data Encoding',
    'schedule.part1.item6': '15:30 - 16:00 · Seminar 2: CNN and QCNN',
    'schedule.part1.item7': '16:00 - 18:00 · Challenge Day 1 (kickoff / problem release)',
    'schedule.part2.title': '<span style="color:#4A86E8">May 23 (Sat)</span> · Challenge Submission + Presentations + Awards',
    'schedule.part2.item1': '10:00 - 12:30 · Challenge Day 2 (submission deadline)',
    'schedule.part2.item2': '12:30 - 13:30 · Lunch / First-round Grading',
    'schedule.part2.item3': '13:30 - 14:30 · Team Presentations',
    'schedule.part2.item4': '14:45 - 15:30 · Results · Awards · Closing',
    'cta.preregister': 'Pre-register',
    'cta.moreInfo': 'More info (Notion)',
    'venue.title': 'Venue',
    'venue.address':
      '<strong>Pusan National University, IT Building (Dept. of Computer Science & Engineering), Room 306</strong><br />2, Busandaehak-ro 63beon-gil, Geumjeong-gu, Busan',
    'venue.note': 'Entry guidance will be emailed to participants before the event.',
    'faq.title': 'FAQ',
    'faq.q1': 'Can non-majors participate?',
    'faq.a1': 'Yes! Prep materials are shared, and Day 1 begins with introductory lectures and tutorials so that newcomers can follow along.',
    'faq.q2': 'Is there a participation fee?',
    'faq.a2': 'No, it’s free. Just make sure to register by May 17.',
    'faq.q3': 'What should I install beforehand?',
    'faq.a3': 'Python 3.10+, the latest Qiskit, and an IBM Quantum account. Detailed setup guides are on the Notion page.',
    'faq.q4': 'Do I need a team beforehand?',
    'faq.a4': 'You can register as a team or individually—organizers will auto-match individual applicants into teams.',
    'footer.copy': '© 2026 Qu<span style="color:#D21732">ERA</span> · Quantum Computing Club at Pusan National University',
    'footer.email': 'Email: hjkim2124@pusan.ac.kr',
    'footer.github': 'GitHub',
    'scrollTop.aria': 'Back to top',
    'language.button.aria': 'Change language',
    'language.menu.aria': 'Select language',
    'language.option.ko': 'Korean (KR)',
    'language.option.en': 'English (EN)',
    'meta.title': '2nd QuERA Quantum Festival | Busan',
    'meta.description': 'The 2nd QuERA Quantum Festival, May 22–23, 2026 at Pusan National University. A two-day quantum computing event focused on QCNN with talks, labs, and a hackathon.',
    'meta.ogTitle': '2nd QuERA Quantum Festival | Busan',
    'meta.ogDescription': 'A two-day quantum computing hackathon on QCNN. Free—register by May 17!',
    'meta.ogLocale': 'en_US'
  }
};

const getInitialLanguage = () => {
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored && translations[stored]) {
      return stored;
    }
  } catch (error) {
    // Storage access may be blocked; ignore and fall back to document language.
  }

  const documentLanguage = document.documentElement.getAttribute('lang');
  if (documentLanguage && translations[documentLanguage]) {
    return documentLanguage;
  }

  const shortLang = documentLanguage?.slice(0, 2);
  if (shortLang && translations[shortLang]) {
    return shortLang;
  }

  return 'ko';
};

let currentLanguage = 'ko';

const updateLanguageUI = (lang) => {
  const dropdown = document.querySelector('.language-dropdown');
  if (!dropdown) {
    return;
  }

  const button = dropdown.querySelector('.language-button');
  const flagElement = button?.querySelector('.language-flag');
  const codeElement = button?.querySelector('.language-code');
  const config = LANGUAGE_OPTIONS[lang];

  if (button && config) {
    button.dataset.lang = lang;
    if (flagElement) {
      flagElement.textContent = config.flag;
    }
    if (codeElement) {
      codeElement.textContent = config.code;
    }
  }

  dropdown.querySelectorAll('.language-option').forEach((option) => {
    const optionLang = option.dataset.lang;
    const isActive = optionLang === lang;
    option.setAttribute('aria-checked', String(isActive));
    if (isActive) {
      option.setAttribute('aria-current', 'true');
    } else {
      option.removeAttribute('aria-current');
    }
  });
};

const applyTranslations = (lang) => {
  const dictionary = translations[lang];
  if (!dictionary) {
    return;
  }

  document.documentElement.setAttribute('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    const value = dictionary[key];

    if (value === undefined) {
      return;
    }

    const type = element.dataset.i18nType || 'text';
    if (type === 'html') {
      element.innerHTML = value;
    } else {
      element.textContent = value;
    }
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    const value = dictionary[key];

    if (value === undefined) {
      return;
    }

    element.setAttribute('aria-label', value);
  });

  const pageTitle = dictionary['meta.title'];
  if (pageTitle) {
    document.title = pageTitle;
  }

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && dictionary['meta.description']) {
    metaDescription.setAttribute('content', dictionary['meta.description']);
  }

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle && dictionary['meta.ogTitle']) {
    ogTitle.setAttribute('content', dictionary['meta.ogTitle']);
  }

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription && dictionary['meta.ogDescription']) {
    ogDescription.setAttribute('content', dictionary['meta.ogDescription']);
  }

  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale && dictionary['meta.ogLocale']) {
    ogLocale.setAttribute('content', dictionary['meta.ogLocale']);
  }
};

const setLanguage = (lang, { persist = true } = {}) => {
  if (!translations[lang]) {
    return;
  }

  currentLanguage = lang;

  if (persist) {
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    } catch (error) {
      // Ignore storage errors (e.g., in private mode).
    }
  }

  applyTranslations(lang);
  updateLanguageUI(lang);
};

const setupLanguageDropdown = () => {
  const dropdown = document.querySelector('.language-dropdown');
  const button = dropdown?.querySelector('.language-button');
  const menu = dropdown?.querySelector('.language-menu');

  if (!dropdown || !button || !menu) {
    return;
  }

  const options = Array.from(menu.querySelectorAll('.language-option'));

  const handleDocumentClick = (event) => {
    if (!dropdown.contains(event.target)) {
      closeDropdown();
    }
  };

  const handleDocumentKeydown = (event) => {
    if (event.key === 'Escape') {
      closeDropdown({ returnFocus: true });
    }
  };

  const closeDropdown = ({ returnFocus = false } = {}) => {
    if (dropdown.getAttribute('data-open') !== 'true') {
      return;
    }

    dropdown.setAttribute('data-open', 'false');
    button.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
    document.removeEventListener('click', handleDocumentClick);
    document.removeEventListener('keydown', handleDocumentKeydown);

    if (returnFocus) {
      button.focus();
    }
  };

  const openDropdown = () => {
    if (dropdown.getAttribute('data-open') === 'true') {
      return;
    }

    dropdown.setAttribute('data-open', 'true');
    button.setAttribute('aria-expanded', 'true');
    menu.setAttribute('aria-hidden', 'false');
    document.addEventListener('click', handleDocumentClick);
    document.addEventListener('keydown', handleDocumentKeydown);

    const activeOption = menu.querySelector('.language-option[aria-checked="true"]') || options[0];
    activeOption?.focus();
  };

  button.addEventListener('click', (event) => {
    event.preventDefault();
    const isOpen = dropdown.getAttribute('data-open') === 'true';
    if (isOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  });

  button.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openDropdown();
    }
  });

  menu.addEventListener('click', (event) => {
    const option = event.target.closest('.language-option');
    if (!option) {
      return;
    }

    const lang = option.dataset.lang;
    if (lang) {
      setLanguage(lang);
    }

    closeDropdown({ returnFocus: true });
  });

  menu.addEventListener('keydown', (event) => {
    const focusable = options;
    const currentIndex = focusable.indexOf(document.activeElement);

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      const nextIndex = (currentIndex + 1) % focusable.length;
      focusable[nextIndex]?.focus();
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      const prevIndex = (currentIndex - 1 + focusable.length) % focusable.length;
      focusable[prevIndex]?.focus();
      return;
    }

    if (event.key === 'Home') {
      event.preventDefault();
      focusable[0]?.focus();
      return;
    }

    if (event.key === 'End') {
      event.preventDefault();
      focusable[focusable.length - 1]?.focus();
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      const activeLang = document.activeElement?.dataset?.lang;
      if (activeLang) {
        setLanguage(activeLang);
      }
      closeDropdown({ returnFocus: true });
      return;
    }

    if (event.key === 'Escape') {
      closeDropdown({ returnFocus: true });
    }
  });

  dropdown.setAttribute('data-open', 'false');
  button.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-hidden', 'true');

  updateLanguageUI(currentLanguage);
};

const enableSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');

      // href="#" 일 경우, 최상단으로 스크롤
      if (targetId === '#') {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      
      const target = document.querySelector(targetId);
      if (!target) {
        return;
      }
      
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
};

const setupNavMenu = () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (!navToggle || !navMenu) {
    return;
  }

  const focusableSelectors =
    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"]), select, textarea, input';

  const getFocusableItems = () =>
    Array.from(navMenu.querySelectorAll(focusableSelectors)).filter((element) => {
      return !element.hasAttribute('disabled') && element.getAttribute('aria-hidden') !== 'true';
    });

  const closeMenu = ({ returnFocus = true } = {}) => {
    if (navMenu.getAttribute('data-open') !== 'true') {
      return;
    }

    navMenu.setAttribute('data-open', 'false');
    navMenu.setAttribute('aria-hidden', 'true');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.classList.remove('is-open');
    document.removeEventListener('keydown', handleKeydown);

    if (returnFocus) {
      navToggle.focus();
    }
  };

  const handleKeydown = (event) => {
    if (navMenu.getAttribute('data-open') !== 'true') {
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      closeMenu();
      return;
    }

    if (event.key !== 'Tab') {
      return;
    }

    const focusable = getFocusableItems();

    if (!focusable.length) {
      event.preventDefault();
      navMenu.focus();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const isShift = event.shiftKey;
    const activeElement = document.activeElement;

    if (!isShift && activeElement === last) {
      event.preventDefault();
      first.focus();
      return;
    }

    if (isShift && activeElement === first) {
      event.preventDefault();
      last.focus();
    }
  };

  const openMenu = () => {
    if (navMenu.getAttribute('data-open') === 'true') {
      return;
    }

    navMenu.setAttribute('data-open', 'true');
    navMenu.setAttribute('aria-hidden', 'false');
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.classList.add('is-open');
    document.addEventListener('keydown', handleKeydown);

    const focusable = getFocusableItems();

    if (focusable.length) {
      focusable[0].focus();
    } else {
      navMenu.focus();
    }
  };

  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.getAttribute('data-open') === 'true';

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  const handlePointerDownOutside = (event) => {
    if (navMenu.getAttribute('data-open') !== 'true') {
      return;
    }

    if (navMenu.contains(event.target) || navToggle.contains(event.target)) {
      return;
    }

    closeMenu({ returnFocus: false });
  };

  document.addEventListener('pointerdown', handlePointerDownOutside);

  const mediaQuery = window.matchMedia('(min-width: 880px)');

  if (mediaQuery.matches) {
    navMenu.setAttribute('aria-hidden', 'false');
  }

  mediaQuery.addEventListener('change', (event) => {
    if (event.matches) {
      closeMenu({ returnFocus: false });
      navMenu.setAttribute('aria-hidden', 'false');
    } else {
      navMenu.setAttribute('aria-hidden', navMenu.getAttribute('data-open') === 'true' ? 'false' : 'true');
    }
  });
};

const setupScrollTopButton = () => {
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (!scrollTopBtn) {
    return; // 버튼이 없으면 함수 종료
  }

  // 스크롤 위치에 따라 버튼 보이기/숨기기
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  });

  // 버튼 클릭 시 최상단으로 부드럽게 이동
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const initialLanguage = getInitialLanguage();
  setLanguage(initialLanguage, { persist: false });
  setupLanguageDropdown();
  enableSmoothScroll();
  setupNavMenu();
  setupScrollTopButton();
});