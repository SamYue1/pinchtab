import type { Messages } from "../i18n/messages";

const messages: Messages = {
  app: {
    name: "PinchTab",
    checking_server_authentication: "Проверка аутентификации на сервере…",
    pinchtab_is_restarting_or_unreachable:
      "PinchTab перезапускается или недоступен.",
    automatic_retries_stopped: " Автоматические повторы остановлены.",
    retry_now: "Повторить сейчас",
    refresh: "Обновить",
  },
  profiles: {
    profiletoolbarbuttons: {
      copy_id: "Копировать ID",
      delete: "Удалить",
      save: "Сохранить",
      stop: "Остановить",
      start: "Запустить",
      delete_profile: "Удалить профиль",
      cancel: "Отмена",
      delete_profile_2: "Удалить профиль «",
      every_cookie_login_and_session_stored:
        "»? Все сохранённые в нём cookie, данные входа и сеансы будут безвозвратно потеряны. Отменить это нельзя.",
      copied: "Скопировано",
      failed: "Не удалось",
    },
    profilemetainfopanel: {
      profile_panel: "Панель профиля",
      status: "Состояние",
      port: "Порт",
      browser: "Браузер",
      size: "Размер",
      account: "Аккаунт",
      identity: "Идентификация",
      connection: "Подключение",
      cdp_attached: "CDP подключён",
      cdp_url: "URL CDP",
      path: "Путь",
      not_found: " (не найдено)",
      attached_via_cdp: "Подключено через CDP",
      headless: "Без интерфейса",
      headed: "С интерфейсом",
    },
    profilecard: {
      error: "ошибка",
      stopped: "остановлено",
      size: "Размер",
      account: "Аккаунт",
      use_when: "Использовать когда",
      details: "Подробности",
      stop: "Остановить",
      start: "Запустить",
    },
    profiledetailspanel: {
      select_a_profile_to_inspect_its:
        "Выберите профиль, чтобы посмотреть его экземпляр, активные вкладки и журналы.",
      live: "В реальном времени",
      tabs: "Вкладки",
      logs: "Журналы",
      no_tabs_open: "Нет открытых вкладок.",
      instance_not_running: "Экземпляр не запущен.",
      profile_name: "Профиль: {{name}}",
    },
    profilebasicinfopanel: {
      name: "Имя",
      use_this_profile_when: "Использовать этот профиль когда",
    },
    profileliveviewpanel: {
      no_tabs_open: "Нет открытых вкладок",
      instance_not_running_start_the_profile:
        "Экземпляр не запущен. Запустите профиль, чтобы увидеть режим реального времени.",
    },
    instancelogspanel: {
      loading_logs: "Загрузка журналов…",
      no_instance_logs_available: "Журналы экземпляра недоступны.",
    },
    groups: {
      user: "Профили",
      temporary: "Временные",
      quarantined: "В карантине",
    },
  },
  components: {
    atoms: {
      debugpanel: {
        debug: "🐛 Отладка",
        debug_panel: "Панель отладки",
        instances: "Экземпляры:",
      },
      emptystate: {
        dashboard: "Панель",
      },
      modal: {
        dashboard: "Панель",
        close: "Закрыть",
      },
      errorboundary: {
        something_went_wrong: "⚠️ Что-то пошло не так",
        unknown_error: "Неизвестная ошибка",
        try_again: "Повторить",
      },
    },
    screencast: {
      screencaststatusbar: {
        decrease_fps: "Уменьшить FPS",
        increase_fps: "Увеличить FPS",
        take_full_quality_screenshot_png:
          "Сделать снимок в полном качестве (PNG)",
        download_as_pdf: "Скачать как PDF",
        fps: "FPS (",
      },
      screencasttile: {
        tab_preview: "Предпросмотр вкладки",
        connection_lost: "Соединение потеряно",
        show_static_preview: "Показать статичный предпросмотр",
        retry_connection: "Повторить подключение",
      },
      framedecode: {
        failed_to_decode_screencast_frame:
          "Не удалось декодировать кадр трансляции",
      },
    },
    molecules: {
      createprofilemodal: {
        new_profile: "📁 Новый профиль",
        cancel: "Отмена",
        create: "Создать",
        name: "Имя",
        e_g_personal_work_scraping: "напр. личный, рабочий, парсинг",
        use_this_profile_when_helps_agents_pick:
          "Использовать этот профиль когда (помогает агентам выбрать нужный профиль)",
        e_g_i_need_to_access_gmail_for_the_team:
          "напр. Нужен доступ к Gmail под командным аккаунтом",
        import_from_optional_chrome_user_data:
          "Импортировать из (необязательно — путь к данным пользователя Chrome)",
        e_g_users_you_library_application:
          "напр. /Users/you/Library/Application Support/Google/Chrome",
      },
      navbar: {
        pinchtab: "PinchTab",
        logout: "Выйти",
        refresh_r: "Обновить (⌘R)",
        toggle_menu: "Переключить меню",
        monitoring: "Мониторинг",
        agents: "Агенты",
        profiles: "Профили",
        settings: "Настройки",
      },
      instancestats: {
        instance: "Экземпляр",
        status: "Состояние",
        uptime: "Время работы",
        port: "Порт",
        crashes: "Сбои",
        browsing: "Просмотр",
        tabs: "Вкладки",
        domains: "Домены",
        resources: "Ресурсы",
        memory: "Память",
        renderers: "Процессы отрисовки",
        pages: "Страницы",
        js_heap: "Куча JS",
        dom_nodes: "Узлы DOM",
        listeners: "Обработчики",
        frames: "Фреймы",
        unreadable: "Нечитаемые",
        just_now: "только что",
        tabs_open_before_it_were_lost: "ранее открытые вкладки были потеряны",
        rss_across_the_browser_process_tree:
          "RSS по всему дереву процессов браузера",
        tabs_that_did_not_answer_not_counted:
          "вкладки, не ответившие на запрос (не учтены)",
        last_crash:
          "последний: {{reason}} в {{time}} · ранее открытые вкладки были потеряны",
        heap_summary_one: "использовано / всего, суммарно по {{count}} вкладке",
        heap_summary_other:
          "использовано / всего, суммарно по {{count}} вкладкам",
        document_count_one: "{{count}} документ",
        document_count_other: "{{count}} документов",
      },
      agentitem: {
        tab_paused_for_human_handoff:
          "вкладка приостановлена для ручного вмешательства",
        just_now: "только что",
        session_at: "Сеанс {{time}}",
        session_range: "Сеанс {{start}}–{{end}}",
      },
      startinstancemodal: {
        start_profile: "🖥️ Запустить профиль",
        cancel: "Отмена",
        start: "Запустить",
        port: "Порт",
        auto_select_from_configured_range:
          "Автовыбор из настроенного диапазона",
        leave_blank_to_auto_select_a_free_port:
          "Оставьте пустым, чтобы автоматически выбрать свободный порт из настроенного диапазона.",
        headless_best_for_docker_vps: "Без интерфейса (лучше для Docker/VPS)",
        browser: "Браузер",
        server_default: "Значение сервера по умолчанию",
        chrome: "Chrome",
        cloakbrowser: "CloakBrowser",
        ghost_chrome: "Ghost + Chrome",
        direct_launch_command_backup: "Команда прямого запуска (резервная)",
        copy_command: "Копировать команду",
        replace: "Заменить",
        pinchtab_config_token: "pinchtab config token",
        when_auth_is_enabled: "когда включена аутентификация.",
        with_the_value_from: "со значением из",
        port_must_be_a_whole_number_between_1:
          "Порт должен быть целым числом от 1 до 65535.",
        profile_id_missing: "Не указан ID профиля",
        failed_to_launch_instance: "Не удалось запустить экземпляр",
        copied: "Скопировано!",
        failed_to_copy: "Не удалось скопировать",
      },
      handoffnotifications: {
        human_intervention_required: "Требуется вмешательство человека",
        dismiss_notification: "Закрыть уведомление",
        reason: "Причина:",
        resume: "Продолжить",
      },
      serverstatusbadge: {
        expand_instance_list: "Развернуть список экземпляров",
        collapse_instance_list: "Свернуть список экземпляров",
        tab: "вкладка",
        restart_required: "Требуется перезапуск",
        server_running: "Сервер работает",
        restart_required_2: "Требуется перезапуск",
        running: "Работает",
        server_running_no_instances: "Сервер работает, экземпляров нет",
      },
      serversummary: {
        settings: "Настройки",
        server_information: "Информация о сервере",
        technical_details_for_current_session:
          "Технические подробности текущего сеанса",
        version: "Версия",
        uptime: "Время работы",
      },
      tabschart: {
        monitoring: "Мониторинг",
        live_telemetry: "Телеметрия в реальном времени",
        tabs: "Вкладки",
        memory: "Память",
        heap: "Куча",
        server_heap: "Куча сервера",
        collecting_data: "Сбор данных…",
        waiting_for_more_data: "Ожидание дополнительных данных…",
      },
      idbadge: {
        click_to_copy_full_id: "Нажмите, чтобы скопировать полный ID: {{id}}",
      },
    },
  },
  tabs: {
    tabbar: {
      tab_paused_for_human_handoff:
        "вкладка приостановлена для ручного вмешательства",
      tab_is_paused_for_human_handoff:
        "Вкладка приостановлена для ручного вмешательства",
      untitled: "Без названия",
      unpin_and_follow_the_focused_tab_again:
        "Открепить и снова следовать за активной вкладкой",
      pin_this_tab_selection: "Закрепить выбранную вкладку",
      tabs: "Вкладки",
      monitoring: "Мониторинг",
      pin_tab: "Закрепить {{title}}",
      unpin_tab_and_follow_focus: "Открепить {{title}} и следовать за фокусом",
      close_tab: "Закрыть {{title}}",
      tabs_new: "Вкладки (новых: {{count}})",
    },
    selectedtabtitle: {
      untitled: "Без названия",
    },
    instancetabspanel: {
      chart_crashed_check_console: "График упал — проверьте консоль",
      no_tabs_open: "Нет открытых вкладок",
      unknown: "Неизвестно",
    },
    tabitem: {
      untitled: "Без названия",
    },
    consolepanel: {
      loading_console_logs: "Загрузка журналов консоли…",
      no_console_logs_yet: "Журналов консоли пока нет",
    },
    errorspanel: {
      loading_errors: "Загрузка ошибок…",
      no_errors_yet: "Ошибок пока нет",
    },
    selectedtabpanel: {
      select_a_tab_to_view_details:
        "Выберите вкладку, чтобы увидеть подробности",
      no_instance_id_provided_for_live_view:
        "Для режима реального времени не указан ID экземпляра.",
      actions: "Действия",
      live: "В реальном времени",
      console: "Консоль",
      errors: "Ошибки",
    },
  },
  instances: {
    instancelistitem: {
      tabs: "вкладки",
      open_profile: "Открыть профиль",
      restart: "Перезапустить",
      stop: "Остановить",
    },
    instancecard: {
      headless: "Без интерфейса",
      headed: "С интерфейсом",
      uptime: "Время работы",
      open_dashboard: "Открыть панель",
      stop: "Остановить",
    },
  },
  pages: {
    monitoringpage: {
      instances: "Экземпляры",
      collapse_sidebar: "Свернуть боковую панель",
    },
    loginpage: {
      authentication: "Аутентификация",
      enter_api_token: "Введите токен API",
      this_pinchtab_server_requires_a_bearer:
        "Этот сервер PinchTab требует bearer-токен, прежде чем панель сможет загрузить защищённые маршруты и API.",
      run: "Выполните",
      pinchtab_config_token: "pinchtab config token",
      to_copy_the_token_to_your_clipboard:
        "чтобы скопировать токен в буфер обмена.",
      paste_bearer_token: "Вставьте bearer-токен",
      authorizing: "Авторизация…",
      continue: "Продолжить",
      authentication_failed: "Не удалось пройти аутентификацию",
    },
    settings: {
      orchestrationsettingssection: {
        orchestration: "Оркестрация",
        port_range_and_allocation_policy_can_be:
          "Диапазон портов и политика распределения применяются сразу к последующим запускам. Изменения стратегии и политики перезапуска требуют перезапуска панели, так как маршруты стратегии и состояние жизненного цикла регистрируются при запуске.",
        strategy: "Стратегия",
        controls_instance_lifecycle_and_how:
          "Управляет жизненным циклом экземпляров и маршрутизацией сокращённых запросов.",
        always_on: "Всегда включено",
        simple: "Простая",
        explicit: "Явная",
        simple_autorestart: "Простой автоперезапуск",
        no_instance_hub: "Без экземпляра (хаб)",
        launches_a_default_instance_at_boot_and:
          "Запускает экземпляр по умолчанию при старте и перезапускает его при сбое.",
        launches_one_instance_on_first_request:
          "Запускает один экземпляр по первому запросу. Без автоперезапуска.",
        all_instances_managed_via_api_no:
          "Все экземпляры управляются через API. Автоматических запусков нет.",
        launches_on_first_request_and:
          "Запускается по первому запросу и перезапускается при сбое.",
        no_local_chrome_processes_acts_as_a_hub:
          "Локальные процессы Chrome не запускаются. Работает только как хаб для удалённых мостов.",
        allocation_policy: "Политика распределения",
        determines_how_running_instances_are:
          "Определяет, как выбираются работающие экземпляры для сокращённых запросов.",
        first_available: "Первый доступный",
        round_robin: "По кругу",
        random: "Случайный",
        instance_port_start: "Начальный порт экземпляров",
        lower_bound_for_auto_allocated_instance:
          "Нижняя граница автоматически выделяемых портов экземпляров.",
        instance_port_end: "Конечный порт экземпляров",
        upper_bound_for_auto_allocated_instance:
          "Верхняя граница автоматически выделяемых портов экземпляров.",
        max_restarts: "Максимум перезапусков",
        maximum_restart_attempts_use_1_for:
          "Максимальное число попыток перезапуска. -1 — без ограничений, 0 — без перезапусков.",
        initial_backoff: "Начальная задержка",
        delay_in_seconds_before_the_first:
          "Задержка в секундах перед первой попыткой перезапуска.",
        max_backoff: "Максимальная задержка",
        upper_bound_in_seconds_for_exponential:
          "Верхняя граница в секундах для экспоненциальной задержки между перезапусками.",
        stable_after: "Стабилен после",
        seconds_the_instance_must_stay_healthy:
          "Сколько секунд экземпляр должен оставаться исправным, прежде чем счётчик перезапусков сбросится.",
      },
      securitysettingssection: {
        security: "Безопасность",
        these_controls_define_what_risky:
          "Эти настройки определяют, какие рискованные возможности предоставляет PinchTab.",
        one_or_more_sensitive_endpoint_families:
          "Включено одно или несколько семейств чувствительных эндпоинтов. Такие функции, как выполнение скриптов, загрузка файлов, выгрузка файлов и захват в реальном времени, могут предоставлять возможности повышенного риска. Включайте их только в доверенной среде. Ответственность за защиту сетевого доступа, аутентификации и последующего использования лежит на вас.",
        these_endpoint_families_can_expose_high:
          "Эти семейства эндпоинтов при включении могут предоставлять возможности повышенного риска. Включайте их только в доверенной среде и только если принимаете ответственность за сетевой доступ, аутентификацию и последующее использование.",
        controls_whether_the_corresponding:
          "Управляет включением соответствующего семейства эндпоинтов.",
        enable: "Включить",
        allowed_websites: "Разрешённые сайты",
        comma_separated_domain_allowlist_for:
          "Список разрешённых доменов для веб-содержимого, через запятую. Используйте точные имена хостов или шаблоны вида *.example.com.",
        "127_0_0_1_localhost_1": "127.0.0.1, localhost, ::1",
        keep_this_list_narrow_empty_or_wildcard:
          "Держите этот список узким. Пустые записи и подстановочные знаки ослабляют основную границу IDPI. Разрешение нелокальных или недоверенных сайтов увеличивает поверхность атаки браузера, даже если IDPI включён.",
        trusted_proxy_cidrs: "Доверенные CIDR прокси",
        comma_separated_cidrs_or_ips_whose:
          "CIDR или IP через запятую, чей сообщаемый браузером удалённый IP следует считать доверенным при навигации. Используйте только для известных внутренних прокси.",
        "10_1_2_3_10_0_0_0_8": "10.1.2.3, 10.0.0.0/8",
        this_weakens_navigation_ip_checks_for:
          "Это ослабляет проверки IP при навигации для совпадающих удалённых адресов. Предпочитайте конкретные адреса прокси вместо широких приватных диапазонов. Записи только с IP считаются одним хостом.",
        trusted_resolve_cidrs: "Доверенные CIDR разрешения",
        comma_separated_cidrs_or_ips_that_a:
          "CIDR или IP через запятую, в которые имя хоста может разрешаться при предварительной проверке навигации. Предназначено для внутренних конфигураций DNS или прокси.",
        "198_18_0_0_15_10_1_2_3": "198.18.0.0/15, 10.1.2.3",
        this_allows_hostnames_to_resolve_to_non:
          "Это позволяет именам хостов разрешаться в непубличные IP. Держите список узким и включайте только свою инфраструктуру. Записи только с IP считаются одним хостом.",
      },
      settingssharedcomponents: {
        settings: "Настройки",
      },
      networksettingssection: {
        network_attach: "Сеть и подключение",
        port_and_bind_changes_require_a_restart:
          "Изменения порта и адреса привязки требуют перезапуска. Управление токеном API выполняется вне панели.",
        server_port: "Порт сервера",
        http_port_for_the_dashboard_process: "HTTP-порт процесса панели.",
        bind_address: "Адрес привязки",
        network_interface_the_dashboard_process:
          "Сетевой интерфейс, к которому привязывается процесс панели. Значения 127.0.0.1 или localhost ограничивают прямой доступ локальной машиной.",
        a_non_loopback_bind_is_a_documented_non:
          "Привязка к адресу, отличному от loopback, — задокументированное, нестандартное изменение конфигурации, снижающее безопасность. Оно может сделать сервер доступным за пределами локальной машины, если доступ не ограничивает другая сетевая граница. Обязательно оставьте токен и явно проверьте поведение прокси и публикации портов.",
        loopback_bind_keeps_direct_server:
          "Привязка к loopback оставляет прямой доступ к серверу локальным. Переход на",
        or_another_non_local_address_widens_the:
          "или другой нелокальный адрес расширяет границу доверия.",
        api_token: "Токен API",
        bearer_token_required_by_authenticated:
          "Bearer-токен, требуемый аутентифицированными запросами, если он задан. Панель никогда его не возвращает и не управляет им.",
        no_token_configured_set_one_through_the:
          "Токен не настроен. Задайте его через CLI или файл конфигурации.",
        token_configured_manage_rotation:
          "Токен настроен. Управляйте сменой через CLI или файл конфигурации; сервер никогда не возвращает текущее значение. Выполните",
        pinchtab_config_token: "pinchtab config token",
        to_copy_it_to_your_clipboard: "чтобы скопировать его в буфер обмена.",
        no_api_token_is_set_anyone_who_can:
          "Токен API не задан. Любой, кто может обратиться к этому серверу, получит доступ к открытым эндпоинтам. Используйте его только в доверенных локальных сетях или задайте надёжный токен через CLI или файл конфигурации. Защита доступа — ваша ответственность.",
        state_directory: "Каталог состояния",
        base_state_path_used_by_managed_child:
          "Базовый путь состояния, используемый управляемыми дочерними экземплярами.",
        trust_proxy_headers: "Доверять заголовкам прокси",
        trust_x_forwarded_proto_x_forwarded:
          "Доверять заголовкам X-Forwarded-Proto, X-Forwarded-Host и Forwarded при проверке источника. Включайте только если PinchTab работает за доверенным обратным прокси (например, Caddy, nginx).",
        enabled: "Включено",
        disabled: "Отключено",
        cookie_secure_mode: "Режим Secure для cookie",
        controls_whether_dashboard_session:
          "Определяет, требуют ли сессионные cookie панели HTTPS. Auto включает Secure только при HTTPS. Принудительный Secure подходит, когда перед PinchTab стоит TLS.",
        auto: "Авто",
        force_secure: "Принудительный Secure",
        force_insecure: "Принудительно небезопасный",
        force_secure_blocks_dashboard_login_on:
          "Принудительный Secure блокирует вход в панель по обычному HTTP. Используйте его, когда PinchTab отдаётся напрямую по HTTPS или за доверенным прокси. Если TLS завершается перед PinchTab, включите",
        trustproxyheaders: "trustProxyHeaders",
        so_forwarded_https_requests_are:
          "чтобы перенаправленные HTTPS-запросы распознавались.",
        persist_dashboard_sessions: "Сохранять сеансы панели",
        keep_dashboard_login_sessions_across:
          "Сохраняет сеансы входа в панель между перезапусками сервера. Отключите, если хотите, чтобы каждый перезапуск требовал нового входа.",
        session_idle_timeout: "Тайм-аут простоя сеанса",
        how_long_an_unused_dashboard_session:
          "Сколько неиспользуемый сеанс панели остаётся действительным. В конфигурации хранится в секундах.",
        session_max_lifetime: "Максимальное время жизни сеанса",
        absolute_lifetime_for_a_dashboard:
          "Абсолютное время жизни сеанса панели до обязательного пересоздания, даже если он активен.",
        require_elevation_for_config_saves:
          "Требовать повышение прав для сохранения конфигурации",
        ask_for_api_token_re_entry_before:
          "Запрашивает повторный ввод токена API перед сохранением изменений конфигурации бэкенда. По умолчанию отключено.",
        allow_attach: "Разрешить подключение",
        permit_attaching_pinchtab_to_externally:
          "Разрешает подключать PinchTab к сеансам Chrome, управляемым извне.",
        enable: "Включить",
        allowed_attach_hosts: "Разрешённые хосты подключения",
        comma_separated_host_allowlist_for:
          'Список разрешённых хостов для запросов подключения, через запятую. Включайте только хосты, которые вы контролируете и которым доверяете. Использование "*" отключает список разрешённых хостов.',
        allowhosts: 'allowHosts: ["*"]',
        is_a_documented_non_default_security:
          "— задокументированное, нестандартное переопределение, снижающее безопасность. Оно полностью отключает список разрешённых хостов и разрешает удалённые запросы подключения к любому достижимому хосту с разрешённой схемой. Используйте только в изолированных сетях под контролем оператора.",
        hosts_in_this_allowlist_may_be_used_for:
          "Хосты из этого списка могут использоваться для удалённых запросов подключения. Широкие или недоверенные записи расширяют границу доверия и могут раскрыть внешние сеансы Chrome и содержимое браузера.",
        allowed_attach_schemes: "Разрешённые схемы подключения",
        comma_separated_scheme_allowlist:
          "Список разрешённых схем через запятую, обычно ws и wss.",
      },
      observabilitysettingssection: {
        observability: "Наблюдаемость",
        activity_logging_tracks_api_requests:
          "Журнал активности фиксирует запросы API для отладки и аудита. Журналы хранятся локально, их можно посмотреть на странице «Активность».",
        activity_logging: "Журнал активности",
        enable_or_disable_activity_event:
          "Включает или отключает запись событий активности.",
        enabled: "Включено",
        disabled: "Отключено",
        retention_days: "Хранение (дней)",
        how_long_to_keep_activity_logs_before:
          "Сколько хранить журналы активности до автоматической очистки. Долгое хранение занимает больше диска, но даёт более полную историю аудита.",
        session_idle_timeout_seconds: "Тайм-аут простоя сеанса (секунды)",
        time_before_an_inactive_agent_session:
          "Время, после которого неактивный сеанс агента считается простаивающим. Используется для группировки активности по сеансам.",
      },
      profilessettingssection: {
        profiles: "Профили",
        profile_storage_is_host_level_changing:
          "Хранилище профилей задаётся на уровне хоста. Изменение базового каталога требует перезапуска, так как менеджер профилей и оркестратор создаются с ним при запуске.",
        profiles_base_directory: "Базовый каталог профилей",
        root_directory_where_browser_profiles:
          "Корневой каталог, в котором хранятся профили браузера.",
        default_profile: "Профиль по умолчанию",
        profile_name_used_when_the_server_needs:
          "Имя профиля, используемое, когда серверу нужен неявный вариант по умолчанию.",
      },
      defaultssettingssection: {
        instance_defaults: "Значения экземпляров по умолчанию",
        these_values_are_written_to_config_and:
          "Эти значения записываются в конфигурацию и применяются к новым управляемым экземплярам. Уже запущенные экземпляры сохраняют текущие параметры.",
        mode: "Режим",
        default_browser_mode_for_new_launches:
          "Режим браузера по умолчанию для новых запусков.",
        headless: "Без интерфейса",
        headed: "С интерфейсом",
        stealth_level: "Уровень скрытности",
        bot_detection_evasion_profile_higher:
          "Профиль обхода обнаружения ботов. Высокие уровни могут влиять на мониторинг ошибок и отдельные функции браузера.",
        light: "Лёгкий",
        medium: "Средний",
        full: "Полный",
        light_2: "Лёгкий:",
        default_baseline_stealth_keeps_the:
          "Базовая скрытность по умолчанию. Сохраняет наименее рискованный запуск и контракт JS, скрывая базовые признаки автоматизации.",
        default_product_security_baseline:
          "✓ Базовая линия безопасности продукта по умолчанию",
        no_intentional_api_realism_or_security:
          "✓ Без намеренного отказа от реалистичности API или безопасности",
        medium_2: "Средний:",
        non_default_risk_mode_adds_client_hints:
          "Нестандартный рискованный режим. Добавляет Client Hints, подмену `chrome.runtime`, распространение на iframe, фильтрацию стека и маскировку функций под нативные, чтобы улучшить совместимость с антибот-защитой.",
        alters_browser_visible_apis_and_error:
          "⚠ Изменяет видимые браузеру API, а также поведение ошибок и стека. Инструменты мониторинга и отладки могут видеть другие результаты.",
        permissions_and_compatibility_shims_can:
          "⚠ Разрешения и подмены совместимости могут возвращать намеренно изменённые значения. Не используйте это как базовую линию безопасности по умолчанию.",
        reports_that_require_explicitly:
          "⚠ Отчёты, для воспроизведения которых нужно явно включить «Средний», следует считать добровольным принятием риска, а не поведением стандартного пути.",
        full_2: "Полный:",
        highest_risk_non_default_mode_adds:
          "Нестандартный режим с наибольшим риском. Дополнительно к «Среднему» изменяет графику, canvas, звук, системные цвета и WebRTC.",
        browser_output_is_intentionally_less:
          "⚠ Вывод браузера намеренно менее нативный и менее стабильный. Отрисовка, медиа и сеть могут ломаться или отклоняться от настоящего Chrome.",
        this_mode_is_not_an_acceptable_default:
          "⚠ Этот режим не является приемлемой безопасной конфигурацией по умолчанию. Включайте его только если явно принимаете эту область компромиссов.",
        reports_that_depend_on_enabling_full:
          "⚠ Отчёты, зависящие от включения «Полного», следует классифицировать как нестандартный риск оператора, если не показан обход в стандартном пути.",
        webrtc_webgl_canvas_and_audio_behavior:
          "⚠ Поведение WebRTC, WebGL, canvas и звука может отличаться от эталонного Chrome.",
        tab_eviction_policy: "Политика вытеснения вкладок",
        how_pinchtab_behaves_when_a_managed:
          "Как ведёт себя PinchTab, когда управляемый экземпляр достигает лимита вкладок.",
        reject_new_tabs: "Отклонять новые вкладки",
        close_oldest: "Закрывать самую старую",
        close_least_recently_used: "Закрывать давно не использованную",
        tab_lifecycle: "Жизненный цикл вкладок",
        close_idle_closes_a_tab_after_a_text:
          "«Закрывать простаивающие» закрывает вкладку после ответа /text, /snapshot или /action, когда истечёт задержка; /navigate отменяет это. «Заморозить простаивающие» замораживает вкладку, к которой за время задержки не обращался ни один запрос, и размораживает её при следующем запросе.",
        keep_never_auto_close: "Не закрывать (никогда автоматически)",
        close_idle: "Закрывать простаивающие",
        freeze_idle: "Заморозить простаивающие",
        auto_close_delay: "Задержка автозакрытия",
        seconds_of_idleness_before_an_idle_tab:
          "Секунды простоя до закрытия или заморозки вкладки. Применяется только если жизненный цикл — «Закрывать простаивающие» или «Заморозить простаивающие».",
        restore_tabs_on_startup: "Восстанавливать вкладки при запуске",
        when_enabled_tabs_open_at_shutdown_are:
          "Если включено, вкладки, открытые при завершении, открываются заново при следующем запуске. По умолчанию выключено — закрытые вкладки остаются закрытыми после перезапуска.",
        enable: "Включить",
        max_tabs: "Максимум вкладок",
        maximum_number_of_tabs_per_managed:
          "Максимальное число вкладок на управляемый экземпляр.",
        max_parallel_tabs: "Максимум параллельных вкладок",
        set_to_0_to_auto_detect_from_cpu_count:
          "Установите 0, чтобы определять автоматически по числу процессоров.",
        timezone: "Часовой пояс",
        optional_timezone_override_for_launched:
          "Необязательное переопределение часового пояса для запускаемых экземпляров.",
        europe_rome: "Europe/Rome",
        user_agent: "User agent",
        optional_override_applied_to_new:
          "Необязательное переопределение для новых управляемых экземпляров.",
        custom_user_agent: "Свой user agent",
        applies_to_newly_launched_managed:
          "Применяется к только что запущенным управляемым экземплярам.",
      },
      securityidpisettingssection: {
        security_idpi: "Безопасность IDPI",
        indirect_prompt_injection_controls:
          "Защита от косвенных внедрений в промпт ограничивает список разрешённых сайтов и добавляет защиту извлечённого содержимого, прежде чем оно попадёт в последующую автоматизацию.",
        idpi_is_disabled_browser_content_is_not:
          "IDPI отключён. Содержимое браузера не фильтруется списком разрешённых сайтов и защитой содержимого.",
        the_website_whitelist_is_not_set_to_a:
          "Список разрешённых сайтов не задан как ограниченный список домена. Это основная защита IDPI, и её следует настроить.",
        the_website_whitelist_contains_which:
          "Список разрешённых сайтов содержит '*', что фактически отключает ограничение по домену.",
        idpi_is_enforcing_a_specific_website:
          "IDPI применяет конкретный список разрешённых сайтов и защиту содержимого.",
        enable: "Включить",
        custom_patterns: "Свои шаблоны",
        optional_comma_separated_phrases_to:
          "Необязательные фразы через запятую, которые считаются подозрительным содержимым для внедрения в промпт.",
        ignore_previous_instructions_exfiltrate:
          "ignore previous instructions, exfiltrate data",
      },
      timeoutssettingssection: {
        timeouts: "Тайм-ауты",
        runtime_timing_defaults_written_into:
          "Значения времени выполнения по умолчанию, записываемые в новые конфигурации дочерних процессов. Уже запущенные экземпляры сохраняют текущие тайм-ауты.",
      },
      browsersettingssection: {
        browser_runtime: "Среда выполнения браузера",
        these_settings_are_written_into_the:
          "Эти настройки записываются в созданную конфигурацию дочернего процесса для новых управляемых экземпляров.",
        provider: "Провайдер",
        browser_backend_used_for_new_managed:
          "Бэкенд браузера, используемый для новых управляемых экземпляров.",
        chrome: "Chrome",
        cloakbrowser: "CloakBrowser",
        ghost_chrome: "Ghost + Chrome",
        browser_version: "Версия браузера",
        version_string_used_in_generated_ua:
          "Строка версии, используемая в создаваемых значениях user agent и отпечатка по умолчанию.",
        browser_binary: "Исполняемый файл браузера",
        optional_path_override_for_the_chrome:
          "Необязательное переопределение пути к исполняемому файлу Chrome или CloakBrowser.",
        fingerprint_seed: "Сид отпечатка",
        deterministic_cloakbrowser_identity:
          "Детерминированный сид идентичности CloakBrowser. Оставьте пустым, чтобы каждый запуск использовал новую идентичность.",
        fingerprint_platform: "Платформа отпечатка",
        native_platform_fingerprint_reported_by:
          "Отпечаток нативной платформы, сообщаемый CloakBrowser.",
        auto: "Авто",
        windows: "Windows",
        macos: "macOS",
        linux: "Linux",
        cloak_locale: "Локаль Cloak",
        locale_passed_as_fingerprint_locale:
          "Локаль, передаваемая как --fingerprint-locale.",
        cloak_timezone: "Часовой пояс Cloak",
        timezone_passed_as_fingerprint_timezone:
          "Часовой пояс, передаваемый как --fingerprint-timezone.",
        webrtc_ip: "IP для WebRTC",
        explicit_replacement_ip_or_auto_for:
          "Явный подменный IP или auto, чтобы CloakBrowser сам определил исходящий IP прокси.",
        fonts_directory: "Каталог шрифтов",
        directory_containing_target_platform:
          "Каталог со шрифтами целевой платформы для CloakBrowser.",
        storage_quota: "Квота хранилища",
        storage_quota_in_mb_passed_as:
          "Квота хранилища в МБ, передаваемая как --fingerprint-storage-quota.",
        native_stealth_only: "Только нативная скрытность",
        disable_pinchtab_js_stealth_overlays:
          "Отключает JS-слои скрытности PinchTab и флаги запуска, скрывающие автоматизацию.",
        use_cloakbrowser_native_patches:
          "Использовать нативные патчи CloakBrowser",
        extra_flags: "Дополнительные флаги",
        additional_chrome_flags_appended_when:
          "Дополнительные флаги Chrome, добавляемые при запуске управляемых экземпляров.",
        extension_paths: "Пути к расширениям",
        comma_separated_extension_directories:
          "Каталоги расширений для загрузки, через запятую. По умолчанию PinchTab использует локальную папку extensions/ в своём каталоге состояния или конфигурации. Укажите здесь свои пути, чтобы переопределить это значение, или очистите поле, чтобы отключить загрузку расширений.",
      },
      dashboardsettingssection: {
        dashboard_preferences: "Настройки панели",
        language: "Язык",
        choose_the_language_of_the_dashboard:
          "Выберите язык интерфейса панели.",
        these_controls_affect_this_dashboard_ui:
          "Эти настройки влияют только на интерфейс панели. Они хранятся локально в браузере и не требуют перезапуска бэкенда.",
        screencast_frame_rate: "Частота кадров трансляции",
        controls_how_often_live_previews:
          "Управляет частотой запроса новых кадров для предпросмотра в реальном времени.",
        fps: "fps",
        screencast_quality: "Качество трансляции",
        jpeg_quality_for_tab_preview_streams:
          "Качество JPEG для потоков предпросмотра вкладок.",
        screencast_width: "Ширина трансляции",
        maximum_preview_width_for_live_tiles:
          "Максимальная ширина предпросмотра для плиток реального времени.",
        px: "px",
        memory_metrics: "Метрики памяти",
        poll_every_running_instance_for_browser:
          "На каждом цикле мониторинга опрашивает память браузера у каждого работающего экземпляра: RSS по всему дереву процессов Chrome, а также кучу JS и счётчики DOM, считываемые из каждой открытой вкладки через CDP. Измеренные затраты: около миллисекунды на открытую вкладку плюс несколько десятков миллисекунд на обход дерева процессов, на экземпляр за цикл.",
        enable: "Включить",
        polling_interval: "Интервал опроса",
        how_frequently_the_dashboard_asks_the:
          "Как часто панель запрашивает у бэкенда свежие метрики.",
        s: "s",
        reasoning_output: "Вывод рассуждений",
        choose_whether_the_live_agent_feed:
          "Выберите, показывать ли в ленте агента вызовы инструментов, обновления прогресса или и то, и другое.",
        tool_calls_only: "Только вызовы инструментов",
        progress_only: "Только прогресс",
        both: "И то и другое",
      },
      autosolversettingssection: {
        autosolver: "AutoSolver",
        these_settings_are_saved_into_the:
          "Эти настройки сохраняются в файл конфигурации PinchTab. Ключи API внешних провайдеров доступны только для записи и задаются прямо в этом файле.",
        config_file: "Файл конфигурации",
        dashboard_edits_are_written_back_to:
          "Изменения из панели записываются обратно в этот файл. Задавайте ключи внешних провайдеров в разделе autoSolver.external того же файла конфигурации.",
        config_path_unavailable: "Путь к конфигурации недоступен",
        enable_autosolver: "Включить AutoSolver",
        turns_on_the_autosolver_runtime:
          "Включает конфигурацию времени выполнения AutoSolver для поддерживаемых сценариев с проверками.",
        enabled: "Включено",
        disabled: "Отключено",
        auto_trigger: "Автоматический запуск",
        automatically_run_autosolver_after:
          "Автоматически запускает AutoSolver после поддерживаемых запросов навигации и действий.",
        trigger_on_navigate: "Запускать при навигации",
        run_autosolver_checks_after_successful:
          "Запускает проверки AutoSolver после успешных вызовов навигации.",
        trigger_on_action: "Запускать при действиях",
        run_autosolver_checks_after_successful_2:
          "Запускает проверки AutoSolver после успешных вызовов действий.",
        max_attempts: "Максимум попыток",
        maximum_autosolver_retries_before_the:
          "Максимальное число повторов AutoSolver до отказа конвейера.",
        solver_timeout_sec: "Тайм-аут решателя (с)",
        per_solver_timeout_for_each_attempt:
          "Тайм-аут для каждого решателя в каждой попытке.",
        retry_base_delay_ms: "Базовая задержка повторов (мс)",
        base_retry_backoff_delay_between:
          "Базовая задержка между попытками AutoSolver.",
        retry_max_delay_ms: "Максимальная задержка повторов (мс)",
        maximum_retry_backoff_delay_cap_between:
          "Верхняя граница задержки между попытками AutoSolver.",
        solvers: "Решатели",
        comma_separated_ordered_list_of_solver:
          "Упорядоченный список имён решателей через запятую. Проверить доступные во время выполнения имена можно через GET /solvers или GET /config/autosolver.",
        llm_provider: "Провайдер LLM",
        optional_provider_name_used_when_llm:
          "Необязательное имя провайдера, используемое при включённом резервном LLM.",
        llm_fallback: "Резервный LLM",
        use_an_llm_as_the_last_resort_after:
          "Использовать LLM как последнее средство после отказа зарегистрированных решателей.",
        external_provider_keys: "Ключи внешних провайдеров",
        capsolver_and_2captcha_credentials_are:
          "Учётные данные Capsolver и 2Captcha не показываются в панели и должны храниться в файле конфигурации. Эти провайдеры появляются в списках решателей только при настроенных ключах.",
        open_the_config_file_above_and_set:
          "Откройте указанный выше файл конфигурации и задайте",
        autosolver_external_capsolverkey: "autoSolver.external.capsolverKey",
        autosolver_external_twocaptchakey: "autoSolver.external.twoCaptchaKey",
        there_the_dashboard_does_not_display_or:
          "там. Панель не показывает и не редактирует эти значения, и переменных окружения для их переопределения нет.",
      },
    },
    monitoring: {
      monitoringemptystate: {
        starting_default_instance: "Запуск экземпляра по умолчанию…",
        start_default_instance: "Запустить экземпляр по умолчанию",
        open_default_profile: "Открыть профиль по умолчанию",
        no_active_instances: "Нет активных экземпляров",
        pinchtab_expected_a_default_instance:
          "PinchTab ожидал экземпляр по умолчанию, но он так и не стал доступен. Запустите его вручную или проверьте профиль.",
        start_the_default_instance_or_open:
          "Запустите экземпляр по умолчанию или откройте «Профили», чтобы запустить другой.",
        waiting_for_default_profile:
          "PinchTab ждёт, пока профиль по умолчанию станет доступен. Повторная проверка произойдёт автоматически (осталось {{count}}).",
      },
      defaultinstancemodal: {
        start_default_instance: "Запустить экземпляр по умолчанию",
        cancel: "Отмена",
        start_headed: "Запустить с интерфейсом",
        start_headless: "Запустить без интерфейса",
        choose_how_to_launch_the_default:
          "Выберите, как запускать профиль по умолчанию в этом сеансе.",
        configured_default_mode: "Настроенный режим по умолчанию:",
      },
    },
    profilespage: {
      loading_profiles: "Загрузка профилей…",
      no_profiles_yet: "Профилей пока нет",
      click_new_profile_to_create_one:
        "Нажмите «Новый профиль», чтобы создать его",
      new_profile: "Новый профиль",
      profiles: "Профили",
      total: "всего",
      no_account: "Без аккаунта",
      profile_deleted: "Профиль «{{name}}» удалён",
    },
    settingspage: {
      confirm_admin_action: "Подтвердите административное действие",
      cancel: "Отмена",
      verifying: "Проверка…",
      continue: "Продолжить",
      re_enter_the_api_token_to_save_backend:
        "Введите токен API повторно, чтобы сохранить изменения конфигурации бэкенда. Сеанс с повышенными правами действует недолго, поэтому повторять это для каждого административного действия не нужно.",
      api_token: "Токен API",
      paste_api_token: "Вставьте токен API",
      restart_required: "Требуется перезапуск",
      reset: "Сбросить",
      saving: "Сохранение…",
      save: "Сохранить",
      restart_needed_for: "Перезапуск требуется для:",
      loading_settings: "Загрузка настроек…",
      settings_eyebrow: "Настройки",
    },
  },
  activities: {
    activityexplorer: {
      agent: "Агент",
      all: "Все",
      session: "Сеанс",
      request_timeline: "Хронология запросов",
      activity: "Активность",
      failed_to_load_activity: "Не удалось загрузить активность",
    },
    agentstreampanel: {
      no_matching_activity: "Нет подходящей активности",
      adjust_the_filters_or_generate_some:
        "Измените фильтры или создайте нагрузку через CLI, MCP или панель.",
    },
    streamrow: {
      ms: "ms",
      navigate_to_page: "Перейти на страницу",
      capture_page_snapshot: "Снять снимок страницы",
      open_screencast_stream: "Открыть поток трансляции",
      extract_text_from_page: "Извлечь текст со страницы",
      click_on_page: "Клик по странице",
      double_click_on_page: "Двойной клик по странице",
      type_into_page: "Ввод текста на странице",
      hover_on_page: "Наведение на странице",
      fill_field: "Заполнить поле",
      select_option: "Выбрать вариант",
      scroll_page: "Прокрутить страницу",
      press_key: "Нажать клавишу",
      wait_for_condition: "Ожидание условия",
      evaluate_javascript: "Выполнить JavaScript",
      upload_file: "Загрузить файл",
      download_file: "Скачать файл",
      on_tab: " во вкладке ",
      navigate_to_url: "Перейти к {{url}}",
      click_ref: "Нажать на «{{ref}}»",
      double_click_ref: "Двойной щелчок по «{{ref}}»",
      type_into_ref: "Ввести в «{{ref}}»",
      hover_ref: "Навести на «{{ref}}»",
      fill_ref: "Заполнить «{{ref}}»",
      select_ref: "Выбрать «{{ref}}»",
      press_key_on_ref: "Нажать клавишу на «{{ref}}»",
    },
    activityline: {
      progress: "ПРОГРЕСС",
      agent_reported_progress: "Агент сообщил о прогрессе",
      ms: "ms",
    },
    activityitemline: {
      tab_paused_for_human_handoff:
        "вкладка приостановлена для ручного вмешательства",
      tab_is_paused_for_human_handoff:
        "Вкладка приостановлена для ручного вмешательства",
      resume_automation_after_manual:
        "Продолжить автоматизацию после ручного решения проверки",
      resuming: "Продолжение…",
      resolve_challenge: "Решить проверку",
      browser_was_escalated: "Браузер был повышен в правах",
      escalated: "повышен",
      navigate_to_page: "Перейти на страницу",
      capture_page_snapshot: "Снять снимок страницы",
      open_screencast_stream: "Открыть поток трансляции",
      extract_text_from_page: "Извлечь текст со страницы",
      take_screenshot: "Сделать снимок экрана",
      export_page_as_pdf: "Экспортировать страницу в PDF",
      click_on_page: "Клик по странице",
      double_click_on_page: "Двойной клик по странице",
      type_into_page: "Ввод текста на странице",
      hover_on_page: "Наведение на странице",
      fill_field: "Заполнить поле",
      select_option: "Выбрать вариант",
      scroll_page: "Прокрутить страницу",
      press_key: "Нажать клавишу",
      wait_for_condition: "Ожидание условия",
      evaluate_javascript: "Выполнить JavaScript",
      upload_file: "Загрузить файл",
      download_file: "Скачать файл",
      resume_failed: "Не удалось продолжить",
      navigate_to_url: "Перейти к {{url}}",
      click_ref: "Нажать на «{{ref}}»",
      double_click_ref: "Двойной щелчок по «{{ref}}»",
      type_into_ref: "Ввести в «{{ref}}»",
      hover_ref: "Навести на «{{ref}}»",
      fill_ref: "Заполнить «{{ref}}»",
      select_ref: "Выбрать «{{ref}}»",
      press_key_on_ref: "Нажать клавишу на «{{ref}}»",
    },
    activitytimeline: {
      timeline: "Хронология",
      recent_events: "Последние события",
      no_matching_activity: "Нет подходящей активности",
      adjust_the_filters_or_generate_some:
        "Измените фильтры или создайте нагрузку через CLI, MCP или панель.",
    },
    activefilterbar: {
      clear_filters: "Сбросить фильтры",
    },
    activityfiltermenu: {
      "200": "200",
      "3600": "3600",
      profile: "Профиль",
      tab: "Вкладка",
      agent: "Агент",
      action: "Действие",
      advanced_filters: "Дополнительные фильтры",
      hide: "Скрыть",
      show: "Показать",
      instance: "Экземпляр",
      path_prefix: "Префикс пути",
      tabs_or_instances: "/tabs/ or /instances/",
      age_seconds: "Возраст (секунды)",
      limit: "Лимит",
      clear: "Очистить",
      search: "Поиск",
      any_profile: "Любой профиль",
      any_tab: "Любая вкладка",
      any_agent: "Любой агент",
      any_action: "Любое действие",
      any_instance: "Любой экземпляр",
    },
    agentworkspacesidebar: {
      agents: "Агенты",
      activities: "Активность",
      no_agent_activity_observed_yet: "Активность агентов пока не замечена",
      all_agents: "Все агенты",
    },
    copyidpill: {
      copied: "Скопировано",
      copy_tab_id: "Скопировать ID вкладки {{id}}",
    },
    hooks: {
      useactivitydata: {
        failed_to_load_activity: "Не удалось загрузить активность",
        failed_to_load_agent_activity: "Не удалось загрузить активность агента",
      },
    },
  },
  settings: {
    sections: {
      dashboard: {
        dashboard: "Панель",
        local_monitoring_and_screencast:
          "Локальные настройки мониторинга и трансляции.",
      },
      defaults: {
        instance_defaults: "Значения экземпляров по умолчанию",
        how_new_managed_browser_instances_launch:
          "Как запускаются новые управляемые экземпляры браузера.",
      },
      orchestration: {
        orchestration: "Оркестрация",
        routing_strategy_port_range_and:
          "Стратегия маршрутизации, диапазон портов и политика распределения.",
      },
      security: {
        security: "Безопасность",
        sensitive_endpoint_gates_and_access:
          "Ограничения чувствительных эндпоинтов и контроль доступа.",
      },
      "security-idpi": {
        security_idpi: "Безопасность IDPI",
        indirect_prompt_injection_website_and:
          "Защита сайтов и содержимого от косвенных внедрений в промпт.",
      },
      profiles: {
        profiles: "Профили",
        shared_profile_storage_and_default:
          "Общее хранилище профилей и поведение профиля по умолчанию.",
      },
      network: {
        network_attach: "Сеть и подключение",
        server_binding_auth_and_attach_policy:
          "Привязка сервера, аутентификация и политика подключения.",
      },
      browser: {
        browser_runtime: "Среда выполнения браузера",
        chrome_binary_version_flags_and:
          "Исполняемый файл Chrome, версия, флаги и расширения.",
      },
      timeouts: {
        timeouts: "Тайм-ауты",
        action_navigation_shutdown_and_wait:
          "Время действий, навигации, завершения и ожидания.",
      },
      autosolver: {
        autosolver: "AutoSolver",
        challenge_solving_behavior_and_config:
          "Поведение при решении проверок и провайдеры на основе файла конфигурации.",
      },
      observability: {
        observability: "Наблюдаемость",
        activity_logging_and_retention_settings:
          "Настройки журнала активности и хранения.",
      },
    },
    security: {
      endpoints: {
        allowEvaluate: {
          allow_evaluate: "Разрешить evaluate",
        },
        allowMacro: {
          allow_macro: "Разрешить macro",
        },
        allowScreencast: {
          allow_screencast: "Разрешить трансляцию",
        },
        allowDownload: {
          allow_download: "Разрешить скачивание",
        },
        allowCookies: {
          allow_cookies: "Разрешить cookie",
        },
        allowUpload: {
          allow_upload: "Разрешить загрузку",
        },
        allowNetworkIntercept: {
          allow_network_interception: "Разрешить перехват сети",
          lets_agents_install_rules_to_abort_or:
            "Позволяет агентам устанавливать правила, чтобы прерывать или выполнять (подменять) HTTP-запросы во вкладке. При включении подделка ответов ЗАПРЕЩЕНА на хостах из списка «Разрешённые сайты» ниже и РАЗРЕШЕНА в остальных случаях. Подделка ответов на хостах, которые вы разрешили агенту использовать (например, ваш банк), — самый рискованный исход, поэтому защищаются именно хосты из списка разрешённых, а не наоборот. Предварительные запросы OPTIONS по умолчанию пропускаются, чтобы не ломать CORS.",
        },
        allowFileScheme: {
          allow_file_navigation: "Разрешить навигацию file://",
          lets_agents_open_local_file_urls_a_file:
            "Позволяет агентам открывать локальные URL file://. У URL file:// нет хоста, поэтому он НЕ ограничен списком «Разрешённые сайты» ниже и обходит защиту от SSRF и приватных IP — включение даёт доступ на чтение (через снимок, скриншот или парсинг) к любому локальному файлу, который может прочитать процесс сервера. Он остаётся заблокированным, пока действует список разрешённых в строгом режиме. Включайте только на доверенных машинах с одним арендатором.",
        },
      },
      idpi: {
        enabled: {
          enable_idpi: "Включить IDPI",
          turn_on_indirect_prompt_injection:
            "Включает защиту от косвенных внедрений в промпт.",
        },
        strictMode: {
          strict_mode: "Строгий режим",
          block_disallowed_domains_and_suspicious:
            "Блокирует запрещённые домены и подозрительное содержимое, а не только предупреждает.",
        },
        scanContent: {
          scan_content: "Сканировать содержимое",
          inspect_extracted_text_and_snapshots:
            "Проверяет извлечённый текст и снимки на признаки внедрения в промпт.",
        },
        wrapContent: {
          wrap_content: "Оборачивать содержимое",
          mark_returned_page_text_as_untrusted:
            "Помечает возвращённый текст страницы как недоверенное содержимое для последующих потребителей.",
        },
      },
    },
    defaults: {
      booleans: {
        blockImages: {
          block_images: "Блокировать изображения",
        },
        blockMedia: {
          block_media: "Блокировать медиа",
        },
        blockAds: {
          block_ads: "Блокировать рекламу",
        },
        noAnimations: {
          disable_css_animations: "Отключить CSS-анимации",
        },
        noRestore: {
          skip_session_restore: "Пропускать восстановление сеанса",
        },
      },
      timeouts: {
        actionSec: {
          action_timeout: "Тайм-аут действий",
          maximum_time_for_action_requests:
            "Максимальное время для запросов действий.",
        },
        navigateSec: {
          navigate_timeout: "Тайм-аут навигации",
          maximum_time_for_navigation_requests:
            "Максимальное время для запросов навигации.",
        },
        shutdownSec: {
          shutdown_timeout: "Тайм-аут завершения",
          grace_period_before_force_closing_a:
            "Время ожидания перед принудительным завершением дочернего процесса.",
        },
        waitNavMs: {
          wait_after_navigation_delay: "Задержка после навигации",
          post_navigation_stabilization_delay_in:
            "Задержка стабилизации после навигации в миллисекундах.",
        },
      },
    },
    notices: {
      backend_config_saved_dynamic_changes:
        "Конфигурация бэкенда сохранена. Динамические изменения применены там, где это возможно.",
      backend_config_saved_dynamic_changes_2:
        "Конфигурация бэкенда сохранена. Динамические изменения применены там, где это возможно. Для изменений уровня сервера рекомендуется перезапуск.",
      preferencesSaved: "Настройки панели сохранены в этом браузере.",
    },
    errors: {
      loadFailed: "Не удалось загрузить настройки",
      saveFailed: "Не удалось сохранить настройки",
      tokenVerifyFailed: "Не удалось проверить токен API",
    },
  },
  monitoring: {
    errors: {
      startInstanceFailed: "Не удалось запустить экземпляр",
    },
  },
  errors: {
    requestFailed: "Запрос не выполнен",
  },
  auth: {
    insecureTransport:
      "Сеанс панели работает по незащищённому HTTP; используйте HTTPS или localhost для более надёжной защиты сеанса.",
  },
};

export default messages;
