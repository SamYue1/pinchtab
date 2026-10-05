import type { Messages } from "../i18n/messages";

const messages: Messages = {
  app: {
    name: "PinchTab",
    checking_server_authentication: "正在檢查伺服器驗證…",
    pinchtab_is_restarting_or_unreachable: "PinchTab 正在重新啟動或無法連線。",
    automatic_retries_stopped: " 已停止自動重試。",
    retry_now: "立即重試",
    refresh: "重新整理",
  },
  profiles: {
    profiletoolbarbuttons: {
      copy_id: "複製 ID",
      delete: "刪除",
      save: "儲存",
      stop: "停止",
      start: "啟動",
      delete_profile: "刪除設定檔",
      cancel: "取消",
      delete_profile_2: '刪除設定檔 "',
      every_cookie_login_and_session_stored:
        '"? 其中儲存的 Cookie、登入狀態與工作階段都會永久遺失，且無法復原。',
      copied: "已複製",
      failed: "失敗",
    },
    profilemetainfopanel: {
      profile_panel: "設定檔面板",
      status: "狀態",
      port: "連接埠",
      browser: "瀏覽器",
      size: "大小",
      account: "帳號",
      identity: "身分",
      connection: "連線",
      cdp_attached: "已附加 CDP",
      cdp_url: "CDP 網址",
      path: "路徑",
      not_found: "（找不到）",
      attached_via_cdp: "透過 CDP 附加",
      headless: "無頭",
      headed: "有頭",
    },
    profilecard: {
      error: "錯誤",
      stopped: "已停止",
      size: "大小",
      account: "帳號",
      use_when: "使用時機",
      details: "詳細資料",
      stop: "停止",
      start: "啟動",
    },
    profiledetailspanel: {
      select_a_profile_to_inspect_its:
        "選擇一個設定檔以檢視其實例、即時分頁與記錄。",
      live: "即時",
      tabs: "分頁",
      logs: "記錄",
      no_tabs_open: "沒有開啟的分頁。",
      instance_not_running: "實例未執行。",
      profile_name: "設定檔：{{name}}",
    },
    profilebasicinfopanel: {
      name: "名稱",
      use_this_profile_when: "使用此設定檔的時機",
    },
    profileliveviewpanel: {
      no_tabs_open: "沒有開啟的分頁",
      instance_not_running_start_the_profile:
        "實例未執行。啟動設定檔即可查看即時檢視。",
    },
    instancelogspanel: {
      loading_logs: "正在載入記錄…",
      no_instance_logs_available: "目前沒有實例記錄。",
    },
    groups: {
      user: "設定檔",
      temporary: "暫存",
      quarantined: "已隔離",
    },
  },
  components: {
    atoms: {
      debugpanel: {
        debug: "🐛 偵錯",
        debug_panel: "偵錯面板",
        instances: "實例：",
      },
      emptystate: {
        dashboard: "儀表板",
      },
      modal: {
        dashboard: "儀表板",
        close: "關閉",
      },
      errorboundary: {
        something_went_wrong: "⚠️ 發生錯誤",
        unknown_error: "未知錯誤",
        try_again: "重試",
      },
    },
    screencast: {
      screencaststatusbar: {
        decrease_fps: "降低幀率",
        increase_fps: "提高幀率",
        take_full_quality_screenshot_png: "擷取全畫質螢幕截圖（PNG）",
        download_as_pdf: "下載為 PDF",
        fps: "幀率（",
      },
      screencasttile: {
        tab_preview: "分頁預覽",
        connection_lost: "連線中斷",
        show_static_preview: "顯示靜態預覽",
        retry_connection: "重新連線",
      },
      framedecode: {
        failed_to_decode_screencast_frame: "無法解碼即時畫面影格",
      },
    },
    molecules: {
      createprofilemodal: {
        new_profile: "📁 新增設定檔",
        cancel: "取消",
        create: "建立",
        name: "名稱",
        e_g_personal_work_scraping: "例如：個人、工作、爬取",
        use_this_profile_when_helps_agents_pick:
          "使用此設定檔的時機（協助代理程式選出正確的設定檔）",
        e_g_i_need_to_access_gmail_for_the_team:
          "例如：我需要用團隊帳號存取 Gmail",
        import_from_optional_chrome_user_data:
          "匯入來源（選用 — Chrome 使用者資料路徑）",
        e_g_users_you_library_application:
          "例如：/Users/you/Library/Application Support/Google/Chrome",
      },
      navbar: {
        pinchtab: "PinchTab",
        logout: "登出",
        refresh_r: "重新整理（⌘R）",
        toggle_menu: "切換選單",
        monitoring: "監控",
        agents: "代理程式",
        profiles: "設定檔",
        settings: "設定",
      },
      instancestats: {
        instance: "實例",
        status: "狀態",
        uptime: "運作時間",
        port: "連接埠",
        crashes: "當機次數",
        browsing: "瀏覽",
        tabs: "分頁",
        domains: "網域",
        resources: "資源",
        memory: "記憶體",
        renderers: "算繪程序",
        pages: "頁面",
        js_heap: "JS 堆積",
        dom_nodes: "DOM 節點",
        listeners: "事件監聽器",
        frames: "框架",
        unreadable: "無法讀取",
        just_now: "剛剛",
        tabs_open_before_it_were_lost: "先前開啟的分頁已遺失",
        rss_across_the_browser_process_tree: "瀏覽器行程樹的常駐記憶體（RSS）",
        tabs_that_did_not_answer_not_counted: "沒有回應的分頁（未計入）",
        last_crash:
          "最後一次：{{reason}}，時間 {{time}} · 先前開啟的分頁已遺失",
        heap_summary_one: "已用 / 總量，{{count}} 個分頁合計",
        heap_summary_other: "已用 / 總量，{{count}} 個分頁合計",
        document_count_one: "{{count}} 份文件",
        document_count_other: "{{count}} 份文件",
      },
      agentitem: {
        tab_paused_for_human_handoff: "分頁已暫停，等待人工接手",
        just_now: "剛剛",
        session_at: "工作階段 {{time}}",
        session_range: "工作階段 {{start}}–{{end}}",
      },
      startinstancemodal: {
        start_profile: "🖥️ 啟動設定檔",
        cancel: "取消",
        start: "啟動",
        port: "連接埠",
        auto_select_from_configured_range: "從設定的連接埠範圍自動選擇",
        leave_blank_to_auto_select_a_free_port:
          "留空則從設定的實例連接埠範圍中自動挑選可用的連接埠。",
        headless_best_for_docker_vps: "無頭（適合 Docker/VPS）",
        browser: "瀏覽器",
        server_default: "伺服器預設",
        chrome: "Chrome",
        cloakbrowser: "CloakBrowser",
        ghost_chrome: "Ghost + Chrome",
        direct_launch_command_backup: "直接啟動指令（備用）",
        copy_command: "複製指令",
        replace: "取代",
        pinchtab_config_token: "pinchtab config token",
        when_auth_is_enabled: "當啟用驗證時。",
        with_the_value_from: "並使用來自下列位置的值",
        port_must_be_a_whole_number_between_1:
          "連接埠必須是 1 到 65535 之間的整數。",
        profile_id_missing: "缺少設定檔 ID",
        failed_to_launch_instance: "啟動實例失敗",
        copied: "已複製！",
        failed_to_copy: "複製失敗",
      },
      handoffnotifications: {
        human_intervention_required: "需要人工介入",
        dismiss_notification: "關閉通知",
        reason: "原因：",
        resume: "繼續",
      },
      serverstatusbadge: {
        expand_instance_list: "展開實例清單",
        collapse_instance_list: "收合實例清單",
        tab: "分頁",
        restart_required: "需要重新啟動",
        server_running: "伺服器執行中",
        restart_required_2: "需要重新啟動",
        running: "執行中",
        server_running_no_instances: "伺服器執行中，沒有實例",
      },
      serversummary: {
        settings: "設定",
        server_information: "伺服器資訊",
        technical_details_for_current_session: "目前工作階段的技術詳細資料",
        version: "版本",
        uptime: "運作時間",
      },
      tabschart: {
        monitoring: "監控",
        live_telemetry: "即時遙測",
        tabs: "分頁",
        memory: "記憶體",
        heap: "堆積",
        server_heap: "伺服器堆積",
        collecting_data: "正在收集資料…",
        waiting_for_more_data: "等待更多資料…",
      },
      idbadge: {
        click_to_copy_full_id: "點擊複製完整 ID：{{id}}",
      },
    },
  },
  tabs: {
    tabbar: {
      tab_paused_for_human_handoff: "分頁已暫停，等待人工接手",
      tab_is_paused_for_human_handoff: "分頁已暫停，等待人工接手",
      untitled: "未命名",
      unpin_and_follow_the_focused_tab_again:
        "取消固定並重新跟隨目前聚焦的分頁",
      pin_this_tab_selection: "固定目前選取的分頁",
      tabs: "分頁",
      monitoring: "監控",
      pin_tab: "固定 {{title}}",
      unpin_tab_and_follow_focus: "取消固定 {{title}} 並跟隨焦點",
      close_tab: "關閉 {{title}}",
      tabs_new: "分頁（{{count}} 個新的）",
    },
    selectedtabtitle: {
      untitled: "未命名",
    },
    instancetabspanel: {
      chart_crashed_check_console: "圖表當機 — 請檢查主控台",
      no_tabs_open: "沒有開啟的分頁",
      unknown: "未知",
    },
    tabitem: {
      untitled: "未命名",
    },
    consolepanel: {
      loading_console_logs: "正在載入主控台記錄…",
      no_console_logs_yet: "尚無主控台記錄",
    },
    errorspanel: {
      loading_errors: "正在載入錯誤…",
      no_errors_yet: "尚無錯誤",
    },
    selectedtabpanel: {
      select_a_tab_to_view_details: "選擇一個分頁以檢視詳細資料",
      no_instance_id_provided_for_live_view: "未提供即時檢視所需的實例 ID。",
      actions: "操作",
      live: "即時",
      console: "主控台",
      errors: "錯誤",
    },
  },
  instances: {
    instancelistitem: {
      tabs: "分頁",
      open_profile: "開啟設定檔",
      restart: "重新啟動",
      stop: "停止",
    },
    instancecard: {
      headless: "無頭",
      headed: "有頭",
      uptime: "運作時間",
      open_dashboard: "開啟儀表板",
      stop: "停止",
    },
  },
  pages: {
    monitoringpage: {
      instances: "實例",
      collapse_sidebar: "收合側邊欄",
    },
    loginpage: {
      authentication: "驗證",
      enter_api_token: "輸入 API 權杖",
      this_pinchtab_server_requires_a_bearer:
        "此 PinchTab 伺服器要求提供 Bearer 權杖，儀表板才能載入受保護的路由與 API。",
      run: "執行",
      pinchtab_config_token: "pinchtab config token",
      to_copy_the_token_to_your_clipboard: "即可將權杖複製到剪貼簿。",
      paste_bearer_token: "貼上 Bearer 權杖",
      authorizing: "正在驗證…",
      continue: "繼續",
      authentication_failed: "驗證失敗",
    },
    settings: {
      orchestrationsettingssection: {
        orchestration: "協同運作",
        port_range_and_allocation_policy_can_be:
          "連接埠範圍與分配原則會立即套用於後續啟動。策略與重新啟動原則的變更需要重新啟動儀表板，因為策略路由與生命週期狀態是在啟動時註冊的。",
        strategy: "策略",
        controls_instance_lifecycle_and_how:
          "控制實例生命週期以及簡寫要求的路由方式。",
        always_on: "一律開啟",
        simple: "簡單",
        explicit: "明確",
        simple_autorestart: "簡單自動重新啟動",
        no_instance_hub: "沒有實例（中樞）",
        launches_a_default_instance_at_boot_and:
          "啟動時拉起預設實例，當機後自動重新拉起。",
        launches_one_instance_on_first_request:
          "首次要求時啟動一個實例，不自動重新啟動。",
        all_instances_managed_via_api_no:
          "所有實例都透過 API 管理，不會自動啟動。",
        launches_on_first_request_and: "首次要求時啟動，當機後自動重新拉起。",
        no_local_chrome_processes_acts_as_a_hub:
          "不啟動本機 Chrome 行程，僅作為遠端橋接的中樞。",
        allocation_policy: "分配原則",
        determines_how_running_instances_are:
          "決定簡寫要求如何挑選執行中的實例。",
        first_available: "第一個可用",
        round_robin: "輪替",
        random: "隨機",
        instance_port_start: "實例連接埠起始值",
        lower_bound_for_auto_allocated_instance: "自動分配實例連接埠的下限。",
        instance_port_end: "實例連接埠結束值",
        upper_bound_for_auto_allocated_instance: "自動分配實例連接埠的上限。",
        max_restarts: "重新啟動次數上限",
        maximum_restart_attempts_use_1_for:
          "重新啟動嘗試次數上限。使用 -1 表示不限次數，0 表示不重新啟動。",
        initial_backoff: "初始退避",
        delay_in_seconds_before_the_first: "第一次重新啟動嘗試前的延遲秒數。",
        max_backoff: "退避上限",
        upper_bound_in_seconds_for_exponential: "指數退避重新啟動的秒數上限。",
        stable_after: "穩定判定時間",
        seconds_the_instance_must_stay_healthy:
          "實例必須保持健康的秒數，之後重新啟動計數才會歸零。",
      },
      securitysettingssection: {
        security: "安全性",
        these_controls_define_what_risky:
          "這些選項決定 PinchTab 會暴露哪些高風險能力。",
        one_or_more_sensitive_endpoint_families:
          "已啟用一個或多個敏感端點系列。指令碼執行、下載、上傳與即時擷取等功能可能帶來高風險能力。請僅在可信任的環境中啟用，並自行負責網路存取、驗證與下游使用的安全。",
        these_endpoint_families_can_expose_high:
          "這些端點系列一旦啟用即可能帶來高風險能力。請僅在可信任的環境中開啟，並且必須自行承擔網路存取、驗證與下游使用的責任。",
        controls_whether_the_corresponding: "控制是否啟用對應的端點系列。",
        enable: "啟用",
        allowed_websites: "允許的網站",
        comma_separated_domain_allowlist_for:
          "用於網頁內容的網域允許清單，以逗號分隔。可使用精確主機名稱或 *.example.com 這類模式。",
        "127_0_0_1_localhost_1": "127.0.0.1, localhost, ::1",
        keep_this_list_narrow_empty_or_wildcard:
          "請盡量縮小這份清單。空白或萬用字元項目會削弱 IDPI 的主要防線。即使已啟用 IDPI，允許非本機或不可信任的網站仍會擴大瀏覽器受攻擊面。",
        trusted_proxy_cidrs: "可信任代理 CIDR",
        comma_separated_cidrs_or_ips_whose:
          "導覽時其瀏覽器回報的遠端 IP 應受信任的 CIDR 或 IP，以逗號分隔。僅用於已知的內部代理。",
        "10_1_2_3_10_0_0_0_8": "10.1.2.3, 10.0.0.0/8",
        this_weakens_navigation_ip_checks_for:
          "這會放寬符合條件的遠端 IP 的導覽 IP 檢查。請優先使用具體的代理位址，而非大範圍私有網段。單獨 IP 項目會視為單一主機。",
        trusted_resolve_cidrs: "可信任解析 CIDR",
        comma_separated_cidrs_or_ips_that_a:
          "導覽預檢時主機名稱可解析到的 CIDR 或 IP，以逗號分隔。適用於內部 DNS 或代理環境。",
        "198_18_0_0_15_10_1_2_3": "198.18.0.0/15, 10.1.2.3",
        this_allows_hostnames_to_resolve_to_non:
          "這允許主機名稱解析到非公網 IP。請縮小清單，只包含你掌控的基礎設施。單獨 IP 項目會視為單一主機。",
      },
      settingssharedcomponents: {
        settings: "設定",
      },
      networksettingssection: {
        network_attach: "網路與附加",
        port_and_bind_changes_require_a_restart:
          "連接埠與繫結位址的變更需要重新啟動。API 權杖管理在儀表板之外進行。",
        server_port: "伺服器連接埠",
        http_port_for_the_dashboard_process: "儀表板行程使用的 HTTP 連接埠。",
        bind_address: "繫結位址",
        network_interface_the_dashboard_process:
          "儀表板行程繫結的網路介面。保持 127.0.0.1 或 localhost 可將直接可達範圍限制在本機。",
        a_non_loopback_bind_is_a_documented_non:
          "繫結到非回送位址屬於文件中說明的非預設、會降低安全性的設定變更。除非仍有其他網路邊界限制存取，否則可能讓伺服器暴露在本機之外。請務必設定權杖，並明確檢查代理或連接埠發佈行為。",
        loopback_bind_keeps_direct_server:
          "回送繫結可將伺服器的直接可達範圍保持在本機。改用",
        or_another_non_local_address_widens_the:
          "或其他非本機位址會擴大信任邊界。",
        api_token: "API 權杖",
        bearer_token_required_by_authenticated:
          "設定後，已驗證的要求需要攜帶此 Bearer 權杖。儀表板不會回傳也不管理該權杖。",
        no_token_configured_set_one_through_the:
          "尚未設定權杖。請透過 CLI 或設定檔設定。",
        token_configured_manage_rotation:
          "已設定權杖。請透過 CLI 或設定檔輪替；伺服器永遠不會回傳目前的值。執行",
        pinchtab_config_token: "pinchtab config token",
        to_copy_it_to_your_clipboard: "即可將它複製到剪貼簿。",
        no_api_token_is_set_anyone_who_can:
          "尚未設定 API 權杖。任何能連到此伺服器的人都能存取已開放的端點。請僅在可信任的本機網路中使用，或透過 CLI 或設定檔設定高強度權杖。保護存取安全由你負責。",
        state_directory: "狀態目錄",
        base_state_path_used_by_managed_child:
          "受管理子實例使用的基础狀態路徑。",
        trust_proxy_headers: "信任代理標頭",
        trust_x_forwarded_proto_x_forwarded:
          "在來源檢查中信任 X-Forwarded-Proto、X-Forwarded-Host 與 Forwarded 標頭。僅在 PinchTab 位於可信任的反向代理（例如 Caddy、nginx）之後時啟用。",
        enabled: "已啟用",
        disabled: "已停用",
        cookie_secure_mode: "Cookie Secure 模式",
        controls_whether_dashboard_session:
          "控制儀表板工作階段 Cookie 是否要求 HTTPS。Auto 僅在 HTTPS 下啟用 Secure。當 TLS 位於 PinchTab 之前時適合使用 Force Secure。",
        auto: "自動",
        force_secure: "強制 Secure",
        force_insecure: "強制非 Secure",
        force_secure_blocks_dashboard_login_on:
          "強制 Secure 會阻止透過純 HTTP 登入儀表板。當 PinchTab 直接透過 HTTPS 或位於可信任代理之後時使用。若 TLS 在 PinchTab 之前終止，請啟用",
        trustproxyheaders: "trustProxyHeaders",
        so_forwarded_https_requests_are: "以便辨識被轉送的 HTTPS 要求。",
        persist_dashboard_sessions: "保存儀表板工作階段",
        keep_dashboard_login_sessions_across:
          "在伺服器重新啟動後保留儀表板登入工作階段。若希望每次重新啟動都強制重新登入，請關閉此項。",
        session_idle_timeout: "工作階段閒置逾時",
        how_long_an_unused_dashboard_session:
          "未使用的儀表板工作階段保持有效的時間長度。設定檔以秒為單位儲存。",
        session_max_lifetime: "工作階段最長效期",
        absolute_lifetime_for_a_dashboard:
          "儀表板工作階段必須重新建立前的絕對效期，即使工作階段仍在活動中。",
        require_elevation_for_config_saves: "儲存設定需要提權",
        ask_for_api_token_re_entry_before:
          "儲存後端設定變更前要求重新輸入 API 權杖。預設為關閉。",
        allow_attach: "允許附加",
        permit_attaching_pinchtab_to_externally:
          "允許將 PinchTab 附加到外部管理的 Chrome 工作階段。",
        enable: "啟用",
        allowed_attach_hosts: "允許附加的主機",
        comma_separated_host_allowlist_for:
          '附加要求的主機允許清單，以逗號分隔。請只包含你掌控且信任的主機。使用 "*" 會關閉主機允許清單。',
        allowhosts: 'allowHosts: ["*"]',
        is_a_documented_non_default_security:
          "是文件中說明的非預設、會降低安全性的覆寫設定。它會完全關閉主機允許清單，允許對任何可達且配置允許的配置發起遠端附加要求。請僅在隔離且由維運掌控的網路中使用。",
        hosts_in_this_allowlist_may_be_used_for:
          "此允許清單中的主機可用於遠端附加要求。範圍過大或不可信任的項目會擴大信任邊界，可能暴露外部 Chrome 工作階段與瀏覽器內容。",
        allowed_attach_schemes: "允許附加的配置",
        comma_separated_scheme_allowlist:
          "配置允許清單，以逗號分隔，通常為 ws 與 wss。",
      },
      observabilitysettingssection: {
        observability: "可觀測性",
        activity_logging_tracks_api_requests:
          "活動記錄會追蹤 API 要求，用於偵錯與稽核。記錄儲存在本機，可透過「活動」頁面查詢。",
        activity_logging: "活動記錄",
        enable_or_disable_activity_event: "啟用或關閉活動事件記錄。",
        enabled: "已啟用",
        disabled: "已停用",
        retention_days: "保留天數",
        how_long_to_keep_activity_logs_before:
          "活動記錄在自動清理前的保留時間。保留越久佔用磁碟越多，但稽核紀錄更完整。",
        session_idle_timeout_seconds: "工作階段閒置逾時（秒）",
        time_before_an_inactive_agent_session:
          "沒有活動的代理程式工作階段被判定為閒置的時間。用於依工作階段歸類活動。",
      },
      profilessettingssection: {
        profiles: "設定檔",
        profile_storage_is_host_level_changing:
          "設定檔儲存屬於主機層級設定。變更基礎目錄需要重新啟動，因為設定檔管理員與協同運作器會在啟動時依該目錄建立。",
        profiles_base_directory: "設定檔基礎目錄",
        root_directory_where_browser_profiles: "存放瀏覽器設定檔的根目錄。",
        default_profile: "預設設定檔",
        profile_name_used_when_the_server_needs:
          "伺服器需要隱含預設值時使用的設定檔名稱。",
      },
      defaultssettingssection: {
        instance_defaults: "實例預設值",
        these_values_are_written_to_config_and:
          "這些值會寫入設定並用於新建的受管理實例。已在執行的實例維持目前的執行時設定。",
        mode: "模式",
        default_browser_mode_for_new_launches: "新啟動實例的預設瀏覽器模式。",
        headless: "無頭",
        headed: "有頭",
        stealth_level: "隱蔽等級",
        bot_detection_evasion_profile_higher:
          "反機器人偵測的規避設定。等級越高越可能影響錯誤監控與部分瀏覽器功能。",
        light: "輕度",
        medium: "中度",
        full: "完整",
        light_2: "輕度：",
        default_baseline_stealth_keeps_the:
          "預設基準隱蔽。在隱藏基本自動化特徵的同時，維持風險最低的啟動方式與 JS 行為契約。",
        default_product_security_baseline: "✓ 預設的產品安全基準",
        no_intentional_api_realism_or_security:
          "✓ 不刻意犧牲 API 真實性或安全性",
        medium_2: "中度：",
        non_default_risk_mode_adds_client_hints:
          "非預設的風險模式。加入 Client Hints、`chrome.runtime` 填充、iframe 傳遞、呼叫堆疊過濾與仿原生函式遮蔽，以提升反機器人相容性。",
        alters_browser_visible_apis_and_error:
          "⚠ 會改變瀏覽器可見的 API 以及錯誤與呼叫堆疊行為。監控與偵錯工具可能看到不同結果。",
        permissions_and_compatibility_shims_can:
          "⚠ 權限與相容性填充可能回傳刻意修改過的值。請勿將此當作預設安全基準。",
        reports_that_require_explicitly:
          "⚠ 需要明確啟用中度才能重現的報告，應視為操作者主動接受風險，而非預設路徑行為。",
        full_2: "完整：",
        highest_risk_non_default_mode_adds:
          "風險最高的非預設模式。在中度之上再加入圖形、canvas、音訊、系統色彩與 WebRTC 的變更。",
        browser_output_is_intentionally_less:
          "⚠ 瀏覽器輸出會刻意偏離原生且較不穩定。算繪、媒體與網路行為可能出錯或偏離真實 Chrome。",
        this_mode_is_not_an_acceptable_default:
          "⚠ 此模式不是可接受的預設安全態勢。請僅在明確接受其取捨範圍時啟用。",
        reports_that_depend_on_enabling_full:
          "⚠ 依賴啟用完整模式的報告，應歸類為非預設的操作者風險，除非能證明預設路徑也存在繞過。",
        webrtc_webgl_canvas_and_audio_behavior:
          "⚠ WebRTC、WebGL、canvas 與音訊行為都可能偏離基準 Chrome。",
        tab_eviction_policy: "分頁淘汰原則",
        how_pinchtab_behaves_when_a_managed:
          "受管理實例達到分頁上限時 PinchTab 的行為。",
        reject_new_tabs: "拒絕新分頁",
        close_oldest: "關閉最舊的",
        close_least_recently_used: "關閉最久未使用的",
        tab_lifecycle: "分頁生命週期",
        close_idle_closes_a_tab_after_a_text:
          "「關閉閒置」會在 /text、/snapshot 或 /action 回應後、超過延遲時間時關閉分頁；/navigate 會取消該計時。「凍結閒置」會凍結在延遲時間內沒有任何要求觸及的分頁，並在其下次要求時解凍。",
        keep_never_auto_close: "保留（永不自動關閉）",
        close_idle: "關閉閒置",
        freeze_idle: "凍結閒置",
        auto_close_delay: "自動關閉延遲",
        seconds_of_idleness_before_an_idle_tab:
          "閒置分頁被關閉或凍結前的閒置秒數。僅在生命週期為「關閉閒置」或「凍結閒置」時生效。",
        restore_tabs_on_startup: "啟動時還原分頁",
        when_enabled_tabs_open_at_shutdown_are:
          "啟用後，關閉時仍開啟的分頁會在下次啟動時重新開啟。預設為關閉 — 已關閉的分頁在重新啟動後維持關閉。",
        enable: "啟用",
        max_tabs: "分頁數上限",
        maximum_number_of_tabs_per_managed: "每個受管理實例的分頁數量上限。",
        max_parallel_tabs: "平行分頁數上限",
        set_to_0_to_auto_detect_from_cpu_count:
          "設為 0 表示依 CPU 數量自動偵測。",
        timezone: "時區",
        optional_timezone_override_for_launched: "為啟動的實例選擇性覆寫時區。",
        europe_rome: "Europe/Rome",
        user_agent: "User agent",
        optional_override_applied_to_new:
          "選擇性套用於新建受管理實例的覆寫值。",
        custom_user_agent: "自訂 User agent",
        applies_to_newly_launched_managed: "套用於新啟動的受管理實例。",
      },
      securityidpisettingssection: {
        security_idpi: "安全性 IDPI",
        indirect_prompt_injection_controls:
          "間接提示注入防護會限制允許存取的網站，並在擷取內容進入下游自動化之前加上保護。",
        idpi_is_disabled_browser_content_is_not:
          "IDPI 已關閉。瀏覽器內容不會經過網站允許清單或內容防護過濾。",
        the_website_whitelist_is_not_set_to_a:
          "網站白名單未設為受限網域清單。這是 IDPI 的主要防線，應當設定。",
        the_website_whitelist_contains_which:
          "網站白名單包含 '*'，實際上關閉了網域限制。",
        idpi_is_enforcing_a_specific_website:
          "IDPI 正在強制執行特定的網站白名單與內容防護。",
        enable: "啟用",
        custom_patterns: "自訂模式",
        optional_comma_separated_phrases_to:
          "選擇性的逗號分隔詞句，將視為可疑的提示注入內容。",
        ignore_previous_instructions_exfiltrate:
          "ignore previous instructions, exfiltrate data",
      },
      timeoutssettingssection: {
        timeouts: "逾時",
        runtime_timing_defaults_written_into:
          "寫入新子行程設定的執行時計時預設值。已在執行的實例維持目前的逾時設定。",
      },
      browsersettingssection: {
        browser_runtime: "瀏覽器執行環境",
        these_settings_are_written_into_the:
          "這些設定會寫入為新建受管理實例產生的子行程設定。",
        provider: "提供者",
        browser_backend_used_for_new_managed:
          "新建受管理實例使用的瀏覽器後端。",
        chrome: "Chrome",
        cloakbrowser: "CloakBrowser",
        ghost_chrome: "Ghost + Chrome",
        browser_version: "瀏覽器版本",
        version_string_used_in_generated_ua:
          "產生 UA/指紋預設值時使用的版本字串。",
        browser_binary: "瀏覽器執行檔",
        optional_path_override_for_the_chrome:
          "選擇性覆寫 Chrome 或 CloakBrowser 執行檔的路徑。",
        fingerprint_seed: "指紋種子",
        deterministic_cloakbrowser_identity:
          "確定性的 CloakBrowser 身分種子。留空則每次啟動使用全新身分。",
        fingerprint_platform: "指紋平台",
        native_platform_fingerprint_reported_by:
          "CloakBrowser 回報的原生平台指紋。",
        auto: "自動",
        windows: "Windows",
        macos: "macOS",
        linux: "Linux",
        cloak_locale: "Cloak 地區設定",
        locale_passed_as_fingerprint_locale:
          "以 --fingerprint-locale 傳入的地區設定。",
        cloak_timezone: "Cloak 時區",
        timezone_passed_as_fingerprint_timezone:
          "以 --fingerprint-timezone 傳入的時區。",
        webrtc_ip: "WebRTC IP",
        explicit_replacement_ip_or_auto_for:
          "明確的替代 IP，或使用 auto 由 CloakBrowser 解析代理出口 IP。",
        fonts_directory: "字型目錄",
        directory_containing_target_platform:
          "包含 CloakBrowser 目標平台字型的目錄。",
        storage_quota: "儲存配額",
        storage_quota_in_mb_passed_as:
          "以 MB 為單位、以 --fingerprint-storage-quota 傳入的儲存配額。",
        native_stealth_only: "僅原生隱蔽",
        disable_pinchtab_js_stealth_overlays:
          "關閉 PinchTab 的 JS 隱蔽覆蓋層與隱藏自動化的啟動旗標。",
        use_cloakbrowser_native_patches: "使用 CloakBrowser 原生修補",
        extra_flags: "額外旗標",
        additional_chrome_flags_appended_when:
          "啟動受管理實例時額外附加的 Chrome 旗標。",
        extension_paths: "擴充功能路徑",
        comma_separated_extension_directories:
          "要載入的擴充功能目錄，以逗號分隔。依預設，PinchTab 使用其狀態/設定目錄下的本機 extensions/ 資料夾。在此設定自訂路徑可覆寫該預設值，清空欄位則關閉擴充功能載入。",
      },
      dashboardsettingssection: {
        dashboard_preferences: "儀表板偏好設定",
        language: "語言",
        choose_the_language_of_the_dashboard: "選擇儀表板介面的語言。",
        these_controls_affect_this_dashboard_ui:
          "這些選項只影響本儀表板介面。它們儲存在你的瀏覽器本機，不需要重新啟動後端。",
        screencast_frame_rate: "即時畫面幀率",
        controls_how_often_live_previews: "控制即時預覽要求新影格的頻率。",
        fps: "fps",
        screencast_quality: "即時畫面品質",
        jpeg_quality_for_tab_preview_streams: "分頁預覽串流的 JPEG 品質。",
        screencast_width: "即時畫面寬度",
        maximum_preview_width_for_live_tiles: "即時預覽圖磚的最大寬度。",
        px: "px",
        memory_metrics: "記憶體指標",
        poll_every_running_instance_for_browser:
          "每個監控週期輪詢所有執行中的實例以取得瀏覽器記憶體：Chrome 行程樹的 RSS，以及透過 CDP 從每個開啟的分頁讀取的 JS 堆積與 DOM 計數。實測成本：每個實例每週期約每個開啟分頁 1 毫秒，加上行程樹巡覽的數十毫秒。",
        enable: "啟用",
        polling_interval: "輪詢間隔",
        how_frequently_the_dashboard_asks_the:
          "儀表板向後端要求最新指標的頻率。",
        s: "s",
        reasoning_output: "推理輸出",
        choose_whether_the_live_agent_feed:
          "選擇即時代理程式訊息串要顯示工具呼叫、進度更新，或兩者都顯示。",
        tool_calls_only: "僅工具呼叫",
        progress_only: "僅進度",
        both: "兩者",
      },
      autosolversettingssection: {
        autosolver: "AutoSolver",
        these_settings_are_saved_into_the:
          "這些設定會儲存到 PinchTab 設定檔。外部提供者的 API 金鑰為唯寫，必須直接在该檔案中設定。",
        config_file: "設定檔",
        dashboard_edits_are_written_back_to:
          "儀表板中的修改會寫回此檔案。請在同一設定檔的 autoSolver.external 下設定外部提供者金鑰。",
        config_path_unavailable: "設定路徑無法使用",
        enable_autosolver: "啟用 AutoSolver",
        turns_on_the_autosolver_runtime:
          "為支援的驗證挑戰流程開啟 AutoSolver 執行時設定。",
        enabled: "已啟用",
        disabled: "已停用",
        auto_trigger: "自動觸發",
        automatically_run_autosolver_after:
          "在支援的導覽與操作要求之後自動執行 AutoSolver。",
        trigger_on_navigate: "導覽時觸發",
        run_autosolver_checks_after_successful:
          "導覽呼叫成功後執行 AutoSolver 檢查。",
        trigger_on_action: "操作時觸發",
        run_autosolver_checks_after_successful_2:
          "操作呼叫成功後執行 AutoSolver 檢查。",
        max_attempts: "嘗試次數上限",
        maximum_autosolver_retries_before_the:
          "管線放棄前的 AutoSolver 重試次數上限。",
        solver_timeout_sec: "求解器逾時（秒）",
        per_solver_timeout_for_each_attempt: "每次嘗試中單一求解器的逾時時間。",
        retry_base_delay_ms: "重試基礎延遲（毫秒）",
        base_retry_backoff_delay_between:
          "AutoSolver 各次嘗試之間的基礎重試退避延遲。",
        retry_max_delay_ms: "重試延遲上限（毫秒）",
        maximum_retry_backoff_delay_cap_between:
          "AutoSolver 各次嘗試之間重試退避延遲的上限。",
        solvers: "求解器",
        comma_separated_ordered_list_of_solver:
          "依序嘗試的求解器名稱清單，以逗號分隔。可使用 GET /solvers 或 GET /config/autosolver 確認執行時可用的名稱。",
        llm_provider: "LLM 提供者",
        optional_provider_name_used_when_llm:
          "啟用 LLM 備援時使用的選擇性提供者名稱。",
        llm_fallback: "LLM 備援",
        use_an_llm_as_the_last_resort_after:
          "在已註冊的求解器全部失敗後，將 LLM 作為最後手段。",
        external_provider_keys: "外部提供者金鑰",
        capsolver_and_2captcha_credentials_are:
          "Capsolver 與 2Captcha 憑證不會顯示在儀表板中，必須在設定檔裡管理。只有在設定金鑰之後，這些提供者才會出現在執行時求解器清單中。",
        open_the_config_file_above_and_set: "開啟上方的設定檔並設定",
        autosolver_external_capsolverkey: "autoSolver.external.capsolverKey",
        autosolver_external_twocaptchakey: "autoSolver.external.twoCaptchaKey",
        there_the_dashboard_does_not_display_or:
          "。儀表板不會顯示或編輯這些值，也沒有環境變數可覆寫。",
      },
    },
    monitoring: {
      monitoringemptystate: {
        starting_default_instance: "正在啟動預設實例…",
        start_default_instance: "啟動預設實例",
        open_default_profile: "開啟預設設定檔",
        no_active_instances: "沒有使用中的實例",
        pinchtab_expected_a_default_instance:
          "PinchTab 預期有預設實例，但它一直未就緒。請手動啟動或檢查該設定檔。",
        start_the_default_instance_or_open:
          "啟動預設實例，或開啟「設定檔」啟動其他設定檔。",
        waiting_for_default_profile:
          "PinchTab 正在等待預設設定檔上線，稍後會自動重試（剩餘 {{count}} 次檢查）。",
      },
      defaultinstancemodal: {
        start_default_instance: "啟動預設實例",
        cancel: "取消",
        start_headed: "以有頭模式啟動",
        start_headless: "以無頭模式啟動",
        choose_how_to_launch_the_default:
          "選擇本次工作階段中預設設定檔的啟動方式。",
        configured_default_mode: "設定的預設模式：",
      },
    },
    profilespage: {
      loading_profiles: "正在載入設定檔…",
      no_profiles_yet: "尚無設定檔",
      click_new_profile_to_create_one: "點選「新增設定檔」建立一個",
      new_profile: "新增設定檔",
      profiles: "設定檔",
      total: "總計",
      no_account: "沒有帳號",
      profile_deleted: "已刪除設定檔「{{name}}」",
    },
    settingspage: {
      confirm_admin_action: "確認管理操作",
      cancel: "取消",
      verifying: "正在驗證…",
      continue: "繼續",
      re_enter_the_api_token_to_save_backend:
        "儲存後端設定變更需要重新輸入 API 權杖。提權工作階段會短暫保持有效，不需要為每個管理操作重複輸入。",
      api_token: "API 權杖",
      paste_api_token: "貼上 API 權杖",
      restart_required: "需要重新啟動",
      reset: "重設",
      saving: "正在儲存…",
      save: "儲存",
      restart_needed_for: "需要重新啟動的項目：",
      loading_settings: "正在載入設定…",
      settings_eyebrow: "設定",
    },
  },
  activities: {
    activityexplorer: {
      agent: "代理程式",
      all: "全部",
      session: "工作階段",
      request_timeline: "要求時間軸",
      activity: "活動",
      failed_to_load_activity: "載入活動失敗",
    },
    agentstreampanel: {
      no_matching_activity: "沒有符合的活動",
      adjust_the_filters_or_generate_some:
        "調整篩選條件，或透過 CLI、MCP 或儀表板產生一些流量。",
    },
    streamrow: {
      ms: "ms",
      navigate_to_page: "導覽至頁面",
      capture_page_snapshot: "擷取頁面快照",
      open_screencast_stream: "開啟即時畫面串流",
      extract_text_from_page: "從頁面擷取文字",
      click_on_page: "在頁面上點擊",
      double_click_on_page: "在頁面上雙擊",
      type_into_page: "在頁面上輸入",
      hover_on_page: "在頁面上懸停",
      fill_field: "填寫欄位",
      select_option: "選擇選項",
      scroll_page: "捲動頁面",
      press_key: "按下按鍵",
      wait_for_condition: "等待條件",
      evaluate_javascript: "執行 JavaScript",
      upload_file: "上傳檔案",
      download_file: "下載檔案",
      on_tab: " 於分頁 ",
      navigate_to_url: "前往 {{url}}",
      click_ref: "點擊「{{ref}}」",
      double_click_ref: "雙擊「{{ref}}」",
      type_into_ref: "在「{{ref}}」中輸入",
      hover_ref: "懸停在「{{ref}}」",
      fill_ref: "填入「{{ref}}」",
      select_ref: "選取「{{ref}}」",
      press_key_on_ref: "在「{{ref}}」上按鍵",
    },
    activityline: {
      progress: "進度",
      agent_reported_progress: "代理程式回報進度",
      ms: "ms",
    },
    activityitemline: {
      tab_paused_for_human_handoff: "分頁已暫停，等待人工接手",
      tab_is_paused_for_human_handoff: "分頁已暫停，等待人工接手",
      resume_automation_after_manual: "人工完成驗證挑戰後繼續自動化",
      resuming: "正在繼續…",
      resolve_challenge: "解決驗證挑戰",
      browser_was_escalated: "瀏覽器已提權",
      escalated: "已提權",
      navigate_to_page: "導覽至頁面",
      capture_page_snapshot: "擷取頁面快照",
      open_screencast_stream: "開啟即時畫面串流",
      extract_text_from_page: "從頁面擷取文字",
      take_screenshot: "擷取螢幕截圖",
      export_page_as_pdf: "將頁面匯出為 PDF",
      click_on_page: "在頁面上點擊",
      double_click_on_page: "在頁面上雙擊",
      type_into_page: "在頁面上輸入",
      hover_on_page: "在頁面上懸停",
      fill_field: "填寫欄位",
      select_option: "選擇選項",
      scroll_page: "捲動頁面",
      press_key: "按下按鍵",
      wait_for_condition: "等待條件",
      evaluate_javascript: "執行 JavaScript",
      upload_file: "上傳檔案",
      download_file: "下載檔案",
      resume_failed: "繼續失敗",
      navigate_to_url: "前往 {{url}}",
      click_ref: "點擊「{{ref}}」",
      double_click_ref: "雙擊「{{ref}}」",
      type_into_ref: "在「{{ref}}」中輸入",
      hover_ref: "懸停在「{{ref}}」",
      fill_ref: "填入「{{ref}}」",
      select_ref: "選取「{{ref}}」",
      press_key_on_ref: "在「{{ref}}」上按鍵",
    },
    activitytimeline: {
      timeline: "時間軸",
      recent_events: "最近事件",
      no_matching_activity: "沒有符合的活動",
      adjust_the_filters_or_generate_some:
        "調整篩選條件，或透過 CLI、MCP 或儀表板產生一些流量。",
    },
    activefilterbar: {
      clear_filters: "清除篩選",
    },
    activityfiltermenu: {
      "200": "200",
      "3600": "3600",
      profile: "設定檔",
      tab: "分頁",
      agent: "代理程式",
      action: "操作",
      advanced_filters: "進階篩選",
      hide: "隱藏",
      show: "顯示",
      instance: "實例",
      path_prefix: "路徑前置字元",
      tabs_or_instances: "/tabs/ or /instances/",
      age_seconds: "時間（秒）",
      limit: "上限",
      clear: "清除",
      search: "搜尋",
      any_profile: "任何設定檔",
      any_tab: "任何分頁",
      any_agent: "任何代理程式",
      any_action: "任何操作",
      any_instance: "任何實例",
    },
    agentworkspacesidebar: {
      agents: "代理程式",
      activities: "活動",
      no_agent_activity_observed_yet: "尚未觀察到代理程式活動",
      all_agents: "所有代理程式",
    },
    copyidpill: {
      copied: "已複製",
      copy_tab_id: "複製分頁 ID {{id}}",
    },
    hooks: {
      useactivitydata: {
        failed_to_load_activity: "載入活動失敗",
        failed_to_load_agent_activity: "載入代理程式活動失敗",
      },
    },
  },
  settings: {
    sections: {
      dashboard: {
        dashboard: "儀表板",
        local_monitoring_and_screencast: "本機監控與即時畫面偏好設定。",
      },
      defaults: {
        instance_defaults: "實例預設值",
        how_new_managed_browser_instances_launch:
          "新受管理瀏覽器實例的啟動方式。",
      },
      orchestration: {
        orchestration: "協同運作",
        routing_strategy_port_range_and: "路由策略、連接埠範圍與分配原則。",
      },
      security: {
        security: "安全性",
        sensitive_endpoint_gates_and_access: "敏感端點的開關與存取控制。",
      },
      "security-idpi": {
        security_idpi: "安全性 IDPI",
        indirect_prompt_injection_website_and: "間接提示注入的網站與內容防護。",
      },
      profiles: {
        profiles: "設定檔",
        shared_profile_storage_and_default: "共用設定檔儲存與預設設定檔行為。",
      },
      network: {
        network_attach: "網路與附加",
        server_binding_auth_and_attach_policy: "伺服器繫結、驗證與附加原則。",
      },
      browser: {
        browser_runtime: "瀏覽器執行環境",
        chrome_binary_version_flags_and:
          "Chrome 執行檔、版本、旗標與擴充功能。",
      },
      timeouts: {
        timeouts: "逾時",
        action_navigation_shutdown_and_wait:
          "操作、導覽、關閉與等待的逾時設定。",
      },
      autosolver: {
        autosolver: "AutoSolver",
        challenge_solving_behavior_and_config:
          "驗證挑戰的求解行為以及以設定檔為後端的提供者。",
      },
      observability: {
        observability: "可觀測性",
        activity_logging_and_retention_settings: "活動記錄與保留期設定。",
      },
    },
    security: {
      endpoints: {
        allowEvaluate: {
          allow_evaluate: "允許 evaluate",
        },
        allowMacro: {
          allow_macro: "允許 macro",
        },
        allowScreencast: {
          allow_screencast: "允許即時畫面",
        },
        allowDownload: {
          allow_download: "允許下載",
        },
        allowCookies: {
          allow_cookies: "允許 Cookie",
        },
        allowUpload: {
          allow_upload: "允許上傳",
        },
        allowNetworkIntercept: {
          allow_network_interception: "允許網路攔截",
          lets_agents_install_rules_to_abort_or:
            "允許代理程式安裝規則，以中止或滿足（模擬）某個分頁上的 HTTP 要求。開啟後，下方「允許的網站」中的主機禁止偽造回應，其他主機則允許。在你已授權代理程式使用的主機（例如你的銀行）上偽造回應是風險最高的結果 — 這正是受保護的是允許清單中的主機，而非相反的原因。為避免破壞 CORS，OPTIONS 預檢預設會略過。",
        },
        allowFileScheme: {
          allow_file_navigation: "允許 file:// 導覽",
          lets_agents_open_local_file_urls_a_file:
            "允許代理程式開啟本機 file:// URL。file:// URL 沒有主機，因此不受下方「允許的網站」限制，並繞過 SSRF/私有 IP 防護 — 啟用後等於授予透過快照/螢幕截圖/擷取讀取伺服器行程可讀取之任何本機檔案的權限。在嚴格模式允許清單生效期間，它仍會被阻擋。請僅在可信任的單租戶機器上啟用。",
        },
      },
      idpi: {
        enabled: {
          enable_idpi: "啟用 IDPI",
          turn_on_indirect_prompt_injection: "開啟間接提示注入防護。",
        },
        strictMode: {
          strict_mode: "嚴格模式",
          block_disallowed_domains_and_suspicious:
            "對不允許的網域與可疑內容直接阻擋，而不只是提出警告。",
        },
        scanContent: {
          scan_content: "掃描內容",
          inspect_extracted_text_and_snapshots:
            "檢查擷取的文字與快照是否含有提示注入特徵。",
        },
        wrapContent: {
          wrap_content: "包裹內容",
          mark_returned_page_text_as_untrusted:
            "將回傳的頁面文字標記為不可信內容，供下游使用者辨識。",
        },
      },
    },
    defaults: {
      booleans: {
        blockImages: {
          block_images: "封鎖圖片",
        },
        blockMedia: {
          block_media: "封鎖媒體",
        },
        blockAds: {
          block_ads: "封鎖廣告",
        },
        noAnimations: {
          disable_css_animations: "停用 CSS 動畫",
        },
        noRestore: {
          skip_session_restore: "略過工作階段還原",
        },
      },
      timeouts: {
        actionSec: {
          action_timeout: "操作逾時",
          maximum_time_for_action_requests: "操作要求的最長時間。",
        },
        navigateSec: {
          navigate_timeout: "導覽逾時",
          maximum_time_for_navigation_requests: "導覽要求的最長時間。",
        },
        shutdownSec: {
          shutdown_timeout: "關閉逾時",
          grace_period_before_force_closing_a: "強制關閉子行程前的寬限時間。",
        },
        waitNavMs: {
          wait_after_navigation_delay: "導覽後等待延遲",
          post_navigation_stabilization_delay_in:
            "導覽後的穩定等待延遲，以毫秒為單位。",
        },
      },
    },
    notices: {
      backend_config_saved_dynamic_changes:
        "後端設定已儲存。動態變更已在可行範圍內套用。",
      backend_config_saved_dynamic_changes_2:
        "後端設定已儲存。動態變更已在可行範圍內套用。伺服器層級變更建議重新啟動。",
      preferencesSaved: "儀表板偏好設定已儲存在此瀏覽器。",
    },
    errors: {
      loadFailed: "載入設定失敗",
      saveFailed: "儲存設定失敗",
      tokenVerifyFailed: "驗證 API 權杖失敗",
    },
  },
  monitoring: {
    errors: {
      startInstanceFailed: "啟動實例失敗",
    },
  },
  errors: {
    requestFailed: "要求失敗",
  },
  auth: {
    insecureTransport:
      "儀表板工作階段正透過不安全的 HTTP 執行；請使用 HTTPS 或 localhost 以獲得更強的工作階段保護。",
  },
};

export default messages;
