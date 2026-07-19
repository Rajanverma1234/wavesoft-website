const services = {
  1: {
    icon: '🤖',
    title: 'AI Customer Support Bot',
    subtitle: 'RAG + LLM Powered',
    desc: 'Deploy a 24/7 intelligent chatbot that answers customer queries instantly, handles complaints, and automatically escalates complex issues to human agents.',
    features: ['24/7 automated responses','Hindi + English support','Human escalation system','Trained on your data','Website & app integration','Analytics dashboard','Conversation memory','Custom personality'],
    price: '₹3,000 – ₹6,000/month',
    timeline: 'Live in 3–5 days',
    demoUrl: 'https://finance-bot-v3.onrender.com',
    demoText: '🤖 Try Live Demo',
    demoTarget: '_blank',
    isContact: false
  },
  2: {
    icon: '💬',
    title: 'WhatsApp AI Automation',
    subtitle: 'WhatsApp Business API',
    desc: 'Your WhatsApp replies automatically like a real human — answering product questions, taking orders, sharing catalogues, and following up with leads.',
    features: ['Auto-reply like a human','Hindi + English both','Product catalogue sharing','Lead follow-up automation','Order tracking replies','Broadcast messaging','Multi-agent support','Response analytics'],
    price: '₹4,000 – ₹8,000/month',
    timeline: 'Live in 2–4 days',
    demoUrl: '#contact',
    demoText: '📋 Get Free Demo',
    demoTarget: '',
    isContact: true
  },
  3: {
    icon: '📊',
    title: 'AI Data Analyst',
    subtitle: 'Natural Language Queries',
    desc: 'Upload your Excel, CSV, or Google Sheets data and simply ask questions in plain Hindi or English. Get instant charts, business insights, and reports.',
    features: ['Upload Excel / CSV files','Ask in plain language','Auto-generate charts','Sales trend analysis','Monthly reports','Revenue insights','Inventory analysis','Export to PDF / Excel'],
    price: '₹3,500 – ₹7,000/month',
    timeline: 'Live in 3–5 days',
    demoUrl: '#contact',
    demoText: '📋 Get Free Demo',
    demoTarget: '',
    isContact: true
  },
  4: {
    icon: '📄',
    title: 'Document & Invoice Processor',
    subtitle: 'OCR + Deep Learning',
    desc: 'Automatically extract data from invoices, receipts, purchase orders, and any business documents. Eliminate manual data entry completely.',
    features: ['Invoice data extraction','Receipt processing','Auto Excel/GST filling','Multi-format support','Handwritten text OCR','Bulk document processing','Error detection','Cloud storage integration'],
    price: '₹4,000 – ₹9,000/month',
    timeline: 'Live in 5–7 days',
    demoUrl: '#contact',
    demoText: '📋 Get Free Demo',
    demoTarget: '',
    isContact: true
  },
  5: {
    icon: '🏥',
    title: 'AI Medical Assistant',
    subtitle: 'Healthcare AI',
    desc: 'Help your clinic automate patient FAQs, appointment booking, medicine reminders, and follow-up messages via WhatsApp or your website.',
    features: ['Appointment scheduling','Medicine reminders','Patient FAQ automation','Follow-up messages','WhatsApp integration','Hindi + English','Emergency escalation','Doctor availability info'],
    price: '₹5,000 – ₹12,000/month',
    timeline: 'Live in 5–7 days',
    demoUrl: '#contact',
    demoText: '📋 Get Free Demo',
    demoTarget: '',
    isContact: true
  },
  6: {
    icon: '🏠',
    title: 'Real Estate AI Bot',
    subtitle: 'Lead Qualification AI',
    desc: 'Qualify property leads automatically, answer buyer and tenant queries 24/7, share property details and photos, and book site visits.',
    features: ['Auto lead qualification','Property info sharing','Site visit booking','Price inquiry handling','Photo & video sharing','Follow-up automation','CRM integration','Multiple property support'],
    price: '₹5,000 – ₹10,000/month',
    timeline: 'Live in 4–6 days',
    demoUrl: '#contact',
    demoText: '📋 Get Free Demo',
    demoTarget: '',
    isContact: true
  }
};

function openModal(id) {
  const s = services[id];
  if (!s) return;

  document.getElementById('modalIcon').textContent = s.icon;
  document.getElementById('modalTitle').textContent = s.title;
  document.getElementById('modalSubtitle').textContent = s.subtitle;
  document.getElementById('modalDesc').textContent = s.desc;
  document.getElementById('modalPrice').textContent = s.price;
  document.getElementById('modalTimeline').textContent = s.timeline;

  const ul = document.getElementById('modalFeatures');
  ul.innerHTML = s.features.map(f => `<li>${f}</li>`).join('');

  const btns = document.getElementById('modalBtns');
  if (s.isContact) {
    btns.innerHTML = `
      <a href="#contact" class="modal-btn-primary" onclick="closeModal()">${s.demoText}</a>
      <a href="https://wa.me/918299269534?text=Hi%20WaveSoft!%20I%20am%20interested%20in%20${encodeURIComponent(s.title)}." class="modal-btn-wa" target="_blank">💬 WhatsApp Us</a>
    `;
  } else {
    btns.innerHTML = `
      <a href="${s.demoUrl}" target="${s.demoTarget}" class="modal-btn-primary">${s.demoText}</a>
      <a href="https://wa.me/918299269534?text=Hi%20WaveSoft!%20I%20am%20interested%20in%20${encodeURIComponent(s.title)}." class="modal-btn-wa" target="_blank">💬 WhatsApp Us</a>
    `;
  }

  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('modalOverlay').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});
