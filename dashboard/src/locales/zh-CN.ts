import type { Messages } from "../i18n/messages";

const messages: Messages = {
  app: {
    name: "PinchTab",
    checking_server_authentication: "正在检查服务器身份验证…",
    pinchtab_is_restarting_or_unreachable: "PinchTab 正在重启或无法连接。",
    automatic_retries_stopped: " 已停止自动重试。",
    retry_now: "立即重试",
    refresh: "刷新",
  },
  profiles: {
    profiletoolbarbuttons: {
      copy_id: "复制 ID",
      delete: "删除",
      save: "保存",
      stop: "停止",
      start: "启动",
      delete_profile: "删除档案",
      cancel: "取消",
      delete_profile_2: '删除档案 "',
      every_cookie_login_and_session_stored:
        '"? 其中保存的所有 Cookie、登录状态和会话都将永久丢失，且无法撤销。',
      copied: "已复制",
      failed: "失败",
    },
    profilemetainfopanel: {
      profile_panel: "档案面板",
      status: "状态",
      port: "端口",
      browser: "浏览器",
      size: "大小",
      account: "账号",
      identity: "身份",
      connection: "连接",
      cdp_attached: "已附加 CDP",
      cdp_url: "CDP 地址",
      path: "路径",
      not_found: "（未找到）",
      attached_via_cdp: "通过 CDP 附加",
      headless: "无头",
      headed: "有头",
    },
    profilecard: {
      error: "错误",
      stopped: "已停止",
      size: "大小",
      account: "账号",
      use_when: "使用场景",
      details: "详情",
      stop: "停止",
      start: "启动",
    },
    profiledetailspanel: {
      select_a_profile_to_inspect_its:
        "选择一个档案以查看其实例、实时标签页和日志。",
      live: "实时",
      tabs: "标签页",
      logs: "日志",
      no_tabs_open: "没有打开的标签页。",
      instance_not_running: "实例未运行。",
      profile_name: "档案：{{name}}",
    },
    profilebasicinfopanel: {
      name: "名称",
      use_this_profile_when: "使用此档案的场景",
    },
    profileliveviewpanel: {
      no_tabs_open: "没有打开的标签页",
      instance_not_running_start_the_profile:
        "实例未运行。启动该档案即可查看实时视图。",
    },
    instancelogspanel: {
      loading_logs: "正在加载日志…",
      no_instance_logs_available: "暂无实例日志。",
    },
    groups: {
      user: "档案",
      temporary: "临时",
      quarantined: "已隔离",
    },
  },
  components: {
    atoms: {
      debugpanel: {
        debug: "🐛 调试",
        debug_panel: "调试面板",
        instances: "实例：",
      },
      emptystate: {
        dashboard: "仪表盘",
      },
      modal: {
        dashboard: "仪表盘",
        close: "关闭",
      },
      errorboundary: {
        something_went_wrong: "⚠️ 出错了",
        unknown_error: "未知错误",
        try_again: "重试",
      },
    },
    screencast: {
      screencaststatusbar: {
        decrease_fps: "降低帧率",
        increase_fps: "提高帧率",
        take_full_quality_screenshot_png: "截取全画质屏幕截图（PNG）",
        download_as_pdf: "下载为 PDF",
        fps: "帧率（",
      },
      screencasttile: {
        tab_preview: "标签页预览",
        connection_lost: "连接已断开",
        show_static_preview: "显示静态预览",
        retry_connection: "重新连接",
      },
      framedecode: {
        failed_to_decode_screencast_frame: "无法解码实时预览帧",
      },
    },
    molecules: {
      createprofilemodal: {
        new_profile: "📁 新建档案",
        cancel: "取消",
        create: "创建",
        name: "名称",
        e_g_personal_work_scraping: "例如：个人、工作、抓取",
        use_this_profile_when_helps_agents_pick:
          "使用此档案的场景（帮助智能体选择正确的档案）",
        e_g_i_need_to_access_gmail_for_the_team:
          "例如：我需要用团队账号访问 Gmail",
        import_from_optional_chrome_user_data:
          "导入来源（可选 — Chrome 用户数据路径）",
        e_g_users_you_library_application:
          "例如：/Users/you/Library/Application Support/Google/Chrome",
      },
      navbar: {
        pinchtab: "PinchTab",
        logout: "退出登录",
        refresh_r: "刷新（⌘R）",
        toggle_menu: "切换菜单",
        monitoring: "监控",
        agents: "智能体",
        profiles: "档案",
        settings: "设置",
      },
      instancestats: {
        instance: "实例",
        status: "状态",
        uptime: "运行时长",
        port: "端口",
        crashes: "崩溃次数",
        browsing: "浏览",
        tabs: "标签页",
        domains: "域名",
        resources: "资源",
        memory: "内存",
        renderers: "渲染进程",
        pages: "页面",
        js_heap: "JS 堆",
        dom_nodes: "DOM 节点",
        listeners: "监听器",
        frames: "框架",
        unreadable: "无法读取",
        just_now: "刚刚",
        tabs_open_before_it_were_lost: "此前打开的标签页已丢失",
        rss_across_the_browser_process_tree: "浏览器进程树的常驻内存（RSS）",
        tabs_that_did_not_answer_not_counted: "未响应的标签页（未计入）",
        last_crash:
          "最后一次：{{reason}}，时间 {{time}} · 此前打开的标签页已丢失",
        heap_summary_one: "已用 / 总量，{{count}} 个标签页合计",
        heap_summary_other: "已用 / 总量，{{count}} 个标签页合计",
        document_count_one: "{{count}} 个文档",
        document_count_other: "{{count}} 个文档",
      },
      agentitem: {
        tab_paused_for_human_handoff: "标签页已暂停，等待人工接管",
        just_now: "刚刚",
        session_at: "会话 {{time}}",
        session_range: "会话 {{start}}–{{end}}",
      },
      startinstancemodal: {
        start_profile: "🖥️ 启动档案",
        cancel: "取消",
        start: "启动",
        port: "端口",
        auto_select_from_configured_range: "从配置的端口范围自动选择",
        leave_blank_to_auto_select_a_free_port:
          "留空则从配置的实例端口范围中自动选择一个空闲端口。",
        headless_best_for_docker_vps: "无头（适合 Docker/VPS）",
        browser: "浏览器",
        server_default: "服务器默认",
        chrome: "Chrome",
        cloakbrowser: "CloakBrowser",
        ghost_chrome: "Ghost + Chrome",
        direct_launch_command_backup: "直接启动命令（备用）",
        copy_command: "复制命令",
        replace: "替换",
        pinchtab_config_token: "pinchtab config token",
        when_auth_is_enabled: "当启用身份验证时。",
        with_the_value_from: "并使用来自以下位置的值",
        port_must_be_a_whole_number_between_1:
          "端口必须是 1 到 65535 之间的整数。",
        profile_id_missing: "缺少档案 ID",
        failed_to_launch_instance: "启动实例失败",
        copied: "已复制！",
        failed_to_copy: "复制失败",
      },
      handoffnotifications: {
        human_intervention_required: "需要人工介入",
        dismiss_notification: "关闭通知",
        reason: "原因：",
        resume: "继续",
      },
      serverstatusbadge: {
        expand_instance_list: "展开实例列表",
        collapse_instance_list: "收起实例列表",
        tab: "标签页",
        restart_required: "需要重启",
        server_running: "服务器运行中",
        restart_required_2: "需要重启",
        running: "运行中",
        server_running_no_instances: "服务器运行中，无实例",
      },
      serversummary: {
        settings: "设置",
        server_information: "服务器信息",
        technical_details_for_current_session: "当前会话的技术详情",
        version: "版本",
        uptime: "运行时长",
      },
      tabschart: {
        monitoring: "监控",
        live_telemetry: "实时遥测",
        tabs: "标签页",
        memory: "内存",
        heap: "堆",
        server_heap: "服务器堆",
        collecting_data: "正在收集数据…",
        waiting_for_more_data: "等待更多数据…",
      },
      idbadge: {
        click_to_copy_full_id: "点击复制完整 ID：{{id}}",
      },
    },
  },
  tabs: {
    tabbar: {
      tab_paused_for_human_handoff: "标签页已暂停，等待人工接管",
      tab_is_paused_for_human_handoff: "标签页已暂停，等待人工接管",
      untitled: "未命名",
      unpin_and_follow_the_focused_tab_again:
        "取消固定并重新跟随当前聚焦的标签页",
      pin_this_tab_selection: "固定当前选中的标签页",
      tabs: "标签页",
      monitoring: "监控",
      pin_tab: "固定 {{title}}",
      unpin_tab_and_follow_focus: "取消固定 {{title}} 并跟随焦点",
      close_tab: "关闭 {{title}}",
      tabs_new: "标签页（{{count}} 个新的）",
    },
    selectedtabtitle: {
      untitled: "未命名",
    },
    instancetabspanel: {
      chart_crashed_check_console: "图表崩溃 — 请检查控制台",
      no_tabs_open: "没有打开的标签页",
      unknown: "未知",
    },
    tabitem: {
      untitled: "未命名",
    },
    consolepanel: {
      loading_console_logs: "正在加载控制台日志…",
      no_console_logs_yet: "暂无控制台日志",
    },
    errorspanel: {
      loading_errors: "正在加载错误…",
      no_errors_yet: "暂无错误",
    },
    selectedtabpanel: {
      select_a_tab_to_view_details: "选择一个标签页以查看详情",
      no_instance_id_provided_for_live_view: "未提供用于实时视图的实例 ID。",
      actions: "操作",
      live: "实时",
      console: "控制台",
      errors: "错误",
    },
  },
  instances: {
    instancelistitem: {
      tabs: "标签页",
      open_profile: "打开档案",
      restart: "重启",
      stop: "停止",
    },
    instancecard: {
      headless: "无头",
      headed: "有头",
      uptime: "运行时长",
      open_dashboard: "打开仪表盘",
      stop: "停止",
    },
  },
  pages: {
    monitoringpage: {
      instances: "实例",
      collapse_sidebar: "收起侧边栏",
    },
    loginpage: {
      authentication: "身份验证",
      enter_api_token: "输入 API 令牌",
      this_pinchtab_server_requires_a_bearer:
        "此 PinchTab 服务器要求提供 Bearer 令牌，仪表盘才能加载受保护的路由和 API。",
      run: "运行",
      pinchtab_config_token: "pinchtab config token",
      to_copy_the_token_to_your_clipboard: "即可将令牌复制到剪贴板。",
      paste_bearer_token: "粘贴 Bearer 令牌",
      authorizing: "正在验证…",
      continue: "继续",
      authentication_failed: "身份验证失败",
    },
    settings: {
      orchestrationsettingssection: {
        orchestration: "编排",
        port_range_and_allocation_policy_can_be:
          "端口范围和分配策略会立即对后续启动生效。策略与重启策略的变更需要重启仪表盘，因为策略路由和生命周期状态在启动时注册。",
        strategy: "策略",
        controls_instance_lifecycle_and_how:
          "控制实例生命周期以及简写请求的路由方式。",
        always_on: "始终开启",
        simple: "简单",
        explicit: "显式",
        simple_autorestart: "简单自动重启",
        no_instance_hub: "无实例（中枢）",
        launches_a_default_instance_at_boot_and:
          "启动时拉起默认实例，崩溃后自动重新拉起。",
        launches_one_instance_on_first_request:
          "首次请求时启动一个实例，不自动重启。",
        all_instances_managed_via_api_no: "所有实例通过 API 管理，不自动启动。",
        launches_on_first_request_and: "首次请求时启动，崩溃后自动重新拉起。",
        no_local_chrome_processes_acts_as_a_hub:
          "不启动本地 Chrome 进程，仅作为远程桥接的中枢。",
        allocation_policy: "分配策略",
        determines_how_running_instances_are:
          "决定简写请求如何选择正在运行的实例。",
        first_available: "第一个可用",
        round_robin: "轮询",
        random: "随机",
        instance_port_start: "实例端口起始值",
        lower_bound_for_auto_allocated_instance: "自动分配实例端口的下限。",
        instance_port_end: "实例端口结束值",
        upper_bound_for_auto_allocated_instance: "自动分配实例端口的上限。",
        max_restarts: "最大重启次数",
        maximum_restart_attempts_use_1_for:
          "最大重启次数。使用 -1 表示不限次数，0 表示不重启。",
        initial_backoff: "初始退避",
        delay_in_seconds_before_the_first: "首次重启尝试前的延迟秒数。",
        max_backoff: "最大退避",
        upper_bound_in_seconds_for_exponential: "指数退避重启的秒数上限。",
        stable_after: "稳定判定时间",
        seconds_the_instance_must_stay_healthy:
          "实例需保持健康的秒数，之后重启计数才会归零。",
      },
      securitysettingssection: {
        security: "安全",
        these_controls_define_what_risky:
          "这些选项决定 PinchTab 暴露哪些高风险能力。",
        one_or_more_sensitive_endpoint_families:
          "已启用一个或多个敏感接口族。脚本执行、下载、上传和实时捕获等功能可能带来高风险。请仅在可信环境中启用，并自行负责网络访问、身份验证和下游使用的安全。",
        these_endpoint_families_can_expose_high:
          "这些接口族一旦启用即可能带来高风险能力。请仅在可信环境中开启，且须自行承担网络访问、身份验证和下游使用的责任。",
        controls_whether_the_corresponding: "控制是否启用对应的接口族。",
        enable: "启用",
        allowed_websites: "允许的网站",
        comma_separated_domain_allowlist_for:
          "用于网页内容的域名允许列表，以逗号分隔。可使用精确主机名或 *.example.com 这类模式。",
        "127_0_0_1_localhost_1": "127.0.0.1, localhost, ::1",
        keep_this_list_narrow_empty_or_wildcard:
          "请尽量收窄该列表。空值或通配符会削弱 IDPI 的主要防线。即使启用了 IDPI，允许非本地或不可信网站也会扩大浏览器受攻击面。",
        trusted_proxy_cidrs: "可信代理 CIDR",
        comma_separated_cidrs_or_ips_whose:
          "导航时其浏览器上报的远端 IP 应被信任的 CIDR 或 IP，以逗号分隔。仅用于已知的内部代理。",
        "10_1_2_3_10_0_0_0_8": "10.1.2.3, 10.0.0.0/8",
        this_weakens_navigation_ip_checks_for:
          "这会放宽匹配远端 IP 的导航 IP 校验。请优先使用具体的代理地址而非大范围私有网段。单独 IP 条目按单个主机处理。",
        trusted_resolve_cidrs: "可信解析 CIDR",
        comma_separated_cidrs_or_ips_that_a:
          "导航预检时主机名可解析到的 CIDR 或 IP，以逗号分隔。适用于内部 DNS 或代理环境。",
        "198_18_0_0_15_10_1_2_3": "198.18.0.0/15, 10.1.2.3",
        this_allows_hostnames_to_resolve_to_non:
          "这允许主机名解析到非公网 IP。请尽量收窄列表，只包含你掌控的基础设施。单独 IP 条目按单个主机处理。",
      },
      settingssharedcomponents: {
        settings: "设置",
      },
      networksettingssection: {
        network_attach: "网络与附加",
        port_and_bind_changes_require_a_restart:
          "端口与绑定地址的变更需要重启。API 令牌管理在仪表盘之外进行。",
        server_port: "服务器端口",
        http_port_for_the_dashboard_process: "仪表盘进程使用的 HTTP 端口。",
        bind_address: "绑定地址",
        network_interface_the_dashboard_process:
          "仪表盘进程绑定的网络接口。保持 127.0.0.1 或 localhost 可将直接可达范围限制在本机。",
        a_non_loopback_bind_is_a_documented_non:
          "绑定到非回环地址属于文档中说明的非默认、会降低安全性的配置变更。除非仍有其他网络边界限制访问，否则可能将服务器暴露到本机之外。请务必设置令牌，并明确检查代理或端口发布行为。",
        loopback_bind_keeps_direct_server:
          "回环绑定可将服务器直接可达范围保持在本机。改用",
        or_another_non_local_address_widens_the:
          "或其他非本地地址会扩大信任边界。",
        api_token: "API 令牌",
        bearer_token_required_by_authenticated:
          "设置后，已认证请求需要携带该 Bearer 令牌。仪表盘不会返回也不管理该令牌。",
        no_token_configured_set_one_through_the:
          "未配置令牌。请通过 CLI 或配置文件设置。",
        token_configured_manage_rotation:
          "已配置令牌。请通过 CLI 或配置文件轮换；服务器永远不会返回当前值。运行",
        pinchtab_config_token: "pinchtab config token",
        to_copy_it_to_your_clipboard: "即可将其复制到剪贴板。",
        no_api_token_is_set_anyone_who_can:
          "未设置 API 令牌。任何能访问此服务器的人都可以访问已开放的接口。请仅在可信本地网络中使用，或通过 CLI 或配置文件配置一个强令牌。保护访问安全由你负责。",
        state_directory: "状态目录",
        base_state_path_used_by_managed_child: "托管子实例使用的基础状态路径。",
        trust_proxy_headers: "信任代理请求头",
        trust_x_forwarded_proto_x_forwarded:
          "在来源校验中信任 X-Forwarded-Proto、X-Forwarded-Host 和 Forwarded 请求头。仅在 PinchTab 位于可信反向代理（如 Caddy、nginx）之后时启用。",
        enabled: "已启用",
        disabled: "已禁用",
        cookie_secure_mode: "Cookie Secure 模式",
        controls_whether_dashboard_session:
          "控制仪表盘会话 Cookie 是否要求 HTTPS。Auto 仅在 HTTPS 下启用 Secure。当 TLS 位于 PinchTab 之前时适合使用 Force Secure。",
        auto: "自动",
        force_secure: "强制 Secure",
        force_insecure: "强制非 Secure",
        force_secure_blocks_dashboard_login_on:
          "强制 Secure 会阻止通过纯 HTTP 登录仪表盘。当 PinchTab 直接通过 HTTPS 或位于可信代理之后时使用。若 TLS 在 PinchTab 之前终止，请启用",
        trustproxyheaders: "trustProxyHeaders",
        so_forwarded_https_requests_are: "以便识别被转发的 HTTPS 请求。",
        persist_dashboard_sessions: "持久化仪表盘会话",
        keep_dashboard_login_sessions_across:
          "在服务器重启后保留仪表盘登录会话。若希望每次重启都强制重新登录，请关闭此项。",
        session_idle_timeout: "会话空闲超时",
        how_long_an_unused_dashboard_session:
          "未使用的仪表盘会话保持有效的时长。配置中以秒为单位保存。",
        session_max_lifetime: "会话最大有效期",
        absolute_lifetime_for_a_dashboard:
          "仪表盘会话必须重建前的绝对有效期，即使会话仍处于活跃状态。",
        require_elevation_for_config_saves: "保存配置需要提权",
        ask_for_api_token_re_entry_before:
          "保存后端配置变更前要求重新输入 API 令牌。默认关闭。",
        allow_attach: "允许附加",
        permit_attaching_pinchtab_to_externally:
          "允许将 PinchTab 附加到外部管理的 Chrome 会话。",
        enable: "启用",
        allowed_attach_hosts: "允许附加的主机",
        comma_separated_host_allowlist_for:
          '附加请求的主机允许列表，以逗号分隔。请仅包含你掌控且信任的主机。使用 "*" 会关闭主机允许列表。',
        allowhosts: 'allowHosts: ["*"]',
        is_a_documented_non_default_security:
          "是文档中说明的非默认、会降低安全性的覆盖设置。它会完全关闭主机允许列表，允许对任何可达且协议被允许的主机发起远程附加请求。请仅在隔离且由运维掌控的网络中使用。",
        hosts_in_this_allowlist_may_be_used_for:
          "该允许列表中的主机可用于远程附加请求。范围过大或不可信的条目会扩大信任边界，可能暴露外部 Chrome 会话和浏览器内容。",
        allowed_attach_schemes: "允许附加的协议",
        comma_separated_scheme_allowlist:
          "协议允许列表，以逗号分隔，通常为 ws 和 wss。",
      },
      observabilitysettingssection: {
        observability: "可观测性",
        activity_logging_tracks_api_requests:
          "活动日志记录 API 请求，用于调试和审计。日志存储在本地，可通过「活动」页面查询。",
        activity_logging: "活动日志",
        enable_or_disable_activity_event: "启用或关闭活动事件记录。",
        enabled: "已启用",
        disabled: "已禁用",
        retention_days: "保留天数",
        how_long_to_keep_activity_logs_before:
          "活动日志在自动清理前的保留时长。保留越久占用磁盘越多，但审计记录更完整。",
        session_idle_timeout_seconds: "会话空闲超时（秒）",
        time_before_an_inactive_agent_session:
          "无活动智能体会话被判定为空闲的时间。用于按会话归类活动。",
      },
      profilessettingssection: {
        profiles: "档案",
        profile_storage_is_host_level_changing:
          "档案存储属于主机级配置。修改基础目录需要重启，因为档案管理器和编排器在启动时按该目录创建。",
        profiles_base_directory: "档案基础目录",
        root_directory_where_browser_profiles: "存放浏览器档案的根目录。",
        default_profile: "默认档案",
        profile_name_used_when_the_server_needs:
          "服务器需要隐式默认值时使用的档案名称。",
      },
      defaultssettingssection: {
        instance_defaults: "实例默认值",
        these_values_are_written_to_config_and:
          "这些值会写入配置并用于新创建的托管实例。已运行的实例保持当前运行时设置。",
        mode: "模式",
        default_browser_mode_for_new_launches: "新启动实例的默认浏览器模式。",
        headless: "无头",
        headed: "有头",
        stealth_level: "隐身级别",
        bot_detection_evasion_profile_higher:
          "反机器人检测的规避配置。级别越高，越可能影响错误监控和部分浏览器功能。",
        light: "轻度",
        medium: "中度",
        full: "完全",
        light_2: "轻度：",
        default_baseline_stealth_keeps_the:
          "默认基线隐身。在隐藏基本自动化特征的同时，保持风险最低的启动方式和 JS 行为契约。",
        default_product_security_baseline: "✓ 默认的产品安全基线",
        no_intentional_api_realism_or_security:
          "✓ 不刻意牺牲 API 真实性或安全性",
        medium_2: "中度：",
        non_default_risk_mode_adds_client_hints:
          "非默认的风险模式。通过添加 Client Hints、`chrome.runtime` 垫片、iframe 传递、调用栈过滤和仿原生函数遮蔽来提升反机器人兼容性。",
        alters_browser_visible_apis_and_error:
          "⚠ 会改变浏览器可见的 API 以及错误与调用栈行为。监控和调试工具可能看到不同的结果。",
        permissions_and_compatibility_shims_can:
          "⚠ 权限与兼容垫片可能返回被有意修改的值。请勿将其当作默认安全基线。",
        reports_that_require_explicitly:
          "⚠ 需要显式启用中度才能复现的报告，应视为操作者主动接受风险，而非默认路径行为。",
        full_2: "完全：",
        highest_risk_non_default_mode_adds:
          "风险最高的非默认模式。在中度的基础上进一步改动图形、canvas、音频、系统颜色和 WebRTC。",
        browser_output_is_intentionally_less:
          "⚠ 浏览器输出会刻意偏离原生表现且更不稳定。渲染、媒体和网络行为可能出错或偏离真实 Chrome。",
        this_mode_is_not_an_acceptable_default:
          "⚠ 该模式不是可接受的默认安全姿态。请仅在明确接受其权衡范围时启用。",
        reports_that_depend_on_enabling_full:
          "⚠ 依赖启用完全模式的报告，应归类为非默认的操作者风险，除非能证明默认路径也存在绕过。",
        webrtc_webgl_canvas_and_audio_behavior:
          "⚠ WebRTC、WebGL、canvas 和音频行为都可能偏离基线 Chrome。",
        tab_eviction_policy: "标签页淘汰策略",
        how_pinchtab_behaves_when_a_managed:
          "托管实例达到标签页上限时 PinchTab 的行为。",
        reject_new_tabs: "拒绝新标签页",
        close_oldest: "关闭最早的",
        close_least_recently_used: "关闭最久未使用的",
        tab_lifecycle: "标签页生命周期",
        close_idle_closes_a_tab_after_a_text:
          "「关闭空闲」会在 /text、/snapshot 或 /action 响应后、超过延迟时间时关闭标签页；/navigate 会取消该计时。「冻结空闲」会冻结在延迟时间内没有任何请求访问的标签页，并在其下次请求时解冻。",
        keep_never_auto_close: "保留（永不自动关闭）",
        close_idle: "关闭空闲",
        freeze_idle: "冻结空闲",
        auto_close_delay: "自动关闭延迟",
        seconds_of_idleness_before_an_idle_tab:
          "空闲标签页被关闭或冻结前的空闲秒数。仅在生命周期为「关闭空闲」或「冻结空闲」时生效。",
        restore_tabs_on_startup: "启动时恢复标签页",
        when_enabled_tabs_open_at_shutdown_are:
          "启用后，关闭时仍打开的标签页会在下次启动时重新打开。默认关闭 — 已关闭的标签页在重启后保持关闭。",
        enable: "启用",
        max_tabs: "最大标签页数",
        maximum_number_of_tabs_per_managed: "每个托管实例的最大标签页数量。",
        max_parallel_tabs: "最大并行标签页数",
        set_to_0_to_auto_detect_from_cpu_count:
          "设置为 0 表示根据 CPU 核数自动检测。",
        timezone: "时区",
        optional_timezone_override_for_launched: "为启动的实例可选地覆盖时区。",
        europe_rome: "Europe/Rome",
        user_agent: "User agent",
        optional_override_applied_to_new: "可选地覆盖新建托管实例的该项设置。",
        custom_user_agent: "自定义 User agent",
        applies_to_newly_launched_managed: "应用于新启动的托管实例。",
      },
      securityidpisettingssection: {
        security_idpi: "安全 IDPI",
        indirect_prompt_injection_controls:
          "间接提示注入防护会限制允许访问的网站，并在提取内容进入下游自动化之前增加保护。",
        idpi_is_disabled_browser_content_is_not:
          "IDPI 已关闭。浏览器内容不会经过网站允许列表或内容防护过滤。",
        the_website_whitelist_is_not_set_to_a:
          "网站白名单未设置为受限域名列表。这是 IDPI 的主要防线，应当配置。",
        the_website_whitelist_contains_which:
          "网站白名单包含 '*'，实际上关闭了域名限制。",
        idpi_is_enforcing_a_specific_website:
          "IDPI 正在执行特定的网站白名单和内容防护。",
        enable: "启用",
        custom_patterns: "自定义模式",
        optional_comma_separated_phrases_to:
          "可选的逗号分隔短语，将作为可疑的提示注入内容处理。",
        ignore_previous_instructions_exfiltrate:
          "ignore previous instructions, exfiltrate data",
      },
      timeoutssettingssection: {
        timeouts: "超时",
        runtime_timing_defaults_written_into:
          "写入新子进程配置的运行时计时默认值。已运行的实例保持当前超时设置。",
      },
      browsersettingssection: {
        browser_runtime: "浏览器运行时",
        these_settings_are_written_into_the:
          "这些设置会写入为新建托管实例生成的子进程配置。",
        provider: "提供方",
        browser_backend_used_for_new_managed: "新建托管实例使用的浏览器后端。",
        chrome: "Chrome",
        cloakbrowser: "CloakBrowser",
        ghost_chrome: "Ghost + Chrome",
        browser_version: "浏览器版本",
        version_string_used_in_generated_ua:
          "生成 UA/指纹默认值时使用的版本字符串。",
        browser_binary: "浏览器可执行文件",
        optional_path_override_for_the_chrome:
          "可选地覆盖 Chrome 或 CloakBrowser 可执行文件的路径。",
        fingerprint_seed: "指纹种子",
        deterministic_cloakbrowser_identity:
          "确定性的 CloakBrowser 身份种子。留空则每次启动使用全新身份。",
        fingerprint_platform: "指纹平台",
        native_platform_fingerprint_reported_by:
          "CloakBrowser 上报的原生平台指纹。",
        auto: "自动",
        windows: "Windows",
        macos: "macOS",
        linux: "Linux",
        cloak_locale: "Cloak 区域设置",
        locale_passed_as_fingerprint_locale:
          "作为 --fingerprint-locale 传入的区域设置。",
        cloak_timezone: "Cloak 时区",
        timezone_passed_as_fingerprint_timezone:
          "作为 --fingerprint-timezone 传入的时区。",
        webrtc_ip: "WebRTC IP",
        explicit_replacement_ip_or_auto_for:
          "显式替换 IP，或使用 auto 由 CloakBrowser 解析代理出口 IP。",
        fonts_directory: "字体目录",
        directory_containing_target_platform:
          "包含 CloakBrowser 目标平台字体的目录。",
        storage_quota: "存储配额",
        storage_quota_in_mb_passed_as:
          "以 MB 为单位、作为 --fingerprint-storage-quota 传入的存储配额。",
        native_stealth_only: "仅原生隐身",
        disable_pinchtab_js_stealth_overlays:
          "关闭 PinchTab 的 JS 隐身覆盖层和隐藏自动化的启动参数。",
        use_cloakbrowser_native_patches: "使用 CloakBrowser 原生补丁",
        extra_flags: "额外参数",
        additional_chrome_flags_appended_when:
          "启动托管实例时额外追加的 Chrome 参数。",
        extension_paths: "扩展路径",
        comma_separated_extension_directories:
          "要加载的扩展目录，以逗号分隔。默认情况下，PinchTab 使用其状态/配置目录下的本地 extensions/ 文件夹。在此设置自定义路径可覆盖该默认值，清空该字段则关闭扩展加载。",
      },
      dashboardsettingssection: {
        dashboard_preferences: "仪表盘偏好",
        language: "语言",
        choose_the_language_of_the_dashboard: "选择仪表板界面的语言。",
        these_controls_affect_this_dashboard_ui:
          "这些选项仅影响本仪表盘界面。它们保存在你的浏览器本地，无需重启后端。",
        screencast_frame_rate: "实时预览帧率",
        controls_how_often_live_previews: "控制实时预览请求新帧的频率。",
        fps: "fps",
        screencast_quality: "实时预览画质",
        jpeg_quality_for_tab_preview_streams: "标签页预览流的 JPEG 画质。",
        screencast_width: "实时预览宽度",
        maximum_preview_width_for_live_tiles: "实时预览卡片的最大宽度。",
        px: "px",
        memory_metrics: "内存指标",
        poll_every_running_instance_for_browser:
          "每个监控周期轮询所有运行中的实例以获取浏览器内存：Chrome 进程树的 RSS，以及通过 CDP 从每个打开的标签页读取的 JS 堆和 DOM 计数。实测开销：每个实例每周期约每个打开的标签页 1 毫秒，加上进程树遍历的几十毫秒。",
        enable: "启用",
        polling_interval: "轮询间隔",
        how_frequently_the_dashboard_asks_the:
          "仪表盘向后台请求最新指标的频率。",
        s: "s",
        reasoning_output: "推理输出",
        choose_whether_the_live_agent_feed:
          "选择实时智能体信息流显示工具调用、进度更新，还是两者都显示。",
        tool_calls_only: "仅工具调用",
        progress_only: "仅进度",
        both: "两者",
      },
      autosolversettingssection: {
        autosolver: "AutoSolver",
        these_settings_are_saved_into_the:
          "这些设置保存到 PinchTab 配置文件中。外部提供方的 API 密钥为只写，必须直接在该文件中设置。",
        config_file: "配置文件",
        dashboard_edits_are_written_back_to:
          "仪表盘中的修改会写回该文件。请在同一配置文件的 autoSolver.external 下设置外部提供方密钥。",
        config_path_unavailable: "配置路径不可用",
        enable_autosolver: "启用 AutoSolver",
        turns_on_the_autosolver_runtime:
          "为受支持的验证挑战流程开启 AutoSolver 运行时配置。",
        enabled: "已启用",
        disabled: "已禁用",
        auto_trigger: "自动触发",
        automatically_run_autosolver_after:
          "在受支持的导航和操作请求之后自动运行 AutoSolver。",
        trigger_on_navigate: "导航时触发",
        run_autosolver_checks_after_successful:
          "导航调用成功后运行 AutoSolver 检查。",
        trigger_on_action: "操作时触发",
        run_autosolver_checks_after_successful_2:
          "操作调用成功后运行 AutoSolver 检查。",
        max_attempts: "最大尝试次数",
        maximum_autosolver_retries_before_the:
          "管道放弃前的 AutoSolver 最大重试次数。",
        solver_timeout_sec: "求解器超时（秒）",
        per_solver_timeout_for_each_attempt: "每次尝试中单个求解器的超时时间。",
        retry_base_delay_ms: "重试基础延迟（毫秒）",
        base_retry_backoff_delay_between:
          "AutoSolver 各次尝试之间的基础重试退避延迟。",
        retry_max_delay_ms: "重试最大延迟（毫秒）",
        maximum_retry_backoff_delay_cap_between:
          "AutoSolver 各次尝试之间重试退避延迟的上限。",
        solvers: "求解器",
        comma_separated_ordered_list_of_solver:
          "按顺序尝试的求解器名称列表，以逗号分隔。可通过 GET /solvers 或 GET /config/autosolver 确认运行时可用名称。",
        llm_provider: "LLM 提供方",
        optional_provider_name_used_when_llm:
          "启用 LLM 兜底时使用的可选提供方名称。",
        llm_fallback: "LLM 兜底",
        use_an_llm_as_the_last_resort_after:
          "在已注册的求解器全部失败后，将 LLM 作为最后手段。",
        external_provider_keys: "外部提供方密钥",
        capsolver_and_2captcha_credentials_are:
          "Capsolver 和 2Captcha 凭据不会显示在仪表盘中，必须在配置文件里管理。只有在配置了密钥后，这些提供方才会出现在运行时求解器列表中。",
        open_the_config_file_above_and_set: "打开上面的配置文件并设置",
        autosolver_external_capsolverkey: "autoSolver.external.capsolverKey",
        autosolver_external_twocaptchakey: "autoSolver.external.twoCaptchaKey",
        there_the_dashboard_does_not_display_or:
          "。仪表盘不会显示或编辑这些值，也没有环境变量可覆盖。",
      },
    },
    monitoring: {
      monitoringemptystate: {
        starting_default_instance: "正在启动默认实例…",
        start_default_instance: "启动默认实例",
        open_default_profile: "打开默认档案",
        no_active_instances: "没有活跃实例",
        pinchtab_expected_a_default_instance:
          "PinchTab 期望有一个默认实例，但它始终未就绪。请手动启动或检查该档案。",
        start_the_default_instance_or_open:
          "启动默认实例，或打开「档案」启动其他档案。",
        waiting_for_default_profile:
          "PinchTab 正在等待默认档案上线，稍后会自动重试（剩余 {{count}} 次检查）。",
      },
      defaultinstancemodal: {
        start_default_instance: "启动默认实例",
        cancel: "取消",
        start_headed: "以有头模式启动",
        start_headless: "以无头模式启动",
        choose_how_to_launch_the_default: "选择本次会话中默认档案的启动方式。",
        configured_default_mode: "配置的默认模式：",
      },
    },
    profilespage: {
      loading_profiles: "正在加载档案…",
      no_profiles_yet: "暂无档案",
      click_new_profile_to_create_one: "点击「新建档案」创建一个",
      new_profile: "新建档案",
      profiles: "档案",
      total: "总计",
      no_account: "无账号",
      profile_deleted: "已删除档案「{{name}}」",
    },
    settingspage: {
      confirm_admin_action: "确认管理操作",
      cancel: "取消",
      verifying: "正在验证…",
      continue: "继续",
      re_enter_the_api_token_to_save_backend:
        "保存后端配置变更需要重新输入 API 令牌。提权会话会短暂保持有效，无需为每个管理操作重复输入。",
      api_token: "API 令牌",
      paste_api_token: "粘贴 API 令牌",
      restart_required: "需要重启",
      reset: "重置",
      saving: "正在保存…",
      save: "保存",
      restart_needed_for: "需要重启的项：",
      loading_settings: "正在加载设置…",
      settings_eyebrow: "设置",
    },
  },
  activities: {
    activityexplorer: {
      agent: "智能体",
      all: "全部",
      session: "会话",
      request_timeline: "请求时间线",
      activity: "活动",
      failed_to_load_activity: "加载活动失败",
    },
    agentstreampanel: {
      no_matching_activity: "没有符合条件的活动",
      adjust_the_filters_or_generate_some:
        "调整筛选条件，或通过 CLI、MCP 或仪表盘产生一些流量。",
    },
    streamrow: {
      ms: "ms",
      navigate_to_page: "导航到页面",
      capture_page_snapshot: "捕获页面快照",
      open_screencast_stream: "打开实时预览流",
      extract_text_from_page: "从页面提取文本",
      click_on_page: "在页面上点击",
      double_click_on_page: "在页面上双击",
      type_into_page: "在页面上输入",
      hover_on_page: "在页面上悬停",
      fill_field: "填写字段",
      select_option: "选择选项",
      scroll_page: "滚动页面",
      press_key: "按键",
      wait_for_condition: "等待条件",
      evaluate_javascript: "执行 JavaScript",
      upload_file: "上传文件",
      download_file: "下载文件",
      on_tab: " 于标签页 ",
      navigate_to_url: "导航到 {{url}}",
      click_ref: "点击「{{ref}}」",
      double_click_ref: "双击「{{ref}}」",
      type_into_ref: "在「{{ref}}」中输入",
      hover_ref: "悬停在「{{ref}}」",
      fill_ref: "填充「{{ref}}」",
      select_ref: "选择「{{ref}}」",
      press_key_on_ref: "在「{{ref}}」上按键",
    },
    activityline: {
      progress: "进度",
      agent_reported_progress: "智能体报告了进度",
      ms: "ms",
    },
    activityitemline: {
      tab_paused_for_human_handoff: "标签页已暂停，等待人工接管",
      tab_is_paused_for_human_handoff: "标签页已暂停，等待人工接管",
      resume_automation_after_manual: "人工完成验证挑战后继续自动化",
      resuming: "正在继续…",
      resolve_challenge: "解决验证挑战",
      browser_was_escalated: "浏览器已提权",
      escalated: "已提权",
      navigate_to_page: "导航到页面",
      capture_page_snapshot: "捕获页面快照",
      open_screencast_stream: "打开实时预览流",
      extract_text_from_page: "从页面提取文本",
      take_screenshot: "截取屏幕截图",
      export_page_as_pdf: "将页面导出为 PDF",
      click_on_page: "在页面上点击",
      double_click_on_page: "在页面上双击",
      type_into_page: "在页面上输入",
      hover_on_page: "在页面上悬停",
      fill_field: "填写字段",
      select_option: "选择选项",
      scroll_page: "滚动页面",
      press_key: "按键",
      wait_for_condition: "等待条件",
      evaluate_javascript: "执行 JavaScript",
      upload_file: "上传文件",
      download_file: "下载文件",
      resume_failed: "继续失败",
      navigate_to_url: "导航到 {{url}}",
      click_ref: "点击「{{ref}}」",
      double_click_ref: "双击「{{ref}}」",
      type_into_ref: "在「{{ref}}」中输入",
      hover_ref: "悬停在「{{ref}}」",
      fill_ref: "填充「{{ref}}」",
      select_ref: "选择「{{ref}}」",
      press_key_on_ref: "在「{{ref}}」上按键",
    },
    activitytimeline: {
      timeline: "时间线",
      recent_events: "最近事件",
      no_matching_activity: "没有符合条件的活动",
      adjust_the_filters_or_generate_some:
        "调整筛选条件，或通过 CLI、MCP 或仪表盘产生一些流量。",
    },
    activefilterbar: {
      clear_filters: "清除筛选",
    },
    activityfiltermenu: {
      "200": "200",
      "3600": "3600",
      profile: "档案",
      tab: "标签页",
      agent: "智能体",
      action: "操作",
      advanced_filters: "高级筛选",
      hide: "隐藏",
      show: "显示",
      instance: "实例",
      path_prefix: "路径前缀",
      tabs_or_instances: "/tabs/ or /instances/",
      age_seconds: "时间（秒）",
      limit: "上限",
      clear: "清除",
      search: "搜索",
      any_profile: "任意档案",
      any_tab: "任意标签页",
      any_agent: "任意智能体",
      any_action: "任意操作",
      any_instance: "任意实例",
    },
    agentworkspacesidebar: {
      agents: "智能体",
      activities: "活动",
      no_agent_activity_observed_yet: "尚未观察到智能体活动",
      all_agents: "所有智能体",
    },
    copyidpill: {
      copied: "已复制",
      copy_tab_id: "复制标签页 ID {{id}}",
    },
    hooks: {
      useactivitydata: {
        failed_to_load_activity: "加载活动失败",
        failed_to_load_agent_activity: "加载智能体活动失败",
      },
    },
  },
  settings: {
    sections: {
      dashboard: {
        dashboard: "仪表盘",
        local_monitoring_and_screencast: "本地监控与实时预览偏好。",
      },
      defaults: {
        instance_defaults: "实例默认值",
        how_new_managed_browser_instances_launch:
          "新建托管浏览器实例的启动方式。",
      },
      orchestration: {
        orchestration: "编排",
        routing_strategy_port_range_and: "路由策略、端口范围和分配策略。",
      },
      security: {
        security: "安全",
        sensitive_endpoint_gates_and_access: "敏感接口的开关与访问控制。",
      },
      "security-idpi": {
        security_idpi: "安全 IDPI",
        indirect_prompt_injection_website_and: "间接提示注入的网站与内容防护。",
      },
      profiles: {
        profiles: "档案",
        shared_profile_storage_and_default: "共享档案存储与默认档案行为。",
      },
      network: {
        network_attach: "网络与附加",
        server_binding_auth_and_attach_policy:
          "服务器绑定、身份验证与附加策略。",
      },
      browser: {
        browser_runtime: "浏览器运行时",
        chrome_binary_version_flags_and:
          "Chrome 可执行文件、版本、参数和扩展。",
      },
      timeouts: {
        timeouts: "超时",
        action_navigation_shutdown_and_wait:
          "操作、导航、关闭和等待的超时设置。",
      },
      autosolver: {
        autosolver: "AutoSolver",
        challenge_solving_behavior_and_config:
          "验证挑战的求解行为以及基于配置文件的提供方。",
      },
      observability: {
        observability: "可观测性",
        activity_logging_and_retention_settings: "活动日志与保留期设置。",
      },
    },
    security: {
      endpoints: {
        allowEvaluate: {
          allow_evaluate: "允许 evaluate",
        },
        allowMacro: {
          allow_macro: "允许 macro",
        },
        allowScreencast: {
          allow_screencast: "允许实时预览",
        },
        allowDownload: {
          allow_download: "允许下载",
        },
        allowCookies: {
          allow_cookies: "允许 Cookie",
        },
        allowUpload: {
          allow_upload: "允许上传",
        },
        allowNetworkIntercept: {
          allow_network_interception: "允许网络拦截",
          lets_agents_install_rules_to_abort_or:
            "允许智能体安装规则以中止或满足（模拟）某个标签页上的 HTTP 请求。开启后，下方「允许的网站」中的主机禁止伪造响应，其他主机则允许。在你已授权智能体使用的主机（例如你的银行）上伪造响应是风险最高的结果 — 这正是受保护的是允许列表中的主机，而非相反的原因。为避免破坏 CORS，OPTIONS 预检默认跳过。",
        },
        allowFileScheme: {
          allow_file_navigation: "允许 file:// 导航",
          lets_agents_open_local_file_urls_a_file:
            "允许智能体打开本地 file:// URL。file:// URL 没有主机，因此不受下方「允许的网站」限制，并绕过 SSRF/私有 IP 防护 — 启用后等于授予通过快照/截图/抓取读取服务器进程可读的任何本地文件的权限。在严格模式允许列表生效期间它仍会被阻止。请仅在可信的单租户机器上启用。",
        },
      },
      idpi: {
        enabled: {
          enable_idpi: "启用 IDPI",
          turn_on_indirect_prompt_injection: "开启间接提示注入防护。",
        },
        strictMode: {
          strict_mode: "严格模式",
          block_disallowed_domains_and_suspicious:
            "对不允许的域名和可疑内容直接阻止，而不仅给出警告。",
        },
        scanContent: {
          scan_content: "扫描内容",
          inspect_extracted_text_and_snapshots:
            "检查提取的文本和快照中是否存在提示注入特征。",
        },
        wrapContent: {
          wrap_content: "包裹内容",
          mark_returned_page_text_as_untrusted:
            "将返回的页面文本标记为不可信内容，供下游使用者识别。",
        },
      },
    },
    defaults: {
      booleans: {
        blockImages: {
          block_images: "阻止图片",
        },
        blockMedia: {
          block_media: "阻止媒体",
        },
        blockAds: {
          block_ads: "阻止广告",
        },
        noAnimations: {
          disable_css_animations: "禁用 CSS 动画",
        },
        noRestore: {
          skip_session_restore: "跳过会话恢复",
        },
      },
      timeouts: {
        actionSec: {
          action_timeout: "操作超时",
          maximum_time_for_action_requests: "操作请求的最长耗时。",
        },
        navigateSec: {
          navigate_timeout: "导航超时",
          maximum_time_for_navigation_requests: "导航请求的最长耗时。",
        },
        shutdownSec: {
          shutdown_timeout: "关闭超时",
          grace_period_before_force_closing_a: "强制关闭子进程前的宽限时间。",
        },
        waitNavMs: {
          wait_after_navigation_delay: "导航后等待延迟",
          post_navigation_stabilization_delay_in:
            "导航后的稳定等待延迟，以毫秒为单位。",
        },
      },
    },
    notices: {
      backend_config_saved_dynamic_changes:
        "后端配置已保存。动态变更已在可行范围内生效。",
      backend_config_saved_dynamic_changes_2:
        "后端配置已保存。动态变更已在可行范围内生效。服务器级变更建议重启。",
      preferencesSaved: "仪表盘偏好已保存在此浏览器中。",
    },
    errors: {
      loadFailed: "加载设置失败",
      saveFailed: "保存设置失败",
      tokenVerifyFailed: "验证 API 令牌失败",
    },
  },
  monitoring: {
    errors: {
      startInstanceFailed: "启动实例失败",
    },
  },
  errors: {
    requestFailed: "请求失败",
  },
  auth: {
    insecureTransport:
      "仪表盘会话正在通过不安全的 HTTP 运行；请使用 HTTPS 或 localhost 以获得更强的会话保护。",
  },
};

export default messages;
