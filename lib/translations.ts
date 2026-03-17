export type Lang = "en" | "ar";

const translations = {
  en: {
    // Navbar
    nav: {
      home: "Home",
      about: "About",
      history: "History",
      vision: "Vision",
      products: "Products",
      whyUs: "Why Us",
      quote: "Get a Quote",
    },

    // Hero
    hero: {
      badge: "Trusted Since 1994 · 30+ Years of Industrial Excellence",
      headline1: "Powering Industry",
      headline2: "With Precision",
      sub: "Gas equipment, instrumentation, hydraulics, and industrial safety systems, engineered solutions for the oil, gas, and industrial sectors.",
      cta1: "Get a Quote",
      cta2: "Our Products",
      stat1value: "30+",
      stat1label: "Years Experience",
      stat2value: "7+",
      stat2label: "Product Lines",
      stat3value: "100+",
      stat3label: "Clients Served",
      scroll: "Scroll",
    },

    // About
    about: {
      tag: "About Us",
      title1: "A Legacy of Industrial",
      title2: "Excellence",
      p1: "Power Control Systems was established in 1994 as a specialized supplier of gas equipment and industrial solutions. Over three decades, we have built deep expertise in serving the oil, gas, and industrial sectors across the region.",
      p2: "In 2006, we underwent a strategic restructuring to better align with evolving market demands, expanding our portfolio to include instrumentation, hydraulic systems, and advanced safety equipment.",
      p3: "Today, Power Control Systems stands as a trusted partner for engineers and procurement professionals who demand quality, reliability, and technical expertise.",
      stat1value: "1994",
      stat1label: "Year Founded",
      stat2value: "100+",
      stat2label: "Clients Served",
      stat3value: "Regional",
      stat3label: "Market Reach",
      stat4value: "7+",
      stat4label: "Product Categories",
    },

    // Timeline
    timeline: {
      tag: "Our History",
      title: "Our Journey",
      milestones: [
        {
          year: "1994",
          title: "Company Founded",
          description:
            "Power Control Systems was established as a specialized gas equipment supplier, laying the foundation for regional industrial excellence.",
        },
        {
          year: "2006",
          title: "Strategic Restructuring",
          description:
            "Underwent a comprehensive restructuring to align with evolving market demands, expanding capabilities and strengthening operations.",
        },
        {
          year: "2010s",
          title: "Product Line Expansion",
          description:
            "Expanded into instrumentation, hydraulic systems, and industrial safety equipment, meeting growing complexity in the oil & gas sector.",
        },
        {
          year: "Today",
          title: "30+ Years of Excellence",
          description:
            "Serving oil, gas, and industrial sectors across the region with a comprehensive portfolio and a team of seasoned technical experts.",
        },
      ],
    },

    // Vision
    vision: {
      tag: "Our Vision",
      headline1: "To be the most",
      headline2: "trusted partner",
      headline3: "for industrial and energy-sector solutions across the region.",
      sub: "We envision a future where reliable, precision-engineered industrial systems drive safe and efficient operations for every client we serve.",
    },

    // Mission
    mission: {
      tag: "Our Mission",
      title1: "Committed to",
      title2: "Your Success",
      sub: "Our mission guides every decision we make, from the products we source to the way we support our clients. We are driven by a commitment to excellence, reliability, and long-term value.",
      points: [
        "Deliver high-quality gas equipment and industrial solutions that meet international standards.",
        "Build long-term partnerships based on trust, transparency, and technical expertise.",
        "Continuously expand our product portfolio to address emerging industry needs.",
        "Provide responsive after-sales support and technical consultation.",
        "Contribute to safe, efficient, and sustainable industrial operations across the region.",
      ],
    },

    // Products
    products: {
      tag: "What We Offer",
      title: "Products & Services",
      sub: "A comprehensive range of industrial equipment and solutions, carefully sourced and supplied to meet the most demanding project requirements.",
      items: [
        {
          title: "Gas Equipment",
          description:
            "Industrial gas regulators, manifolds, valves, and distribution systems for safe and efficient gas handling operations.",
        },
        {
          title: "Instrumentation",
          description:
            "Precision measurement instruments: pressure gauges, flow meters, temperature sensors, and control systems.",
        },
        {
          title: "Hydraulic Systems",
          description:
            "Hydraulic pumps, cylinders, power units, and complete hydraulic circuit design for heavy industrial applications.",
        },
        {
          title: "Safety Systems",
          description:
            "Industrial safety equipment including pressure relief valves, emergency shutdown systems, and gas detection solutions.",
        },
        {
          title: "Maintenance Equipment",
          description:
            "Specialized tools and equipment for field maintenance, inspection, and servicing of industrial systems.",
        },
        {
          title: "Electrical & Control",
          description:
            "Control panels, switchgear, automation components, and electrical equipment for industrial facilities.",
        },
        {
          title: "Spare Parts & Supply",
          description:
            "Comprehensive spare parts sourcing and supply for major equipment brands across all product categories.",
        },
      ],
      ctaTitle: "Need Something Specific?",
      ctaDesc:
        "Our team sources specialized equipment for unique project requirements. Get in touch.",
      ctaBtn: "Request a Quote →",
    },

    // Why Us
    whyUs: {
      tag: "Our Advantage",
      title: "Why Choose Us",
      sub: "What sets Power Control Systems apart from other suppliers in the region.",
      items: [
        {
          title: "30+ Years of Proven Expertise",
          description:
            "Three decades of hands-on experience in gas equipment and industrial solutions. Our track record speaks for itself.",
        },
        {
          title: "Reliable & On-Time Delivery",
          description:
            "We understand project timelines. Our logistics capabilities and supplier network ensure your equipment arrives when needed.",
        },
        {
          title: "Trusted Long-Term Partner",
          description:
            "We build relationships, not just transactions. Our clients return to us because we deliver on our commitments every time.",
        },
        {
          title: "Technical Depth & Consultation",
          description:
            "Our team includes experienced engineers who provide technical consultation beyond just product supply.",
        },
        {
          title: "Comprehensive Product Range",
          description:
            "From gas systems to hydraulics to safety equipment, a single supplier for your diverse industrial procurement needs.",
        },
      ],
      cta30: "30+",
      ctaYears: "Years Serving Industry",
      ctaDesc:
        "Oil, gas, and industrial sectors across the region trust us for their critical supply needs.",
      ctaBtn: "Work With Us",
    },

    // Quote Form
    quote: {
      tag: "Contact Us",
      title: "Get a Quote",
      sub: "Tell us about your requirements and our team will respond promptly.",
      name: "Full Name",
      namePlaceholder: "John Smith",
      company: "Company",
      companyPlaceholder: "Company Name",
      phone: "Phone Number",
      phonePlaceholder: "+962 7X XXX XXXX",
      email: "Email Address",
      emailPlaceholder: "you@company.com",
      message: "Message / Requirements",
      messagePlaceholder: "Describe the equipment or solutions you need...",
      submit: "Send Enquiry",
      submitting: "Sending...",
      successTitle: "Message Sent!",
      successDesc:
        "Thank you for reaching out. We will be in touch with you shortly.",
      sendAnother: "Send Another Enquiry",
      privacy:
        "Powered by Google Forms · Responses stored securely in Google Sheets",
      required: "*",
      nameError: "Name is required",
      emailError: "Email is required",
      emailInvalid: "Enter a valid email address",
      messageError: "Please describe your enquiry",
    },

    // Footer
    footer: {
      tagline: "Industrial Solutions",
      desc: "Trusted supplier of gas equipment, instrumentation, hydraulics, and industrial safety systems since 1994.",
      quickLinks: "Quick Links",
      contact: "Contact",
      website: "Website",
      region: "Region",
      regionValue: "Middle East & North Africa",
      sectors: "Sectors",
      sectorsValue: "Oil · Gas · Industrial",
      copyright: "Power Control Systems. All rights reserved.",
      established: "Established 1994 · Restructured 2006 · 30+ Years of Excellence",
    },
  },

  ar: {
    // Navbar
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      history: "تاريخنا",
      vision: "رؤيتنا",
      products: "المنتجات",
      whyUs: "لماذا نحن",
      quote: "احصل على عرض سعر",
    },

    // Hero
    hero: {
      badge: "موثوقون منذ 1994 · أكثر من 30 عاماً من التميّز الصناعي",
      headline1: "نُشغّل الصناعة",
      headline2: "بدقة واحترافية",
      sub: "معدات الغاز، الأجهزة الدقيقة، الهيدروليك، وأنظمة السلامة الصناعية — حلول هندسية متكاملة لقطاعات النفط والغاز والصناعة.",
      cta1: "احصل على عرض سعر",
      cta2: "منتجاتنا",
      stat1value: "+30",
      stat1label: "عاماً من الخبرة",
      stat2value: "+7",
      stat2label: "خطوط منتجات",
      stat3value: "+100",
      stat3label: "عميل موثوق",
      scroll: "مرر للأسفل",
    },

    // About
    about: {
      tag: "من نحن",
      title1: "إرث راسخ من",
      title2: "التميز الصناعي",
      p1: "تأسست شركة باور كونترول سيستمز عام 1994 كمورد متخصص في معدات الغاز والحلول الصناعية. على مدى ثلاثة عقود، بنينا خبرة عميقة في خدمة قطاعات النفط والغاز والصناعة في المنطقة.",
      p2: "في عام 2006، أجرينا إعادة هيكلة استراتيجية لمواكبة متطلبات السوق المتطورة، موسّعين محفظتنا لتشمل أجهزة القياس والأنظمة الهيدروليكية ومعدات السلامة المتقدمة.",
      p3: "اليوم، تُعدّ باور كونترول سيستمز شريكاً موثوقاً للمهندسين ومتخصصي المشتريات الذين يتطلعون إلى الجودة والموثوقية والخبرة التقنية.",
      stat1value: "1994",
      stat1label: "سنة التأسيس",
      stat2value: "+100",
      stat2label: "عميل موثوق",
      stat3value: "إقليمي",
      stat3label: "نطاق السوق",
      stat4value: "+7",
      stat4label: "فئات المنتجات",
    },

    // Timeline
    timeline: {
      tag: "تاريخنا",
      title: "مسيرتنا",
      milestones: [
        {
          year: "1994",
          title: "تأسيس الشركة",
          description:
            "تأسست باور كونترول سيستمز كمورد متخصص في معدات الغاز، وضعت أساساً راسخاً للتميز الصناعي في المنطقة.",
        },
        {
          year: "2006",
          title: "إعادة الهيكلة الاستراتيجية",
          description:
            "أجرينا إعادة هيكلة شاملة لمواكبة متطلبات السوق، موسّعين قدراتنا وتعزيز عملياتنا.",
        },
        {
          year: "2010s",
          title: "توسع خطوط المنتجات",
          description:
            "توسعنا في مجال الأجهزة الدقيقة، الأنظمة الهيدروليكية، ومعدات السلامة الصناعية لمواكبة تزايد تعقيدات قطاع النفط والغاز.",
        },
        {
          year: "اليوم",
          title: "أكثر من 30 عاماً من التميز",
          description:
            "نخدم قطاعات النفط والغاز والصناعة في المنطقة بمحفظة منتجات شاملة وفريق من الخبراء التقنيين المتمرسين.",
        },
      ],
    },

    // Vision
    vision: {
      tag: "رؤيتنا",
      headline1: "أن نكون الشريك",
      headline2: "الأكثر ثقة",
      headline3: "في الحلول الصناعية وقطاع الطاقة في المنطقة.",
      sub: "نتطلع إلى مستقبل تقود فيه الأنظمة الصناعية الدقيقة الموثوقة عمليات آمنة وفعّالة لكل عميل نخدمه.",
    },

    // Mission
    mission: {
      tag: "مهمتنا",
      title1: "ملتزمون",
      title2: "بنجاحكم",
      sub: "تُوجّه مهمتنا كل قرار نتخذه، من المنتجات التي نوفرها إلى طريقة دعمنا لعملائنا. نحن مدفوعون بالتزام راسخ بالتميز والموثوقية والقيمة طويلة الأمد.",
      points: [
        "توفير معدات غاز وحلول صناعية عالية الجودة تستوفي المعايير الدولية.",
        "بناء شراكات طويلة الأمد قائمة على الثقة والشفافية والخبرة التقنية.",
        "التوسع المستمر في محفظة منتجاتنا لتلبية احتياجات الصناعة المتطورة.",
        "تقديم دعم ما بعد البيع والاستشارات التقنية بشكل فعّال وسريع.",
        "المساهمة في عمليات صناعية آمنة وفعّالة ومستدامة في جميع أنحاء المنطقة.",
      ],
    },

    // Products
    products: {
      tag: "ما نقدمه",
      title: "المنتجات والخدمات",
      sub: "مجموعة شاملة من المعدات والحلول الصناعية، مُوَرَّدة بعناية لتلبية أكثر متطلبات المشاريع تحدياً.",
      items: [
        {
          title: "معدات الغاز",
          description:
            "منظمات غاز صناعية، مشعبات، صمامات، وأنظمة توزيع لعمليات التعامل مع الغاز بأمان وكفاءة.",
        },
        {
          title: "الأجهزة الدقيقة",
          description:
            "أجهزة قياس دقيقة: مقاييس ضغط، عدادات تدفق، حساسات درجة حرارة، وأنظمة تحكم.",
        },
        {
          title: "الأنظمة الهيدروليكية",
          description:
            "مضخات هيدروليكية، أسطوانات، وحدات طاقة، وتصميم دوائر هيدروليكية كاملة للتطبيقات الصناعية الثقيلة.",
        },
        {
          title: "أنظمة السلامة",
          description:
            "معدات السلامة الصناعية بما فيها صمامات تخفيف الضغط، أنظمة الإيقاف الطارئ، وحلول كشف الغاز.",
        },
        {
          title: "معدات الصيانة",
          description:
            "أدوات ومعدات متخصصة لصيانة الميدان، الفحص، وخدمة الأنظمة الصناعية.",
        },
        {
          title: "الكهرباء والتحكم",
          description:
            "لوحات تحكم، معدات توزيع الكهرباء، مكونات أتمتة، ومعدات كهربائية للمنشآت الصناعية.",
        },
        {
          title: "قطع الغيار والتوريد",
          description:
            "توريد شامل لقطع الغيار لكبرى ماركات المعدات عبر جميع فئات المنتجات.",
        },
      ],
      ctaTitle: "تحتاج شيئاً محدداً؟",
      ctaDesc:
        "فريقنا يوفر معدات متخصصة لمتطلبات المشاريع الفريدة. تواصل معنا.",
      ctaBtn: "اطلب عرض سعر ←",
    },

    // Why Us
    whyUs: {
      tag: "ميزتنا",
      title: "لماذا تختارنا",
      sub: "ما يميز باور كونترول سيستمز عن غيرها من الموردين في المنطقة.",
      items: [
        {
          title: "أكثر من 30 عاماً من الخبرة المثبتة",
          description:
            "ثلاثة عقود من الخبرة العملية في معدات الغاز والحلول الصناعية. سجلنا الحافل يتحدث عن نفسه.",
        },
        {
          title: "توصيل موثوق وفي الوقت المحدد",
          description:
            "نتفهم أهمية الجداول الزمنية للمشاريع. تضمن قدراتنا اللوجستية وشبكة مورديّنا وصول معداتكم في الوقت المناسب.",
        },
        {
          title: "شريك موثوق على المدى البعيد",
          description:
            "نبني علاقات وليس مجرد صفقات. يعود إلينا عملاؤنا لأننا نفي بالتزاماتنا في كل مرة.",
        },
        {
          title: "عمق تقني واستشارات متخصصة",
          description:
            "يضم فريقنا مهندسين ذوي خبرة يقدمون استشارات تقنية تتجاوز مجرد توريد المنتجات.",
        },
        {
          title: "مجموعة منتجات شاملة",
          description:
            "من أنظمة الغاز إلى الهيدروليك وأجهزة السلامة، مورد واحد لجميع احتياجاتكم الصناعية.",
        },
      ],
      cta30: "+30",
      ctaYears: "عاماً في خدمة الصناعة",
      ctaDesc:
        "تثق بنا قطاعات النفط والغاز والصناعة في المنطقة لتلبية احتياجات التوريد الحيوية.",
      ctaBtn: "تعاون معنا",
    },

    // Quote Form
    quote: {
      tag: "تواصل معنا",
      title: "احصل على عرض سعر",
      sub: "أخبرنا بمتطلباتكم وسيتواصل معكم فريقنا في أقرب وقت.",
      name: "الاسم الكامل",
      namePlaceholder: "محمد أحمد",
      company: "الشركة",
      companyPlaceholder: "اسم الشركة",
      phone: "رقم الهاتف",
      phonePlaceholder: "+962 7X XXX XXXX",
      email: "البريد الإلكتروني",
      emailPlaceholder: "email@company.com",
      message: "الرسالة / المتطلبات",
      messagePlaceholder: "صف المعدات أو الحلول التي تحتاجها...",
      submit: "إرسال الاستفسار",
      submitting: "جارٍ الإرسال...",
      successTitle: "تم الإرسال بنجاح!",
      successDesc: "شكراً لتواصلكم. سيتواصل معكم فريقنا قريباً.",
      sendAnother: "إرسال استفسار آخر",
      privacy: "مدعوم بـ Google Forms · تُحفظ الردود بأمان في Google Sheets",
      required: "*",
      nameError: "الاسم مطلوب",
      emailError: "البريد الإلكتروني مطلوب",
      emailInvalid: "أدخل بريداً إلكترونياً صحيحاً",
      messageError: "يرجى وصف استفساركم",
    },

    // Footer
    footer: {
      tagline: "حلول صناعية",
      desc: "مورد موثوق لمعدات الغاز، الأجهزة الدقيقة، الهيدروليك، وأنظمة السلامة الصناعية منذ عام 1994.",
      quickLinks: "روابط سريعة",
      contact: "تواصل معنا",
      website: "الموقع الإلكتروني",
      region: "المنطقة",
      regionValue: "الشرق الأوسط وشمال أفريقيا",
      sectors: "القطاعات",
      sectorsValue: "النفط · الغاز · الصناعة",
      copyright: "باور كونترول سيستمز. جميع الحقوق محفوظة.",
      established: "تأسست 1994 · أعيدت هيكلتها 2006 · أكثر من 30 عاماً من التميز",
    },
  },
};

export default translations;
