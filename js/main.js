// ====== 中英文切换功能事件绑定 ======
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('langZh').addEventListener('click', () => setLang('zh'));
    document.getElementById('langEn').addEventListener('click', () => setLang('en'));
    setLang('zh');
});
// Tailwind 配置
window.tailwind = window.tailwind || {};
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#165DFF',
                secondary: '#36CFC9',
                dark: '#1D2129',
                light: '#F2F3F5',
                'gray-medium': '#86909C',
                'dark-bg-from': '#1D2129',
                'dark-bg-to': '#23272f',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        }
    }
};
// 交互脚本
// ...移动端菜单、滚动、返回顶部、平滑滚动、轮播等见 interaction.js ...
