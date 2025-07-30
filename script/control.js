document.addEventListener('DOMContentLoaded', function() {
	const themeButton = document.getElementById('theme-icon');
	const body = document.body;
	// Tema simgesini değiştir ve body'ye light-mode class'ını ekle/çıkar
	themeButton.addEventListener('click', function() {
		body.classList.toggle('light-mode');
		if (body.classList.contains('light-mode')) {
			themeButton.classList.remove('fa-moon');
			themeButton.classList.add('fa-sun');
		} else {
			themeButton.classList.remove('fa-sun');
			themeButton.classList.add('fa-moon');
		}
	});
	
	const langButton = document.getElementById('lang-icon');
	let isEnglish = false;

	// Çeviri metinleri
	const translations = {
		tr: {
			title: "Metin Çetin - Kişisel Web Sitesi",
			about: "Hakkımda",
			projects: "Projelerim",
			contact: "İletişim",
			aboutTitle: "Hakkımda",
			aboutContent: "Bilgisayar Mühendisliği lisansımı Necmettin Erbakan Üniversitesi’nde tamamladım. ASP.NET tabanlı web uygulamaları geliştiriyor, kullanıcı arayüzünden veritabanı ve iş mantığına kadar tüm süreci tek başıma yönetiyorum. Güncel teknolojileri yakından takip ediyor, masaüstü (WinForms) ve web platformlarında yalın, verimli ve sürdürülebilir yazılımlar geliştirmeye odaklanıyorum. Hedefim; gerçek problemlere sade çözümler üreten, kullanıcı deneyimini ön planda tutan, modern yazılımlar geliştirmek ve bu süreçte sürekli kendimi ileriye taşımak.",
			projectsTitle: "Bazı Projelerim",
			project1Title: "Kırp ve Konuş",
			project1Content: "Bu proje, göz kırpma tespiti kullanarak bir bilgisayarla etkileşim kurmanın yenilikçi bir yolunu sunmaktadır. Sistem, göz kırpma tespiti için yüz ağını, soruları ve yanıtları depolamak için bir veritabanını ve iletişim için bir UDP sunucu-müşteri yapısını entegre etmektedir.",
			project2Title: "NodeJS VNC Viewer",
			project2Content: "NodeVNCViewer, VNC programı (TightVNC,Real VNC) kullanarak bilgisayarları web üzerinden kontrol etmenizi sağlayan bir NodeJS uygulamasıdır. Projedeki HTML sayfasını iframe yardımı ile sayfanızda istediğiniz boyutlarda kullanabilirsiniz.",
			project3Title: "Sohbet Odası",
			project3Content: "Bu proje, Python kullanılarak geliştirilmiş bir sohbet odası uygulamasıdır ve istemci-sunucu iletişimi için TCP ve UDP protokollerini kullanmaktadır. Sohbet odası, birden fazla istemcinin bağlanmasına ve gerçek zamanlı olarak mesaj alışverişi yapmasına olanak tanır.",
			project4Title: "Kütüphane Otomasyon Sistemi",
			project4Content: "Bu proje, C++ Qt kütüphanesi kullanılarak geliştirilmiş bir kütüphane otomasyon sistemidir. Kütüphane üyelerini, kitapları ve ödünç alma ile iade etme işlemlerini yönetir. Proje, veri depolama ve geri çağırma işlemleri için veri tabanı entegrasyonu içermektedir.",
			project5Title: "Teknofest 2024 Sürü İHA Yarışması",
			project5Content: "NEÜ KAPSÜL AIGENZ Takımı olarak geliştirdiğimiz İHA'ların sürü halinde senkronize bir şekilde belirli görevleri yerine getirmesini sağladık.",
			project6Title: "Su Kalitesi Analizi",
			project6Content: "Bu proje, suyun içilebilirliğini tahmin etmek için çeşitli su kalitesi parametrelerini analiz etmeyi amaçlamaktadır. Kullanılan veri seti, pH, sertlik, toplam çözünmüş katılar (TDS), kloraminler, sülfat ve iletkenlik gibi parametreleri içermektedir.",
			techUsed: "Kullanılan temel teknolojiler:",
			footerHome: "Ana Sayfa",
			footerAbout: "Hakıkımda",
			footerCV: "CV",
			copyright: "Copyright ©2024; Design by Graffias"
		},
		en: {
			title: "Metin Çetin - Personal Website",
			about: "About",
			projects: "Projects",
			contact: "Contact",
			aboutTitle: "About Me",
			aboutContent: "I have a degree in Computer Engineering from Necmettin Erbakan University. I develop ASP.NET-based web applications, managing the entire process—from user interface to data layer and business logic—independently. I stay up to date with modern technologies and focus on building clean, efficient, and maintainable software for both desktop (WinForms) and web platforms. My goal is to create solutions that are simple yet effective, centered around real-world problems and user experience—while continuously evolving as a developer.",
			projectsTitle: "Some of My Projects",
			project1Title: "Blink and Talk",
			project1Content: "This project offers an innovative way to interact with a computer using eye blink detection. The system integrates a face network for eye blink detection, a database to store questions and answers, and a UDP server-client structure for communication.",
			project2Title: "NodeJS VNC Viewer",
			project2Content: "NodeVNCViewer is a NodeJS application that allows you to control computers over the web using VNC programs (TightVNC, Real VNC). You can use the HTML page in the project in any size you want on your page with the help of iframe.",
			project3Title: "Chat Room",
			project3Content: "This project is a chat room application developed using Python and uses TCP and UDP protocols for client-server communication. The chat room allows multiple clients to connect and exchange messages in real time.",
			project4Title: "Library Automation System",
			project4Content: "This project is a library automation system developed using the C++ Qt library. It manages library members, books, and borrowing and returning operations. The project includes database integration for data storage and retrieval operations.",
			project5Title: "Teknofest 2024 Swarm UAV Competition",
			project5Content: "As the NEU KAPSUL AIGENZ Team, we enabled the UAVs we developed to perform certain tasks in a synchronized manner as a swarm.",
			project6Title: "Water Quality Analysis",
			project6Content: "This project aims to analyze various water quality parameters to predict the potability of water. The dataset used includes parameters such as pH, hardness, total dissolved solids (TDS), chloramines, sulfate and conductivity.",
			techUsed: "Main technologies used:",
			footerHome: "Home",
			footerAbout: "About",
			footerCV: "CV",
			copyright: "Copyright ©2024; Design by Graffias"
		}
	};

	// Dil değiştirme fonksiyonu
	function changeLanguage() {
		const currentLang = isEnglish ? 'en' : 'tr';
		const texts = translations[currentLang];

		// Sayfa başlığını değiştir
		document.title = texts.title;

		// Navigasyon menüsü
		document.querySelector('nav ul li:nth-child(1) a').textContent = texts.about;
		document.querySelector('nav ul li:nth-child(2) a').textContent = texts.projects;
		document.querySelector('nav ul li:nth-child(3) a').textContent = texts.contact;

		// Hakkımda bölümü
		document.querySelector('#about h2').textContent = texts.aboutTitle;
		document.querySelector('#about p').textContent = texts.aboutContent;

		// Projeler başlığı
		document.querySelector('#projects h2').textContent = texts.projectsTitle;

		// Proje başlıkları ve içerikleri
		const projectTitles = document.querySelectorAll('.courses-item_title');
		const projectContents = document.querySelectorAll('.courses-item_content');
		const techBoxes = document.querySelectorAll('.courses-item_tech-box');

		// Proje 1
		projectTitles[0].firstChild.textContent = texts.project1Title + ' ';
		projectContents[0].textContent = texts.project1Content;
		techBoxes[0].firstChild.textContent = texts.techUsed + ' ';

		// Proje 2
		projectTitles[1].firstChild.textContent = texts.project2Title + ' ';
		projectContents[1].textContent = texts.project2Content;
		techBoxes[1].firstChild.textContent = texts.techUsed + ' ';

		// Proje 3
		projectTitles[2].firstChild.textContent = texts.project3Title + ' ';
		projectContents[2].textContent = texts.project3Content;
		techBoxes[2].firstChild.textContent = texts.techUsed + ' ';

		// Proje 4
		projectTitles[3].firstChild.textContent = texts.project4Title + ' ';
		projectContents[3].textContent = texts.project4Content;
		techBoxes[3].firstChild.textContent = texts.techUsed + ' ';

		// Proje 5
		projectTitles[4].firstChild.textContent = texts.project5Title + ' ';
		projectContents[4].textContent = texts.project5Content;
		techBoxes[4].firstChild.textContent = texts.techUsed + ' ';

		// Proje 6
		projectTitles[5].firstChild.textContent = texts.project6Title + ' ';
		projectContents[5].textContent = texts.project6Content;
		techBoxes[5].firstChild.textContent = texts.techUsed + ' ';

		// Footer navigasyon
		const footerNavLinks = document.querySelectorAll('.footer-nav ul li a');
		footerNavLinks[0].textContent = texts.footerHome;
		footerNavLinks[1].textContent = texts.footerAbout;
		footerNavLinks[2].textContent = texts.footerCV;

		// Copyright
		document.querySelector('.footer-bottom p').innerHTML = texts.copyright;
	}

	// Dil butonu event listener
	langButton.addEventListener('click', function() {
		isEnglish = !isEnglish;
		changeLanguage();
	});
});