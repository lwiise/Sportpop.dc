(() => {
  'use strict';

  const comite = [
    { name: 'Dre Solène Froidevaux', role: 'Présidente', tag: 'Genre, corps et sport', photo: 'https://sportpop.ch/wp-content/uploads/2022/10/solene_1_min.jpg', linkedin: 'https://www.linkedin.com/in/sol%C3%A8ne-froidevaux-39780685/?originalSubdomain=ch', mail: 'solene.froidevaux@sportpop.ch' },
    { name: 'Dr. Kevin Rosianu', role: 'Vice-président', tag: 'Migrations, racisme, prévention des violences', photo: 'https://sportpop.ch/wp-content/uploads/2025/05/f0447b10-e1d1-42e2-a797-d8a5ca1bde62-1024x1024.jpg', mail: 'kevin.rosianu@sportpop.ch' },
    { name: 'Dr. Quentin Tonnerre', role: 'Vice-président et trésorier', tag: 'Politiques publiques du sport et évaluation', photo: 'https://0c3ywbgcrn.preview.infomaniak.website/wp-content/uploads/2022/10/sfrv2020_17-copie.jpg', linkedin: 'https://www.linkedin.com/in/quentin-tonnerre-phd-043a9273/', mail: 'quentin.tonnerre@sportpop.ch' },
    { name: 'Dr. Jérôme Berthoud', role: 'Membre du comité', tag: 'Diversité culturelle et prévention des violences', photo: 'https://sportpop.ch/wp-content/uploads/2022/10/jeromeberthoud18-copie.jpg', linkedin: 'https://www.linkedin.com/in/j%C3%A9r%C3%B4me-berthoud-phd-0816bb142/', mail: 'jerome.berthoud@sportpop.ch' },
    { name: 'Carole Gomez', role: 'Membre du comité', tag: 'Géopolitique, genre, violences sexistes et sexuelles', photo: 'https://sportpop.ch/wp-content/uploads/2025/05/3121c8fa-0029-40f5-b83c-5c3db4e4fd5b.jpg', linkedin: 'https://www.linkedin.com/in/carole-gomez-aa687036' },
    { name: 'Dre Justine Scheidegger', role: 'Membre du comité', tag: 'Corps, espace public, inclusion', photo: 'https://sportpop.ch/wp-content/uploads/2025/05/bb78ab56-6399-4365-a082-c6f9bbd0d1fe-1024x1024.jpg', linkedin: 'https://applicationspub.unil.ch/interpub/noauth/php/Un/UnPers.php?PerNum=1135057&LanCode=37' },
    { name: 'Dre Jennifer Masset', role: 'Membre du comité (HESAV)', tag: 'Développement et évaluation de programmes', photo: 'https://sportpop.ch/wp-content/uploads/2025/04/4b8693a7-7589-4aac-8963-85dd81ee6383-768x1024.jpg', linkedin: 'https://www.linkedin.com/in/jennifer-wegrzyk-masset-a13599b0/' },
    { name: 'Alexis Valenza', role: 'Secrétaire général', tag: 'Durabilité, pilotage du sport', photo: 'https://sportpop.ch/wp-content/uploads/2024/02/Alexis-copie.png', linkedin: 'https://www.linkedin.com/in/iamalexisvalenza/', mail: 'alexis.valenza@sportpop.ch' },
    { name: 'Dre Emilie Jaccard', role: 'Membre du comité', tag: 'Politique publique, tourisme sportif, marketing', photo: 'https://sportpop.ch/wp-content/uploads/2025/05/cb266c43-12d0-4960-a26c-fc34ad5dc62d-1024x1024.jpg', linkedin: 'https://www.linkedin.com/in/emilie-jaccard-7b315130/' }
  ];

  const collabs = [
    { name: 'Dr. Philippe Vonnard', role: 'Coordinateur scientifique', tag: 'Responsable du Pôle Enquêtes', photo: 'https://sportpop.ch/wp-content/uploads/2026/05/Phil-copie.jpeg', linkedin: 'https://www.linkedin.com/in/philippe-vonnard-078755113/?originalSubdomain=ch' },
    { name: 'Dr. Dietrich Choffat', role: 'Responsable pédagogique', tag: "Formation d'animateur·trices sportif·ves communautaires", photo: 'https://sportpop.ch/wp-content/uploads/2024/02/Photo_Dietrich_Choffat-copie-1.png', linkedin: 'https://www.linkedin.com/in/dietrich-choffat-8683b8261/' },
    { name: 'Diana Lisette Garcia Gonzalez', role: 'Coordinatrice de projet', tag: "Formation d'animateur·trices sportif·ves communautaires", photo: 'https://sportpop.ch/wp-content/uploads/2024/04/1652216401643-copie.jpeg', linkedin: 'https://www.linkedin.com/in/diana-lisette-garcia-gonzalez/' },
    { name: 'Dre Esther Eustache', role: 'Chargée de projet', tag: 'Rapport « Tabac & Sport »', photo: 'https://sportpop.ch/wp-content/uploads/2025/08/photo_Eustache-1-Modifie-Modifie-709x1024.jpg', linkedin: 'https://www.linkedin.com/in/esther-eustache-767498113/' },
    { name: 'Dr. Bastien Presset', role: 'Chef de projet', tag: "Rapport « Tabac & Sport » et Enquête pratiques sportives libres", photo: 'https://sportpop.ch/wp-content/uploads/2022/11/presset_photo.jpg', linkedin: 'https://www.linkedin.com/in/bastien-presset-phd-648408106/' },
    { name: 'Manon Pesse', role: 'Chargée de projet', tag: 'Évaluation SPARK', photo: 'https://sportpop.ch/wp-content/uploads/2026/04/ManonPesse-copie.jpg', linkedin: 'https://www.linkedin.com/in/manon-pesse-2030ab31a/?originalSubdomain=ch' },
    { name: 'Dr. Kevin Rosianu', role: 'Chef de projet', tag: "Rapport espaces d'activité physique communaux", photo: 'https://sportpop.ch/wp-content/uploads/2025/05/f0447b10-e1d1-42e2-a797-d8a5ca1bde62.jpg' }
  ];

  const stats = [
    { value: '2022', label: 'Association fondée à Lausanne' },
    { value: '15+', label: 'Chercheuses et chercheurs' },
    { value: '8', label: 'Projets et rapports publiés' },
    { value: 'CH-VD·GE', label: 'Ancrage en Suisse romande' }
  ];

  const domains = [
    { n: '1', title: 'Inclusion', body: "Favoriser l'accès à la pratique sportive sans distinction de genre, âge, parcours migratoire, classe sociale ou handicap." },
    { n: '2', title: 'Intégrité', body: "Prévenir toute forme d'abus dans le cadre de la pratique sportive, notamment envers les enfants et les personnes les plus vulnérables." },
    { n: '3', title: 'Politiques publiques', body: "Accompagner les collectivités publiques dans le développement des politiques du sport et de l'activité physique." }
  ];

  const vision = [
    { text: 'Un ancrage local en Suisse romande', icon: 'pin' },
    { text: "Des études menées par des professionnel·les avec un haut niveau de formation", icon: 'cap' },
    { text: 'Des projets sur mesure pour les organisations sportives et les autorités publiques', icon: 'target' },
    { text: 'Un travail en co-construction avec les partenaires des projets et un important réseau académique', icon: 'network' },
    { text: 'Des produits livrés clé en main pour servir les politiques publiques et celles des organisations sportives', icon: 'box' }
  ];

  const projects = [
    { title: 'Sport et nicotine', desc: 'Enquête sur la consommation de tabac et de nicotine dans les milieux sportifs.', url: 'https://www.unisante.ch/fr/formation-recherche/recherche/publications/raisons-sante/raisons-sante-376', icon: 'report' },
    { title: "Élaboration d'une politique sportive communale", desc: "Accompagnement stratégique d'une collectivité publique dans la définition de sa politique sportive.", url: 'https://www.lausanneregion.ch/publications-2021-2026/', icon: 'policy' },
    { title: 'Pratiques sportives à Genève', desc: 'Enquête quantitative sur les pratiques sportives de la population du canton de Genève.', url: 'https://www.ge.ch/document/enquete-pratiques-sportives-population-du-canton-geneve', icon: 'survey' },
    { title: 'Formation en animation sportive communautaire', desc: "Programme de formation destiné aux animateur·trices sportif·ves de terrain.", url: 'https://sportpop.ch/28-2/', icon: 'training' },
    { title: 'Quel sport demain ?', desc: 'Étude prospective sur les mutations des pratiques sportives dans les prochaines décennies.', url: 'https://sportpop.ch/quel-sport-demain/', icon: 'survey' },
    { title: 'Sport et inclusion', desc: "Recherche-action sur l'accès à la pratique sportive pour les publics vulnérables.", url: 'https://sportpop.ch/sport-et-inclusion/', icon: 'inclusion' },
    { title: 'Violences dans le sport', desc: 'État des lieux des violences dans les milieux sportifs genevois.', url: 'https://sportsge.ch/wp-content/uploads/2024/08/AGS_Violences-dans-les-millieux-sportifs_Etat-lieux-1.pdf', icon: 'shield' },
    { title: 'Dispositif maltraitance', desc: "Rapport d'enquête pour la création d'un dispositif cantonal de lutte contre les maltraitances dans le sport.", url: 'https://sportpop.ch/wp-content/uploads/2025/06/Rapport-denquete_Creation-dun-dispositif-cantonal-de-lutte-contre-les-maltraitances-et-les-mauvais-comportements-dans-le-sport-2023.pdf', icon: 'shield' }
  ];

  const VISION_ICONS = {
    pin: '<circle cx="20" cy="16" r="10" stroke="#FE4575" stroke-width="2"/><path d="M20 26 L20 37" stroke="#FE4575" stroke-width="2"/><circle cx="20" cy="16" r="3.5" fill="#FE4575"/>',
    cap: '<polygon points="20,6 37,15 20,24 3,15" stroke="#FE4575" stroke-width="2" stroke-linejoin="round"/><path d="M11,18.5 L11,27 C11,30 29,30 29,27 L29,18.5" stroke="#FE4575" stroke-width="2"/>',
    target: '<circle cx="20" cy="20" r="15" stroke="#FE4575" stroke-width="2"/><circle cx="20" cy="20" r="9" stroke="#FE4575" stroke-width="2"/><circle cx="20" cy="20" r="3" fill="#FE4575"/>',
    network: '<circle cx="9" cy="10" r="5" stroke="#FE4575" stroke-width="2"/><circle cx="31" cy="10" r="5" stroke="#FE4575" stroke-width="2"/><circle cx="20" cy="32" r="5" stroke="#FE4575" stroke-width="2"/><path d="M12.5,13.5 L17,28" stroke="#FE4575" stroke-width="2"/><path d="M27.5,13.5 L23,28" stroke="#FE4575" stroke-width="2"/><path d="M14,10 L26,10" stroke="#FE4575" stroke-width="2"/>',
    box: '<polygon points="20,4 36,12 36,28 20,36 4,28 4,12" stroke="#FE4575" stroke-width="2" stroke-linejoin="round"/><path d="M4,12 L20,20 L36,12" stroke="#FE4575" stroke-width="2"/><path d="M20,20 L20,36" stroke="#FE4575" stroke-width="2"/>'
  };

  const PROJECT_ICONS = {
    report: '<rect x="7" y="4" width="20" height="26" rx="2" stroke="#34495E" stroke-width="2"/><path d="M12,12 L22,12" stroke="#FE4575" stroke-width="2"/><path d="M12,17 L22,17" stroke="#FE4575" stroke-width="2"/><path d="M12,22 L18,22" stroke="#FE4575" stroke-width="2"/>',
    policy: '<path d="M5,30 L29,30" stroke="#34495E" stroke-width="2"/><path d="M8,30 L8,15 L17,7 L26,15 L26,30" stroke="#34495E" stroke-width="2" stroke-linejoin="round"/><path d="M17,30 L17,21 L14,21 L14,30" stroke="#FE4575" stroke-width="2"/>',
    survey: '<rect x="7" y="4" width="20" height="26" rx="2" stroke="#34495E" stroke-width="2"/><path d="M11.5,12 L14,14.5 L19,9.5" stroke="#FE4575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.5,20 L14,22.5 L19,17.5" stroke="#FE4575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    training: '<polygon points="17,5 30,12 17,19 4,12" stroke="#34495E" stroke-width="2" stroke-linejoin="round"/><path d="M9,15 L9,22 C9,24.5 25,24.5 25,22 L25,15" stroke="#FE4575" stroke-width="2"/>',
    inclusion: '<circle cx="13" cy="14" r="7" stroke="#34495E" stroke-width="2"/><circle cx="21" cy="14" r="7" stroke="#FE4575" stroke-width="2"/>',
    shield: '<path d="M17,4 L28,8.5 L28,17 C28,24 22,28.5 17,30 C12,28.5 6,24 6,17 L6,8.5 Z" stroke="#34495E" stroke-width="2" stroke-linejoin="round"/><path d="M17,12 L17,19" stroke="#FE4575" stroke-width="2"/><circle cx="17" cy="23" r="1.4" fill="#FE4575"/>'
  };

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));

  function renderStats() {
    document.getElementById('stats-grid').innerHTML = stats.map((s) => `
      <div class="stat">
        <div class="stat-value">${esc(s.value)}</div>
        <div class="stat-label">${esc(s.label)}</div>
      </div>
    `).join('');
  }

  function renderDomains() {
    document.getElementById('domains-grid').innerHTML = domains.map((d) => `
      <div class="domain">
        <div class="domain-n">${esc(d.n)}</div>
        <div class="domain-title">${esc(d.title)}</div>
        <div class="domain-body">${esc(d.body)}</div>
      </div>
    `).join('');
  }

  function renderVision() {
    document.getElementById('vision-grid').innerHTML = vision.map((v) => `
      <div>
        <svg class="vision-icon" width="40" height="40" viewBox="0 0 40 40" fill="none">${VISION_ICONS[v.icon] || ''}</svg>
        <div class="vision-text">${esc(v.text)}</div>
      </div>
    `).join('');
  }

  function teamCardHtml(m) {
    const links = [];
    if (m.linkedin) links.push(`<a href="${esc(m.linkedin)}" target="_blank" rel="noopener" class="team-card-link">LinkedIn</a>`);
    if (m.mail) links.push(`<a href="mailto:${esc(m.mail)}" class="team-card-link">E-mail</a>`);
    return `
      <div class="team-card">
        <img class="team-card-photo" src="${esc(m.photo)}" alt="${esc(m.name)}" loading="lazy">
        <div class="team-card-body">
          <div class="team-card-name">${esc(m.name)}</div>
          <div class="team-card-role">${esc(m.role)}</div>
          ${m.tag ? `<div class="team-card-tag">${esc(m.tag)}</div>` : ''}
          ${links.length ? `<div class="team-card-links">${links.join('')}</div>` : ''}
        </div>
      </div>
    `;
  }

  function renderTeam() {
    document.getElementById('team-preview-grid').innerHTML = comite.slice(0, 4).map((m) => `
      <div class="team-card">
        <img class="team-card-photo" src="${esc(m.photo)}" alt="${esc(m.name)}" loading="lazy">
        <div class="team-card-body">
          <div class="team-card-name">${esc(m.name)}</div>
          <div class="team-card-role">${esc(m.role)}</div>
        </div>
      </div>
    `).join('');

    document.getElementById('team-comite-grid').innerHTML = comite.map(teamCardHtml).join('');
    document.getElementById('team-collabs-grid').innerHTML = collabs.map(teamCardHtml).join('');
  }

  function renderProjects() {
    document.getElementById('projects-grid').innerHTML = projects.map((p) => `
      <a href="${esc(p.url)}" target="_blank" rel="noopener" class="project-card">
        <svg class="project-icon" width="34" height="34" viewBox="0 0 34 34" fill="none">${PROJECT_ICONS[p.icon] || ''}</svg>
        <div class="project-title">${esc(p.title)}</div>
        <div class="project-desc">${esc(p.desc)}</div>
        <div class="project-more">En savoir plus &rarr;</div>
      </a>
    `).join('');
  }

  // ---- Routing ----
  const PAGES = ['accueil', 'equipe', 'projets', 'contact'];

  function currentPage() {
    const hash = location.hash.replace(/^#\/?/, '');
    return PAGES.includes(hash) ? hash : 'accueil';
  }

  function renderRoute() {
    const page = currentPage();
    PAGES.forEach((p) => {
      document.getElementById(`page-${p}`).classList.toggle('hidden', p !== page);
    });
    document.querySelectorAll('.nav-link').forEach((a) => {
      a.classList.toggle('active', a.dataset.page === page);
    });
    window.scrollTo({ top: 0 });
  }

  // ---- Contact form (Netlify Forms) ----
  function encodeForm(form) {
    return new URLSearchParams(new FormData(form)).toString();
  }

  function initContactForm() {
    const form = document.getElementById('contact-form');
    const success = document.getElementById('contact-success');
    const error = document.getElementById('contact-error');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      error.classList.add('hidden');

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm(form)
      })
        .then((res) => {
          if (!res.ok) throw new Error(`Submit failed: ${res.status}`);
          form.classList.add('hidden');
          success.classList.remove('hidden');
        })
        .catch(() => {
          error.classList.remove('hidden');
        });
    });
  }

  function init() {
    renderStats();
    renderDomains();
    renderVision();
    renderTeam();
    renderProjects();
    initContactForm();
    renderRoute();
    window.addEventListener('hashchange', renderRoute);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
