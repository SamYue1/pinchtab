import type { Messages } from "../i18n/messages";

const messages: Messages = {
  app: {
    name: "PinchTab",
    checking_server_authentication: "서버 인증을 확인하는 중…",
    pinchtab_is_restarting_or_unreachable:
      "PinchTab이 재시작 중이거나 연결할 수 없습니다.",
    automatic_retries_stopped: " 자동 재시도를 중단했습니다.",
    retry_now: "지금 다시 시도",
    refresh: "새로 고침",
  },
  profiles: {
    profiletoolbarbuttons: {
      copy_id: "ID 복사",
      delete: "삭제",
      save: "저장",
      stop: "중지",
      start: "시작",
      delete_profile: "프로필 삭제",
      cancel: "취소",
      delete_profile_2: '프로필 "',
      every_cookie_login_and_session_stored:
        '"? 여기에 저장된 모든 쿠키, 로그인, 세션이 영구적으로 사라지며 되돌릴 수 없습니다.',
      copied: "복사됨",
      failed: "실패",
    },
    profilemetainfopanel: {
      profile_panel: "프로필 패널",
      status: "상태",
      port: "포트",
      browser: "브라우저",
      size: "크기",
      account: "계정",
      identity: "식별 정보",
      connection: "연결",
      cdp_attached: "CDP 연결됨",
      cdp_url: "CDP URL",
      path: "경로",
      not_found: "(찾을 수 없음)",
      attached_via_cdp: "CDP로 연결됨",
      headless: "헤드리스",
      headed: "헤드 모드",
    },
    profilecard: {
      error: "오류",
      stopped: "중지됨",
      size: "크기",
      account: "계정",
      use_when: "사용 조건",
      details: "세부 정보",
      stop: "중지",
      start: "시작",
    },
    profiledetailspanel: {
      select_a_profile_to_inspect_its:
        "프로필을 선택하면 해당 인스턴스, 실시간 탭, 로그를 확인할 수 있습니다.",
      live: "실시간",
      tabs: "탭",
      logs: "로그",
      no_tabs_open: "열린 탭이 없습니다.",
      instance_not_running: "인스턴스가 실행 중이 아닙니다.",
      profile_name: "프로필: {{name}}",
    },
    profilebasicinfopanel: {
      name: "이름",
      use_this_profile_when: "이 프로필을 사용할 조건",
    },
    profileliveviewpanel: {
      no_tabs_open: "열린 탭 없음",
      instance_not_running_start_the_profile:
        "인스턴스가 실행 중이 아닙니다. 프로필을 시작하면 실시간 보기를 볼 수 있습니다.",
    },
    instancelogspanel: {
      loading_logs: "로그를 불러오는 중…",
      no_instance_logs_available: "사용할 수 있는 인스턴스 로그가 없습니다.",
    },
    groups: {
      user: "프로필",
      temporary: "임시",
      quarantined: "격리됨",
    },
  },
  components: {
    atoms: {
      debugpanel: {
        debug: "🐛 디버그",
        debug_panel: "디버그 패널",
        instances: "인스턴스:",
      },
      emptystate: {
        dashboard: "대시보드",
      },
      modal: {
        dashboard: "대시보드",
        close: "닫기",
      },
      errorboundary: {
        something_went_wrong: "⚠️ 문제가 발생했습니다",
        unknown_error: "알 수 없는 오류",
        try_again: "다시 시도",
      },
    },
    screencast: {
      screencaststatusbar: {
        decrease_fps: "FPS 낮추기",
        increase_fps: "FPS 높이기",
        take_full_quality_screenshot_png: "최고 품질 스크린샷 찍기(PNG)",
        download_as_pdf: "PDF로 다운로드",
        fps: "FPS(",
      },
      screencasttile: {
        tab_preview: "탭 미리보기",
        connection_lost: "연결이 끊어졌습니다",
        show_static_preview: "정적 미리보기 표시",
        retry_connection: "연결 다시 시도",
      },
      framedecode: {
        failed_to_decode_screencast_frame:
          "실시간 화면 프레임을 디코딩하지 못했습니다",
      },
    },
    molecules: {
      createprofilemodal: {
        new_profile: "📁 새 프로필",
        cancel: "취소",
        create: "만들기",
        name: "이름",
        e_g_personal_work_scraping: "예: 개인, 업무, 스크래핑",
        use_this_profile_when_helps_agents_pick:
          "이 프로필을 사용할 조건(에이전트가 올바른 프로필을 고르는 데 도움이 됩니다)",
        e_g_i_need_to_access_gmail_for_the_team:
          "예: 팀 계정으로 Gmail에 접근해야 함",
        import_from_optional_chrome_user_data:
          "가져올 위치(선택 — Chrome 사용자 데이터 경로)",
        e_g_users_you_library_application:
          "예: /Users/you/Library/Application Support/Google/Chrome",
      },
      navbar: {
        pinchtab: "PinchTab",
        logout: "로그아웃",
        refresh_r: "새로 고침(⌘R)",
        toggle_menu: "메뉴 전환",
        monitoring: "모니터링",
        agents: "에이전트",
        profiles: "프로필",
        settings: "설정",
      },
      instancestats: {
        instance: "인스턴스",
        status: "상태",
        uptime: "가동 시간",
        port: "포트",
        crashes: "충돌",
        browsing: "탐색",
        tabs: "탭",
        domains: "도메인",
        resources: "리소스",
        memory: "메모리",
        renderers: "렌더러",
        pages: "페이지",
        js_heap: "JS 힙",
        dom_nodes: "DOM 노드",
        listeners: "리스너",
        frames: "프레임",
        unreadable: "읽을 수 없음",
        just_now: "방금",
        tabs_open_before_it_were_lost: "그 전에 열린 탭은 사라졌습니다",
        rss_across_the_browser_process_tree:
          "브라우저 프로세스 트리 전체의 RSS",
        tabs_that_did_not_answer_not_counted: "응답하지 않은 탭(집계 제외)",
        last_crash:
          "마지막: {{time}}에 {{reason}} · 그 전에 열린 탭은 사라졌습니다",
        heap_summary_one: "사용 / 전체, 탭 {{count}}개 합계",
        heap_summary_other: "사용 / 전체, 탭 {{count}}개 합계",
        document_count_one: "문서 {{count}}개",
        document_count_other: "문서 {{count}}개",
      },
      agentitem: {
        tab_paused_for_human_handoff: "수동 처리를 위해 탭이 일시 중지됨",
        just_now: "방금",
        session_at: "세션 {{time}}",
        session_range: "세션 {{start}}–{{end}}",
      },
      startinstancemodal: {
        start_profile: "🖥️ 프로필 시작",
        cancel: "취소",
        start: "시작",
        port: "포트",
        auto_select_from_configured_range: "설정된 범위에서 자동 선택",
        leave_blank_to_auto_select_a_free_port:
          "비워 두면 설정된 인스턴스 포트 범위에서 사용 가능한 포트를 자동으로 선택합니다.",
        headless_best_for_docker_vps: "헤드리스(Docker/VPS에 적합)",
        browser: "브라우저",
        server_default: "서버 기본값",
        chrome: "Chrome",
        cloakbrowser: "CloakBrowser",
        ghost_chrome: "Ghost + Chrome",
        direct_launch_command_backup: "직접 실행 명령(백업)",
        copy_command: "명령 복사",
        replace: "바꾸기",
        pinchtab_config_token: "pinchtab config token",
        when_auth_is_enabled: "인증이 활성화된 경우.",
        with_the_value_from: "다음 위치의 값을 사용합니다:",
        port_must_be_a_whole_number_between_1:
          "포트는 1에서 65535 사이의 정수여야 합니다.",
        profile_id_missing: "프로필 ID가 없습니다",
        failed_to_launch_instance: "인스턴스를 시작하지 못했습니다",
        copied: "복사했습니다!",
        failed_to_copy: "복사하지 못했습니다",
      },
      handoffnotifications: {
        human_intervention_required: "수동 개입이 필요합니다",
        dismiss_notification: "알림 닫기",
        reason: "이유:",
        resume: "계속",
      },
      serverstatusbadge: {
        expand_instance_list: "인스턴스 목록 펼치기",
        collapse_instance_list: "인스턴스 목록 접기",
        tab: "탭",
        restart_required: "재시작 필요",
        server_running: "서버 실행 중",
        restart_required_2: "재시작 필요",
        running: "실행 중",
        server_running_no_instances: "서버 실행 중, 인스턴스 없음",
      },
      serversummary: {
        settings: "설정",
        server_information: "서버 정보",
        technical_details_for_current_session: "현재 세션의 기술 정보",
        version: "버전",
        uptime: "가동 시간",
      },
      tabschart: {
        monitoring: "모니터링",
        live_telemetry: "실시간 텔레메트리",
        tabs: "탭",
        memory: "메모리",
        heap: "힙",
        server_heap: "서버 힙",
        collecting_data: "데이터를 수집하는 중…",
        waiting_for_more_data: "데이터를 더 기다리는 중…",
      },
      idbadge: {
        click_to_copy_full_id: "전체 ID 복사: {{id}}",
      },
    },
  },
  tabs: {
    tabbar: {
      tab_paused_for_human_handoff: "수동 처리를 위해 탭이 일시 중지됨",
      tab_is_paused_for_human_handoff: "수동 처리를 위해 탭이 일시 중지됨",
      untitled: "제목 없음",
      unpin_and_follow_the_focused_tab_again:
        "고정을 해제하고 포커스된 탭을 다시 따라가기",
      pin_this_tab_selection: "이 탭 선택을 고정",
      tabs: "탭",
      monitoring: "모니터링",
      pin_tab: "{{title}} 고정",
      unpin_tab_and_follow_focus: "{{title}} 고정 해제 후 포커스 따라가기",
      close_tab: "{{title}} 닫기",
      tabs_new: "탭(새 항목 {{count}}개)",
    },
    selectedtabtitle: {
      untitled: "제목 없음",
    },
    instancetabspanel: {
      chart_crashed_check_console: "차트가 중단되었습니다 — 콘솔을 확인하세요",
      no_tabs_open: "열린 탭 없음",
      unknown: "알 수 없음",
    },
    tabitem: {
      untitled: "제목 없음",
    },
    consolepanel: {
      loading_console_logs: "콘솔 로그를 불러오는 중…",
      no_console_logs_yet: "아직 콘솔 로그가 없습니다",
    },
    errorspanel: {
      loading_errors: "오류를 불러오는 중…",
      no_errors_yet: "아직 오류가 없습니다",
    },
    selectedtabpanel: {
      select_a_tab_to_view_details: "탭을 선택하면 세부 정보를 볼 수 있습니다",
      no_instance_id_provided_for_live_view:
        "실시간 보기에 필요한 인스턴스 ID가 없습니다.",
      actions: "작업",
      live: "실시간",
      console: "콘솔",
      errors: "오류",
    },
  },
  instances: {
    instancelistitem: {
      tabs: "탭",
      open_profile: "프로필 열기",
      restart: "재시작",
      stop: "중지",
    },
    instancecard: {
      headless: "헤드리스",
      headed: "헤드 모드",
      uptime: "가동 시간",
      open_dashboard: "대시보드 열기",
      stop: "중지",
    },
  },
  pages: {
    monitoringpage: {
      instances: "인스턴스",
      collapse_sidebar: "사이드바 접기",
    },
    loginpage: {
      authentication: "인증",
      enter_api_token: "API 토큰 입력",
      this_pinchtab_server_requires_a_bearer:
        "이 PinchTab 서버는 대시보드가 보호된 경로와 API를 불러오기 전에 베어러 토큰을 요구합니다.",
      run: "다음 실행:",
      pinchtab_config_token: "pinchtab config token",
      to_copy_the_token_to_your_clipboard: "토큰이 클립보드에 복사됩니다.",
      paste_bearer_token: "베어러 토큰 붙여넣기",
      authorizing: "인증하는 중…",
      continue: "계속",
      authentication_failed: "인증에 실패했습니다",
    },
    settings: {
      orchestrationsettingssection: {
        orchestration: "오케스트레이션",
        port_range_and_allocation_policy_can_be:
          "포트 범위와 할당 정책은 이후 실행에 바로 적용됩니다. 전략과 재시작 정책 변경은 시작 시 전략 경로와 수명 주기 상태가 등록되므로 대시보드를 재시작해야 합니다.",
        strategy: "전략",
        controls_instance_lifecycle_and_how:
          "인스턴스 수명 주기와 축약 경로의 라우팅 방식을 제어합니다.",
        always_on: "항상 켜기",
        simple: "단순",
        explicit: "명시적",
        simple_autorestart: "단순 자동 재시작",
        no_instance_hub: "인스턴스 없음(허브)",
        launches_a_default_instance_at_boot_and:
          "시작할 때 기본 인스턴스를 띄우고 충돌 시 다시 실행합니다.",
        launches_one_instance_on_first_request:
          "첫 요청에 인스턴스 하나를 실행합니다. 자동 재시작은 없습니다.",
        all_instances_managed_via_api_no:
          "모든 인스턴스를 API로 관리합니다. 자동 실행은 없습니다.",
        launches_on_first_request_and:
          "첫 요청에 실행하고 충돌 시 다시 실행합니다.",
        no_local_chrome_processes_acts_as_a_hub:
          "로컬 Chrome 프로세스를 띄우지 않습니다. 원격 브리지 전용 허브로 동작합니다.",
        allocation_policy: "할당 정책",
        determines_how_running_instances_are:
          "축약 요청에서 실행 중인 인스턴스를 어떻게 고를지 결정합니다.",
        first_available: "첫 번째 사용 가능",
        round_robin: "라운드 로빈",
        random: "무작위",
        instance_port_start: "인스턴스 포트 시작",
        lower_bound_for_auto_allocated_instance:
          "자동 할당되는 인스턴스 포트의 하한.",
        instance_port_end: "인스턴스 포트 끝",
        upper_bound_for_auto_allocated_instance:
          "자동 할당되는 인스턴스 포트의 상한.",
        max_restarts: "최대 재시작 횟수",
        maximum_restart_attempts_use_1_for:
          "최대 재시작 시도 횟수. -1은 무제한, 0은 재시작 없음입니다.",
        initial_backoff: "초기 백오프",
        delay_in_seconds_before_the_first: "첫 재시작 시도 전 지연 시간(초).",
        max_backoff: "최대 백오프",
        upper_bound_in_seconds_for_exponential:
          "지수 백오프 재시작의 초 단위 상한.",
        stable_after: "안정 판정 시간",
        seconds_the_instance_must_stay_healthy:
          "재시작 카운터가 초기화되기 전까지 인스턴스가 정상 상태를 유지해야 하는 시간(초).",
      },
      securitysettingssection: {
        security: "보안",
        these_controls_define_what_risky:
          "이 설정은 PinchTab이 어떤 고위험 기능을 노출할지 결정합니다.",
        one_or_more_sensitive_endpoint_families:
          "하나 이상의 민감한 엔드포인트 계열이 활성화되어 있습니다. 스크립트 실행, 다운로드, 업로드, 실시간 캡처 같은 기능은 고위험 기능을 노출할 수 있습니다. 신뢰할 수 있는 환경에서만 활성화하세요. 네트워크 접근, 인증, 하위 사용의 안전 확보는 사용자의 책임입니다.",
        these_endpoint_families_can_expose_high:
          "이 엔드포인트 계열은 활성화하면 고위험 기능을 노출할 수 있습니다. 신뢰할 수 있는 환경에서, 네트워크 접근·인증·하위 사용의 책임을 수용할 때만 켜세요.",
        controls_whether_the_corresponding:
          "해당 엔드포인트 계열의 활성화 여부를 제어합니다.",
        enable: "활성화",
        allowed_websites: "허용된 웹사이트",
        comma_separated_domain_allowlist_for:
          "웹 콘텐츠용 도메인 허용 목록(쉼표로 구분). 정확한 호스트 이름이나 *.example.com 같은 패턴을 사용하세요.",
        "127_0_0_1_localhost_1": "127.0.0.1, localhost, ::1",
        keep_this_list_narrow_empty_or_wildcard:
          "이 목록은 좁게 유지하세요. 비어 있거나 와일드카드 항목은 IDPI의 핵심 경계를 약화합니다. IDPI가 켜져 있어도 로컬이 아니거나 신뢰할 수 없는 사이트를 허용하면 브라우저 공격 표면이 커집니다.",
        trusted_proxy_cidrs: "신뢰할 프록시 CIDR",
        comma_separated_cidrs_or_ips_whose:
          "탐색 시 브라우저가 보고하는 원격 IP를 신뢰할 CIDR 또는 IP(쉼표로 구분). 알려진 내부 프록시에만 사용하세요.",
        "10_1_2_3_10_0_0_0_8": "10.1.2.3, 10.0.0.0/8",
        this_weakens_navigation_ip_checks_for:
          "일치하는 원격 IP에 대한 탐색 IP 검사가 약해집니다. 넓은 사설 대역보다 구체적인 프록시 주소를 선호하세요. IP만 있는 항목은 단일 호스트로 처리됩니다.",
        trusted_resolve_cidrs: "신뢰할 해석 CIDR",
        comma_separated_cidrs_or_ips_that_a:
          "탐색 사전 확인 시 호스트 이름이 해석될 수 있는 CIDR 또는 IP(쉼표로 구분). 내부 DNS나 프록시 구성용입니다.",
        "198_18_0_0_15_10_1_2_3": "198.18.0.0/15, 10.1.2.3",
        this_allows_hostnames_to_resolve_to_non:
          "호스트 이름이 비공개 IP로 해석될 수 있습니다. 목록을 좁게 유지하고 직접 관리하는 인프라만 포함하세요. IP만 있는 항목은 단일 호스트로 처리됩니다.",
      },
      settingssharedcomponents: {
        settings: "설정",
      },
      networksettingssection: {
        network_attach: "네트워크 및 연결",
        port_and_bind_changes_require_a_restart:
          "포트와 바인드 변경에는 재시작이 필요합니다. API 토큰 관리는 대시보드 밖에서 처리합니다.",
        server_port: "서버 포트",
        http_port_for_the_dashboard_process:
          "대시보드 프로세스가 사용하는 HTTP 포트.",
        bind_address: "바인드 주소",
        network_interface_the_dashboard_process:
          "대시보드 프로세스가 바인드하는 네트워크 인터페이스. 127.0.0.1 또는 localhost를 유지하면 직접 접근 범위가 로컬 머신으로 제한됩니다.",
        a_non_loopback_bind_is_a_documented_non:
          "비루프백 바인드는 문서에 명시된 기본값이 아니며 보안을 낮추는 구성 변경입니다. 다른 네트워크 경계가 접근을 제한하지 않으면 서버가 로컬 머신 밖으로 노출될 수 있습니다. 토큰을 반드시 설정하고 프록시나 포트 공개 동작을 명확히 점검하세요.",
        loopback_bind_keeps_direct_server:
          "루프백 바인드는 서버 직접 접근 범위를 로컬로 유지합니다.",
        or_another_non_local_address_widens_the:
          "또는 다른 비로컬 주소로 바꾸면 신뢰 경계가 넓어집니다.",
        api_token: "API 토큰",
        bearer_token_required_by_authenticated:
          "설정하면 인증된 요청에 베어러 토큰이 필요합니다. 대시보드는 이 값을 반환하지 않으며 관리하지도 않습니다.",
        no_token_configured_set_one_through_the:
          "토큰이 설정되지 않았습니다. CLI 또는 설정 파일에서 설정하세요.",
        token_configured_manage_rotation:
          "토큰이 설정되어 있습니다. 교체는 CLI 또는 설정 파일에서 하세요. 현재 값은 서버가 절대 반환하지 않습니다. 다음을 실행하세요:",
        pinchtab_config_token: "pinchtab config token",
        to_copy_it_to_your_clipboard: "그러면 클립보드에 복사됩니다.",
        no_api_token_is_set_anyone_who_can:
          "API 토큰이 설정되지 않았습니다. 이 서버에 접근할 수 있는 사람은 누구나 공개된 엔드포인트에 접근할 수 있습니다. 신뢰할 수 있는 로컬 네트워크에서만 사용하거나 CLI 또는 설정 파일로 강력한 토큰을 설정하세요. 접근 보호는 사용자의 책임입니다.",
        state_directory: "상태 디렉터리",
        base_state_path_used_by_managed_child:
          "관리되는 자식 인스턴스가 사용하는 기본 상태 경로.",
        trust_proxy_headers: "프록시 헤더 신뢰",
        trust_x_forwarded_proto_x_forwarded:
          "출처 검사에서 X-Forwarded-Proto, X-Forwarded-Host, Forwarded 헤더를 신뢰합니다. PinchTab이 신뢰할 수 있는 리버스 프록시(Caddy, nginx 등) 뒤에서 실행될 때만 활성화하세요.",
        enabled: "사용",
        disabled: "사용 안 함",
        cookie_secure_mode: "Cookie Secure 모드",
        controls_whether_dashboard_session:
          "대시보드 세션 쿠키에 HTTPS가 필요한지 제어합니다. Auto는 HTTPS에서만 Secure를 켭니다. TLS가 PinchTab 앞단에 있으면 Force Secure가 적절합니다.",
        auto: "자동",
        force_secure: "Secure 강제",
        force_insecure: "비 Secure 강제",
        force_secure_blocks_dashboard_login_on:
          "Secure 강제는 평문 HTTP에서의 대시보드 로그인을 차단합니다. PinchTab을 HTTPS로 직접 제공하거나 신뢰할 수 있는 프록시 뒤에 둘 때 사용하세요. TLS가 PinchTab 앞단에서 종료된다면 다음을 활성화하세요:",
        trustproxyheaders: "trustProxyHeaders",
        so_forwarded_https_requests_are:
          "그러면 전달된 HTTPS 요청이 인식됩니다.",
        persist_dashboard_sessions: "대시보드 세션 유지",
        keep_dashboard_login_sessions_across:
          "서버 재시작 후에도 대시보드 로그인 세션을 유지합니다. 재시작마다 새로 로그인하게 하려면 끄세요.",
        session_idle_timeout: "세션 유휴 시간 초과",
        how_long_an_unused_dashboard_session:
          "사용되지 않는 대시보드 세션이 유효하게 유지되는 시간. 설정에는 초 단위로 저장됩니다.",
        session_max_lifetime: "세션 최대 수명",
        absolute_lifetime_for_a_dashboard:
          "활성 상태여도 대시보드 세션을 다시 만들어야 하는 절대 수명.",
        require_elevation_for_config_saves: "설정 저장 시 승격 요구",
        ask_for_api_token_re_entry_before:
          "백엔드 설정 변경을 저장하기 전에 API 토큰 재입력을 요구합니다. 기본값은 꺼짐입니다.",
        allow_attach: "연결 허용",
        permit_attaching_pinchtab_to_externally:
          "외부에서 관리되는 Chrome 세션에 PinchTab을 연결할 수 있게 합니다.",
        enable: "활성화",
        allowed_attach_hosts: "연결 허용 호스트",
        comma_separated_host_allowlist_for:
          '연결 요청의 호스트 허용 목록(쉼표로 구분). 직접 관리하고 신뢰하는 호스트만 포함하세요. "*"를 쓰면 호스트 허용 목록이 해제됩니다.',
        allowhosts: 'allowHosts: ["*"]',
        is_a_documented_non_default_security:
          "는 문서에 명시된 기본값이 아니며 보안을 낮추는 재정의입니다. 호스트 허용 목록을 완전히 해제하고, 허용된 스킴의 도달 가능한 모든 호스트로 원격 연결 요청을 허용합니다. 격리된 운영자 관리 네트워크에서만 사용하세요.",
        hosts_in_this_allowlist_may_be_used_for:
          "이 허용 목록의 호스트는 원격 연결 요청에 사용될 수 있습니다. 범위가 넓거나 신뢰할 수 없는 항목은 신뢰 경계를 넓히고 외부 Chrome 세션과 브라우저 내용을 노출할 수 있습니다.",
        allowed_attach_schemes: "연결 허용 스킴",
        comma_separated_scheme_allowlist:
          "스킴 허용 목록(쉼표로 구분). 보통 ws와 wss입니다.",
      },
      observabilitysettingssection: {
        observability: "관측 가능성",
        activity_logging_tracks_api_requests:
          "활동 로깅은 디버깅과 감사를 위해 API 요청을 기록합니다. 로그는 로컬에 저장되며 [활동] 페이지에서 조회할 수 있습니다.",
        activity_logging: "활동 로깅",
        enable_or_disable_activity_event: "활동 이벤트 기록을 켜거나 끕니다.",
        enabled: "사용",
        disabled: "사용 안 함",
        retention_days: "보존 기간(일)",
        how_long_to_keep_activity_logs_before:
          "활동 로그를 자동 정리 전까지 보관하는 기간. 길게 보관하면 디스크를 더 쓰지만 감사 기록이 풍부해집니다.",
        session_idle_timeout_seconds: "세션 유휴 시간 초과(초)",
        time_before_an_inactive_agent_session:
          "활동이 없는 에이전트 세션이 유휴로 간주되기까지의 시간. 활동을 세션별로 묶는 데 사용됩니다.",
      },
      profilessettingssection: {
        profiles: "프로필",
        profile_storage_is_host_level_changing:
          "프로필 저장소는 호스트 수준 설정입니다. 시작할 때 프로필 관리자와 오케스트레이터가 이 디렉터리로 만들어지므로 기본 디렉터리를 바꾸려면 재시작이 필요합니다.",
        profiles_base_directory: "프로필 기본 디렉터리",
        root_directory_where_browser_profiles:
          "브라우저 프로필을 저장하는 루트 디렉터리.",
        default_profile: "기본 프로필",
        profile_name_used_when_the_server_needs:
          "서버가 암묵적 기본값을 필요로 할 때 사용하는 프로필 이름.",
      },
      defaultssettingssection: {
        instance_defaults: "인스턴스 기본값",
        these_values_are_written_to_config_and:
          "이 값은 설정에 기록되어 새로 관리되는 인스턴스에 사용됩니다. 이미 실행 중인 인스턴스는 현재 런타임을 유지합니다.",
        mode: "모드",
        default_browser_mode_for_new_launches: "새 실행의 기본 브라우저 모드.",
        headless: "헤드리스",
        headed: "헤드 모드",
        stealth_level: "스텔스 수준",
        bot_detection_evasion_profile_higher:
          "봇 탐지 회피 프로필. 수준이 높을수록 오류 모니터링과 일부 브라우저 기능에 영향을 줄 수 있습니다.",
        light: "가벼움",
        medium: "중간",
        full: "전체",
        light_2: "가벼움:",
        default_baseline_stealth_keeps_the:
          "기본 기준 스텔스. 기본적인 자동화 흔적을 숨기면서 가장 위험이 낮은 실행 방식과 JS 동작 계약을 유지합니다.",
        default_product_security_baseline: "✓ 기본 제품 보안 기준",
        no_intentional_api_realism_or_security:
          "✓ API 실재성이나 보안을 의도적으로 희생하지 않음",
        medium_2: "중간:",
        non_default_risk_mode_adds_client_hints:
          "기본값이 아닌 위험 모드. 안티봇 호환성을 높이기 위해 Client Hints, `chrome.runtime` 심, iframe 전파, 스택 필터링, 네이티브처럼 보이는 함수 마스킹을 추가합니다.",
        alters_browser_visible_apis_and_error:
          "⚠ 브라우저에 보이는 API와 오류/스택 동작을 바꿉니다. 모니터링 및 디버깅 도구가 다른 결과를 볼 수 있습니다.",
        permissions_and_compatibility_shims_can:
          "⚠ 권한과 호환 심이 의도적으로 바뀐 값을 반환할 수 있습니다. 이것을 기본 안전 기준으로 삼지 마세요.",
        reports_that_require_explicitly:
          "⚠ 중간을 명시적으로 켜야 재현되는 보고는 기본 경로 동작이 아니라 사용자가 선택한 위험 수용으로 다뤄야 합니다.",
        full_2: "전체:",
        highest_risk_non_default_mode_adds:
          "가장 위험이 높은 비기본 모드. 중간에 더해 그래픽, canvas, 오디오, 시스템 색상, WebRTC까지 변경합니다.",
        browser_output_is_intentionally_less:
          "⚠ 브라우저 출력이 의도적으로 덜 네이티브하고 덜 안정적입니다. 렌더링, 미디어, 네트워킹 동작이 깨지거나 실제 Chrome과 달라질 수 있습니다.",
        this_mode_is_not_an_acceptable_default:
          "⚠ 이 모드는 기본 보안 태세로 받아들일 수 없습니다. 절충 범위를 명시적으로 수용할 때만 켜세요.",
        reports_that_depend_on_enabling_full:
          "⚠ 전체를 켜야 하는 보고는 기본 경로 우회가 입증되지 않는 한 비기본 운영자 위험으로 분류해야 합니다.",
        webrtc_webgl_canvas_and_audio_behavior:
          "⚠ WebRTC, WebGL, canvas, 오디오 동작이 모두 기준 Chrome과 달라질 수 있습니다.",
        tab_eviction_policy: "탭 축출 정책",
        how_pinchtab_behaves_when_a_managed:
          "관리되는 인스턴스가 탭 한도에 도달했을 때 PinchTab의 동작.",
        reject_new_tabs: "새 탭 거부",
        close_oldest: "가장 오래된 탭 닫기",
        close_least_recently_used: "가장 오래 사용되지 않은 탭 닫기",
        tab_lifecycle: "탭 수명 주기",
        close_idle_closes_a_tab_after_a_text:
          "'유휴 시 닫기'는 /text, /snapshot, /action 응답 후 지연 시간이 지나면 탭을 닫습니다. /navigate는 이를 취소합니다. '유휴 시 동결'은 지연 시간 동안 어떤 요청도 건드리지 않은 탭을 동결하고 다음 요청에서 해제합니다.",
        keep_never_auto_close: "유지(자동으로 닫지 않음)",
        close_idle: "유휴 시 닫기",
        freeze_idle: "유휴 시 동결",
        auto_close_delay: "자동 닫기 지연",
        seconds_of_idleness_before_an_idle_tab:
          "유휴 탭이 닫히거나 동결되기 전의 유휴 시간(초). 수명 주기가 '유휴 시 닫기' 또는 '유휴 시 동결'일 때만 적용됩니다.",
        restore_tabs_on_startup: "시작 시 탭 복원",
        when_enabled_tabs_open_at_shutdown_are:
          "활성화하면 종료 시 열려 있던 탭이 다음 시작 때 다시 열립니다. 기본값은 꺼짐 — 닫은 탭은 재시작 후에도 닫힌 상태로 유지됩니다.",
        enable: "활성화",
        max_tabs: "최대 탭 수",
        maximum_number_of_tabs_per_managed: "관리되는 인스턴스당 최대 탭 수.",
        max_parallel_tabs: "최대 병렬 탭",
        set_to_0_to_auto_detect_from_cpu_count:
          "0으로 설정하면 CPU 수에서 자동 감지합니다.",
        timezone: "시간대",
        optional_timezone_override_for_launched:
          "실행되는 인스턴스의 시간대를 선택적으로 재정의합니다.",
        europe_rome: "Europe/Rome",
        user_agent: "사용자 에이전트",
        optional_override_applied_to_new:
          "새로 관리되는 인스턴스에 선택적으로 적용하는 재정의 값.",
        custom_user_agent: "사용자 지정 사용자 에이전트",
        applies_to_newly_launched_managed:
          "새로 실행되는 관리 인스턴스에 적용됩니다.",
      },
      securityidpisettingssection: {
        security_idpi: "보안 IDPI",
        indirect_prompt_injection_controls:
          "간접 프롬프트 인젝션 제어는 허용할 웹사이트를 제한하고, 추출된 콘텐츠가 하위 자동화에 도달하기 전에 보호를 추가합니다.",
        idpi_is_disabled_browser_content_is_not:
          "IDPI가 꺼져 있습니다. 브라우저 콘텐츠가 웹사이트 허용 목록이나 콘텐츠 보호로 필터링되지 않습니다.",
        the_website_whitelist_is_not_set_to_a:
          "웹사이트 허용 목록이 제한된 도메인 목록으로 설정되어 있지 않습니다. 이것이 IDPI의 핵심 방어이므로 설정해야 합니다.",
        the_website_whitelist_contains_which:
          "웹사이트 허용 목록에 '*'가 있어 도메인 제한이 사실상 해제되어 있습니다.",
        idpi_is_enforcing_a_specific_website:
          "IDPI가 특정 웹사이트 허용 목록과 콘텐츠 보호를 적용하고 있습니다.",
        enable: "활성화",
        custom_patterns: "사용자 지정 패턴",
        optional_comma_separated_phrases_to:
          "의심스러운 프롬프트 인젝션으로 취급할 구문(쉼표로 구분, 선택).",
        ignore_previous_instructions_exfiltrate:
          "ignore previous instructions, exfiltrate data",
      },
      timeoutssettingssection: {
        timeouts: "시간 초과",
        runtime_timing_defaults_written_into:
          "새 자식 구성에 기록되는 런타임 타이밍 기본값. 이미 실행 중인 인스턴스는 현재 시간 초과를 유지합니다.",
      },
      browsersettingssection: {
        browser_runtime: "브라우저 런타임",
        these_settings_are_written_into_the:
          "이 설정은 새로 관리되는 인스턴스용으로 생성되는 자식 구성에 기록됩니다.",
        provider: "공급자",
        browser_backend_used_for_new_managed:
          "새로 관리되는 인스턴스에 사용하는 브라우저 백엔드.",
        chrome: "Chrome",
        cloakbrowser: "CloakBrowser",
        ghost_chrome: "Ghost + Chrome",
        browser_version: "브라우저 버전",
        version_string_used_in_generated_ua:
          "생성되는 UA/지문 기본값에 사용하는 버전 문자열.",
        browser_binary: "브라우저 실행 파일",
        optional_path_override_for_the_chrome:
          "Chrome 또는 CloakBrowser 실행 파일 경로를 선택적으로 재정의합니다.",
        fingerprint_seed: "지문 시드",
        deterministic_cloakbrowser_identity:
          "결정적 CloakBrowser 식별 시드. 비워 두면 실행마다 새 식별 정보를 사용합니다.",
        fingerprint_platform: "지문 플랫폼",
        native_platform_fingerprint_reported_by:
          "CloakBrowser가 보고하는 네이티브 플랫폼 지문.",
        auto: "자동",
        windows: "Windows",
        macos: "macOS",
        linux: "Linux",
        cloak_locale: "Cloak 로캘",
        locale_passed_as_fingerprint_locale:
          "--fingerprint-locale로 전달되는 로캘.",
        cloak_timezone: "Cloak 시간대",
        timezone_passed_as_fingerprint_timezone:
          "--fingerprint-timezone으로 전달되는 시간대.",
        webrtc_ip: "WebRTC IP",
        explicit_replacement_ip_or_auto_for:
          "명시적 대체 IP 또는 CloakBrowser 프록시 출구 IP 확인을 위한 auto.",
        fonts_directory: "글꼴 디렉터리",
        directory_containing_target_platform:
          "CloakBrowser의 대상 플랫폼 글꼴이 들어 있는 디렉터리.",
        storage_quota: "저장소 할당량",
        storage_quota_in_mb_passed_as:
          "MB 단위로 --fingerprint-storage-quota에 전달되는 저장소 할당량.",
        native_stealth_only: "네이티브 스텔스만",
        disable_pinchtab_js_stealth_overlays:
          "PinchTab의 JS 스텔스 오버레이와 자동화를 숨기는 실행 플래그를 끕니다.",
        use_cloakbrowser_native_patches: "CloakBrowser 네이티브 패치 사용",
        extra_flags: "추가 플래그",
        additional_chrome_flags_appended_when:
          "관리 인스턴스를 실행할 때 덧붙이는 추가 Chrome 플래그.",
        extension_paths: "확장 경로",
        comma_separated_extension_directories:
          "불러올 확장 디렉터리(쉼표로 구분). 기본적으로 PinchTab은 상태/설정 디렉터리 아래의 로컬 extensions/ 폴더를 사용합니다. 여기에 사용자 지정 경로를 설정하면 그 기본값을 재정의하고, 필드를 비우면 확장 불러오기를 끕니다.",
      },
      dashboardsettingssection: {
        dashboard_preferences: "대시보드 환경 설정",
        language: "언어",
        choose_the_language_of_the_dashboard:
          "대시보드 인터페이스에 사용할 언어를 선택합니다.",
        these_controls_affect_this_dashboard_ui:
          "이 설정은 이 대시보드 UI에만 영향을 줍니다. 브라우저에 로컬로 저장되며 백엔드 재시작이 필요하지 않습니다.",
        screencast_frame_rate: "실시간 화면 프레임 속도",
        controls_how_often_live_previews:
          "실시간 미리보기가 새 프레임을 요청하는 빈도를 제어합니다.",
        fps: "fps",
        screencast_quality: "실시간 화면 품질",
        jpeg_quality_for_tab_preview_streams: "탭 미리보기 스트림의 JPEG 품질.",
        screencast_width: "실시간 화면 너비",
        maximum_preview_width_for_live_tiles:
          "실시간 타일의 최대 미리보기 너비.",
        px: "px",
        memory_metrics: "메모리 지표",
        poll_every_running_instance_for_browser:
          "모니터링 주기마다 실행 중인 모든 인스턴스에 브라우저 메모리를 질의합니다. Chrome 프로세스 트리 전체의 RSS와, CDP를 통해 열린 탭마다 읽는 JS 힙 및 DOM 카운터입니다. 실측 비용: 인스턴스당 주기마다 열린 탭 하나에 약 1밀리초, 프로세스 트리 순회에 수십 밀리초.",
        enable: "활성화",
        polling_interval: "폴링 간격",
        how_frequently_the_dashboard_asks_the:
          "대시보드가 백엔드에 최신 지표를 요청하는 빈도.",
        s: "s",
        reasoning_output: "추론 출력",
        choose_whether_the_live_agent_feed:
          "실시간 에이전트 피드에 도구 호출, 진행 상황 업데이트, 또는 둘 다 표시할지 선택합니다.",
        tool_calls_only: "도구 호출만",
        progress_only: "진행 상황만",
        both: "둘 다",
      },
      autosolversettingssection: {
        autosolver: "AutoSolver",
        these_settings_are_saved_into_the:
          "이 설정은 PinchTab 설정 파일에 저장됩니다. 외부 공급자 API 키는 쓰기 전용이며 해당 파일에 직접 설정해야 합니다.",
        config_file: "설정 파일",
        dashboard_edits_are_written_back_to:
          "대시보드의 수정 사항은 이 파일에 다시 기록됩니다. 외부 공급자 키는 같은 설정 파일의 autoSolver.external 아래에 설정하세요.",
        config_path_unavailable: "설정 경로를 사용할 수 없음",
        enable_autosolver: "AutoSolver 활성화",
        turns_on_the_autosolver_runtime:
          "지원되는 챌린지 흐름에 대해 autosolver 런타임 구성을 켭니다.",
        enabled: "사용",
        disabled: "사용 안 함",
        auto_trigger: "자동 트리거",
        automatically_run_autosolver_after:
          "지원되는 탐색 및 작업 요청 후 autosolver를 자동 실행합니다.",
        trigger_on_navigate: "탐색 시 트리거",
        run_autosolver_checks_after_successful:
          "탐색 호출이 성공한 뒤 autosolver 검사를 실행합니다.",
        trigger_on_action: "작업 시 트리거",
        run_autosolver_checks_after_successful_2:
          "작업 호출이 성공한 뒤 autosolver 검사를 실행합니다.",
        max_attempts: "최대 시도 횟수",
        maximum_autosolver_retries_before_the:
          "파이프라인이 포기하기 전까지 autosolver의 최대 재시도 횟수.",
        solver_timeout_sec: "솔버 시간 초과(초)",
        per_solver_timeout_for_each_attempt: "각 시도에서 솔버별 시간 초과.",
        retry_base_delay_ms: "재시도 기본 지연(밀리초)",
        base_retry_backoff_delay_between:
          "autosolver 시도 사이의 기본 재시도 백오프 지연.",
        retry_max_delay_ms: "재시도 최대 지연(밀리초)",
        maximum_retry_backoff_delay_cap_between:
          "autosolver 시도 사이 재시도 백오프 지연의 상한.",
        solvers: "솔버",
        comma_separated_ordered_list_of_solver:
          "시도할 솔버 이름의 순서 목록(쉼표로 구분). 런타임에서 사용 가능한 이름은 GET /solvers 또는 GET /config/autosolver로 확인하세요.",
        llm_provider: "LLM 공급자",
        optional_provider_name_used_when_llm:
          "LLM 대체를 활성화했을 때 사용하는 선택적 공급자 이름.",
        llm_fallback: "LLM 대체",
        use_an_llm_as_the_last_resort_after:
          "등록된 솔버가 모두 실패하면 최후 수단으로 LLM을 사용합니다.",
        external_provider_keys: "외부 공급자 키",
        capsolver_and_2captcha_credentials_are:
          "Capsolver와 2Captcha 자격 증명은 대시보드에 표시되지 않으며 설정 파일에서 관리해야 합니다. 이 공급자들은 키가 설정된 경우에만 런타임 솔버 목록에 나타납니다.",
        open_the_config_file_above_and_set:
          "위의 설정 파일을 열고 다음을 설정하세요:",
        autosolver_external_capsolverkey: "autoSolver.external.capsolverKey",
        autosolver_external_twocaptchakey: "autoSolver.external.twoCaptchaKey",
        there_the_dashboard_does_not_display_or:
          ". 대시보드는 이 값을 표시하거나 편집하지 않으며 환경 변수로 재정의할 수도 없습니다.",
      },
    },
    monitoring: {
      monitoringemptystate: {
        starting_default_instance: "기본 인스턴스를 시작하는 중…",
        start_default_instance: "기본 인스턴스 시작",
        open_default_profile: "기본 프로필 열기",
        no_active_instances: "활성 인스턴스 없음",
        pinchtab_expected_a_default_instance:
          "PinchTab이 기본 인스턴스를 기대했지만 사용 가능해지지 않았습니다. 직접 시작하거나 프로필을 확인하세요.",
        start_the_default_instance_or_open:
          "기본 인스턴스를 시작하거나 [프로필]을 열어 다른 프로필을 실행하세요.",
        waiting_for_default_profile:
          "PinchTab이 기본 프로필이 실행되기를 기다리고 있습니다. 자동으로 다시 확인합니다({{count}}회 남음).",
      },
      defaultinstancemodal: {
        start_default_instance: "기본 인스턴스 시작",
        cancel: "취소",
        start_headed: "헤드 모드로 시작",
        start_headless: "헤드리스로 시작",
        choose_how_to_launch_the_default:
          "이 세션에서 기본 프로필을 실행할 방식을 선택하세요.",
        configured_default_mode: "설정된 기본 모드:",
      },
    },
    profilespage: {
      loading_profiles: "프로필을 불러오는 중…",
      no_profiles_yet: "아직 프로필이 없습니다",
      click_new_profile_to_create_one: "[새 프로필]을 클릭해 만드세요",
      new_profile: "새 프로필",
      profiles: "프로필",
      total: "합계",
      no_account: "계정 없음",
      profile_deleted: '프로필 "{{name}}" 삭제됨',
    },
    settingspage: {
      confirm_admin_action: "관리자 작업 확인",
      cancel: "취소",
      verifying: "확인하는 중…",
      continue: "계속",
      re_enter_the_api_token_to_save_backend:
        "백엔드 설정 변경을 저장하려면 API 토큰을 다시 입력하세요. 승격된 세션은 잠시 유지되므로 관리자 작업마다 반복할 필요가 없습니다.",
      api_token: "API 토큰",
      paste_api_token: "API 토큰 붙여넣기",
      restart_required: "재시작 필요",
      reset: "초기화",
      saving: "저장하는 중…",
      save: "저장",
      restart_needed_for: "재시작이 필요한 항목:",
      loading_settings: "설정을 불러오는 중…",
      settings_eyebrow: "설정",
    },
  },
  activities: {
    activityexplorer: {
      agent: "에이전트",
      all: "전체",
      session: "세션",
      request_timeline: "요청 타임라인",
      activity: "활동",
      failed_to_load_activity: "활동을 불러오지 못했습니다",
    },
    agentstreampanel: {
      no_matching_activity: "일치하는 활동이 없습니다",
      adjust_the_filters_or_generate_some:
        "필터를 조정하거나 CLI, MCP, 대시보드에서 트래픽을 만들어 보세요.",
    },
    streamrow: {
      ms: "ms",
      navigate_to_page: "페이지로 이동",
      capture_page_snapshot: "페이지 스냅샷 캡처",
      open_screencast_stream: "실시간 화면 스트림 열기",
      extract_text_from_page: "페이지에서 텍스트 추출",
      click_on_page: "페이지에서 클릭",
      double_click_on_page: "페이지에서 더블 클릭",
      type_into_page: "페이지에 입력",
      hover_on_page: "페이지에서 호버",
      fill_field: "필드 채우기",
      select_option: "옵션 선택",
      scroll_page: "페이지 스크롤",
      press_key: "키 누르기",
      wait_for_condition: "조건 대기",
      evaluate_javascript: "JavaScript 실행",
      upload_file: "파일 업로드",
      download_file: "파일 다운로드",
      on_tab: " (탭: ",
      navigate_to_url: "{{url}}로 이동",
      click_ref: "“{{ref}}” 클릭",
      double_click_ref: "“{{ref}}” 더블클릭",
      type_into_ref: "“{{ref}}”에 입력",
      hover_ref: "“{{ref}}”에 마우스 올리기",
      fill_ref: "“{{ref}}” 채우기",
      select_ref: "“{{ref}}” 선택",
      press_key_on_ref: "“{{ref}}”에서 키 누르기",
    },
    activityline: {
      progress: "진행",
      agent_reported_progress: "에이전트가 진행 상황을 보고했습니다",
      ms: "ms",
    },
    activityitemline: {
      tab_paused_for_human_handoff: "수동 처리를 위해 탭이 일시 중지됨",
      tab_is_paused_for_human_handoff: "수동 처리를 위해 탭이 일시 중지됨",
      resume_automation_after_manual: "수동으로 챌린지를 해결한 뒤 자동화 재개",
      resuming: "재개하는 중…",
      resolve_challenge: "챌린지 해결",
      browser_was_escalated: "브라우저가 승격되었습니다",
      escalated: "승격됨",
      navigate_to_page: "페이지로 이동",
      capture_page_snapshot: "페이지 스냅샷 캡처",
      open_screencast_stream: "실시간 화면 스트림 열기",
      extract_text_from_page: "페이지에서 텍스트 추출",
      take_screenshot: "스크린샷 찍기",
      export_page_as_pdf: "페이지를 PDF로 내보내기",
      click_on_page: "페이지에서 클릭",
      double_click_on_page: "페이지에서 더블 클릭",
      type_into_page: "페이지에 입력",
      hover_on_page: "페이지에서 호버",
      fill_field: "필드 채우기",
      select_option: "옵션 선택",
      scroll_page: "페이지 스크롤",
      press_key: "키 누르기",
      wait_for_condition: "조건 대기",
      evaluate_javascript: "JavaScript 실행",
      upload_file: "파일 업로드",
      download_file: "파일 다운로드",
      resume_failed: "재개 실패",
      navigate_to_url: "{{url}}로 이동",
      click_ref: "“{{ref}}” 클릭",
      double_click_ref: "“{{ref}}” 더블클릭",
      type_into_ref: "“{{ref}}”에 입력",
      hover_ref: "“{{ref}}”에 마우스 올리기",
      fill_ref: "“{{ref}}” 채우기",
      select_ref: "“{{ref}}” 선택",
      press_key_on_ref: "“{{ref}}”에서 키 누르기",
    },
    activitytimeline: {
      timeline: "타임라인",
      recent_events: "최근 이벤트",
      no_matching_activity: "일치하는 활동이 없습니다",
      adjust_the_filters_or_generate_some:
        "필터를 조정하거나 CLI, MCP, 대시보드에서 트래픽을 만들어 보세요.",
    },
    activefilterbar: {
      clear_filters: "필터 지우기",
    },
    activityfiltermenu: {
      "200": "200",
      "3600": "3600",
      profile: "프로필",
      tab: "탭",
      agent: "에이전트",
      action: "작업",
      advanced_filters: "고급 필터",
      hide: "숨기기",
      show: "표시",
      instance: "인스턴스",
      path_prefix: "경로 접두사",
      tabs_or_instances: "/tabs/ or /instances/",
      age_seconds: "경과 시간(초)",
      limit: "한도",
      clear: "지우기",
      search: "검색",
      any_profile: "모든 프로필",
      any_tab: "모든 탭",
      any_agent: "모든 에이전트",
      any_action: "모든 작업",
      any_instance: "모든 인스턴스",
    },
    agentworkspacesidebar: {
      agents: "에이전트",
      activities: "활동",
      no_agent_activity_observed_yet: "아직 관찰된 에이전트 활동이 없습니다",
      all_agents: "모든 에이전트",
    },
    copyidpill: {
      copied: "복사됨",
      copy_tab_id: "탭 ID {{id}} 복사",
    },
    hooks: {
      useactivitydata: {
        failed_to_load_activity: "활동을 불러오지 못했습니다",
        failed_to_load_agent_activity: "에이전트 활동을 불러오지 못했습니다",
      },
    },
  },
  settings: {
    sections: {
      dashboard: {
        dashboard: "대시보드",
        local_monitoring_and_screencast:
          "로컬 모니터링과 실시간 화면 환경 설정.",
      },
      defaults: {
        instance_defaults: "인스턴스 기본값",
        how_new_managed_browser_instances_launch:
          "새로 관리되는 브라우저 인스턴스의 실행 방식.",
      },
      orchestration: {
        orchestration: "오케스트레이션",
        routing_strategy_port_range_and: "라우팅 전략, 포트 범위, 할당 정책.",
      },
      security: {
        security: "보안",
        sensitive_endpoint_gates_and_access:
          "민감한 엔드포인트 게이트와 접근 제어.",
      },
      "security-idpi": {
        security_idpi: "보안 IDPI",
        indirect_prompt_injection_website_and:
          "간접 프롬프트 인젝션의 웹사이트 및 콘텐츠 방어.",
      },
      profiles: {
        profiles: "프로필",
        shared_profile_storage_and_default:
          "공유 프로필 저장소와 기본 프로필 동작.",
      },
      network: {
        network_attach: "네트워크 및 연결",
        server_binding_auth_and_attach_policy: "서버 바인딩, 인증, 연결 정책.",
      },
      browser: {
        browser_runtime: "브라우저 런타임",
        chrome_binary_version_flags_and:
          "Chrome 실행 파일, 버전, 플래그, 확장.",
      },
      timeouts: {
        timeouts: "시간 초과",
        action_navigation_shutdown_and_wait: "작업, 탐색, 종료, 대기 타이밍.",
      },
      autosolver: {
        autosolver: "AutoSolver",
        challenge_solving_behavior_and_config:
          "챌린지 해결 동작과 설정 파일 기반 공급자.",
      },
      observability: {
        observability: "관측 가능성",
        activity_logging_and_retention_settings: "활동 로깅과 보존 기간 설정.",
      },
    },
    security: {
      endpoints: {
        allowEvaluate: {
          allow_evaluate: "evaluate 허용",
        },
        allowMacro: {
          allow_macro: "macro 허용",
        },
        allowScreencast: {
          allow_screencast: "실시간 화면 허용",
        },
        allowDownload: {
          allow_download: "다운로드 허용",
        },
        allowCookies: {
          allow_cookies: "쿠키 허용",
        },
        allowUpload: {
          allow_upload: "업로드 허용",
        },
        allowNetworkIntercept: {
          allow_network_interception: "네트워크 가로채기 허용",
          lets_agents_install_rules_to_abort_or:
            "에이전트가 탭의 HTTP 요청을 중단하거나 충족(모의)하는 규칙을 설치할 수 있게 합니다. 켜면 아래 '허용된 웹사이트'의 호스트에서는 응답 위조가 금지되고 그 외에서는 허용됩니다. 에이전트 사용을 승인한 호스트(예: 은행)에서 응답을 위조하는 것이 가장 위험한 결과입니다 — 그래서 보호되는 대상은 허용 목록의 호스트이며 그 반대가 아닙니다. CORS를 깨지 않도록 OPTIONS 사전 요청은 기본적으로 건너뜁니다.",
        },
        allowFileScheme: {
          allow_file_navigation: "file:// 탐색 허용",
          lets_agents_open_local_file_urls_a_file:
            "에이전트가 로컬 file:// URL을 열 수 있게 합니다. file:// URL에는 호스트가 없어 아래 '허용된 웹사이트'의 제한을 받지 않고 SSRF/사설 IP 보호도 우회합니다 — 활성화하면 서버 프로세스가 읽을 수 있는 모든 로컬 파일에 대한 읽기 권한(스냅샷/스크린샷/스크래핑 경유)을 부여하는 것과 같습니다. 엄격 모드 허용 목록이 활성인 동안에는 계속 차단됩니다. 신뢰할 수 있는 단일 테넌트 머신에서만 활성화하세요.",
        },
      },
      idpi: {
        enabled: {
          enable_idpi: "IDPI 활성화",
          turn_on_indirect_prompt_injection:
            "간접 프롬프트 인젝션 방어를 켭니다.",
        },
        strictMode: {
          strict_mode: "엄격 모드",
          block_disallowed_domains_and_suspicious:
            "경고만 하지 않고 허용되지 않은 도메인과 의심스러운 콘텐츠를 차단합니다.",
        },
        scanContent: {
          scan_content: "콘텐츠 검사",
          inspect_extracted_text_and_snapshots:
            "추출된 텍스트와 스냅샷에서 프롬프트 인젝션 패턴을 검사합니다.",
        },
        wrapContent: {
          wrap_content: "콘텐츠 감싸기",
          mark_returned_page_text_as_untrusted:
            "반환된 페이지 텍스트를 하위 사용자용 신뢰할 수 없는 콘텐츠로 표시합니다.",
        },
      },
    },
    defaults: {
      booleans: {
        blockImages: {
          block_images: "이미지 차단",
        },
        blockMedia: {
          block_media: "미디어 차단",
        },
        blockAds: {
          block_ads: "광고 차단",
        },
        noAnimations: {
          disable_css_animations: "CSS 애니메이션 사용 안 함",
        },
        noRestore: {
          skip_session_restore: "세션 복원 건너뛰기",
        },
      },
      timeouts: {
        actionSec: {
          action_timeout: "작업 시간 초과",
          maximum_time_for_action_requests: "작업 요청의 최대 시간.",
        },
        navigateSec: {
          navigate_timeout: "탐색 시간 초과",
          maximum_time_for_navigation_requests: "탐색 요청의 최대 시간.",
        },
        shutdownSec: {
          shutdown_timeout: "종료 시간 초과",
          grace_period_before_force_closing_a:
            "자식 프로세스를 강제 종료하기 전의 유예 시간.",
        },
        waitNavMs: {
          wait_after_navigation_delay: "탐색 후 대기 지연",
          post_navigation_stabilization_delay_in:
            "탐색 후 안정화 대기 시간(밀리초).",
        },
      },
    },
    notices: {
      backend_config_saved_dynamic_changes:
        "백엔드 구성을 저장했습니다. 동적 변경은 가능한 범위에서 적용되었습니다.",
      backend_config_saved_dynamic_changes_2:
        "백엔드 구성을 저장했습니다. 동적 변경은 가능한 범위에서 적용되었습니다. 서버 수준 변경은 재시작을 권장합니다.",
      preferencesSaved: "대시보드 환경 설정을 이 브라우저에 저장했습니다.",
    },
    errors: {
      loadFailed: "설정을 불러오지 못했습니다",
      saveFailed: "설정을 저장하지 못했습니다",
      tokenVerifyFailed: "API 토큰을 확인하지 못했습니다",
    },
  },
  monitoring: {
    errors: {
      startInstanceFailed: "인스턴스를 시작하지 못했습니다",
    },
  },
  errors: {
    requestFailed: "요청 실패",
  },
  auth: {
    insecureTransport:
      "대시보드 세션이 안전하지 않은 HTTP로 실행 중입니다. 더 강한 세션 보호를 위해 HTTPS 또는 localhost를 사용하세요.",
  },
};

export default messages;
