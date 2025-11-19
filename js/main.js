// ====================================
// モバイルメニューの制御
// ====================================
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');
  const header = document.querySelector('.header');

  // モバイルメニューの開閉
  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = mobileMenuToggle.querySelector('i');
      if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });

    // メニューリンクをクリックしたらメニューを閉じる
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileMenuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      });
    });
  }

  // スクロール時のヘッダー背景変更
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});

// ====================================
// スムーススクロール
// ====================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href !== '') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
});

// ====================================
// スクロールアニメーション
// ====================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// アニメーション対象の要素を監視
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.service-card, .post-card, .stat-card');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

// ====================================
// 数字カウントアップアニメーション
// ====================================
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// 統計セクションが表示されたらカウントアップ開始
document.addEventListener('DOMContentLoaded', () => {
  const statNumbers = document.querySelectorAll('.stat-number');
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        const text = entry.target.textContent;
        const number = parseInt(text.replace(/[^0-9]/g, ''));
        if (!isNaN(number)) {
          entry.target.dataset.animated = 'true';
          entry.target.textContent = '0';
          setTimeout(() => {
            animateCounter(entry.target, number);
            // 数字以外のテキスト(+や年など)を追加
            setTimeout(() => {
              entry.target.textContent = text;
            }, 2000);
          }, 200);
        }
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(stat => statsObserver.observe(stat));
});

// ====================================
// フォームバリデーション（お問い合わせページ用）
// ====================================
function validateContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // バリデーション
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !message) {
      alert('すべての必須項目を入力してください。');
      return false;
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('有効なメールアドレスを入力してください。');
      return false;
    }
    
    // フォーム送信処理（実際の実装では、サーバーサイドの処理が必要）
    alert('お問い合わせありがとうございます。\n内容を確認の上、ご連絡させていただきます。');
    form.reset();
  });
}

document.addEventListener('DOMContentLoaded', validateContactForm);

// ====================================
// ニュース・コラムの動的読み込み（データベース連携）
// ====================================
async function loadNews(limit = 3) {
  try {
    const response = await fetch(`/tables/news?limit=${limit}&sort=-published_at`);
    if (!response.ok) {
      console.log('ニュースデータが見つかりません。デフォルト表示を使用します。');
      return;
    }
    const data = await response.json();
    
    const newsGrid = document.getElementById('newsGrid');
    if (!newsGrid || !data.data || data.data.length === 0) return;
    
    newsGrid.innerHTML = '';
    
    data.data.forEach(news => {
      const card = createPostCard(news, 'news.html');
      newsGrid.appendChild(card);
    });
  } catch (error) {
    console.log('ニュースの読み込みエラー:', error);
  }
}

async function loadColumns(limit = 3) {
  try {
    const response = await fetch(`/tables/columns?limit=${limit}&sort=-published_at`);
    if (!response.ok) {
      console.log('コラムデータが見つかりません。デフォルト表示を使用します。');
      return;
    }
    const data = await response.json();
    
    const columnGrid = document.getElementById('columnGrid');
    if (!columnGrid || !data.data || data.data.length === 0) return;
    
    columnGrid.innerHTML = '';
    
    data.data.forEach(column => {
      const card = createPostCard(column, 'column.html');
      columnGrid.appendChild(card);
    });
  } catch (error) {
    console.log('コラムの読み込みエラー:', error);
  }
}

function createPostCard(post, linkUrl) {
  const card = document.createElement('div');
  card.className = 'post-card';
  
  const publishedDate = post.published_at 
    ? new Date(post.published_at).toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.')
    : '2024.01.01';
  
  card.innerHTML = `
    <div class="post-image" style="background: ${post.thumbnail_url ? `url(${post.thumbnail_url}) center/cover` : 'linear-gradient(135deg, #3b82f6, #f59e0b)'}"></div>
    <div class="post-content">
      <div class="post-meta">
        <span class="post-category">${post.category || 'お知らせ'}</span>
        <span class="post-date">
          <i class="far fa-calendar"></i>
          ${publishedDate}
        </span>
      </div>
      <h3 class="post-title">${post.title}</h3>
      <p class="post-excerpt">${post.excerpt || post.content.substring(0, 100) + '...'}</p>
      <a href="${linkUrl}?id=${post.id}" class="post-link">
        続きを読む
        <i class="fas fa-arrow-right"></i>
      </a>
    </div>
  `;
  
  return card;
}

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('newsGrid')) {
    loadNews();
  }
  if (document.getElementById('columnGrid')) {
    loadColumns();
  }
});

// ====================================
// ページトップへ戻るボタン
// ====================================
document.addEventListener('DOMContentLoaded', () => {
  // ページトップボタンを作成
  const scrollTopBtn = document.createElement('button');
  scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  scrollTopBtn.className = 'scroll-top-btn';
  scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #2563eb, #3b82f6);
    color: white;
    border: none;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 999;
  `;
  document.body.appendChild(scrollTopBtn);

  // スクロール時の表示/非表示
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.style.opacity = '1';
      scrollTopBtn.style.visibility = 'visible';
    } else {
      scrollTopBtn.style.opacity = '0';
      scrollTopBtn.style.visibility = 'hidden';
    }
  });

  // クリックでトップへ
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // ホバーエフェクト
  scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'translateY(-5px)';
    scrollTopBtn.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
  });

  scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'translateY(0)';
    scrollTopBtn.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  });
});
