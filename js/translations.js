/* ============================================================
   EMERGENCY MITRA - MULTI-LANGUAGE TRANSLATION ENGINE
   (js/translations.js)
   ============================================================
   Client-side i18n without any framework:

   DATA
     - appTranslations : dictionary mapping every visible English
                         string -> Hindi ('hi') and Marathi ('mr')

   BEHAVIOUR
     - walkAndTranslate() : walks the DOM and swaps text nodes
       whose trimmed text matches a dictionary key
     - translatePage(lang) : updates language dropdown UI state,
       translates the page and persists choice to localStorage
     - On DOMContentLoaded the saved language is auto-applied.

   TO ADD A LANGUAGE: append a new key (e.g. 'ta') to
   appTranslations, add a button with id 'btn-lang-ta' in
   index.html, and include it in translatePage()'s loop.
   ============================================================ */

        const appTranslations = {
            hi: {
                "Home": "मुख्यपृष्ठ",
                "Emergency": "आपातकाल",
                "Facilities": "सुविधाएं",
                "Find Facilities": "सुविधाएं खोजें",
                "Dashboard": "डैशबोर्ड",
                "Language / भाषा:": "भाषा चुनें:",
                "Maharashtra Government Health Network": "महाराष्ट्र शासन स्वास्थ्य नेटवर्क",
                "Right Care.": "सही देखभाल।",
                "Right Facility.": "सही सुविधा।",
                "Right Now.": "अभी तुरंत।",
                "Emergency Mitra connects rural communities with the most suitable nearby government healthcare facility during emergencies, ensuring timely and appropriate care.": "इमर्जन्सी मित्र आपातकाल के दौरान ग्रामीण समुदायों को निकटतम उपयुक्त सरकारी स्वास्थ्य सुविधा से जोड़ता है, जिससे समय पर और उचित देखभाल सुनिश्चित होती है।",
                "Start Emergency": "आपातकाल शुरू करें",
                "SOS — SEND LOCATION": "SOS — लोकेशन भेजें",
                "For unconscious / unresponsive patient": "बेहोश / अनुत्तरदायी मरीज के लिए",
                "Govt Healthcare Network": "सरकारी स्वास्थ्य नेटवर्क",
                "Low-Connectivity Support": "कम कनेक्टिविटी सहायता",
                "SMS Fallback": "एसएमएस फॉलबैक",
                "Hindi + English": "हिंदी + अंग्रेजी",
                "Offline Ready": "ऑफलाइन तैयार",
                "Emergency Health Advisory": "आपातकालीन स्वास्थ्य परामर्श",
                "LIVE GUIDANCE": "लाइव मार्गदर्शन",
                "Snakebite": "सर्पदंश (सांप का काटना)",
                "Do not cut or suck the wound. Keep the patient still and reach antivenom-equipped care immediately.": "घाव को काटें या चूसें नहीं। मरीज को शांत रखें और तुरंत एंटीवेनम युक्त अस्पताल पहुँचें।",
                "Cardiac Emergency": "हृदय आपातकाल",
                "If the person is unresponsive and not breathing normally, begin CPR and seek emergency help immediately.": "यदि व्यक्ति अनुत्तरदायी है और सामान्य रूप से सांस नहीं ले रहा है, तो तुरंत सीपीआर शुरू करें और आपातकालीन सहायता लें।",
                "Severe Bleeding": "गंभीर रक्तस्राव",
                "Apply firm, continuous pressure with a clean cloth and seek emergency medical care.": "साफ कपड़े से लगातार दबाव बनाए रखें और तुरंत आपातकालीन चिकित्सा सहायता लें।",
                "Accident & Trauma": "दुर्घटना और ट्रॉमा",
                "Avoid unnecessary movement if a spinal or major injury is suspected. Call emergency services.": "रीढ़ या गंभीर चोट का संदेह होने पर अनावश्यक हलचल से बचें। आपातकालीन सेवाओं को कॉल करें।",
                "Emergency guidance • Not a diagnosis": "आपातकालीन मार्गदर्शन • यह चिकित्सा निदान नहीं है",
                "Immediate Emergency Assistance": "त्वरित आपातकालीन सहायता",
                "Select the type of emergency for rapid protocol activation.": "त्वरित प्रोटोकॉल सक्रिय करने के लिए आपातकाल का प्रकार चुनें।",
                "Snakebite Protocol": "सर्पदंश प्रोटोकॉल",
                "Find antivenom-equipped care.": "एंटीवेनम युक्त केंद्र खोजें।",
                "Trauma routing + first aid.": "ट्रॉमा रूटिंग + प्राथमिक उपचार।",
                "Cardiac Arrest": "कार्डियक अरेस्ट",
                "CPR + AED assistance.": "सीपीआर + एईडी सहायता।",
                "Emergency bleeding support.": "आपातकालीन रक्तस्राव नियंत्रण।",
                "Breathing Issue": "सांस लेने में तकलीफ",
                "Airway emergency support.": "श्वसन मार्ग आपातकालीन सहायता।",
                "CRITICAL": "अतिगंभीर",
                "URGENT": "अत्यावश्यक",
                "How Emergency Mitra Works": "इमर्जन्सी मित्र कैसे काम करता है",
                "Select Emergency": "आपातकाल चुनें",
                "Share Location": "लोकेशन साझा करें",
                "Smart Facility Matching": "स्मार्ट अस्पताल मिलान",
                "Navigate & Share": "नेविगेट और साझा करें",
                "Advanced Emergency Network": "उन्नत आपातकालीन नेटवर्क",
                "From emergency detection to hospital readiness, Emergency Mitra connects the complete response chain.": "आपातकाल की पहचान से लेकर अस्पताल की तैयारी तक, इमर्जन्सी मित्र पूरी प्रतिक्रिया श्रृंखला को जोड़ता है।",
                "Pre-Arrival Handshake": "आगमन पूर्व अस्पताल समन्वय",
                "Alerts the destination hospital before arrival, ensuring staff and beds are ready.": "पहुंचने से पहले गंतव्य अस्पताल को सतर्क करता है, जिससे कर्मचारी और बेड तैयार रहते हैं।",
                "AI Preliminary Triage": "एआई प्रारंभिक ट्राइएज",
                "Intelligent symptom analysis prioritizes critical cases automatically.": "इंटेलिजेंट लक्षण विश्लेषण स्वचालित रूप से गंभीर मामलों को प्राथमिकता देता है।",
                "Ambulance Dispatch": "एम्बुलेंस प्रेषण (डिस्पैच)",
                "Automated dispatch of the nearest available emergency transport.": "निकटतम उपलब्ध आपातकालीन वाहन का स्वचालित प्रेषण।",
                "Resource Inventory": "संसाधन सूची (इन्वेंट्री)",
                "Real-time tracking of critical supplies across the healthcare network.": "स्वास्थ्य नेटवर्क में महत्वपूर्ण चिकित्सा आपूर्ति की वास्तविक समय ट्रैकिंग।",
                "Audio-First IVR": "ऑडियो-प्रथम आईवीआर",
                "Accessible voice-guided emergency reporting in local languages.": "स्थानीय भाषाओं में सुलभ आवाज-निर्देशित आपातकालीन रिपोर्टिंग।",
                "Offline Passport": "ऑफलाइन मेडिकल पासपोर्ट",
                "Locally stored critical medical history available instantly without internet.": "इंटरनेट के बिना तुरंत उपलब्ध स्थानीय रूप से संग्रहीत महत्वपूर्ण चिकित्सा इतिहास।",
                "Explore": "देखें",
                "READY": "तैयार",
                "AI SUPPORT": "एआई सपोर्ट",
                "DEMO": "डेमो",
                "PROTOTYPE": "प्रोटोटाइप",
                "OFFLINE": "ऑफलाइन",
                "Find Healthcare Facilities": "स्वास्थ्य सुविधाएं खोजें",
                "Search facilities, services, or locations...": "सुविधाएं, सेवाएं या स्थान खोजें...",
                "All Distances": "सभी दूरियां",
                "Use My Location": "मेरा स्थान उपयोग करें",
                "Blood Availability": "रक्त उपलब्धता",
                "District Blood Bank, Wardha": "जिला रक्त बैंक, वर्धा",
                "Main Govt Hospital Campus • 3.2 km": "मुख्य सरकारी अस्पताल परिसर • 3.2 किमी",
                "24/7 OPEN": "24/7 खुला",
                "Request": "अनुरोध करें",
                "Call": "कॉल करें",
                "Map": "मैप",
                "Bed Availability": "बेड (खाट) उपलब्धता",
                "Rural Hospital, Sevagram": "ग्रामीण अस्पताल, सेवाग्राम",
                "Sevagram Road • 5.1 km": "सेवाग्राम रोड • 5.1 किमी",
                "LIMITED": "सीमित",
                "ICU": "आईसीयू",
                "Oxygen": "ऑक्सीजन",
                "General": "सामान्य",
                "Book": "बुक करें",
                "C-Section Availability": "सी-सेक्शन उपलब्धता",
                "Women's Hospital, Wardha": "महिला अस्पताल, वर्धा",
                "Civil Lines • 2.8 km": "सिविल लाइन्स • 2.8 किमी",
                "AVAILABLE": "उपलब्ध",
                "Obstetrician & Anesthetist on duty.": "स्त्री रोग विशेषज्ञ एवं एनेस्थेटिस्ट ड्यूटी पर हैं।",
                "OT available for immediate emergency.": "तत्काल आपातकाल के लिए ऑपरेशन थिएटर उपलब्ध है।",
                "Vaccination Services": "टीकाकरण सेवाएं",
                "Primary Health Centre, Deoli": "प्राथमिक स्वास्थ्य केंद्र, देवली",
                "Main Road, Deoli • 18 km": "मेन रोड, देवली • 18 किमी",
                "TODAY 9AM-4PM": "आज सुबह 9 से शाम 4 बजे तक",
                "Child Immunization": "बाल टीकाकरण",
                "Adult": "वयस्क",
                "COVID-19": "कोविड-19",
                "Rabies": "रेबीज",
                "Diagnostic Lab Centre": "डायग्नोस्टिक लैब केंद्र",
                "District Diagnostic Centre": "जिला निदान केंद्र",
                "Govt Hospital Complex • 3.2 km": "सरकारी अस्पताल परिसर • 3.2 किमी",
                "Blood Tests": "रक्त परीक्षण",
                "X-Ray": "एक्स-रे",
                "CT Scan": "सीटी स्कैन",
                "MRI (Down)": "एमआरआई (बंद)",
                "Emergency Protocol": "आपातकालीन प्रोटोकॉल",
                "Step 1 of 3: Assessment": "चरण 1/3: मूल्यांकन",
                "Step 2 of 3: Hospital Handshake": "चरण 2/3: अस्पताल समन्वय",
                "Step 3 of 3: First Aid Guidance": "चरण 3/3: प्राथमिक उपचार मार्गदर्शन",
                "Bypass: Call 108": "बायपास: 108 पर कॉल करें",
                "Answer quickly to determine triage priority.": "ट्राइएज प्राथमिकता निर्धारित करने के लिए तुरंत उत्तर दें।",
                "Next Step": "अगला कदम",
                "Back": "पीछे",
                "Close Protocol": "प्रोटोकॉल बंद करें",
                "Alerting nearest suitable facility...": "निकटतम उपयुक्त अस्पताल को सतर्क किया जा रहा है...",
                "View First Aid": "प्राथमिक उपचार देखें",
                "API Payload Generated": "एपीआई पेलोड तैयार",
                "Hands-Only CPR Guide": "हैंड्स-ओनली सीपीआर गाइड",
                "1. Hard Ground": "1. सख्त जमीन",
                "Place patient on firm surface": "मरीज को सख्त सतह पर लिटाएं",
                "2. Hand Position": "2. हाथ की स्थिति",
                "Center of chest, 2 inches deep": "छाती के बीच में, 2 इंच गहरा",
                "3. 100-120 BPM": "3. 100-120 गति",
                "Push Hard & Fast": "जोर से और तेजी से दबाएं",
                "4. AED Use": "4. एईडी का उपयोग",
                "Turn on and follow prompts": "चालू करें और निर्देशों का पालन करें",
                "Pre-Arrival Hospital Handshake": "आगमन पूर्व अस्पताल समन्वय",
                "Incoming Emergency Alert - CHC Wardha": "आपातकालीन अलर्ट - सीएचसी वर्धा",
                "Snakebite Case - 12 min ETA": "सर्पदंश मामला - 12 मिनट में आगमन",
                "Bed #4 (ICU) Status:": "बेड #4 (आईसीयू) स्थिति:",
                "Medical Officer Notified:": "चिकित्सा अधिकारी को सूचित किया गया:",
                "ACKNOWLEDGED": "स्वीकृत",
                "Symptom Analysis": "लक्षण विश्लेषण",
                "Patient reports severe chest pain.": "मरीज को सीने में तेज दर्द हो रहा है।",
                "Pain radiating to left arm.": "दर्द बाएं हाथ तक फैल रहा है।",
                "Shortness of breath.": "सांस लेने में तकलीफ।",
                "Ambulance Dispatch Demo": "एम्बुलेंस डिस्पैच डेमो",
                "Patient": "मरीज",
                "Hospital": "अस्पताल",
                "Dispatching nearest available unit (MH-31-EM-102)...": "निकटतम उपलब्ध एम्बुलेंस (MH-31-EM-102) भेजी जा रही है...",
                "Resource": "संसाधन",
                "Quantity": "मात्रा",
                "Status": "स्थिति",
                "Last Updated": "अंतिम अपडेट",
                "Polyvalent Antivenom": "पॉलीवेलेंट एंटीवेनम",
                "24 Vials": "24 शीशियां",
                "ADEQUATE": "पर्याप्त",
                "10 mins ago": "10 मिनट पहले",
                "ICU Beds": "आईसीयू बेड",
                "Just now": "अभी-अभी",
                "Oxygen Cylinders (D-Type)": "ऑक्सिजन सिलेंडर (D-Type)",
                "1 hour ago": "1 घंटा पहले",
                "Audio-First IVR Demo": "ऑडियो-प्रथम आईवीआर डेमो",
                "\"Welcome to Emergency Mitra. Please select your language / कृपया अपनी भाषा चुनें\"": "\"इमर्जन्सी मित्र में आपका स्वागत है। कृपया अपनी भाषा चुनें / Welcome to Emergency Mitra\"",
                "Offline Emergency Passport": "ऑफलाइन आपातकालीन पासपोर्ट",
                "OFFLINE SYNCED": "ऑफलाइन सिंक किया गया",
                "Blood Group": "रक्त समूह",
                "Allergies": "एलर्जी",
                "Emergency Contact": "आपातकालीन संपर्क",
                "Privacy Policy": "गोपनीयता नीति",
                "Terms of Service": "सेवा की शर्तें",
                "Help Desk": "सहायता केंद्र (हेल्प डेस्क)",
                "Rural Outreach": "ग्रामीण संपर्क",
                "Accessibility": "सुलभता",
                "© 2026 Emergency Mitra • Rural Emergency Healthcare Network": "© 2026 इमर्जन्सी मित्र • ग्रामीण आपातकालीन स्वास्थ्य नेटवर्क"
            },
            mr: {
                "\"Welcome to Emergency Mitra. Please select your language / कृपया अपनी भाषा चुनें\"": "\"इमर्जन्सी मित्र मध्ये आपले स्वागत आहे. कृपया भाषा निवडा / Welcome to Emergency Mitra\"",
                "© 2026 Emergency Mitra • Rural Emergency Healthcare Network": "© 2026 इमर्जन्सी मित्र • ग्रामीण आपत्कालीन आरोग्य नेटवर्क"
            }
        };

        let currentActiveLang = 'en';

        // DOM Text Node Walker with English Source Preservation
        function walkAndTranslate(node, targetLang) {
            if (node.nodeType === Node.ELEMENT_NODE) {
                const tagName = node.tagName.toLowerCase();
                if (['script', 'style', 'noscript', 'code', 'pre'].includes(tagName)) return;
                if (node.classList && (node.classList.contains('material-symbols-outlined') || node.classList.contains('font-mono'))) return;

                if (node.hasAttribute('placeholder')) {
                    if (!node.hasAttribute('data-orig-placeholder')) {
                        node.setAttribute('data-orig-placeholder', node.getAttribute('placeholder'));
                    }
                    const origPh = node.getAttribute('data-orig-placeholder');
                    if (targetLang === 'en') {
                        node.setAttribute('placeholder', origPh);
                    } else if (appTranslations[targetLang] && appTranslations[targetLang][origPh]) {
                        node.setAttribute('placeholder', appTranslations[targetLang][origPh]);
                    }
                }
            }

            if (node.nodeType === Node.TEXT_NODE) {
                const text = node.nodeValue;
                const trimmed = text.trim();

                if (trimmed.length > 0) {
                    if (!node._origText) {
                        node._origText = trimmed;
                    }

                    const orig = node._origText;

                    if (targetLang === 'en') {
                        node.nodeValue = text.replace(trimmed, orig);
                    } else if (appTranslations[targetLang] && appTranslations[targetLang][orig]) {
                        node.nodeValue = text.replace(trimmed, appTranslations[targetLang][orig]);
                    } else if (appTranslations[targetLang]) {
                        let translated = orig;
                        for (const [key, val] of Object.entries(appTranslations[targetLang])) {
                            if (key.length > 2 && translated.includes(key)) {
                                translated = translated.split(key).join(val);
                            }
                        }
                        node.nodeValue = text.replace(trimmed, translated);
                    }
                }
            } else {
                for (let i = 0; i < node.childNodes.length; i++) {
                    walkAndTranslate(node.childNodes[i], targetLang);
                }
            }
        }

        function translatePage(lang) {
            currentActiveLang = lang;

            const langCodeEl = document.getElementById('current-lang-code');
            if (langCodeEl) langCodeEl.textContent = lang.toUpperCase();

            ['en', 'hi', 'mr'].forEach(l => {
                const btn = document.getElementById('btn-lang-' + l);
                const check = document.getElementById('check-' + l);
                const mobBtn = document.getElementById('mob-lang-' + l);

                if (btn) {
                    if (l === lang) {
                        btn.classList.add('bg-primary/10', 'font-bold', 'text-primary');
                        if (check) check.classList.remove('hidden');
                    } else {
                        btn.classList.remove('bg-primary/10', 'font-bold', 'text-primary');
                        if (check) check.classList.add('hidden');
                    }
                }

                if (mobBtn) {
                    if (l === lang) {
                        mobBtn.className = "px-2.5 py-1 text-xs font-bold rounded border border-primary bg-primary text-on-primary";
                    } else {
                        mobBtn.className = "px-2.5 py-1 text-xs font-bold rounded border border-outline-variant bg-surface text-on-surface";
                    }
                }
            });

            walkAndTranslate(document.body, lang);

            try {
                localStorage.setItem('selected_lang', lang);
            } catch (e) { }
        }

        document.addEventListener('DOMContentLoaded', () => {
            const saved = localStorage.getItem('selected_lang');
            if (saved && saved !== 'en') {
                translatePage(saved);
            }
        });
