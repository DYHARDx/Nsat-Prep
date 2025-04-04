// DOM Elements
const tabs = document.querySelectorAll('.tab');
const cardContainers = document.querySelectorAll('.cards-container');
const dateElement = document.querySelector('.date');
const notificationIcon = document.getElementById('notificationIcon');
const notificationDropdown = document.querySelector('.notification-dropdown');
const profileIcon = document.getElementById('profileIcon');
const profileDropdown = document.querySelector('.profile-dropdown');
const aboutBtn = document.getElementById('aboutBtn');
const aboutModal = document.getElementById('aboutModal');
const closeModal = document.querySelector('.close-modal');
const modalCloseBtn = document.querySelector('.modal-close-btn');
const lightModeBtn = document.getElementById('lightModeBtn');
const darkModeBtn = document.getElementById('darkModeBtn');
const markAllRead = document.querySelector('.mark-all-read');

// Card data for each tab with specific links
const cardData = {
    interview: [
        { 
            title: "Introduction & Personal Insight", 
            count: 7, 
            subject: "Interview",
            link: "https://dyhardx.github.io/Nset-Prep/intro.html" 
        },
        { 
            title: "Academic Background & Interests", 
            count: 9, 
            subject: "Interview",
            link: "https://dyhardx.github.io/Nset-Prep/bg.html" 
        },
        { 
            title: "Why This College?", 
            count: 7, 
            subject: "Interview",
            link: "https://dyhardx.github.io/Nset-Prep/college.html" 
        },
        { 
            title: "Guesstimate Questions", 
            count: 17, 
            subject: "Interview",
            link: "https://dyhardx.github.io/Nset-Prep/gt.html" 
        },
        { 
            title: "Mathematics", 
            count: 13, 
            subject: "Interview",
            link: "https://dyhardx.github.io/Nset-Prep/math.html" 
        },
        { 
            title: "Tech & AI", 
            count: 2, 
            subject: "Interview",
            link: "https://dyhardx.github.io/Nset-Prep/ai.html" 
        },
        { 
            title: "Career Goals & Future Plans", 
            count: 10, 
            subject: "Interview",
            link: "https://dyhardx.github.io/Nset-Prep/goal.html" 
        },
        { 
            title: "Extracurricular & Hobbies", 
            count: 9, 
            subject: "Interview",
            link: "https://dyhardx.github.io/Nset-Prep/hobbie.html" 
        }
    ],
    english: [
        { 
            title: "Comprehension - Section 1", 
            count: 12, 
            subject: "English",
            link: "https://zenova.one/quiz/quiz.html?subject=english/comprehension1" 
        },
        { 
            title: "Comprehension - Section 2", 
            count: 11, 
            subject: "English",
            link: "https://zenova.one/quiz/quiz.html?subject=english/comprehension2" 
        },
        { 
            title: "Comprehension - Section 3", 
            count: 12, 
            subject: "English",
            link: "https://zenova.one/quiz/quiz.html?subject=english/comprehension3" 
        },
        { 
            title: "Comprehension - Section 4", 
            count: 11, 
            subject: "English",
            link: "https://zenova.one/quiz/quiz.html?subject=english/comprehension4" 
        },
        { 
            title: "Verbal Analogies", 
            count: 18, 
            subject: "English",
            link: "https://zenova.one/quiz/quiz.html?subject=english/Verbal_Analogies" 
        },
        { 
            title: "Ordering of Sentences", 
            count: 21, 
            subject: "English",
            link: "https://zenova.one/quiz/quiz.html?subject=english/Ordering_of_Sentences" 
        }
    ],
    mathematics: [
        { 
            title: "Problems on Numbers", 
            count: 20, 
            subject: "Math",
            link: "https://zenova.one/quiz/quiz.html?subject=math/Problems_on_Numbers" 
        },
        { 
            title: "Problems on H.C.F and L.C.M", 
            count: 20, 
            subject: "Math",
            link: "https://zenova.one/quiz/quiz.html?subject=math/HCF_LCM" 
        },
        { 
            title: "Arithmetic - Ratios, Averages, Percentages, etc.", 
            count: 30, 
            subject: "Math",
            link: "https://zenova.one/quiz/quiz.html?subject=math/Arithmetic" 
        },
        { 
            title: "Permutation and Combination", 
            count: 14, 
            subject: "Math",
            link: "https://zenova.one/quiz/quiz.html?subject=math/Permutation_and_Combination" 
        },
        { 
            title: "Applied Mathematics - Speed, Profit & Loss, Interest, etc.", 
            count: 30, 
            subject: "Math",
            link: "https://zenova.one/quiz/quiz.html?subject=math/applied_mathematics" 
        },
        { 
            title: "Probability - General Questions", 
            count: 14, 
            subject: "Math",
            link: "https://zenova.one/quiz/quiz.html?subject=math/Probability" 
        },
        { 
            title: "Differentiation and Integration", 
            count: 40, 
            subject: "Math",
            link: "https://zenova.one/quiz/quiz.html?subject=math/Differentiation_and_Integration" 
        }
    ],
    general: [
        { 
            title: "Data Analysis (Tables, Graphs, Venn Diagrams, Scatter Plots)", 
            count: 28, 
            subject: "General Aptitude",
            link: "https://zenova.one/quiz/quiz.html?subject=GA/Data_Analysis" 
        },
        { 
            title: "Arrangement of People & Objects", 
            count: 7, 
            subject: "General Aptitude",
            link: "https://zenova.one/quiz/quiz.html?subject=GA/Arrangement" 
        },
        { 
            title: "Encryption & Decryption", 
            count: 8, 
            subject: "General Aptitude",
            link: "https://zenova.one/quiz/quiz.html?subject=GA/Encryption_Decryption" 
        },
        { 
            title: "Family Relations", 
            count: 5, 
            subject: "General Aptitude",
            link: "https://zenova.one/quiz/quiz.html?subject=GA/Family_Relations" 
        },
        { 
            title: "Navigation Using Directions", 
            count: 5, 
            subject: "General Aptitude",
            link: "https://zenova.one/quiz/quiz.html?subject=GA/Navigation" 
        }
    ]
};

// Initialize the application
function initApp() {
    updateDate();
    renderCards();
    setupEventListeners();
    loadUserPreferences();
}

// Update date in the header
function updateDate() {
    if (dateElement) {
        const now = new Date();
        const options = { day: 'numeric', month: 'long' };
        dateElement.textContent = now.toLocaleDateString('en-US', options);
    }
}

// Render cards for each tab
function renderCards() {
    for (const [category, cards] of Object.entries(cardData)) {
        const container = document.querySelector(`.${category}`);
        if (!container) continue;
        
        cards.forEach(card => {
            const cardElement = createCardElement(card);
            container.appendChild(cardElement);
        });
    }
}

// Create a card element with specific link redirection
function createCardElement(card) {
    const cardElement = document.createElement('div');
    cardElement.className = 'quiz-card';
    cardElement.dataset.title = card.title;
    
    // Determine which image to use based on the subject
    let imageUrl = '';
    if (card.subject.includes('Interview')) {
        imageUrl = 'images/interview-icon.svg';
    } else if (card.subject.includes('English')) {
        imageUrl = 'images/english-icon.svg';
    } else if (card.subject.includes('Mathematics')) {
        imageUrl = 'images/math-icon.svg';
    } else if (card.subject.includes('General Aptitude')) {
        imageUrl = 'images/aptitude-icon.svg';
    }
    
    cardElement.innerHTML = `
        <div class="quiz-info">
            <span class="quiz-count">• ${card.count} Quizzes</span>
            <h3>${card.title}</h3>
            <div class="quiz-action">
                <button class="start-btn">Start</button>
            </div>
        </div>
        <div class="card-image">
            <img src="${imageUrl}" alt="${card.subject}" class="subject-icon">
        </div>
    `;
    
    // Add click event to redirect to specific link
    cardElement.addEventListener('click', () => {
        if (card.link) {
            window.location.href = card.link;
        }
    });
    
    // Make only the button clickable for the start action
    const startBtn = cardElement.querySelector('.start-btn');
    if (startBtn) {
        startBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent the card click event
            if (card.link) {
                window.location.href = card.link;
            }
        });
    }
    
    return cardElement;
}

// Set up all event listeners
function setupEventListeners() {
    // Tab switching
    if (tabs) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                cardContainers.forEach(c => c.classList.remove('active'));
                
                tab.classList.add('active');
                const targetContainer = document.querySelector(`.${tab.dataset.tab}`);
                if (targetContainer) {
                    targetContainer.classList.add('active');
                }
                
                // Save the active tab preference
                localStorage.setItem('activeTab', tab.dataset.tab);
            });
        });
    }
    
    // Notification dropdown toggle
    if (notificationIcon && notificationDropdown) {
        notificationIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            notificationDropdown.classList.toggle('active');
            if (profileDropdown) profileDropdown.classList.remove('active');
        });
    }
    
    // Profile dropdown toggle
    if (profileIcon && profileDropdown) {
        // Show dropdown when right-clicking or Ctrl+clicking the profile icon
        profileIcon.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            e.stopPropagation();
            profileDropdown.classList.toggle('active');
        });
        
        profileIcon.addEventListener('click', (e) => {
            if (e.ctrlKey || e.metaKey) {
                e.preventDefault();
                profileDropdown.classList.toggle('active');
            }
        });
    }
    
    // Add profile link to dropdown menu
    const profileLink = document.querySelector('.profile-menu a[href="profile.html"]');
    if (profileLink) {
        profileLink.addEventListener('click', (e) => {
            window.location.href = 'profile.html';
        });
    }
    
    // Close dropdowns when clicking elsewhere
    document.addEventListener('click', () => {
        if (notificationDropdown) notificationDropdown.classList.remove('active');
        if (profileDropdown) profileDropdown.classList.remove('active');
    });
    
    // About modal
    if (aboutBtn && aboutModal) {
        aboutBtn.addEventListener('click', () => {
            aboutModal.classList.add('active');
        });
    }
    
    // Close modal
    if (closeModal && modalCloseBtn && aboutModal) {
        [closeModal, modalCloseBtn].forEach(btn => {
            btn.addEventListener('click', () => {
                aboutModal.classList.remove('active');
            });
        });
        
        // Close modal when clicking outside
        aboutModal.addEventListener('click', (e) => {
            if (e.target === aboutModal) {
                aboutModal.classList.remove('active');
            }
        });
    }
    
    // Set up theme buttons
    setupThemeButtons();
    
    // Mark all notifications as read
    if (markAllRead) {
        markAllRead.addEventListener('click', () => {
            document.querySelectorAll('.notification-item.unread').forEach(item => {
                item.classList.remove('unread');
            });
            
            // Update notification badge
            const badge = document.querySelector('.notification-badge');
            if (badge) badge.style.display = 'none';
        });
    }
    
    // Card hover and click animations
    document.addEventListener('DOMContentLoaded', () => {
        const quizCards = document.querySelectorAll('.quiz-card');
        
        quizCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-3px)';
                card.style.boxShadow = 'var(--shadow-md)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
                card.style.boxShadow = '';
            });
            
            card.addEventListener('click', () => {
                card.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    card.style.transform = '';
                }, 100);
            });
        });
    });
}

// Setup theme buttons
function setupThemeButtons() {
    // Ensure the buttons exist
    if (!lightModeBtn || !darkModeBtn) return;
    
    console.log("Setting up theme buttons");
    
    // Remove any existing event listeners to prevent duplicates
    lightModeBtn.removeEventListener('click', handleLightModeClick);
    darkModeBtn.removeEventListener('click', handleDarkModeClick);
    
    // Add event listeners
    lightModeBtn.addEventListener('click', handleLightModeClick);
    darkModeBtn.addEventListener('click', handleDarkModeClick);
    
    // Set initial active state
    updateThemeButtonsState();
}

// Handler for light mode button
function handleLightModeClick() {
    console.log("Light mode clicked");
    setThemeMode('light');
}

// Handler for dark mode button
function handleDarkModeClick() {
    console.log("Dark mode clicked");
    setThemeMode('dark');
}

// Update theme buttons state
function updateThemeButtonsState() {
    if (!lightModeBtn || !darkModeBtn) return;
    
    const themeMode = localStorage.getItem('themeMode') || 'light';
    
    if (themeMode === 'dark') {
        lightModeBtn.classList.remove('active');
        darkModeBtn.classList.add('active');
    } else {
        lightModeBtn.classList.add('active');
        darkModeBtn.classList.remove('active');
    }
}

// Set theme mode (light or dark)
function setThemeMode(mode) {
    if (mode === 'dark') {
        document.body.classList.add('dark-mode');
        document.body.setAttribute('data-theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        document.body.setAttribute('data-theme', 'light');
    }
    
    localStorage.setItem('themeMode', mode);
    updateThemeButtonsState();
}

// Load user preferences (theme mode and active tab)
function loadUserPreferences() {
    // Set theme mode based on localStorage or default to light
    const themeMode = localStorage.getItem('themeMode') || 'light';
    setThemeMode(themeMode);
    
    // Set default to Interview tab
    const activeTab = localStorage.getItem('activeTab') || 'interview';
    if (activeTab && tabs && tabs.length > 0) {
        tabs.forEach(tab => tab.classList.remove('active'));
        cardContainers.forEach(container => container.classList.remove('active'));
        
        const selectedTab = document.querySelector(`[data-tab="${activeTab}"]`);
        const selectedContainer = document.querySelector(`.${activeTab}`);
        
        if (selectedTab && selectedContainer) {
            selectedTab.classList.add('active');
            selectedContainer.classList.add('active');
        }
    }
}

// Initialize the application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded, initializing app");
    initApp();
    
    // Manually apply theme mode on all pages
    const themeMode = localStorage.getItem('themeMode') || 'light';
    setThemeMode(themeMode);
    
    // Set a global flag to indicate that theme buttons are already initialized
    window.themeButtonsInitialized = true;
});
