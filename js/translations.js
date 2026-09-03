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
                "maharastra Government Health Network": "महाराष्ट्र शासन स्वास्थ्य नेटवर्क",
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
                "Home": "मुख्यपृष्ठ",
                "Emergency": "आपत्कालीन",
                "Facilities": "सुविधा",
                "Find Facilities": "सुविधा शोधा",
                "Dashboard": "डॅशबोर्ड",
                "Language / भाषा:": "भाषा निवडा:",
                "maharastra Government Health Network": "महाराष्ट्र शासन आरोग्य नेटवर्क",
                "Maharashtra Government Health Network": "महाराष्ट्र शासन आरोग्य नेटवर्क",
                "Right Care.": "योग्य काळजी.",
                "Right Facility.": "योग्य सुविधा.",
                "Right Now.": "आताच.",
                "Emergency Mitra connects rural communities with the most suitable nearby government healthcare facility during emergencies, ensuring timely and appropriate care.": "इमर्जन्सी मित्र आपत्कालीन परिस्थितीत ग्रामीण भागातील लोकांना जवळच्या योग्य सरकारी आरोग्य केंद्राशी जोडून वेळेवर आणि योग्य उपचार मिळवून देतो.",
                "Start Emergency": "आपत्कालीन सेवा सुरू करा",
                "SOS — SEND LOCATION": "SOS — लोकेशन पाठवा",
                "For unconscious / unresponsive patient": "बेशुद्ध / प्रतिसाद न देणाऱ्या रुग्णांसाठी",
                "Govt Healthcare Network": "सरकारी आरोग्य नेटवर्क",
                "Low-Connectivity Support": "कमी कनेक्टिव्हिटी सपोर्ट",
                "SMS Fallback": "एसएमएस फॉलबॅक",
                "Hindi + English": "हिंदी + इंग्रजी",
                "Offline Ready": "ऑफलाइन सज्ज",
                "Emergency Health Advisory": "आपत्कालीन आरोग्य सल्ला",
                "LIVE GUIDANCE": "थेट मार्गदर्शन",
                "Snakebite": "सर्पदंश",
                "Do not cut or suck the wound. Keep the patient still and reach antivenom-equipped care immediately.": "जखम कापू नका किंवा चोखू नका. रुग्णाला शांत ठेवा आणि ताबडतोब अँटीव्हेनम उपलब्ध असलेल्या रुग्णालयात पोहोचा.",
                "Cardiac Emergency": "हृदयविकार आपत्कालीन",
                "If the person is unresponsive and not breathing normally, begin CPR and seek emergency help immediately.": "व्यक्ती प्रतिसाद देत नसल्यास आणि सामान्य श्वास घेत नसल्यास, लगेच सीपीआर सुरू करा आणि वैद्यकीय मदत मिळवा.",
                "Severe Bleeding": "गंभीर रक्तस्राव",
                "Apply firm, continuous pressure with a clean cloth and seek emergency medical care.": "स्वच्छ कपड्याने घट्ट दाब द्या आणि ताबडतोब आपत्कालीन वैद्यकीय मदत घ्या.",
                "Accident & Trauma": "अपघात आणि आघात",
                "Avoid unnecessary movement if a spinal or major injury is suspected. Call emergency services.": "पाठीचा कणा किंवा गंभीर दुखापत असल्यास अनावश्यक हालचाल टाळा. आपत्कालीन सेवेला कॉल करा.",
                "Emergency guidance • Not a diagnosis": "आपत्कालीन मार्गदर्शन • हे वैद्यकीय निदान नाही",
                "Immediate Emergency Assistance": "त्वरित आपत्कालीन मदत",
                "Select the type of emergency for rapid protocol activation.": "जलद प्रोटोकॉल सक्रिय करण्यासाठी आपत्कालीन प्रकार निवडा.",
                "Snakebite Protocol": "सर्पदंश प्रोटोकॉल",
                "Find antivenom-equipped care.": "अँटीव्हेनमयुक्त केंद्र शोधा.",
                "Trauma routing + first aid.": "ट्रॉमा रूटिंग + प्रथमोपचार.",
                "Cardiac Arrest": "हृदयविकाराचा झटका",
                "CPR + AED assistance.": "सीपीआर + एईडी मदत.",
                "Emergency bleeding support.": "आपत्कालीन रक्तस्राव नियंत्रण.",
                "Breathing Issue": "श्वासोच्छवासाचा त्रास",
                "Airway emergency support.": "श्वसनमार्ग आपत्कालीन मदत.",
                "CRITICAL": "अतिगंभीर",
                "URGENT": "तातडीचे",
                "How Emergency Mitra Works": "इमर्जन्सी मित्र कसे कार्य करते",
                "Select Emergency": "आपत्काल निवडा",
                "Share Location": "लोकेशन शेअर करा",
                "Smart Facility Matching": "स्मार्ट रुग्णालय मॅचिंग",
                "Navigate & Share": "नेव्हिगेट आणि शेअर",
                "Advanced Emergency Network": "प्रगत आपत्कालीन नेटवर्क",
                "From emergency detection to hospital readiness, Emergency Mitra connects the complete response chain.": "आपत्कालीन शोध घेण्यापासून ते रुग्णालय सज्जतेपर्यंत, इमर्जन्सी मित्र संपूर्ण प्रतिसाद साखळी जोडतो.",
                "Pre-Arrival Handshake": "आगमनापूर्वी रुग्णालय समन्वय",
                "Alerts the destination hospital before arrival, ensuring staff and beds are ready.": "पोहोचण्यापूर्वी रुग्णालयाला सतर्क करतो, ज्यामुळे कर्मचारी आणि खाटा तयार राहतात.",
                "AI Preliminary Triage": "एआय प्राथमिक ट्राइएज",
                "Intelligent symptom analysis prioritizes critical cases automatically.": "लक्षण विश्लेषणाद्वारे गंभीर प्रकरणांना स्वयंचलितपणे प्राधान्य दिले जाते.",
                "Ambulance Dispatch": "रुग्णवाहिका पाठवणे",
                "Automated dispatch of the nearest available emergency transport.": "जवळच्या उपलब्ध आपत्कालीन वाहनाचे स्वयंचलित प्रेषण.",
                "Resource Inventory": "संसाधन सूची व साठा",
                "Real-time tracking of critical supplies across the healthcare network.": "आरोग्य नेटवर्कमधील अत्यावश्यक साहित्याचे रिअल-टाइम ट्रॅकिंग.",
                "Audio-First IVR": "ऑडिओ-फर्स्ट आयव्हीआर",
                "Accessible voice-guided emergency reporting in local languages.": "स्थानिक भाषांमध्ये सुलभ व्हॉईस-मार्गदर्शित आपत्कालीन रिपोर्टिंग.",
                "Offline Passport": "ऑफलाइन मेडिकल पासपोर्ट",
                "Locally stored critical medical history available instantly without internet.": "इंटरनेटशिवाय त्वरित उपलब्ध स्थानिकरित्या संग्रहित वैद्यकीय इतिहास.",
                "Explore": "तपासा",
                "READY": "सज्ज",
                "AI SUPPORT": "एआय सपोर्ट",
                "DEMO": "डेमो",
                "PROTOTYPE": "प्रोटोटाइप",
                "OFFLINE": "ऑफलाइन",
                "Find Healthcare Facilities": "आरोग्य सुविधा शोधा",
                "Search facilities, services, or locations...": "सुविधा, सेवा किंवा ठिकाण शोधा...",
                "All Distances": "सर्व अंतर",
                "Use My Location": "माझे लोकेशन वापरा",
                "Blood Availability": "रक्त उपलब्धता",
                "District Blood Bank, Wardha": "जिल्हा रक्तपेढी, वर्धा",
                "Main Govt Hospital Campus • 3.2 km": "मुख्य सरकारी रुग्णालय परिसर • ३.२ किमी",
                "24/7 OPEN": "२४/७ सुरू",
                "Request": "मागणी करा",
                "Call": "कॉल करा",
                "Map": "नकाशा",
                "Bed Availability": "खाटांची उपलब्धता",
                "Rural Hospital, Sevagram": "ग्रामीण रुग्णालय, सेवाग्राम",
                "Sevagram Road • 5.1 km": "सेवाग्राम रोड • ५.१ किमी",
                "LIMITED": "मर्यादित",
                "ICU": "आयसीयू",
                "Oxygen": "ऑक्सिजन",
                "General": "सामान्य",
                "Book": "बुक करा",
                "C-Section Availability": "सिझेरियन उपलब्धता",
                "Women's Hospital, Wardha": "महिला रुग्णालय, वर्धा",
                "Civil Lines • 2.8 km": "सिव्हिल लाइन्स • २.८ किमी",
                "AVAILABLE": "उपलब्ध",
                "Obstetrician & Anesthetist on duty.": "स्त्रीरोग तज्ज्ञ आणि भूलतज्ज्ञ कर्तव्यावर आहेत.",
                "OT available for immediate emergency.": "तातडीच्या आपत्कालीन परिस्थितीसाठी शस्त्रक्रियागृह उपलब्ध.",
                "Vaccination Services": "लसीकरण सेवा",
                "Primary Health Centre, Deoli": "प्राथमिक आरोग्य केंद्र, देवळी",
                "Main Road, Deoli • 18 km": "मुख्य रस्ता, देवळी • १८ किमी",
                "TODAY 9AM-4PM": "आज सकाळी ९ ते दुपारी ४",
                "Child Immunization": "बाल लसीकरण",
                "Adult": "प्रौढ",
                "COVID-19": "कोविड-१९",
                "Rabies": "रेबीज",
                "Diagnostic Lab Centre": "निदान प्रयोगशाळा केंद्र",
                "District Diagnostic Centre": "जिल्हा निदान केंद्र",
                "Govt Hospital Complex • 3.2 km": "सरकारी रुग्णालय संकुल • ३.२ किमी",
                "Blood Tests": "रक्त तपासणी",
                "X-Ray": "क्ष-किरण (X-Ray)",
                "CT Scan": "सीटी स्कॅन",
                "MRI (Down)": "एमआरआय (बंद)",
                "Emergency Protocol": "आपत्कालीन प्रोटोकॉल",
                "Step 1 of 3: Assessment": "पायरी १/३: मूल्यमापन",
                "Step 2 of 3: Hospital Handshake": "पायरी २/३: रुग्णालय समन्वय",
                "Step 3 of 3: First Aid Guidance": "पायरी ३/३: प्रथमोपचार मार्गदर्शन",
                "Bypass: Call 108": "थेट १०८ ला कॉल करा",
                "Answer quickly to determine triage priority.": "ट्राइएज प्राधान्य ठरवण्यासाठी त्वरीत उत्तरे द्या.",
                "Next Step": "पुढील पायरी",
                "Back": "मागे",
                "Close Protocol": "प्रोटोकॉल बंद करा",
                "Alerting nearest suitable facility...": "जवळच्या योग्य रुग्णालयाला सतर्क केले जात आहे...",
                "View First Aid": "प्रथमोपचार पहा",
                "API Payload Generated": "एपीआई पेलोड जनरेट झाला",
                "Hands-Only CPR Guide": "हँड्स-ओन्ली सीपीआर मार्गदर्शक",
                "1. Hard Ground": "१. कठीण पृष्ठभाग",
                "Place patient on firm surface": "रुग्णाला सपाट व कठीण जागेवर झोपवा",
                "2. Hand Position": "२. हाताची स्थिती",
                "Center of chest, 2 inches deep": "छातीच्या मध्यभागी २ इंच खोल दाबा",
                "3. 100-120 BPM": "३. १००-१२० गती",
                "Push Hard & Fast": "जोराने व जलद गतीने दाबा",
                "4. AED Use": "४. एईडीचा वापर",
                "Turn on and follow prompts": "मशीन सुरू करा व सूचनांचे पालन करा",
                "Pre-Arrival Hospital Handshake": "आगमनापूर्वी रुग्णालय समन्वय",
                "Incoming Emergency Alert - CHC Wardha": "आपत्कालीन अलर्ट - सीएचसी वर्धा",
                "Snakebite Case - 12 min ETA": "सर्पदंश प्रकरण - १२ मिनिटांत आगमन",
                "Bed #4 (ICU) Status:": "बेड #४ (आयसीयू) स्थिती:",
                "Medical Officer Notified:": "वैद्यकीय अधिकाऱ्यास सूचित केले:",
                "ACKNOWLEDGED": "मान्यता दिली",
                "Symptom Analysis": "लक्षण विश्लेषण",
                "Patient reports severe chest pain.": "रुग्णाला छातीत तीव्र वेदना होत आहेत.",
                "Pain radiating to left arm.": "वेदना डाव्या हाताकडे पसरत आहेत.",
                "Shortness of breath.": "श्वास घेण्यास त्रास होत आहे.",
                "Ambulance Dispatch Demo": "रुग्णवाहिका प्रेषण डेमो",
                "Patient": "रुग्ण",
                "Hospital": "रुग्णालय",
                "Dispatching nearest available unit (MH-31-EM-102)...": "जवळची उपलब्ध रुग्णवाहिका (MH-31-EM-102) पाठवत आहे...",
                "Resource": "साहित्य",
                "Quantity": "प्रमाण",
                "Status": "स्थिती",
                "Last Updated": "शेवटचे अपडेट",
                "Polyvalent Antivenom": "पॉलीव्हॅलेंट अँटीव्हेनम",
                "24 Vials": "२४ कुप्या",
                "ADEQUATE": "पुरेसे",
                "10 mins ago": "१० मिनिटांपूर्वी",
                "ICU Beds": "आयसीयू खाटा",
                "Just now": "आत्ताच",
                "Oxygen Cylinders (D-Type)": "ऑक्सिजन सिलिंडर (D-Type)",
                "1 hour ago": "१ तासापूर्वी",
                "Audio-First IVR Demo": "ऑडिओ-फर्स्ट आयव्हीआर डेमो",
                "\"Welcome to Emergency Mitra. Please select your language / कृपया अपनी भाषा चुनें\"": "\"इमर्जन्सी मित्र मध्ये आपले स्वागत आहे. कृपया भाषा निवडा / Welcome to Emergency Mitra\"",
                "Offline Emergency Passport": "ऑफलाइन आपत्कालीन पासपोर्ट",
                "OFFLINE SYNCED": "ऑफलाइन सिंक केले",
                "Blood Group": "रक्तगट",
                "Allergies": "ऍलर्जी",
                "Emergency Contact": "आपत्कालीन संपर्क",
                "Privacy Policy": "गोपनीयता धोरण",
                "Terms of Service": "सेवा अटी",
                "Help Desk": "मदत कक्ष",
                "Rural Outreach": "ग्रामीण पोहोच",
                "Accessibility": "सुलभता",
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
