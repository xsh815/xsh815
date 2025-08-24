// 关于我们区图片轮播（圆点切换）
document.addEventListener('DOMContentLoaded', function() {
  const aboutImgs = [
    { src: 'img/about1.png', alt: '公司办公环境1' },
    { src: 'img/about2.png', alt: '公司办公环境2' }
  ];
  let aboutIdx = 0;
  const aboutImg = document.getElementById('aboutImg');
  const aboutDot0 = document.getElementById('aboutDot0');
  const aboutDot1 = document.getElementById('aboutDot1');
  if (!(aboutImg && aboutDot0 && aboutDot1)) return;
  function renderAbout(idx) {
    aboutImg.src = aboutImgs[idx].src;
    aboutImg.alt = aboutImgs[idx].alt;
    aboutDot0.classList.toggle('bg-primary', idx === 0);
    aboutDot0.classList.toggle('bg-gray-300', idx !== 0);
    aboutDot1.classList.toggle('bg-primary', idx === 1);
    aboutDot1.classList.toggle('bg-gray-300', idx !== 1);
  }
  function gotoAbout(i) {
    aboutIdx = i;
    renderAbout(aboutIdx);
  }
  function nextAbout() {
    aboutIdx = (aboutIdx + 1) % aboutImgs.length;
    renderAbout(aboutIdx);
  }
  aboutDot0.onclick = () => gotoAbout(0);
  aboutDot1.onclick = () => gotoAbout(1);
  renderAbout(aboutIdx);
  let aboutTimer = setInterval(nextAbout, 4000);
  [aboutDot0, aboutDot1, aboutImg].forEach(el => {
    el.onmouseenter = () => clearInterval(aboutTimer);
    el.onmouseleave = () => aboutTimer = setInterval(nextAbout, 4000);
  });
});
// 首页英雄区图片轮播（圆点切换）
document.addEventListener('DOMContentLoaded', function() {
  const heroImgs = [
    { src: 'img/head1.jpg', alt: '智能科技设备展示1' },
    { src: 'img/head2.jpg', alt: '智能科技设备展示2' }
  ];
  let heroIdx = 0;
  const heroImg = document.getElementById('heroImg');
  const heroDot0 = document.getElementById('heroDot0');
  const heroDot1 = document.getElementById('heroDot1');
  if (!(heroImg && heroDot0 && heroDot1)) return;
  function renderHero(idx) {
    heroImg.src = heroImgs[idx].src;
    heroImg.alt = heroImgs[idx].alt;
    heroDot0.classList.toggle('bg-primary', idx === 0);
    heroDot0.classList.toggle('bg-gray-300', idx !== 0);
    heroDot1.classList.toggle('bg-primary', idx === 1);
    heroDot1.classList.toggle('bg-gray-300', idx !== 1);
  }
  function gotoHero(i) {
    heroIdx = i;
    renderHero(heroIdx);
  }
  function nextHero() {
    heroIdx = (heroIdx + 1) % heroImgs.length;
    renderHero(heroIdx);
  }
  heroDot0.onclick = () => gotoHero(0);
  heroDot1.onclick = () => gotoHero(1);
  renderHero(heroIdx);
  let heroTimer = setInterval(nextHero, 4000);
  [heroDot0, heroDot1, heroImg].forEach(el => {
    el.onmouseenter = () => clearInterval(heroTimer);
    el.onmouseleave = () => heroTimer = setInterval(nextHero, 4000);
  });
});
// 交互相关脚本
// 移动端菜单切换
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  if (mobileMenu.classList.contains('hidden')) {
    menuBtn.innerHTML = '<i class="fa fa-bars text-xl"></i>';
  } else {
    menuBtn.innerHTML = '<i class="fa fa-times text-xl"></i>';
  }
});
// 导航栏滚动效果
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('py-2', 'shadow');
    navbar.classList.remove('py-3');
  } else {
    navbar.classList.add('py-3');
    navbar.classList.remove('py-2', 'shadow');
  }
});
// 返回顶部按钮
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.remove('opacity-0', 'invisible');
    backToTopBtn.classList.add('opacity-100', 'visible');
  } else {
    backToTopBtn.classList.add('opacity-0', 'invisible');
    backToTopBtn.classList.remove('opacity-100', 'visible');
  }
});
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// 平滑滚动
// ...省略，见原始代码...
// 激光工作站简介轮播
if (!window._wsCarouselInit) {
window._wsCarouselInit = true;
document.addEventListener('DOMContentLoaded', function() {
  // 多语言数据结构
  const wsData = [
    {
      img: 'img/single_laser_workstation.jpg',
      alt: {
        zh: '单工位激光工作站',
        en: 'Single-station Laser Workstation'
      },
      name: {
        zh: '单工位激光工作站',
        en: 'Single-station Laser Workstation'
      },
      desc: {
        zh: '适用于小批量、多品种生产，结构紧凑，操作灵活。该类型工作站通常采用模块化设计，便于根据不同工艺需求进行快速调整和升级。广泛应用于精密零部件、医疗器械、电子元件等行业的激光焊接、打标、切割等工艺。优点包括占地面积小、投资成本低、切换产品灵活、维护简便。缺点是自动化程度有限，主要依赖人工上下料，生产效率适中，适合研发、小批量或多品种生产场景。',
        en: 'Suitable for small batch and multi-variety production, compact structure, flexible operation. Modular design allows quick adjustment and upgrade for different process needs. Widely used in precision parts, medical devices, electronic components, etc. Advantages: small footprint, low investment, flexible product changeover, easy maintenance. Disadvantage: limited automation, mainly manual loading/unloading, moderate efficiency, suitable for R&D or small batch/multi-variety production.'
      },
      features: {
        zh: ['适合多样化定制需求', '人工上下料，灵活性高', '适合研发和小批量生产'],
        en: ['Suitable for diverse customization', 'Manual loading/unloading, high flexibility', 'Ideal for R&D and small batch production']
      }
    },
    {
      img: 'img/double_laser_workstation.jpg',
      alt: {
        zh: '双工位激光工作站',
        en: 'Double-station Laser Workstation'
      },
      name: {
        zh: '双工位激光工作站',
        en: 'Double-station Laser Workstation'
      },
      desc: {
        zh: '双工位设计可实现一边加工一边上下料，提高生产效率。适合批量生产，自动化程度更高。',
        en: 'Double-station design enables simultaneous processing and loading/unloading, improving efficiency. Suitable for mass production, higher automation.'
      },
      features: {
        zh: ['双工位交替作业', '提升生产效率', '适合批量生产'],
        en: ['Alternate operation of two stations', 'Improved production efficiency', 'Suitable for mass production']
      }
    },
    {
      img: 'img/longmen_laser_workstation.jpg',
      alt: {
        zh: '龙门激光工作站',
        en: 'Gantry Laser Workstation'
      },
      name: {
        zh: '龙门激光工作站',
        en: 'Gantry Laser Workstation'
      },
      desc: {
        zh: '适合大尺寸工件的激光加工，采用龙门结构，承载能力强，适合汽车、轨道交通等行业。',
        en: 'Suitable for large workpieces, gantry structure, strong load capacity, ideal for automotive, rail transit, etc.'
      },
      features: {
        zh: ['大尺寸工件加工', '龙门结构', '高承载能力'],
        en: ['Large workpiece processing', 'Gantry structure', 'High load capacity']
      }
    },
    {
      img: 'img/transfer_table_laser_workstation.jpg',
      alt: {
        zh: '转台激光工作站',
        en: 'Rotary Table Laser Workstation'
      },
      name: {
        zh: '转台激光工作站',
        en: 'Rotary Table Laser Workstation'
      },
      desc: {
        zh: '配备自动转台，可实现多工位连续加工，适合高效率自动化生产线。',
        en: 'Equipped with automatic rotary table for multi-station continuous processing, suitable for high-efficiency automated production lines.'
      },
      features: {
        zh: ['自动转台', '多工位连续加工', '高效率自动化'],
        en: ['Automatic rotary table', 'Multi-station continuous processing', 'High-efficiency automation']
      }
    }
  ];

  let wsIndex = 0;
  function qs(id) { return document.getElementById(id); }
  const wsName = qs('wsName');
  const wsDesc = qs('wsDesc');
  const wsFeatures = qs('wsFeatures');
  const wsImg = qs('wsImg');
  const wsDots = [qs('wsDot0'), qs('wsDot1'), qs('wsDot2'), qs('wsDot3')];
  if (!(wsName && wsDesc && wsFeatures && wsImg && wsDots.every(Boolean))) return;

  function getCurrentLang() {
    if (document.getElementById('langEn') && document.getElementById('langEn').classList.contains('text-primary')) return 'en';
    return 'zh';
  }

  function renderWS(idx) {
    const lang = getCurrentLang();
    const d = wsData[idx];
    wsName.textContent = d.name[lang];
    wsDesc.textContent = d.desc[lang];
    wsImg.src = d.img;
    wsImg.alt = d.alt[lang];
    wsFeatures.innerHTML = d.features[lang].map(f => `<li>${f}</li>`).join('');
    wsDots.forEach((dot, i) => {
      dot.classList.toggle('bg-primary', i === idx);
      dot.classList.toggle('bg-gray-300', i !== idx);
    });
  }

  function gotoWS(i) {
    wsIndex = i;
    renderWS(wsIndex);
  }
  function nextWS() {
    wsIndex = (wsIndex + 1) % wsData.length;
    renderWS(wsIndex);
  }
  wsDots.forEach((dot, i) => {
    dot.onclick = () => gotoWS(i);
    dot.onmouseenter = () => clearInterval(wsTimer);
    dot.onmouseleave = () => wsTimer = setInterval(nextWS, 4000);
  });
  wsImg.onmouseenter = () => clearInterval(wsTimer);
  wsImg.onmouseleave = () => wsTimer = setInterval(nextWS, 4000);
  renderWS(wsIndex);
  let wsTimer = setInterval(nextWS, 4000);

  // 监听语言切换，刷新内容
  window._wsLangHandler = function() { renderWS(wsIndex); };
  window.addEventListener('setLang', () => renderWS(wsIndex));
});
}
