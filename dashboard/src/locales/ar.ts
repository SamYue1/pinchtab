import type { Messages } from "../i18n/messages";

const messages: Messages = {
  app: {
    name: "PinchTab",
    checking_server_authentication: "جارٍ التحقق من مصادقة الخادم…",
    pinchtab_is_restarting_or_unreachable:
      "PinchTab قيد إعادة التشغيل أو لا يمكن الوصول إليه.",
    automatic_retries_stopped: " تم إيقاف المحاولات التلقائية.",
    retry_now: "أعد المحاولة الآن",
    refresh: "تحديث",
  },
  profiles: {
    profiletoolbarbuttons: {
      copy_id: "نسخ المعرّف",
      delete: "حذف",
      save: "حفظ",
      stop: "إيقاف",
      start: "تشغيل",
      delete_profile: "حذف الملف الشخصي",
      cancel: "إلغاء",
      delete_profile_2: 'حذف الملف الشخصي "',
      every_cookie_login_and_session_stored:
        '"? سيُفقد نهائيًا كل ملف تعريف ارتباط وتسجيل دخول وجلسة مخزّنة فيه. لا يمكن التراجع.',
      copied: "تم النسخ",
      failed: "فشل",
    },
    profilemetainfopanel: {
      profile_panel: "لوحة الملف الشخصي",
      status: "الحالة",
      port: "المنفذ",
      browser: "المتصفح",
      size: "الحجم",
      account: "الحساب",
      identity: "الهوية",
      connection: "الاتصال",
      cdp_attached: "CDP متصل",
      cdp_url: "عنوان CDP",
      path: "المسار",
      not_found: " (غير موجود)",
      attached_via_cdp: "متصل عبر CDP",
      headless: "بدون واجهة",
      headed: "مع واجهة",
    },
    profilecard: {
      error: "خطأ",
      stopped: "متوقف",
      size: "الحجم",
      account: "الحساب",
      use_when: "يُستخدم عند",
      details: "التفاصيل",
      stop: "إيقاف",
      start: "تشغيل",
    },
    profiledetailspanel: {
      select_a_profile_to_inspect_its:
        "اختر ملفًا شخصيًا لفحص المثيل وعلامات التبويب المباشرة والسجلات.",
      live: "مباشر",
      tabs: "علامات التبويب",
      logs: "السجلات",
      no_tabs_open: "لا توجد علامات تبويب مفتوحة.",
      instance_not_running: "المثيل غير قيد التشغيل.",
      profile_name: "الملف الشخصي: {{name}}",
    },
    profilebasicinfopanel: {
      name: "الاسم",
      use_this_profile_when: "استخدم هذا الملف الشخصي عند",
    },
    profileliveviewpanel: {
      no_tabs_open: "لا توجد علامات تبويب مفتوحة",
      instance_not_running_start_the_profile:
        "المثيل غير قيد التشغيل. شغّل الملف الشخصي لعرض البث المباشر.",
    },
    instancelogspanel: {
      loading_logs: "جارٍ تحميل السجلات…",
      no_instance_logs_available: "لا تتوفر سجلات للمثيل.",
    },
    groups: {
      user: "الملفات الشخصية",
      temporary: "مؤقتة",
      quarantined: "معزولة",
    },
  },
  components: {
    atoms: {
      debugpanel: {
        debug: "🐛 تصحيح",
        debug_panel: "لوحة التصحيح",
        instances: "المثيلات:",
      },
      emptystate: {
        dashboard: "لوحة التحكم",
      },
      modal: {
        dashboard: "لوحة التحكم",
        close: "إغلاق",
      },
      errorboundary: {
        something_went_wrong: "⚠️ حدث خطأ ما",
        unknown_error: "خطأ غير معروف",
        try_again: "أعد المحاولة",
      },
    },
    screencast: {
      screencaststatusbar: {
        decrease_fps: "تقليل معدل الإطارات",
        increase_fps: "زيادة معدل الإطارات",
        take_full_quality_screenshot_png: "التقاط لقطة شاشة بأعلى جودة (PNG)",
        download_as_pdf: "التنزيل بصيغة PDF",
        fps: "معدل الإطارات (",
      },
      screencasttile: {
        tab_preview: "معاينة علامة التبويب",
        connection_lost: "انقطع الاتصال",
        show_static_preview: "عرض معاينة ثابتة",
        retry_connection: "إعادة محاولة الاتصال",
      },
      framedecode: {
        failed_to_decode_screencast_frame: "تعذّر فك تشفير إطار البث",
      },
    },
    molecules: {
      createprofilemodal: {
        new_profile: "📁 ملف شخصي جديد",
        cancel: "إلغاء",
        create: "إنشاء",
        name: "الاسم",
        e_g_personal_work_scraping: "مثال: شخصي، عمل، استخراج بيانات",
        use_this_profile_when_helps_agents_pick:
          "استخدم هذا الملف الشخصي عند (يساعد الوكلاء على اختيار الملف الصحيح)",
        e_g_i_need_to_access_gmail_for_the_team:
          "مثال: أحتاج إلى الوصول إلى Gmail بحساب الفريق",
        import_from_optional_chrome_user_data:
          "الاستيراد من (اختياري — مسار بيانات مستخدم Chrome)",
        e_g_users_you_library_application:
          "مثال: /Users/you/Library/Application Support/Google/Chrome",
      },
      navbar: {
        pinchtab: "PinchTab",
        logout: "تسجيل الخروج",
        refresh_r: "تحديث (⌘R)",
        toggle_menu: "تبديل القائمة",
        monitoring: "المراقبة",
        agents: "الوكلاء",
        profiles: "الملفات الشخصية",
        settings: "الإعدادات",
      },
      instancestats: {
        instance: "المثيل",
        status: "الحالة",
        uptime: "مدة التشغيل",
        port: "المنفذ",
        crashes: "حالات التعطل",
        browsing: "التصفح",
        tabs: "علامات التبويب",
        domains: "النطاقات",
        resources: "الموارد",
        memory: "الذاكرة",
        renderers: "عمليات العرض",
        pages: "الصفحات",
        js_heap: "كومة JS",
        dom_nodes: "عقد DOM",
        listeners: "المستمعات",
        frames: "الإطارات",
        unreadable: "غير قابلة للقراءة",
        just_now: "الآن",
        tabs_open_before_it_were_lost: "فُقدت علامات التبويب المفتوحة قبل ذلك",
        rss_across_the_browser_process_tree:
          "الذاكرة المقيمة (RSS) عبر شجرة عمليات المتصفح",
        tabs_that_did_not_answer_not_counted:
          "علامات تبويب لم تستجب (غير محتسبة)",
        last_crash:
          "الأخير: {{reason}} في {{time}} · فُقدت علامات التبويب المفتوحة قبل ذلك",
        heap_summary_one:
          "المستخدم / الإجمالي، مجمّعًا على {{count}} علامة تبويب",
        heap_summary_other:
          "المستخدم / الإجمالي، مجمّعًا على {{count}} علامة تبويب",
        document_count_one: "{{count}} مستند",
        document_count_other: "{{count}} مستندات",
      },
      agentitem: {
        tab_paused_for_human_handoff:
          "علامة التبويب متوقفة مؤقتًا بانتظار تدخل بشري",
        just_now: "الآن",
        session_at: "الجلسة {{time}}",
        session_range: "الجلسة {{start}}–{{end}}",
      },
      startinstancemodal: {
        start_profile: "🖥️ تشغيل الملف الشخصي",
        cancel: "إلغاء",
        start: "تشغيل",
        port: "المنفذ",
        auto_select_from_configured_range: "الاختيار التلقائي من النطاق المهيأ",
        leave_blank_to_auto_select_a_free_port:
          "اتركه فارغًا لاختيار منفذ متاح تلقائيًا من نطاق المنافذ المهيأ.",
        headless_best_for_docker_vps: "بدون واجهة (الأنسب لـ Docker/VPS)",
        browser: "المتصفح",
        server_default: "الافتراضي للخادم",
        chrome: "Chrome",
        cloakbrowser: "CloakBrowser",
        ghost_chrome: "Ghost + Chrome",
        direct_launch_command_backup: "أمر التشغيل المباشر (احتياطي)",
        copy_command: "نسخ الأمر",
        replace: "استبدال",
        pinchtab_config_token: "pinchtab config token",
        when_auth_is_enabled: "عند تفعيل المصادقة.",
        with_the_value_from: "بالقيمة من",
        port_must_be_a_whole_number_between_1:
          "يجب أن يكون المنفذ عددًا صحيحًا بين 1 و65535.",
        profile_id_missing: "معرّف الملف الشخصي مفقود",
        failed_to_launch_instance: "تعذّر تشغيل المثيل",
        copied: "تم النسخ!",
        failed_to_copy: "تعذّر النسخ",
      },
      handoffnotifications: {
        human_intervention_required: "مطلوب تدخل بشري",
        dismiss_notification: "إغلاق الإشعار",
        reason: "السبب:",
        resume: "استئناف",
      },
      serverstatusbadge: {
        expand_instance_list: "توسيع قائمة المثيلات",
        collapse_instance_list: "طيّ قائمة المثيلات",
        tab: "علامة تبويب",
        restart_required: "يلزم إعادة التشغيل",
        server_running: "الخادم يعمل",
        restart_required_2: "يلزم إعادة التشغيل",
        running: "قيد التشغيل",
        server_running_no_instances: "الخادم يعمل، لا توجد مثيلات",
      },
      serversummary: {
        settings: "الإعدادات",
        server_information: "معلومات الخادم",
        technical_details_for_current_session: "تفاصيل تقنية للجلسة الحالية",
        version: "الإصدار",
        uptime: "مدة التشغيل",
      },
      tabschart: {
        monitoring: "المراقبة",
        live_telemetry: "قياسات مباشرة",
        tabs: "علامات التبويب",
        memory: "الذاكرة",
        heap: "الكومة",
        server_heap: "كومة الخادم",
        collecting_data: "جارٍ جمع البيانات…",
        waiting_for_more_data: "في انتظار مزيد من البيانات…",
      },
      idbadge: {
        click_to_copy_full_id: "انقر لنسخ المعرّف الكامل: {{id}}",
      },
    },
  },
  tabs: {
    tabbar: {
      tab_paused_for_human_handoff:
        "علامة التبويب متوقفة مؤقتًا بانتظار تدخل بشري",
      tab_is_paused_for_human_handoff:
        "علامة التبويب متوقفة مؤقتًا بانتظار تدخل بشري",
      untitled: "بلا عنوان",
      unpin_and_follow_the_focused_tab_again:
        "إلغاء التثبيت ومتابعة علامة التبويب النشطة مجددًا",
      pin_this_tab_selection: "تثبيت علامة التبويب المحددة",
      tabs: "علامات التبويب",
      monitoring: "المراقبة",
      pin_tab: "تثبيت {{title}}",
      unpin_tab_and_follow_focus: "إلغاء تثبيت {{title}} ومتابعة التركيز",
      close_tab: "إغلاق {{title}}",
      tabs_new: "علامات التبويب ({{count}} جديدة)",
    },
    selectedtabtitle: {
      untitled: "بلا عنوان",
    },
    instancetabspanel: {
      chart_crashed_check_console: "تعطّل المخطط — راجع وحدة التحكم",
      no_tabs_open: "لا توجد علامات تبويب مفتوحة",
      unknown: "غير معروف",
    },
    tabitem: {
      untitled: "بلا عنوان",
    },
    consolepanel: {
      loading_console_logs: "جارٍ تحميل سجلات وحدة التحكم…",
      no_console_logs_yet: "لا توجد سجلات لوحدة التحكم بعد",
    },
    errorspanel: {
      loading_errors: "جارٍ تحميل الأخطاء…",
      no_errors_yet: "لا توجد أخطاء بعد",
    },
    selectedtabpanel: {
      select_a_tab_to_view_details: "اختر علامة تبويب لعرض التفاصيل",
      no_instance_id_provided_for_live_view:
        "لم يُقدَّم معرّف مثيل للعرض المباشر.",
      actions: "الإجراءات",
      live: "مباشر",
      console: "وحدة التحكم",
      errors: "الأخطاء",
    },
  },
  instances: {
    instancelistitem: {
      tabs: "علامات تبويب",
      open_profile: "فتح الملف الشخصي",
      restart: "إعادة التشغيل",
      stop: "إيقاف",
    },
    instancecard: {
      headless: "بدون واجهة",
      headed: "مع واجهة",
      uptime: "مدة التشغيل",
      open_dashboard: "فتح لوحة التحكم",
      stop: "إيقاف",
    },
  },
  pages: {
    monitoringpage: {
      instances: "المثيلات",
      collapse_sidebar: "طيّ الشريط الجانبي",
    },
    loginpage: {
      authentication: "المصادقة",
      enter_api_token: "أدخل رمز API",
      this_pinchtab_server_requires_a_bearer:
        "يتطلب خادم PinchTab هذا رمز حامل قبل أن تتمكن لوحة التحكم من تحميل المسارات وواجهات API المحمية.",
      run: "نفّذ",
      pinchtab_config_token: "pinchtab config token",
      to_copy_the_token_to_your_clipboard: "لنسخ الرمز إلى الحافظة.",
      paste_bearer_token: "الصق رمز الحامل",
      authorizing: "جارٍ التفويض…",
      continue: "متابعة",
      authentication_failed: "فشلت المصادقة",
    },
    settings: {
      orchestrationsettingssection: {
        orchestration: "التنسيق",
        port_range_and_allocation_policy_can_be:
          "يُطبَّق نطاق المنافذ وسياسة التخصيص فورًا على عمليات التشغيل التالية. تتطلب تغييرات الاستراتيجية وسياسة إعادة التشغيل إعادة تشغيل لوحة التحكم، لأن مسارات الاستراتيجية وحالة دورة الحياة تُسجَّل عند بدء التشغيل.",
        strategy: "الاستراتيجية",
        controls_instance_lifecycle_and_how:
          "يتحكم في دورة حياة المثيلات وفي توجيه الطلبات المختصرة.",
        always_on: "دائم التشغيل",
        simple: "بسيطة",
        explicit: "صريحة",
        simple_autorestart: "إعادة تشغيل تلقائية بسيطة",
        no_instance_hub: "بلا مثيل (مركز)",
        launches_a_default_instance_at_boot_and:
          "يشغّل مثيلًا افتراضيًا عند البدء ويعيد تشغيله عند التعطل.",
        launches_one_instance_on_first_request:
          "يشغّل مثيلًا واحدًا عند أول طلب. بلا إعادة تشغيل تلقائية.",
        all_instances_managed_via_api_no:
          "تُدار جميع المثيلات عبر API. بلا تشغيل تلقائي.",
        launches_on_first_request_and:
          "يعمل عند أول طلب ويُعاد تشغيله عند التعطل.",
        no_local_chrome_processes_acts_as_a_hub:
          "لا يشغّل عمليات Chrome محلية. يعمل كمركز للجسور البعيدة فقط.",
        allocation_policy: "سياسة التخصيص",
        determines_how_running_instances_are:
          "تحدد كيفية اختيار المثيلات العاملة للطلبات المختصرة.",
        first_available: "أول مثيل متاح",
        round_robin: "بالتناوب",
        random: "عشوائي",
        instance_port_start: "منفذ البداية للمثيلات",
        lower_bound_for_auto_allocated_instance:
          "الحد الأدنى لمنافذ المثيلات المخصصة تلقائيًا.",
        instance_port_end: "منفذ النهاية للمثيلات",
        upper_bound_for_auto_allocated_instance:
          "الحد الأعلى لمنافذ المثيلات المخصصة تلقائيًا.",
        max_restarts: "الحد الأقصى لإعادات التشغيل",
        maximum_restart_attempts_use_1_for:
          "الحد الأقصى لمحاولات إعادة التشغيل. استخدم -1 لعدد غير محدود و0 لعدم إعادة التشغيل.",
        initial_backoff: "الانتظار الأولي",
        delay_in_seconds_before_the_first:
          "التأخير بالثواني قبل أول محاولة إعادة تشغيل.",
        max_backoff: "الانتظار الأقصى",
        upper_bound_in_seconds_for_exponential:
          "الحد الأعلى بالثواني للانتظار المتزايد بين إعادات التشغيل.",
        stable_after: "مستقر بعد",
        seconds_the_instance_must_stay_healthy:
          "عدد الثواني التي يجب أن يبقى فيها المثيل سليمًا قبل تصفير عدّاد إعادة التشغيل.",
      },
      securitysettingssection: {
        security: "الأمان",
        these_controls_define_what_risky:
          "تحدد هذه الخيارات القدرات عالية المخاطر التي يعرضها PinchTab.",
        one_or_more_sensitive_endpoint_families:
          "تم تمكين عائلة أو أكثر من نقاط النهاية الحساسة. قد تعرّض ميزات مثل تنفيذ النصوص البرمجية والتنزيل والرفع والالتقاط المباشر قدرات عالية المخاطر. لا تمكّنها إلا في بيئات موثوقة. أنت مسؤول عن تأمين الوصول إلى الشبكة والمصادقة والاستخدام اللاحق.",
        these_endpoint_families_can_expose_high:
          "قد تعرّض عائلات نقاط النهاية هذه قدرات عالية المخاطر عند تمكينها. لا تشغّلها إلا في بيئات موثوقة، وفقط عندما تتحمل مسؤولية الوصول إلى الشبكة والمصادقة والاستخدام اللاحق.",
        controls_whether_the_corresponding:
          "يتحكم في تمكين عائلة نقاط النهاية المقابلة.",
        enable: "تمكين",
        allowed_websites: "المواقع المسموح بها",
        comma_separated_domain_allowlist_for:
          "قائمة نطاقات مسموح بها لمحتوى الويب، مفصولة بفواصل. استخدم أسماء مضيفين دقيقة أو أنماطًا مثل *.example.com.",
        "127_0_0_1_localhost_1": "127.0.0.1, localhost, ::1",
        keep_this_list_narrow_empty_or_wildcard:
          "أبقِ هذه القائمة ضيقة. تُضعف الإدخالات الفارغة أو التي تحتوي على أحرف بديلة الحد الرئيسي لـ IDPI. كما أن السماح بمواقع غير محلية أو غير موثوقة يوسّع سطح الهجوم على المتصفح حتى مع تمكين IDPI.",
        trusted_proxy_cidrs: "نطاقات CIDR للوكيل الموثوق",
        comma_separated_cidrs_or_ips_whose:
          "نطاقات CIDR أو عناوين IP مفصولة بفواصل يُوثق بعنوانها البعيد الذي يبلّغ عنه المتصفح أثناء التنقل. استخدمها للوكلاء الداخليين المعروفين فقط.",
        "10_1_2_3_10_0_0_0_8": "10.1.2.3, 10.0.0.0/8",
        this_weakens_navigation_ip_checks_for:
          "يُضعف هذا فحوصات IP أثناء التنقل لعناوين IP البعيدة المطابقة. فضّل عناوين وكلاء محددة بدلًا من نطاقات خاصة واسعة. تُعامَل الإدخالات التي تحتوي على IP فقط كمضيف واحد.",
        trusted_resolve_cidrs: "نطاقات CIDR للتحليل الموثوق",
        comma_separated_cidrs_or_ips_that_a:
          "نطاقات CIDR أو عناوين IP مفصولة بفواصل يُسمح لاسم المضيف بالتحليل إليها أثناء الفحص المسبق للتنقل. مخصصة لإعدادات DNS أو الوكيل الداخلية.",
        "198_18_0_0_15_10_1_2_3": "198.18.0.0/15, 10.1.2.3",
        this_allows_hostnames_to_resolve_to_non:
          "يسمح هذا لأسماء المضيفين بالتحليل إلى عناوين IP غير عامة. أبقِ القائمة ضيقة واقتصر على البنية التحتية التي تتحكم بها. تُعامَل الإدخالات التي تحتوي على IP فقط كمضيف واحد.",
      },
      settingssharedcomponents: {
        settings: "الإعدادات",
      },
      networksettingssection: {
        network_attach: "الشبكة والاتصال",
        port_and_bind_changes_require_a_restart:
          "تتطلب تغييرات المنفذ وعنوان الربط إعادة التشغيل. تُدار إدارة رمز API خارج لوحة التحكم.",
        server_port: "منفذ الخادم",
        http_port_for_the_dashboard_process: "منفذ HTTP لعملية لوحة التحكم.",
        bind_address: "عنوان الربط",
        network_interface_the_dashboard_process:
          "واجهة الشبكة التي ترتبط بها عملية لوحة التحكم. الإبقاء على 127.0.0.1 أو localhost يحدّ إمكانية الوصول المباشر بالجهاز المحلي.",
        a_non_loopback_bind_is_a_documented_non:
          "الربط بعنوان غير عنوان الاسترجاع تغيير موثّق وغير افتراضي ويقلل الأمان. قد يعرّض الخادم خارج الجهاز المحلي ما لم تحدّ حدود شبكة أخرى الوصول. أبقِ رمزًا معيَّنًا وراجع سلوك الوكيل أو نشر المنافذ صراحةً.",
        loopback_bind_keeps_direct_server:
          "يُبقي الربط بعنوان الاسترجاع الوصول المباشر إلى الخادم محليًا. الانتقال إلى",
        or_another_non_local_address_widens_the:
          "أو أي عنوان غير محلي آخر يوسّع حدود الثقة.",
        api_token: "رمز API",
        bearer_token_required_by_authenticated:
          "رمز حامل تتطلبه الطلبات الموثقة عند تعيينه. لا تعيده لوحة التحكم أبدًا ولا تديره.",
        no_token_configured_set_one_through_the:
          "لم يُهيَّأ أي رمز. عيّن واحدًا عبر واجهة سطر الأوامر أو ملف الإعدادات.",
        token_configured_manage_rotation:
          "الرمز مهيأ. أدر تدويره عبر واجهة سطر الأوامر أو ملف الإعدادات؛ لا يعيد الخادم القيمة الحالية أبدًا. نفّذ",
        pinchtab_config_token: "pinchtab config token",
        to_copy_it_to_your_clipboard: "لنسخه إلى الحافظة.",
        no_api_token_is_set_anyone_who_can:
          "لم يُعيَّن أي رمز API. يمكن لأي شخص يستطيع الوصول إلى هذا الخادم الوصول إلى نقاط النهاية المكشوفة. أبقِه على شبكات محلية موثوقة فقط، أو هيّئ رمزًا قويًا عبر واجهة سطر الأوامر أو ملف الإعدادات. حماية الوصول مسؤوليتك.",
        state_directory: "دليل الحالة",
        base_state_path_used_by_managed_child:
          "مسار الحالة الأساسي الذي تستخدمه مثيلات الأبناء المُدارة.",
        trust_proxy_headers: "الوثوق بترويسات الوكيل",
        trust_x_forwarded_proto_x_forwarded:
          "الوثوق بترويسات X-Forwarded-Proto وX-Forwarded-Host وForwarded في فحوصات الأصل. لا تمكّنه إلا عندما يعمل PinchTab خلف وكيل عكسي موثوق (مثل Caddy وnginx).",
        enabled: "ممكّن",
        disabled: "معطّل",
        cookie_secure_mode: "وضع Secure لملفات تعريف الارتباط",
        controls_whether_dashboard_session:
          "يتحكم في اشتراط HTTPS لملفات تعريف ارتباط جلسة لوحة التحكم. يفعّل «تلقائي» خاصية Secure على HTTPS فقط. ويعد «فرض Secure» مناسبًا عند وجود TLS أمام PinchTab.",
        auto: "تلقائي",
        force_secure: "فرض Secure",
        force_insecure: "فرض غير آمن",
        force_secure_blocks_dashboard_login_on:
          "يمنع «فرض Secure» تسجيل الدخول إلى لوحة التحكم عبر HTTP غير المشفّر. استخدمه عندما يُقدَّم PinchTab عبر HTTPS مباشرة أو خلف وكيل موثوق. وإذا انتهى TLS أمام PinchTab، فمكّن",
        trustproxyheaders: "trustProxyHeaders",
        so_forwarded_https_requests_are:
          "حتى يتم التعرف على طلبات HTTPS المحوّلة.",
        persist_dashboard_sessions: "الاحتفاظ بجلسات لوحة التحكم",
        keep_dashboard_login_sessions_across:
          "يحتفظ بجلسات تسجيل الدخول إلى لوحة التحكم عبر إعادات تشغيل الخادم. عطّله إذا أردت أن تفرض كل إعادة تشغيل تسجيل دخول جديدًا.",
        session_idle_timeout: "مهلة خمول الجلسة",
        how_long_an_unused_dashboard_session:
          "مدة بقاء جلسة لوحة تحكم غير مستخدمة صالحة. تُخزَّن بالثواني في الإعدادات.",
        session_max_lifetime: "أقصى مدة للجلسة",
        absolute_lifetime_for_a_dashboard:
          "المدة المطلقة لجلسة لوحة التحكم قبل وجوب إنشائها من جديد، حتى لو كانت نشطة.",
        require_elevation_for_config_saves: "طلب رفع الصلاحية لحفظ الإعدادات",
        ask_for_api_token_re_entry_before:
          "يطلب إعادة إدخال رمز API قبل حفظ تغييرات إعدادات الخادم الخلفي. معطّل افتراضيًا.",
        allow_attach: "السماح بالاتصال",
        permit_attaching_pinchtab_to_externally:
          "يسمح بإرفاق PinchTab بجلسات Chrome المُدارة خارجيًا.",
        enable: "تمكين",
        allowed_attach_hosts: "المضيفون المسموح بهم للاتصال",
        comma_separated_host_allowlist_for:
          'قائمة المضيفين المسموح بهم لطلبات الاتصال، مفصولة بفواصل. اقتصر على المضيفين الذين تتحكم بهم وتثق بهم. استخدام "*" يعطّل قائمة المضيفين المسموح بهم.',
        allowhosts: 'allowHosts: ["*"]',
        is_a_documented_non_default_security:
          "تجاوز موثّق وغير افتراضي ويقلل الأمان. يعطّل قائمة المضيفين المسموح بهم بالكامل ويسمح بطلبات اتصال بعيدة إلى أي مضيف يمكن الوصول إليه بمخطط مسموح. استخدمه فقط على شبكات معزولة يتحكم بها المشغل.",
        hosts_in_this_allowlist_may_be_used_for:
          "قد تُستخدم المضيفات في هذه القائمة لطلبات الاتصال البعيدة. الإدخالات الواسعة أو غير الموثوقة توسّع حدود الثقة وقد تكشف جلسات Chrome الخارجية ومحتوى المتصفح.",
        allowed_attach_schemes: "المخططات المسموح بها للاتصال",
        comma_separated_scheme_allowlist:
          "قائمة مخططات مسموح بها مفصولة بفواصل، وعادةً ws وwss.",
      },
      observabilitysettingssection: {
        observability: "قابلية المراقبة",
        activity_logging_tracks_api_requests:
          "يتتبع سجل النشاط طلبات API لأغراض التصحيح والتدقيق. تُخزَّن السجلات محليًا ويمكن الاستعلام عنها من صفحة النشاط.",
        activity_logging: "سجل النشاط",
        enable_or_disable_activity_event: "تمكين تسجيل أحداث النشاط أو تعطيله.",
        enabled: "ممكّن",
        disabled: "معطّل",
        retention_days: "مدة الاحتفاظ (أيام)",
        how_long_to_keep_activity_logs_before:
          "مدة الاحتفاظ بسجلات النشاط قبل التنظيف التلقائي. الاحتفاظ الأطول يستهلك مساحة أكبر لكنه يوفر سجل تدقيق أفضل.",
        session_idle_timeout_seconds: "مهلة خمول الجلسة (بالثواني)",
        time_before_an_inactive_agent_session:
          "المدة قبل اعتبار جلسة وكيل غير نشطة خاملة. تُستخدم لتجميع النشاط حسب الجلسة.",
      },
      profilessettingssection: {
        profiles: "الملفات الشخصية",
        profile_storage_is_host_level_changing:
          "تخزين الملفات الشخصية على مستوى المضيف. يتطلب تغيير الدليل الأساسي إعادة التشغيل، لأن مدير الملفات الشخصية والمنسّق يُنشآن به عند بدء التشغيل.",
        profiles_base_directory: "الدليل الأساسي للملفات الشخصية",
        root_directory_where_browser_profiles:
          "الدليل الجذر الذي تُخزَّن فيه ملفات المتصفح الشخصية.",
        default_profile: "الملف الشخصي الافتراضي",
        profile_name_used_when_the_server_needs:
          "اسم الملف الشخصي المستخدم عندما يحتاج الخادم إلى قيمة افتراضية ضمنية.",
      },
      defaultssettingssection: {
        instance_defaults: "الإعدادات الافتراضية للمثيلات",
        these_values_are_written_to_config_and:
          "تُكتب هذه القيم في الإعدادات وتُستخدم للمثيلات المُدارة الجديدة. أما المثيلات العاملة حاليًا فتبقي إعداداتها الحالية.",
        mode: "الوضع",
        default_browser_mode_for_new_launches:
          "وضع المتصفح الافتراضي لعمليات التشغيل الجديدة.",
        headless: "بدون واجهة",
        headed: "مع واجهة",
        stealth_level: "مستوى التخفي",
        bot_detection_evasion_profile_higher:
          "ملف تجنب كشف الروبوتات. قد تؤثر المستويات الأعلى في مراقبة الأخطاء وبعض ميزات المتصفح.",
        light: "خفيف",
        medium: "متوسط",
        full: "كامل",
        light_2: "خفيف:",
        default_baseline_stealth_keeps_the:
          "التخفي الأساسي الافتراضي. يحافظ على أقل مخاطر في التشغيل وعلى عقد JS مع إخفاء مؤشرات الأتمتة الأساسية.",
        default_product_security_baseline:
          "✓ خط الأساس الأمني الافتراضي للمنتج",
        no_intentional_api_realism_or_security:
          "✓ دون تضحية مقصودة بواقعية API أو بالأمان",
        medium_2: "متوسط:",
        non_default_risk_mode_adds_client_hints:
          "وضع مخاطر غير افتراضي. يضيف تلميحات العميل (Client Hints) وبدائل `chrome.runtime` ونشرًا إلى الإطارات الفرعية وتصفية للمكدس وإخفاءً للدوال بمظهر أصلي لتحسين التوافق مع مضادات الروبوتات.",
        alters_browser_visible_apis_and_error:
          "⚠ يغيّر واجهات API الظاهرة للمتصفح وسلوك الأخطاء والمكدس. قد ترى أدوات المراقبة والتصحيح نتائج مختلفة.",
        permissions_and_compatibility_shims_can:
          "⚠ قد تعيد الأذونات وبدائل التوافق قيمًا معدّلة عمدًا. لا تستخدم هذا كخط أساس أمني افتراضي.",
        reports_that_require_explicitly:
          "⚠ ينبغي التعامل مع التقارير التي تتطلب تمكين «متوسط» صراحةً كقبول مخاطر اختياري، لا كسلوك المسار الافتراضي.",
        full_2: "كامل:",
        highest_risk_non_default_mode_adds:
          "وضع غير افتراضي هو الأعلى مخاطرةً. يضيف تغييرات في الرسومات وcanvas والصوت وألوان النظام وWebRTC إضافة إلى «متوسط».",
        browser_output_is_intentionally_less:
          "⚠ مخرجات المتصفح أقل أصالة واستقرارًا عن قصد. قد تتعطل عمليات العرض والوسائط والشبكة أو تنحرف عن Chrome الحقيقي.",
        this_mode_is_not_an_acceptable_default:
          "⚠ هذا الوضع ليس وضعًا أمنيًا افتراضيًا مقبولًا. لا تمكّنه إلا عندما تقبل مساحة المقايضات هذه صراحةً.",
        reports_that_depend_on_enabling_full:
          "⚠ ينبغي تصنيف التقارير التي تعتمد على تمكين «كامل» كمخاطر غير افتراضية يتحملها المشغل، إلا إذا ثبت وجود تجاوز في المسار الافتراضي.",
        webrtc_webgl_canvas_and_audio_behavior:
          "⚠ قد ينحرف سلوك WebRTC وWebGL وcanvas والصوت جميعًا عن Chrome المرجعي.",
        tab_eviction_policy: "سياسة إخلاء علامات التبويب",
        how_pinchtab_behaves_when_a_managed:
          "كيف يتصرف PinchTab عندما يبلغ مثيل مُدار حد علامات التبويب.",
        reject_new_tabs: "رفض علامات التبويب الجديدة",
        close_oldest: "إغلاق الأقدم",
        close_least_recently_used: "إغلاق الأقل استخدامًا حديثًا",
        tab_lifecycle: "دورة حياة علامات التبويب",
        close_idle_closes_a_tab_after_a_text:
          "يُغلق «إغلاق الخاملة» علامة التبويب بعد استجابة /text أو /snapshot أو /action عند انقضاء المهلة؛ ويلغي /navigate ذلك. ويُجمّد «تجميد الخاملة» أي علامة تبويب لم يلمسها أي طلب خلال المهلة، ثم يلغي تجميدها عند طلبها التالي.",
        keep_never_auto_close: "الإبقاء (دون إغلاق تلقائي)",
        close_idle: "إغلاق الخاملة",
        freeze_idle: "تجميد الخاملة",
        auto_close_delay: "مهلة الإغلاق التلقائي",
        seconds_of_idleness_before_an_idle_tab:
          "ثواني الخمول قبل إغلاق علامة تبويب خاملة أو تجميدها. تُطبَّق فقط عندما تكون دورة الحياة «إغلاق الخاملة» أو «تجميد الخاملة».",
        restore_tabs_on_startup: "استعادة علامات التبويب عند بدء التشغيل",
        when_enabled_tabs_open_at_shutdown_are:
          "عند التمكين، تُعاد فتح علامات التبويب المفتوحة عند الإيقاف في بدء التشغيل التالي. معطّل افتراضيًا — تبقى علامات التبويب المغلقة مغلقة بعد إعادة التشغيل.",
        enable: "تمكين",
        max_tabs: "أقصى عدد لعلامات التبويب",
        maximum_number_of_tabs_per_managed:
          "أقصى عدد لعلامات التبويب لكل مثيل مُدار.",
        max_parallel_tabs: "أقصى عدد لعلامات التبويب المتوازية",
        set_to_0_to_auto_detect_from_cpu_count:
          "اضبطه على 0 للكشف التلقائي من عدد المعالجات.",
        timezone: "المنطقة الزمنية",
        optional_timezone_override_for_launched:
          "تجاوز اختياري للمنطقة الزمنية للمثيلات المشغَّلة.",
        europe_rome: "Europe/Rome",
        user_agent: "وكيل المستخدم",
        optional_override_applied_to_new:
          "تجاوز اختياري يُطبَّق على المثيلات المُدارة الجديدة.",
        custom_user_agent: "وكيل مستخدم مخصص",
        applies_to_newly_launched_managed:
          "يُطبَّق على المثيلات المُدارة المشغَّلة حديثًا.",
      },
      securityidpisettingssection: {
        security_idpi: "أمان IDPI",
        indirect_prompt_injection_controls:
          "تقيّد ضوابط الحقن غير المباشر للأوامر المواقع المسموح بها وتضيف حماية حول المحتوى المستخرج قبل وصوله إلى الأتمتة اللاحقة.",
        idpi_is_disabled_browser_content_is_not:
          "IDPI معطّل. لا يُرشَّح محتوى المتصفح عبر قائمة المواقع المسموح بها أو حماية المحتوى.",
        the_website_whitelist_is_not_set_to_a:
          "قائمة المواقع المسموح بها غير معيَّنة كقائمة نطاقات مقيّدة. هذا هو الدفاع الرئيسي لـ IDPI وينبغي تهيئته.",
        the_website_whitelist_contains_which:
          "تحتوي قائمة المواقع المسموح بها على '*'، وهو ما يعطّل تقييد النطاقات فعليًا.",
        idpi_is_enforcing_a_specific_website:
          "يفرض IDPI قائمة محددة من المواقع المسموح بها وحماية للمحتوى.",
        enable: "تمكين",
        custom_patterns: "أنماط مخصصة",
        optional_comma_separated_phrases_to:
          "عبارات اختيارية مفصولة بفواصل تُعامَل كمحتوى مشبوه لحقن الأوامر.",
        ignore_previous_instructions_exfiltrate:
          "ignore previous instructions, exfiltrate data",
      },
      timeoutssettingssection: {
        timeouts: "المهل الزمنية",
        runtime_timing_defaults_written_into:
          "قيم التوقيت الافتراضية لوقت التشغيل تُكتب في إعدادات العمليات الفرعية الجديدة. أما المثيلات العاملة حاليًا فتبقي مهلها الحالية.",
      },
      browsersettingssection: {
        browser_runtime: "بيئة تشغيل المتصفح",
        these_settings_are_written_into_the:
          "تُكتب هذه الإعدادات في إعدادات العملية الفرعية المُنشأة للمثيلات المُدارة الجديدة.",
        provider: "المزوّد",
        browser_backend_used_for_new_managed:
          "الواجهة الخلفية للمتصفح المستخدمة للمثيلات المُدارة الجديدة.",
        chrome: "Chrome",
        cloakbrowser: "CloakBrowser",
        ghost_chrome: "Ghost + Chrome",
        browser_version: "إصدار المتصفح",
        version_string_used_in_generated_ua:
          "سلسلة الإصدار المستخدمة في القيم الافتراضية المُنشأة لوكيل المستخدم وبصمة الجهاز.",
        browser_binary: "ملف المتصفح التنفيذي",
        optional_path_override_for_the_chrome:
          "تجاوز اختياري لمسار الملف التنفيذي لـ Chrome أو CloakBrowser.",
        fingerprint_seed: "بذرة البصمة",
        deterministic_cloakbrowser_identity:
          "بذرة هوية حتمية لـ CloakBrowser. اتركه فارغًا للحصول على هوية جديدة في كل تشغيل.",
        fingerprint_platform: "منصة البصمة",
        native_platform_fingerprint_reported_by:
          "بصمة المنصة الأصلية التي يبلّغ عنها CloakBrowser.",
        auto: "تلقائي",
        windows: "Windows",
        macos: "macOS",
        linux: "Linux",
        cloak_locale: "لغة Cloak",
        locale_passed_as_fingerprint_locale:
          "اللغة المُمرَّرة كوسيط --fingerprint-locale.",
        cloak_timezone: "المنطقة الزمنية لـ Cloak",
        timezone_passed_as_fingerprint_timezone:
          "المنطقة الزمنية المُمرَّرة كوسيط --fingerprint-timezone.",
        webrtc_ip: "عنوان WebRTC",
        explicit_replacement_ip_or_auto_for:
          "عنوان IP بديل صريح، أو auto ليتولى CloakBrowser تحديد عنوان خروج الوكيل.",
        fonts_directory: "دليل الخطوط",
        directory_containing_target_platform:
          "الدليل الذي يحتوي على خطوط المنصة الهدف لـ CloakBrowser.",
        storage_quota: "حصة التخزين",
        storage_quota_in_mb_passed_as:
          "حصة التخزين بالميغابايت المُمرَّرة كوسيط --fingerprint-storage-quota.",
        native_stealth_only: "التخفي الأصلي فقط",
        disable_pinchtab_js_stealth_overlays:
          "يعطّل طبقات التخفي البرمجية (JS) في PinchTab وأعلام التشغيل التي تخفي الأتمتة.",
        use_cloakbrowser_native_patches: "استخدام تصحيحات CloakBrowser الأصلية",
        extra_flags: "أعلام إضافية",
        additional_chrome_flags_appended_when:
          "أعلام Chrome إضافية تُضاف عند تشغيل المثيلات المُدارة.",
        extension_paths: "مسارات الإضافات",
        comma_separated_extension_directories:
          "أدلة الإضافات المراد تحميلها، مفصولة بفواصل. افتراضيًا يستخدم PinchTab المجلد المحلي extensions/ داخل دليل الحالة أو الإعدادات. عيّن مسارات مخصصة هنا لتجاوز ذلك الافتراضي، أو أفرغ الحقل لتعطيل تحميل الإضافات.",
      },
      dashboardsettingssection: {
        dashboard_preferences: "تفضيلات لوحة التحكم",
        language: "اللغة",
        choose_the_language_of_the_dashboard: "اختر لغة واجهة لوحة التحكم.",
        these_controls_affect_this_dashboard_ui:
          "تؤثر هذه الخيارات في واجهة لوحة التحكم هذه فقط. تُخزَّن محليًا في متصفحك ولا تتطلب إعادة تشغيل الخادم الخلفي.",
        screencast_frame_rate: "معدل إطارات البث",
        controls_how_often_live_previews:
          "يتحكم في تكرار طلب المعاينات المباشرة لإطارات جديدة.",
        fps: "fps",
        screencast_quality: "جودة البث",
        jpeg_quality_for_tab_preview_streams:
          "جودة JPEG لتدفقات معاينة علامات التبويب.",
        screencast_width: "عرض البث",
        maximum_preview_width_for_live_tiles:
          "أقصى عرض للمعاينة في البطاقات المباشرة.",
        px: "px",
        memory_metrics: "مقاييس الذاكرة",
        poll_every_running_instance_for_browser:
          "يستعلم من كل مثيل عامل عن ذاكرة المتصفح في كل دورة مراقبة: الذاكرة المقيمة عبر شجرة عمليات Chrome، إضافة إلى كومة JS وعدّادات DOM المقروءة من كل علامة تبويب مفتوحة عبر CDP. التكلفة المقيسة: نحو مللي ثانية لكل علامة تبويب مفتوحة، زائد بضع عشرات من المللي ثانية لمسح شجرة العمليات، لكل مثيل في كل دورة.",
        enable: "تمكين",
        polling_interval: "فترة الاستعلام",
        how_frequently_the_dashboard_asks_the:
          "معدل تكرار طلب لوحة التحكم مقاييس محدثة من الخادم الخلفي.",
        s: "s",
        reasoning_output: "مخرجات الاستدلال",
        choose_whether_the_live_agent_feed:
          "اختر ما إذا كان بث الوكيل المباشر يعرض استدعاءات الأدوات أو تحديثات التقدم أو كليهما.",
        tool_calls_only: "استدعاءات الأدوات فقط",
        progress_only: "التقدم فقط",
        both: "كليهما",
      },
      autosolversettingssection: {
        autosolver: "AutoSolver",
        these_settings_are_saved_into_the:
          "تُحفَظ هذه الإعدادات في ملف إعدادات PinchTab. تبقى مفاتيح API للمزوّدين الخارجيين للكتابة فقط ويجب تعيينها مباشرةً في ذلك الملف.",
        config_file: "ملف الإعدادات",
        dashboard_edits_are_written_back_to:
          "تُكتب تعديلات لوحة التحكم مرة أخرى في هذا الملف. عيّن مفاتيح المزوّدين الخارجيين تحت autoSolver.external في ملف الإعدادات نفسه.",
        config_path_unavailable: "مسار الإعدادات غير متاح",
        enable_autosolver: "تمكين AutoSolver",
        turns_on_the_autosolver_runtime:
          "يشغّل إعدادات وقت تشغيل AutoSolver لتدفقات التحديات المدعومة.",
        enabled: "ممكّن",
        disabled: "معطّل",
        auto_trigger: "تفعيل تلقائي",
        automatically_run_autosolver_after:
          "يشغّل AutoSolver تلقائيًا بعد طلبات التنقل والإجراءات المدعومة.",
        trigger_on_navigate: "التشغيل عند التنقل",
        run_autosolver_checks_after_successful:
          "ينفّذ فحوصات AutoSolver بعد استدعاءات التنقل الناجحة.",
        trigger_on_action: "التشغيل عند الإجراءات",
        run_autosolver_checks_after_successful_2:
          "ينفّذ فحوصات AutoSolver بعد استدعاءات الإجراءات الناجحة.",
        max_attempts: "أقصى عدد للمحاولات",
        maximum_autosolver_retries_before_the:
          "أقصى عدد لمحاولات AutoSolver قبل أن يتخلى المسار عن المهمة.",
        solver_timeout_sec: "مهلة الحلّال (ثانية)",
        per_solver_timeout_for_each_attempt: "المهلة لكل حلّال في كل محاولة.",
        retry_base_delay_ms: "تأخير إعادة المحاولة الأساسي (مللي ثانية)",
        base_retry_backoff_delay_between:
          "تأخير الانتظار الأساسي بين محاولات AutoSolver.",
        retry_max_delay_ms: "أقصى تأخير لإعادة المحاولة (مللي ثانية)",
        maximum_retry_backoff_delay_cap_between:
          "الحد الأعلى لتأخير الانتظار بين محاولات AutoSolver.",
        solvers: "الحلّالات",
        comma_separated_ordered_list_of_solver:
          "قائمة مرتبة بأسماء الحلّالات المراد تجربتها، مفصولة بفواصل. استخدم GET /solvers أو GET /config/autosolver للتأكد من الأسماء المتاحة في وقت التشغيل.",
        llm_provider: "مزوّد LLM",
        optional_provider_name_used_when_llm:
          "اسم مزوّد اختياري يُستخدم عند تمكين الرجوع إلى LLM.",
        llm_fallback: "الرجوع إلى LLM",
        use_an_llm_as_the_last_resort_after:
          "استخدام LLM كخيار أخير بعد فشل الحلّالات المسجَّلة.",
        external_provider_keys: "مفاتيح المزوّدين الخارجيين",
        capsolver_and_2captcha_credentials_are:
          "لا تُعرض بيانات اعتماد Capsolver و2Captcha في لوحة التحكم ويجب إدارتها في ملف الإعدادات. ولا يظهر هذان المزوّدان في قوائم الحلّالات وقت التشغيل إلا عند تهيئة المفاتيح.",
        open_the_config_file_above_and_set: "افتح ملف الإعدادات أعلاه وعيّن",
        autosolver_external_capsolverkey: "autoSolver.external.capsolverKey",
        autosolver_external_twocaptchakey: "autoSolver.external.twoCaptchaKey",
        there_the_dashboard_does_not_display_or:
          "هناك. لا تعرض لوحة التحكم هذه القيم ولا تعدّلها، ولا توجد متغيرات بيئة لتجاوزها.",
      },
    },
    monitoring: {
      monitoringemptystate: {
        starting_default_instance: "جارٍ تشغيل المثيل الافتراضي…",
        start_default_instance: "تشغيل المثيل الافتراضي",
        open_default_profile: "فتح الملف الشخصي الافتراضي",
        no_active_instances: "لا توجد مثيلات نشطة",
        pinchtab_expected_a_default_instance:
          "كان PinchTab يتوقع مثيلًا افتراضيًا، لكنه لم يصبح متاحًا. شغّله يدويًا أو افحص الملف الشخصي.",
        start_the_default_instance_or_open:
          "شغّل المثيل الافتراضي أو افتح «الملفات الشخصية» لتشغيل ملف آخر.",
        waiting_for_default_profile:
          "ينتظر PinchTab أن يصبح الملف الشخصي الافتراضي متاحًا. ستُعاد المحاولة تلقائيًا (تبقّى {{count}} فحوص).",
      },
      defaultinstancemodal: {
        start_default_instance: "تشغيل المثيل الافتراضي",
        cancel: "إلغاء",
        start_headed: "التشغيل مع واجهة",
        start_headless: "التشغيل بدون واجهة",
        choose_how_to_launch_the_default:
          "اختر كيفية تشغيل الملف الشخصي الافتراضي في هذه الجلسة.",
        configured_default_mode: "الوضع الافتراضي المهيأ:",
      },
    },
    profilespage: {
      loading_profiles: "جارٍ تحميل الملفات الشخصية…",
      no_profiles_yet: "لا توجد ملفات شخصية بعد",
      click_new_profile_to_create_one: "انقر على «ملف شخصي جديد» لإنشاء واحد",
      new_profile: "ملف شخصي جديد",
      profiles: "الملفات الشخصية",
      total: "الإجمالي",
      no_account: "بلا حساب",
      profile_deleted: 'تم حذف الملف الشخصي "{{name}}"',
    },
    settingspage: {
      confirm_admin_action: "تأكيد إجراء إداري",
      cancel: "إلغاء",
      verifying: "جارٍ التحقق…",
      continue: "متابعة",
      re_enter_the_api_token_to_save_backend:
        "أعد إدخال رمز API لحفظ تغييرات إعدادات الخادم الخلفي. تبقى الجلسة المرفوعة الصلاحية نشطة لفترة قصيرة، لذا لا تحتاج إلى تكرار ذلك لكل إجراء إداري.",
      api_token: "رمز API",
      paste_api_token: "الصق رمز API",
      restart_required: "يلزم إعادة التشغيل",
      reset: "إعادة تعيين",
      saving: "جارٍ الحفظ…",
      save: "حفظ",
      restart_needed_for: "إعادة التشغيل مطلوبة من أجل:",
      loading_settings: "جارٍ تحميل الإعدادات…",
      settings_eyebrow: "الإعدادات",
    },
  },
  activities: {
    activityexplorer: {
      agent: "الوكيل",
      all: "الكل",
      session: "الجلسة",
      request_timeline: "الخط الزمني للطلبات",
      activity: "النشاط",
      failed_to_load_activity: "تعذّر تحميل النشاط",
    },
    agentstreampanel: {
      no_matching_activity: "لا يوجد نشاط مطابق",
      adjust_the_filters_or_generate_some:
        "عدّل عوامل التصفية أو أنشئ بعض الحركة من واجهة سطر الأوامر أو MCP أو لوحة التحكم.",
    },
    streamrow: {
      ms: "ms",
      navigate_to_page: "الانتقال إلى الصفحة",
      capture_page_snapshot: "التقاط لقطة للصفحة",
      open_screencast_stream: "فتح بث الشاشة",
      extract_text_from_page: "استخراج النص من الصفحة",
      click_on_page: "النقر على الصفحة",
      double_click_on_page: "النقر المزدوج على الصفحة",
      type_into_page: "الكتابة في الصفحة",
      hover_on_page: "التحويم على الصفحة",
      fill_field: "تعبئة الحقل",
      select_option: "اختيار خيار",
      scroll_page: "تمرير الصفحة",
      press_key: "ضغط مفتاح",
      wait_for_condition: "انتظار شرط",
      evaluate_javascript: "تنفيذ JavaScript",
      upload_file: "رفع ملف",
      download_file: "تنزيل ملف",
      on_tab: " في علامة التبويب ",
      navigate_to_url: "الانتقال إلى {{url}}",
      click_ref: 'النقر على "{{ref}}"',
      double_click_ref: 'النقر المزدوج على "{{ref}}"',
      type_into_ref: 'الكتابة في "{{ref}}"',
      hover_ref: 'التحويم على "{{ref}}"',
      fill_ref: 'تعبئة "{{ref}}"',
      select_ref: 'اختيار "{{ref}}"',
      press_key_on_ref: 'ضغط مفتاح على "{{ref}}"',
    },
    activityline: {
      progress: "التقدم",
      agent_reported_progress: "أبلغ الوكيل عن تقدّم",
      ms: "ms",
    },
    activityitemline: {
      tab_paused_for_human_handoff:
        "علامة التبويب متوقفة مؤقتًا بانتظار تدخل بشري",
      tab_is_paused_for_human_handoff:
        "علامة التبويب متوقفة مؤقتًا بانتظار تدخل بشري",
      resume_automation_after_manual: "استئناف الأتمتة بعد حل التحدي يدويًا",
      resuming: "جارٍ الاستئناف…",
      resolve_challenge: "حل التحدي",
      browser_was_escalated: "تم رفع صلاحيات المتصفح",
      escalated: "مرفوع الصلاحية",
      navigate_to_page: "الانتقال إلى الصفحة",
      capture_page_snapshot: "التقاط لقطة للصفحة",
      open_screencast_stream: "فتح بث الشاشة",
      extract_text_from_page: "استخراج النص من الصفحة",
      take_screenshot: "التقاط لقطة شاشة",
      export_page_as_pdf: "تصدير الصفحة بصيغة PDF",
      click_on_page: "النقر على الصفحة",
      double_click_on_page: "النقر المزدوج على الصفحة",
      type_into_page: "الكتابة في الصفحة",
      hover_on_page: "التحويم على الصفحة",
      fill_field: "تعبئة الحقل",
      select_option: "اختيار خيار",
      scroll_page: "تمرير الصفحة",
      press_key: "ضغط مفتاح",
      wait_for_condition: "انتظار شرط",
      evaluate_javascript: "تنفيذ JavaScript",
      upload_file: "رفع ملف",
      download_file: "تنزيل ملف",
      resume_failed: "فشل الاستئناف",
      navigate_to_url: "الانتقال إلى {{url}}",
      click_ref: 'النقر على "{{ref}}"',
      double_click_ref: 'النقر المزدوج على "{{ref}}"',
      type_into_ref: 'الكتابة في "{{ref}}"',
      hover_ref: 'التحويم على "{{ref}}"',
      fill_ref: 'تعبئة "{{ref}}"',
      select_ref: 'اختيار "{{ref}}"',
      press_key_on_ref: 'ضغط مفتاح على "{{ref}}"',
    },
    activitytimeline: {
      timeline: "الخط الزمني",
      recent_events: "الأحداث الأخيرة",
      no_matching_activity: "لا يوجد نشاط مطابق",
      adjust_the_filters_or_generate_some:
        "عدّل عوامل التصفية أو أنشئ بعض الحركة من واجهة سطر الأوامر أو MCP أو لوحة التحكم.",
    },
    activefilterbar: {
      clear_filters: "مسح عوامل التصفية",
    },
    activityfiltermenu: {
      "200": "200",
      "3600": "3600",
      profile: "الملف الشخصي",
      tab: "علامة تبويب",
      agent: "الوكيل",
      action: "إجراء",
      advanced_filters: "عوامل تصفية متقدمة",
      hide: "إخفاء",
      show: "إظهار",
      instance: "المثيل",
      path_prefix: "بادئة المسار",
      tabs_or_instances: "/tabs/ or /instances/",
      age_seconds: "العمر (ثواني)",
      limit: "الحد",
      clear: "مسح",
      search: "بحث",
      any_profile: "أي ملف شخصي",
      any_tab: "أي علامة تبويب",
      any_agent: "أي وكيل",
      any_action: "أي إجراء",
      any_instance: "أي مثيل",
    },
    agentworkspacesidebar: {
      agents: "الوكلاء",
      activities: "الأنشطة",
      no_agent_activity_observed_yet: "لم يُلاحظ أي نشاط للوكلاء بعد",
      all_agents: "جميع الوكلاء",
    },
    copyidpill: {
      copied: "تم النسخ",
      copy_tab_id: "نسخ معرّف علامة التبويب {{id}}",
    },
    hooks: {
      useactivitydata: {
        failed_to_load_activity: "تعذّر تحميل النشاط",
        failed_to_load_agent_activity: "تعذّر تحميل نشاط الوكيل",
      },
    },
  },
  settings: {
    sections: {
      dashboard: {
        dashboard: "لوحة التحكم",
        local_monitoring_and_screencast: "تفضيلات المراقبة والبث المحلية.",
      },
      defaults: {
        instance_defaults: "الإعدادات الافتراضية للمثيلات",
        how_new_managed_browser_instances_launch:
          "كيفية تشغيل مثيلات المتصفح المُدارة الجديدة.",
      },
      orchestration: {
        orchestration: "التنسيق",
        routing_strategy_port_range_and:
          "استراتيجية التوجيه ونطاق المنافذ وسياسة التخصيص.",
      },
      security: {
        security: "الأمان",
        sensitive_endpoint_gates_and_access:
          "بوابات نقاط النهاية الحساسة وضوابط الوصول.",
      },
      "security-idpi": {
        security_idpi: "أمان IDPI",
        indirect_prompt_injection_website_and:
          "دفاعات المواقع والمحتوى ضد الحقن غير المباشر للأوامر.",
      },
      profiles: {
        profiles: "الملفات الشخصية",
        shared_profile_storage_and_default:
          "التخزين المشترك للملفات الشخصية وسلوك الملف الافتراضي.",
      },
      network: {
        network_attach: "الشبكة والاتصال",
        server_binding_auth_and_attach_policy:
          "ربط الخادم والمصادقة وسياسة الاتصال.",
      },
      browser: {
        browser_runtime: "بيئة تشغيل المتصفح",
        chrome_binary_version_flags_and:
          "ملف Chrome التنفيذي والإصدار والأعلام والإضافات.",
      },
      timeouts: {
        timeouts: "المهل الزمنية",
        action_navigation_shutdown_and_wait:
          "توقيت الإجراءات والتنقل والإيقاف والانتظار.",
      },
      autosolver: {
        autosolver: "AutoSolver",
        challenge_solving_behavior_and_config:
          "سلوك حل التحديات والمزوّدون المستندون إلى ملف الإعدادات.",
      },
      observability: {
        observability: "قابلية المراقبة",
        activity_logging_and_retention_settings:
          "إعدادات سجل النشاط ومدة الاحتفاظ.",
      },
    },
    security: {
      endpoints: {
        allowEvaluate: {
          allow_evaluate: "السماح بـ evaluate",
        },
        allowMacro: {
          allow_macro: "السماح بـ macro",
        },
        allowScreencast: {
          allow_screencast: "السماح بالبث",
        },
        allowDownload: {
          allow_download: "السماح بالتنزيل",
        },
        allowCookies: {
          allow_cookies: "السماح بملفات تعريف الارتباط",
        },
        allowUpload: {
          allow_upload: "السماح بالرفع",
        },
        allowNetworkIntercept: {
          allow_network_interception: "السماح باعتراض الشبكة",
          lets_agents_install_rules_to_abort_or:
            "يسمح للوكلاء بتثبيت قواعد لإلغاء طلبات HTTP أو تلبيتها (محاكاتها) في علامة تبويب. عند التمكين، يكون تزوير الاستجابات ممنوعًا على المضيفات المدرجة في «المواقع المسموح بها» أدناه ومسموحًا في غيرها. تزوير الاستجابات على مضيفات أذنت للوكيل باستخدامها (مثل بنكك) هو النتيجة الأعلى مخاطرةً، ولهذا تُحمى مضيفات القائمة المسموح بها وليس العكس. تُتخطى طلبات OPTIONS المسبقة افتراضيًا لعدم إفساد CORS.",
        },
        allowFileScheme: {
          allow_file_navigation: "السماح بالتنقل عبر file://",
          lets_agents_open_local_file_urls_a_file:
            "يسمح للوكلاء بفتح عناوين file:// المحلية. عنوان file:// ليس له مضيف، لذا لا يخضع لقيد «المواقع المسموح بها» أدناه ويتجاوز الحماية من SSRF وعناوين IP الخاصة — وتمكينه يمنح حق القراءة (عبر اللقطة أو لقطة الشاشة أو الاستخراج) لأي ملف محلي تستطيع عملية الخادم قراءته. يبقى محظورًا ما دامت قائمة مسموح بها في الوضع الصارم نشطة. لا تمكّنه إلا على أجهزة موثوقة بمستأجر واحد.",
        },
      },
      idpi: {
        enabled: {
          enable_idpi: "تمكين IDPI",
          turn_on_indirect_prompt_injection:
            "يشغّل الدفاعات ضد الحقن غير المباشر للأوامر.",
        },
        strictMode: {
          strict_mode: "الوضع الصارم",
          block_disallowed_domains_and_suspicious:
            "حظر النطاقات غير المسموح بها والمحتوى المشبوه بدلًا من التحذير فقط.",
        },
        scanContent: {
          scan_content: "فحص المحتوى",
          inspect_extracted_text_and_snapshots:
            "يفحص النص المستخرج واللقات بحثًا عن أنماط حقن الأوامر.",
        },
        wrapContent: {
          wrap_content: "تغليف المحتوى",
          mark_returned_page_text_as_untrusted:
            "يوسم نص الصفحة المُعاد كمحتوى غير موثوق للمستهلكين اللاحقين.",
        },
      },
    },
    defaults: {
      booleans: {
        blockImages: {
          block_images: "حظر الصور",
        },
        blockMedia: {
          block_media: "حظر الوسائط",
        },
        blockAds: {
          block_ads: "حظر الإعلانات",
        },
        noAnimations: {
          disable_css_animations: "تعطيل حركات CSS",
        },
        noRestore: {
          skip_session_restore: "تخطي استعادة الجلسة",
        },
      },
      timeouts: {
        actionSec: {
          action_timeout: "مهلة الإجراءات",
          maximum_time_for_action_requests: "أقصى مدة لطلبات الإجراءات.",
        },
        navigateSec: {
          navigate_timeout: "مهلة التنقل",
          maximum_time_for_navigation_requests: "أقصى مدة لطلبات التنقل.",
        },
        shutdownSec: {
          shutdown_timeout: "مهلة الإيقاف",
          grace_period_before_force_closing_a:
            "مهلة السماح قبل الإغلاق القسري لعملية فرعية.",
        },
        waitNavMs: {
          wait_after_navigation_delay: "تأخير ما بعد التنقل",
          post_navigation_stabilization_delay_in:
            "تأخير الاستقرار بعد التنقل بالمللي ثانية.",
        },
      },
    },
    notices: {
      backend_config_saved_dynamic_changes:
        "تم حفظ إعدادات الخادم الخلفي. طُبِّقت التغييرات الديناميكية حيث أمكن.",
      backend_config_saved_dynamic_changes_2:
        "تم حفظ إعدادات الخادم الخلفي. طُبِّقت التغييرات الديناميكية حيث أمكن. يُنصح بإعادة التشغيل لتغييرات مستوى الخادم.",
      preferencesSaved: "تم حفظ تفضيلات لوحة التحكم في هذا المتصفح.",
    },
    errors: {
      loadFailed: "تعذّر تحميل الإعدادات",
      saveFailed: "تعذّر حفظ الإعدادات",
      tokenVerifyFailed: "تعذّر التحقق من رمز API",
    },
  },
  monitoring: {
    errors: {
      startInstanceFailed: "تعذّر تشغيل المثيل",
    },
  },
  errors: {
    requestFailed: "فشل الطلب",
  },
  auth: {
    insecureTransport:
      "تعمل جلسة لوحة التحكم عبر HTTP غير آمن؛ استخدم HTTPS أو localhost لحماية أقوى للجلسة.",
  },
};

export default messages;
