// Verified Location Database (Cities)
const verifiedLocations = [
  // North America
  { name: 'New York, NY', canonical: 'New York, New York, United States', gl: 'US', hl: 'en' },
  { name: 'Los Angeles, CA', canonical: 'Los Angeles, California, United States', gl: 'US', hl: 'en' },
  { name: 'Chicago, IL', canonical: 'Chicago, Illinois, United States', gl: 'US', hl: 'en' },
  { name: 'Houston, TX', canonical: 'Houston, Texas, United States', gl: 'US', hl: 'en' },
  { name: 'Phoenix, AZ', canonical: 'Phoenix, Arizona, United States', gl: 'US', hl: 'en' },
  { name: 'Philadelphia, PA', canonical: 'Philadelphia, Pennsylvania, United States', gl: 'US', hl: 'en' },
  { name: 'San Antonio, TX', canonical: 'San Antonio, Texas, United States', gl: 'US', hl: 'en' },
  { name: 'San Diego, CA', canonical: 'San Diego, California, United States', gl: 'US', hl: 'en' },
  { name: 'Dallas, TX', canonical: 'Dallas, Texas, United States', gl: 'US', hl: 'en' },
  { name: 'San Jose, CA', canonical: 'San Jose, California, United States', gl: 'US', hl: 'en' },
  { name: 'Austin, TX', canonical: 'Austin, Texas, United States', gl: 'US', hl: 'en' },
  { name: 'San Francisco, CA', canonical: 'San Francisco, California, United States', gl: 'US', hl: 'en' },
  { name: 'Seattle, WA', canonical: 'Seattle, Washington, United States', gl: 'US', hl: 'en' },
  { name: 'Washington, DC', canonical: 'Washington, District of Columbia, United States', gl: 'US', hl: 'en' },
  { name: 'Boston, MA', canonical: 'Boston, Massachusetts, United States', gl: 'US', hl: 'en' },
  { name: 'Miami, FL', canonical: 'Miami, Florida, United States', gl: 'US', hl: 'en' },
  { name: 'Toronto, Canada', canonical: 'Toronto, Ontario, Canada', gl: 'CA', hl: 'en' },
  { name: 'Vancouver, Canada', canonical: 'Vancouver, British Columbia, Canada', gl: 'CA', hl: 'en' },
  { name: 'Montreal, Canada', canonical: 'Montreal, Quebec, Canada', gl: 'CA', hl: 'fr' },
  { name: 'Mexico City', canonical: 'Mexico City, CDMX, Mexico', gl: 'MX', hl: 'es' },
  
  // Europe
  { name: 'London, UK', canonical: 'London, England, United Kingdom', gl: 'GB', hl: 'en' },
  { name: 'Manchester, UK', canonical: 'Manchester, England, United Kingdom', gl: 'GB', hl: 'en' },
  { name: 'Birmingham, UK', canonical: 'Birmingham, England, United Kingdom', gl: 'GB', hl: 'en' },
  { name: 'Paris, France', canonical: 'Paris, France', gl: 'FR', hl: 'fr' },
  { name: 'Lyon, France', canonical: 'Lyon, Auvergne-Rhone-Alpes, France', gl: 'FR', hl: 'fr' },
  { name: 'Berlin, Germany', canonical: 'Berlin, Germany', gl: 'DE', hl: 'de' },
  { name: 'Munich, Germany', canonical: 'Munich, Bavaria, Germany', gl: 'DE', hl: 'de' },
  { name: 'Hamburg, Germany', canonical: 'Hamburg, Hamburg, Germany', gl: 'DE', hl: 'de' },
  { name: 'Madrid, Spain', canonical: 'Madrid, Spain', gl: 'ES', hl: 'es' },
  { name: 'Barcelona, Spain', canonical: 'Barcelona, Catalonia, Spain', gl: 'ES', hl: 'es' },
  { name: 'Rome, Italy', canonical: 'Rome, Lazio, Italy', gl: 'IT', hl: 'it' },
  { name: 'Milan, Italy', canonical: 'Milan, Lombardy, Italy', gl: 'IT', hl: 'it' },
  { name: 'Amsterdam, NL', canonical: 'Amsterdam, North Holland, Netherlands', gl: 'NL', hl: 'nl' },
  { name: 'Dublin, Ireland', canonical: 'Dublin, County Dublin, Ireland', gl: 'IE', hl: 'en' },
  { name: 'Brussels, BE', canonical: 'Brussels, Brussels-Capital Region, Belgium', gl: 'BE', hl: 'fr' },
  { name: 'Zurich, CH', canonical: 'Zurich, Zurich, Switzerland', gl: 'CH', hl: 'de' },
  { name: 'Vienna, Austria', canonical: 'Vienna, Austria', gl: 'AT', hl: 'de' },
  { name: 'Stockholm, Sweden', canonical: 'Stockholm, Stockholm County, Sweden', gl: 'SE', hl: 'sv' },
  { name: 'Oslo, Norway', canonical: 'Oslo, Oslo, Norway', gl: 'NO', hl: 'no' },
  { name: 'Warsaw, Poland', canonical: 'Warsaw, Masovian Voivodeship, Poland', gl: 'PL', hl: 'pl' },

  // Asia Pacific
  { name: 'Tokyo, Japan', canonical: 'Tokyo, Japan', gl: 'JP', hl: 'ja' },
  { name: 'Osaka, Japan', canonical: 'Osaka, Japan', gl: 'JP', hl: 'ja' },
  { name: 'Seoul, Korea', canonical: 'Seoul, South Korea', gl: 'KR', hl: 'ko' },
  { name: 'Singapore', canonical: 'Singapore', gl: 'SG', hl: 'en' },
  { name: 'Hong Kong', canonical: 'Hong Kong', gl: 'HK', hl: 'zh-TW' },
  { name: 'Sydney, AU', canonical: 'Sydney, New South Wales, Australia', gl: 'AU', hl: 'en' },
  { name: 'Melbourne, AU', canonical: 'Melbourne, Victoria, Australia', gl: 'AU', hl: 'en' },
  { name: 'Bangkok, TH', canonical: 'Bangkok, Thailand', gl: 'TH', hl: 'th' },
  { name: 'Mumbai, India', canonical: 'Mumbai, Maharashtra, India', gl: 'IN', hl: 'en' },
  { name: 'Delhi, India', canonical: 'Delhi, India', gl: 'IN', hl: 'en' },
  { name: 'Bangalore, India', canonical: 'Bengaluru, Karnataka, India', gl: 'IN', hl: 'en' },
  { name: 'Kuala Lumpur, MY', canonical: 'Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia', gl: 'MY', hl: 'en' },
  { name: 'Jakarta, ID', canonical: 'Jakarta, Jakarta, Indonesia', gl: 'ID', hl: 'id' },
  { name: 'Ho Chi Minh, VN', canonical: 'Ho Chi Minh City, Ho Chi Minh, Vietnam', gl: 'VN', hl: 'vi' },
  { name: 'Manila, PH', canonical: 'Manila, Metro Manila, Philippines', gl: 'PH', hl: 'en' },

  // Latin America & Middle East
  { name: 'Sao Paulo, BR', canonical: 'Sao Paulo, State of Sao Paulo, Brazil', gl: 'BR', hl: 'pt' },
  { name: 'Rio de Janeiro, BR', canonical: 'Rio de Janeiro, State of Rio de Janeiro, Brazil', gl: 'BR', hl: 'pt' },
  { name: 'Buenos Aires, AR', canonical: 'Buenos Aires, Argentina', gl: 'AR', hl: 'es' },
  { name: 'Bogota, Colombia', canonical: 'Bogota, Bogota, Colombia', gl: 'CO', hl: 'es' },
  { name: 'Santiago, Chile', canonical: 'Santiago, Santiago Metropolitan Region, Chile', gl: 'CL', hl: 'es' },
  { name: 'Dubai, UAE', canonical: 'Dubai, Dubai, United Arab Emirates', gl: 'AE', hl: 'en' },
  { name: 'Tel Aviv, Israel', canonical: 'Tel Aviv-Yafo, Tel Aviv District, Israel', gl: 'IL', hl: 'he' },
  { name: 'Riyadh, Saudi', canonical: 'Riyadh, Riyadh Province, Saudi Arabia', gl: 'SA', hl: 'ar' },
  { name: 'Istanbul, Turkey', canonical: 'Istanbul, Istanbul Province, Turkey', gl: 'TR', hl: 'tr' },
  { name: 'Cape Town, ZA', canonical: 'Cape Town, Western Cape, South Africa', gl: 'ZA', hl: 'en' }
];

// Simple list of countries for the country tab
const countries = [
  // North America
  { name: 'United States', code: 'US', lang: 'en', flag: '🇺🇸' },
  { name: 'Canada', code: 'CA', lang: 'en', flag: '🇨🇦' },
  { name: 'Mexico', code: 'MX', lang: 'es', flag: '🇲🇽' },
  { name: 'Costa Rica', code: 'CR', lang: 'es', flag: '🇨🇷' },
  { name: 'Panama', code: 'PA', lang: 'es', flag: '🇵🇦' },
  
  // Europe
  { name: 'United Kingdom', code: 'GB', lang: 'en', flag: '🇬🇧' },
  { name: 'Germany', code: 'DE', lang: 'de', flag: '🇩🇪' },
  { name: 'France', code: 'FR', lang: 'fr', flag: '🇫🇷' },
  { name: 'Spain', code: 'ES', lang: 'es', flag: '🇪🇸' },
  { name: 'Italy', code: 'IT', lang: 'it', flag: '🇮🇹' },
  { name: 'Netherlands', code: 'NL', lang: 'nl', flag: '🇳🇱' },
  { name: 'Switzerland', code: 'CH', lang: 'de', flag: '🇨🇭' },
  { name: 'Sweden', code: 'SE', lang: 'sv', flag: '🇸🇪' },
  { name: 'Norway', code: 'NO', lang: 'no', flag: '🇳🇴' },
  { name: 'Denmark', code: 'DK', lang: 'da', flag: '🇩🇰' },
  { name: 'Finland', code: 'FI', lang: 'fi', flag: '🇫🇮' },
  { name: 'Poland', code: 'PL', lang: 'pl', flag: '🇵🇱' },
  { name: 'Czech Republic', code: 'CZ', lang: 'cs', flag: '🇨🇿' },
  { name: 'Hungary', code: 'HU', lang: 'hu', flag: '🇭🇺' },
  { name: 'Romania', code: 'RO', lang: 'ro', flag: '🇷🇴' },
  { name: 'Ireland', code: 'IE', lang: 'en', flag: '🇮🇪' },
  { name: 'Belgium', code: 'BE', lang: 'nl', flag: '🇧🇪' },
  { name: 'Austria', code: 'AT', lang: 'de', flag: '🇦🇹' },
  { name: 'Portugal', code: 'PT', lang: 'pt', flag: '🇵🇹' },
  { name: 'Greece', code: 'GR', lang: 'el', flag: '🇬🇷' },
  { name: 'Turkey', code: 'TR', lang: 'tr', flag: '🇹🇷' },
  { name: 'Ukraine', code: 'UA', lang: 'uk', flag: '🇺🇦' },
  
  // Asia Pacific
  { name: 'Japan', code: 'JP', lang: 'ja', flag: '🇯🇵' },
  { name: 'South Korea', code: 'KR', lang: 'ko', flag: '🇰🇷' },
  { name: 'China', code: 'CN', lang: 'zh-CN', flag: '🇨🇳' },
  { name: 'India', code: 'IN', lang: 'en', flag: '🇮🇳' },
  { name: 'Pakistan', code: 'PK', lang: 'ur', flag: '🇵🇰' },
  { name: 'Bangladesh', code: 'BD', lang: 'bn', flag: '🇧🇩' },
  { name: 'Australia', code: 'AU', lang: 'en', flag: '🇦🇺' },
  { name: 'New Zealand', code: 'NZ', lang: 'en', flag: '🇳🇿' },
  { name: 'Singapore', code: 'SG', lang: 'en', flag: '🇸🇬' },
  { name: 'Indonesia', code: 'ID', lang: 'id', flag: '🇮🇩' },
  { name: 'Malaysia', code: 'MY', lang: 'ms', flag: '🇲🇾' },
  { name: 'Thailand', code: 'TH', lang: 'th', flag: '🇹🇭' },
  { name: 'Vietnam', code: 'VN', lang: 'vi', flag: '🇻🇳' },
  { name: 'Philippines', code: 'PH', lang: 'en', flag: '🇵🇭' },
  { name: 'Taiwan', code: 'TW', lang: 'zh-TW', flag: '🇹🇼' },
  { name: 'Hong Kong', code: 'HK', lang: 'zh-TW', flag: '🇭🇰' },

  // Latin America
  { name: 'Brazil', code: 'BR', lang: 'pt', flag: '🇧🇷' },
  { name: 'Argentina', code: 'AR', lang: 'es', flag: '🇦🇷' },
  { name: 'Chile', code: 'CL', lang: 'es', flag: '🇨🇱' },
  { name: 'Colombia', code: 'CO', lang: 'es', flag: '🇨🇴' },
  { name: 'Peru', code: 'PE', lang: 'es', flag: '🇵🇪' },
  { name: 'Uruguay', code: 'UY', lang: 'es', flag: '🇺🇾' },
  
  // Middle East & Africa
  { name: 'UAE', code: 'AE', lang: 'ar', flag: '🇦🇪' },
  { name: 'Saudi Arabia', code: 'SA', lang: 'ar', flag: '🇸🇦' },
  { name: 'Qatar', code: 'QA', lang: 'ar', flag: '🇶🇦' },
  { name: 'Kuwait', code: 'KW', lang: 'ar', flag: '🇰🇼' },
  { name: 'Israel', code: 'IL', lang: 'he', flag: '🇮🇱' },
  { name: 'Egypt', code: 'EG', lang: 'ar', flag: '🇪🇬' },
  { name: 'Morocco', code: 'MA', lang: 'ar', flag: '🇲🇦' },
  { name: 'South Africa', code: 'ZA', lang: 'en', flag: '🇿🇦' },
  { name: 'Nigeria', code: 'NG', lang: 'en', flag: '🇳🇬' },
  { name: 'Kenya', code: 'KE', lang: 'en', flag: '🇰🇪' }
];

// Helper to get flag from country code (simplified for cities)
function getFlagForCity(gl) {
  const flags = {
    'US': '🇺🇸', 'CA': '🇨🇦', 'MX': '🇲🇽', 'GB': '🇬🇧', 'FR': '🇫🇷', 'DE': '🇩🇪',
    'ES': '🇪🇸', 'IT': '🇮🇹', 'NL': '🇳🇱', 'IE': '🇮🇪', 'BE': '🇧🇪', 'CH': '🇨🇭',
    'AT': '🇦🇹', 'SE': '🇸🇪', 'NO': '🇳🇴', 'PL': '🇵🇱', 'JP': '🇯🇵', 'KR': '🇰🇷',
    'SG': '🇸🇬', 'HK': '🇭🇰', 'AU': '🇦🇺', 'TH': '🇹🇭', 'IN': '🇮🇳', 'MY': '🇲🇾',
    'ID': '🇮🇩', 'VN': '🇻🇳', 'PH': '🇵🇭', 'BR': '🇧🇷', 'AR': '🇦🇷', 'CO': '🇨🇴',
    'CL': '🇨🇱', 'AE': '🇦🇪', 'IL': '🇮🇱', 'SA': '🇸🇦', 'TR': '🇹🇷', 'ZA': '🇿🇦'
  };
  return flags[gl] || '🌍';
}

// State
let selectedLocation = null;
let locationType = null;
let useEnglish = false;

// DOM Elements
const searchInput = document.getElementById('searchQuery');
const countriesGrid = document.getElementById('countriesGrid');
const citiesGrid = document.getElementById('citiesGrid');
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');
const languageToggle = document.getElementById('languageToggle');

// UULE Generator
function generateUULE(canonicalName) {
  const prefix = 'w+CAIQICI';
  const lengthMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
  
  const length = canonicalName.length;
  let lengthChar = '';
  if (length < lengthMap.length) {
    lengthChar = lengthMap[length];
  } else {
    lengthChar = lengthMap[length % 64]; 
  }

  // Base64 Encode
  const encodedName = btoa(canonicalName);
  
  // Strip padding '='
  const strippedName = encodedName.replace(/=+$/, '');
  
  return prefix + lengthChar + strippedName;
}

// Initialize the extension
function init() {
  renderCountries();
  renderCities();
  setupEventListeners();
  loadSavedState();
}

// Render country buttons
function renderCountries() {
  countriesGrid.innerHTML = countries.map((country, index) => `
    <button class="location-btn" data-type="country" data-index="${index}">
      <span class="flag">${country.flag}</span>
      <span class="name">${country.name}</span>
    </button>
  `).join('');
}

// Render city buttons
function renderCities() {
  citiesGrid.innerHTML = verifiedLocations.map((city, index) => `
    <button class="location-btn" data-type="city" data-index="${index}">
      <span class="flag">${getFlagForCity(city.gl)}</span>
      <span class="name">${city.name}</span>
    </button>
  `).join('');
}

// Setup event listeners
function setupEventListeners() {
  // Tab switching
  tabs.forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });

  // Location selection
  countriesGrid.addEventListener('click', handleLocationClick);
  citiesGrid.addEventListener('click', handleLocationClick);

  // Search on Enter key
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  });

  // Double-click to search immediately
  countriesGrid.addEventListener('dblclick', handleDoubleClick);
  citiesGrid.addEventListener('dblclick', handleDoubleClick);

  // Language toggle
  languageToggle.addEventListener('change', (e) => {
    useEnglish = e.target.checked;
    saveState();
  });
}

// Switch tabs
function switchTab(tabName) {
  tabs.forEach(tab => {
    tab.classList.toggle('active', tab.dataset.tab === tabName);
  });

  tabContents.forEach(content => {
    content.classList.toggle('active', content.id === `${tabName}-tab`);
  });
}

// Handle location button click
function handleLocationClick(e) {
  const btn = e.target.closest('.location-btn');
  if (!btn) return;

  const type = btn.dataset.type;
  const index = parseInt(btn.dataset.index);

  // Remove previous selection
  document.querySelectorAll('.location-btn.selected').forEach(b => {
    b.classList.remove('selected');
  });

  // Set new selection
  btn.classList.add('selected');
  locationType = type;
  selectedLocation = type === 'country' ? countries[index] : verifiedLocations[index];

  // Save state
  saveState();

  // If there's already a query, perform search
  if (searchInput.value.trim()) {
    performSearch();
  }
}

// Handle double-click for immediate search
function handleDoubleClick(e) {
  const btn = e.target.closest('.location-btn');
  if (!btn) return;

  // Selection is already handled by click
  performSearch();
}

// Perform the search
function performSearch() {
  const query = searchInput.value.trim();
  
  if (!query) {
    searchInput.focus();
    searchInput.classList.add('shake');
    setTimeout(() => searchInput.classList.remove('shake'), 500);
    return;
  }

  if (!selectedLocation) {
    // Highlight the location section
    document.querySelector('.location-section').classList.add('highlight');
    setTimeout(() => document.querySelector('.location-section').classList.remove('highlight'), 500);
    return;
  }

  const encodedQuery = encodeURIComponent(query);
  const langParam = useEnglish ? 'en' : (selectedLocation.hl || selectedLocation.lang || 'en');
  
  // Base URL params: No Country Redirect, No Personalization
  let searchUrl = `https://www.google.com/search?q=${encodedQuery}&ncr=1&pws=0&hl=${langParam}`;

  if (locationType === 'country') {
    // Country search: use gl param
    searchUrl += `&gl=${selectedLocation.code}`;
  } else {
    // City search: use generated UULE
    const uule = generateUULE(selectedLocation.canonical);
    searchUrl += `&uule=${uule}&gl=${selectedLocation.gl}`;
  }

  // Open in new tab
  chrome.tabs.create({ url: searchUrl });
}

// Save state to localStorage
function saveState() {
  const state = {
    locationType,
    useEnglish,
    locationIndex: locationType === 'country' 
      ? countries.indexOf(selectedLocation) 
      : verifiedLocations.indexOf(selectedLocation)
  };
  localStorage.setItem('localSearchState', JSON.stringify(state));
}

// Load saved state from localStorage
function loadSavedState() {
  try {
    const saved = localStorage.getItem('localSearchState');
    if (saved) {
      const state = JSON.parse(saved);
      locationType = state.locationType;
      useEnglish = state.useEnglish || false;
      languageToggle.checked = useEnglish;
      
      if (locationType === 'country' && state.locationIndex >= 0) {
        selectedLocation = countries[state.locationIndex];
        switchTab('countries');
        // Wait for render
        setTimeout(() => {
          const btn = countriesGrid.querySelector(`[data-index="${state.locationIndex}"]`);
          if (btn) btn.classList.add('selected');
        }, 0);
      } else if (locationType === 'city' && state.locationIndex >= 0) {
        selectedLocation = verifiedLocations[state.locationIndex];
        switchTab('cities');
        // Wait for render
        setTimeout(() => {
          const btn = citiesGrid.querySelector(`[data-index="${state.locationIndex}"]`);
          if (btn) btn.classList.add('selected');
        }, 0);
      }
    }
  } catch (e) {
    console.error('Error loading saved state:', e);
  }
}

// Add shake animation styles dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
  }
  .shake {
    animation: shake 0.3s ease-in-out;
    border-color: #ff6b6b !important;
  }
  .highlight {
    animation: highlightPulse 0.5s ease-in-out;
  }
  @keyframes highlightPulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
`;
document.head.appendChild(style);

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', init);
