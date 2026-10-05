import type { Messages } from "../i18n/messages";

const messages: Messages = {
  app: {
    name: "PinchTab",
    checking_server_authentication: "サーバー認証を確認しています…",
    pinchtab_is_restarting_or_unreachable:
      "PinchTab が再起動中か、到達できません。",
    automatic_retries_stopped: " 自動再試行を停止しました。",
    retry_now: "今すぐ再試行",
    refresh: "更新",
  },
  profiles: {
    profiletoolbarbuttons: {
      copy_id: "ID をコピー",
      delete: "削除",
      save: "保存",
      stop: "停止",
      start: "起動",
      delete_profile: "プロファイルを削除",
      cancel: "キャンセル",
      delete_profile_2: 'プロファイル "',
      every_cookie_login_and_session_stored:
        '" を削除しますか？保存されている Cookie、ログイン、セッションはすべて完全に失われ、元に戻せません。',
      copied: "コピーしました",
      failed: "失敗",
    },
    profilemetainfopanel: {
      profile_panel: "プロファイルパネル",
      status: "ステータス",
      port: "ポート",
      browser: "ブラウザー",
      size: "サイズ",
      account: "アカウント",
      identity: "識別情報",
      connection: "接続",
      cdp_attached: "CDP 接続済み",
      cdp_url: "CDP URL",
      path: "パス",
      not_found: "（見つかりません）",
      attached_via_cdp: "CDP 経由で接続",
      headless: "ヘッドレス",
      headed: "ヘッドあり",
    },
    profilecard: {
      error: "エラー",
      stopped: "停止",
      size: "サイズ",
      account: "アカウント",
      use_when: "使用条件",
      details: "詳細",
      stop: "停止",
      start: "起動",
    },
    profiledetailspanel: {
      select_a_profile_to_inspect_its:
        "プロファイルを選択すると、インスタンス、ライブタブ、ログを確認できます。",
      live: "ライブ",
      tabs: "タブ",
      logs: "ログ",
      no_tabs_open: "開いているタブはありません。",
      instance_not_running: "インスタンスは実行されていません。",
      profile_name: "プロファイル: {{name}}",
    },
    profilebasicinfopanel: {
      name: "名前",
      use_this_profile_when: "このプロファイルを使う条件",
    },
    profileliveviewpanel: {
      no_tabs_open: "開いているタブはありません",
      instance_not_running_start_the_profile:
        "インスタンスは実行されていません。プロファイルを起動するとライブ表示を確認できます。",
    },
    instancelogspanel: {
      loading_logs: "ログを読み込んでいます…",
      no_instance_logs_available: "インスタンスログはありません。",
    },
    groups: {
      user: "プロファイル",
      temporary: "一時的",
      quarantined: "隔離済み",
    },
  },
  components: {
    atoms: {
      debugpanel: {
        debug: "🐛 デバッグ",
        debug_panel: "デバッグパネル",
        instances: "インスタンス:",
      },
      emptystate: {
        dashboard: "ダッシュボード",
      },
      modal: {
        dashboard: "ダッシュボード",
        close: "閉じる",
      },
      errorboundary: {
        something_went_wrong: "⚠️ 問題が発生しました",
        unknown_error: "不明なエラー",
        try_again: "再試行",
      },
    },
    screencast: {
      screencaststatusbar: {
        decrease_fps: "FPS を下げる",
        increase_fps: "FPS を上げる",
        take_full_quality_screenshot_png:
          "最高品質のスクリーンショットを撮る（PNG）",
        download_as_pdf: "PDF としてダウンロード",
        fps: "FPS（",
      },
      screencasttile: {
        tab_preview: "タブプレビュー",
        connection_lost: "接続が切れました",
        show_static_preview: "静的プレビューを表示",
        retry_connection: "接続を再試行",
      },
      framedecode: {
        failed_to_decode_screencast_frame:
          "スクリーンキャストのフレームをデコードできませんでした",
      },
    },
    molecules: {
      createprofilemodal: {
        new_profile: "📁 新しいプロファイル",
        cancel: "キャンセル",
        create: "作成",
        name: "名前",
        e_g_personal_work_scraping: "例: 個人用、仕事用、スクレイピング",
        use_this_profile_when_helps_agents_pick:
          "このプロファイルを使う条件（エージェントが適切なプロファイルを選ぶ助けになります）",
        e_g_i_need_to_access_gmail_for_the_team:
          "例: チームアカウントで Gmail にアクセスしたい",
        import_from_optional_chrome_user_data:
          "インポート元（任意 — Chrome のユーザーデータパス）",
        e_g_users_you_library_application:
          "例: /Users/you/Library/Application Support/Google/Chrome",
      },
      navbar: {
        pinchtab: "PinchTab",
        logout: "ログアウト",
        refresh_r: "更新（⌘R）",
        toggle_menu: "メニューを切り替え",
        monitoring: "モニタリング",
        agents: "エージェント",
        profiles: "プロファイル",
        settings: "設定",
      },
      instancestats: {
        instance: "インスタンス",
        status: "ステータス",
        uptime: "稼働時間",
        port: "ポート",
        crashes: "クラッシュ",
        browsing: "ブラウジング",
        tabs: "タブ",
        domains: "ドメイン",
        resources: "リソース",
        memory: "メモリ",
        renderers: "レンダラー",
        pages: "ページ",
        js_heap: "JS ヒープ",
        dom_nodes: "DOM ノード",
        listeners: "リスナー",
        frames: "フレーム",
        unreadable: "読み取り不可",
        just_now: "たった今",
        tabs_open_before_it_were_lost: "それ以前に開いていたタブは失われました",
        rss_across_the_browser_process_tree:
          "ブラウザープロセスツリー全体の RSS",
        tabs_that_did_not_answer_not_counted:
          "応答しなかったタブ（集計対象外）",
        last_crash:
          "最新: {{time}} に {{reason}} · それ以前に開いていたタブは失われました",
        heap_summary_one: "使用量 / 合計、{{count}} タブの合算",
        heap_summary_other: "使用量 / 合計、{{count}} タブの合算",
        document_count_one: "{{count}} ドキュメント",
        document_count_other: "{{count}} ドキュメント",
      },
      agentitem: {
        tab_paused_for_human_handoff: "タブは手動対応のため一時停止中",
        just_now: "たった今",
        session_at: "セッション {{time}}",
        session_range: "セッション {{start}}–{{end}}",
      },
      startinstancemodal: {
        start_profile: "🖥️ プロファイルを起動",
        cancel: "キャンセル",
        start: "起動",
        port: "ポート",
        auto_select_from_configured_range: "設定済みの範囲から自動選択",
        leave_blank_to_auto_select_a_free_port:
          "空欄にすると、設定済みのインスタンスポート範囲から空きポートを自動選択します。",
        headless_best_for_docker_vps: "ヘッドレス（Docker/VPS に最適）",
        browser: "ブラウザー",
        server_default: "サーバーの既定値",
        chrome: "Chrome",
        cloakbrowser: "CloakBrowser",
        ghost_chrome: "Ghost + Chrome",
        direct_launch_command_backup: "直接起動コマンド（予備）",
        copy_command: "コマンドをコピー",
        replace: "置換",
        pinchtab_config_token: "pinchtab config token",
        when_auth_is_enabled: "認証が有効な場合。",
        with_the_value_from: "次の値を使用します:",
        port_must_be_a_whole_number_between_1:
          "ポートは 1 から 65535 の整数で指定してください。",
        profile_id_missing: "プロファイル ID がありません",
        failed_to_launch_instance: "インスタンスの起動に失敗しました",
        copied: "コピーしました！",
        failed_to_copy: "コピーに失敗しました",
      },
      handoffnotifications: {
        human_intervention_required: "手動対応が必要です",
        dismiss_notification: "通知を閉じる",
        reason: "理由:",
        resume: "再開",
      },
      serverstatusbadge: {
        expand_instance_list: "インスタンス一覧を展開",
        collapse_instance_list: "インスタンス一覧を折りたたむ",
        tab: "タブ",
        restart_required: "再起動が必要",
        server_running: "サーバー稼働中",
        restart_required_2: "再起動が必要",
        running: "実行中",
        server_running_no_instances: "サーバーは稼働中、インスタンスなし",
      },
      serversummary: {
        settings: "設定",
        server_information: "サーバー情報",
        technical_details_for_current_session: "現在のセッションの技術情報",
        version: "バージョン",
        uptime: "稼働時間",
      },
      tabschart: {
        monitoring: "モニタリング",
        live_telemetry: "ライブテレメトリ",
        tabs: "タブ",
        memory: "メモリ",
        heap: "ヒープ",
        server_heap: "サーバーヒープ",
        collecting_data: "データを収集しています…",
        waiting_for_more_data: "さらにデータを待っています…",
      },
      idbadge: {
        click_to_copy_full_id: "完全な ID をコピー: {{id}}",
      },
    },
  },
  tabs: {
    tabbar: {
      tab_paused_for_human_handoff: "タブは手動対応のため一時停止中",
      tab_is_paused_for_human_handoff: "タブは手動対応のため一時停止中",
      untitled: "無題",
      unpin_and_follow_the_focused_tab_again:
        "固定を解除し、フォーカス中のタブに再び追従する",
      pin_this_tab_selection: "このタブの選択を固定する",
      tabs: "タブ",
      monitoring: "モニタリング",
      pin_tab: "{{title}} を固定",
      unpin_tab_and_follow_focus: "{{title}} の固定を解除してフォーカスに追従",
      close_tab: "{{title}} を閉じる",
      tabs_new: "タブ（新着 {{count}} 件）",
    },
    selectedtabtitle: {
      untitled: "無題",
    },
    instancetabspanel: {
      chart_crashed_check_console:
        "グラフがクラッシュしました — コンソールを確認してください",
      no_tabs_open: "開いているタブはありません",
      unknown: "不明",
    },
    tabitem: {
      untitled: "無題",
    },
    consolepanel: {
      loading_console_logs: "コンソールログを読み込んでいます…",
      no_console_logs_yet: "コンソールログはまだありません",
    },
    errorspanel: {
      loading_errors: "エラーを読み込んでいます…",
      no_errors_yet: "エラーはまだありません",
    },
    selectedtabpanel: {
      select_a_tab_to_view_details: "タブを選択すると詳細を表示します",
      no_instance_id_provided_for_live_view:
        "ライブ表示に必要なインスタンス ID がありません。",
      actions: "操作",
      live: "ライブ",
      console: "コンソール",
      errors: "エラー",
    },
  },
  instances: {
    instancelistitem: {
      tabs: "タブ",
      open_profile: "プロファイルを開く",
      restart: "再起動",
      stop: "停止",
    },
    instancecard: {
      headless: "ヘッドレス",
      headed: "ヘッドあり",
      uptime: "稼働時間",
      open_dashboard: "ダッシュボードを開く",
      stop: "停止",
    },
  },
  pages: {
    monitoringpage: {
      instances: "インスタンス",
      collapse_sidebar: "サイドバーを折りたたむ",
    },
    loginpage: {
      authentication: "認証",
      enter_api_token: "API トークンを入力",
      this_pinchtab_server_requires_a_bearer:
        "この PinchTab サーバーでは、ダッシュボードが保護されたルートと API を読み込む前にベアラートークンが必要です。",
      run: "実行",
      pinchtab_config_token: "pinchtab config token",
      to_copy_the_token_to_your_clipboard:
        "を実行するとトークンがクリップボードにコピーされます。",
      paste_bearer_token: "ベアラートークンを貼り付け",
      authorizing: "認証しています…",
      continue: "続行",
      authentication_failed: "認証に失敗しました",
    },
    settings: {
      orchestrationsettingssection: {
        orchestration: "オーケストレーション",
        port_range_and_allocation_policy_can_be:
          "ポート範囲と割り当てポリシーは今後の起動にすぐ適用されます。ストラテジーと再起動ポリシーの変更は、起動時にルートとライフサイクル状態が登録されるため、ダッシュボードの再起動が必要です。",
        strategy: "ストラテジー",
        controls_instance_lifecycle_and_how:
          "インスタンスのライフサイクルと、省略ルートの振り分け方法を制御します。",
        always_on: "常時起動",
        simple: "シンプル",
        explicit: "明示的",
        simple_autorestart: "シンプル自動再起動",
        no_instance_hub: "インスタンスなし（ハブ）",
        launches_a_default_instance_at_boot_and:
          "起動時に既定のインスタンスを立ち上げ、クラッシュ時に再起動します。",
        launches_one_instance_on_first_request:
          "最初のリクエストで 1 つのインスタンスを起動します。自動再起動は行いません。",
        all_instances_managed_via_api_no:
          "すべてのインスタンスを API で管理します。自動起動は行いません。",
        launches_on_first_request_and:
          "最初のリクエストで起動し、クラッシュ時に再起動します。",
        no_local_chrome_processes_acts_as_a_hub:
          "ローカルの Chrome プロセスは起動しません。リモートブリッジ専用のハブとして動作します。",
        allocation_policy: "割り当てポリシー",
        determines_how_running_instances_are:
          "省略リクエストで実行中のインスタンスをどう選ぶかを決めます。",
        first_available: "最初に利用可能なもの",
        round_robin: "ラウンドロビン",
        random: "ランダム",
        instance_port_start: "インスタンスポート開始",
        lower_bound_for_auto_allocated_instance:
          "自動割り当てされるインスタンスポートの下限。",
        instance_port_end: "インスタンスポート終了",
        upper_bound_for_auto_allocated_instance:
          "自動割り当てされるインスタンスポートの上限。",
        max_restarts: "最大再起動回数",
        maximum_restart_attempts_use_1_for:
          "再起動の最大試行回数。-1 で無制限、0 で再起動なし。",
        initial_backoff: "初回バックオフ",
        delay_in_seconds_before_the_first: "最初の再起動試行までの遅延（秒）。",
        max_backoff: "最大バックオフ",
        upper_bound_in_seconds_for_exponential:
          "指数バックオフ再起動の上限（秒）。",
        stable_after: "安定判定時間",
        seconds_the_instance_must_stay_healthy:
          "再起動カウンターがリセットされるまでインスタンスが正常であり続ける必要のある秒数。",
      },
      securitysettingssection: {
        security: "セキュリティ",
        these_controls_define_what_risky:
          "これらの設定は、PinchTab がどのような高リスク機能を公開するかを決めます。",
        one_or_more_sensitive_endpoint_families:
          "1 つ以上の機密エンドポイント群が有効です。スクリプト実行、ダウンロード、アップロード、ライブキャプチャなどの機能は高リスクな能力を公開する可能性があります。信頼できる環境でのみ有効にしてください。ネットワークアクセス、認証、下流での利用の安全確保は利用者の責任です。",
        these_endpoint_families_can_expose_high:
          "これらのエンドポイント群は有効にすると高リスクな能力を公開する可能性があります。信頼できる環境でのみ、かつネットワークアクセス、認証、下流での利用の責任を負う場合にのみ有効にしてください。",
        controls_whether_the_corresponding:
          "対応するエンドポイント群を有効にするかどうかを制御します。",
        enable: "有効化",
        allowed_websites: "許可するウェブサイト",
        comma_separated_domain_allowlist_for:
          "ウェブコンテンツ向けのドメイン許可リスト（カンマ区切り）。完全一致のホスト名か *.example.com のようなパターンを使用します。",
        "127_0_0_1_localhost_1": "127.0.0.1, localhost, ::1",
        keep_this_list_narrow_empty_or_wildcard:
          "リストは最小限に保ってください。空欄やワイルドカードは IDPI の主要な防御境界を弱めます。IDPI が有効でも、ローカル以外や信頼できないサイトを許可するとブラウザーの攻撃対象領域が広がります。",
        trusted_proxy_cidrs: "信頼するプロキシ CIDR",
        comma_separated_cidrs_or_ips_whose:
          "ナビゲーション時にブラウザーが報告するリモート IP を信頼する CIDR または IP（カンマ区切り）。既知の内部プロキシにのみ使用してください。",
        "10_1_2_3_10_0_0_0_8": "10.1.2.3, 10.0.0.0/8",
        this_weakens_navigation_ip_checks_for:
          "一致するリモート IP に対するナビゲーション時の IP 検証が緩くなります。広いプライベート範囲より具体的なプロキシアドレスを優先してください。IP のみの項目は単一ホストとして扱われます。",
        trusted_resolve_cidrs: "信頼する解決先 CIDR",
        comma_separated_cidrs_or_ips_that_a:
          "ナビゲーションの事前チェック時にホスト名が解決してよい CIDR または IP（カンマ区切り）。内部 DNS やプロキシ構成向けです。",
        "198_18_0_0_15_10_1_2_3": "198.18.0.0/15, 10.1.2.3",
        this_allows_hostnames_to_resolve_to_non:
          "ホスト名が非公開 IP に解決できるようになります。リストは最小限にし、管理下のインフラのみを含めてください。IP のみの項目は単一ホストとして扱われます。",
      },
      settingssharedcomponents: {
        settings: "設定",
      },
      networksettingssection: {
        network_attach: "ネットワークと接続",
        port_and_bind_changes_require_a_restart:
          "ポートとバインドの変更には再起動が必要です。API トークンの管理はダッシュボード外で行います。",
        server_port: "サーバーポート",
        http_port_for_the_dashboard_process:
          "ダッシュボードプロセスが使用する HTTP ポート。",
        bind_address: "バインドアドレス",
        network_interface_the_dashboard_process:
          "ダッシュボードプロセスがバインドするネットワークインターフェース。127.0.0.1 または localhost を保つと、直接到達できる範囲がローカルマシンに限定されます。",
        a_non_loopback_bind_is_a_documented_non:
          "非ループバックへのバインドは、文書化された非既定のセキュリティ低下を伴う変更です。別のネットワーク境界がアクセスを制限していない限り、サーバーがローカルマシン外に公開される可能性があります。トークンを必ず設定し、プロキシやポート公開の挙動を明確に確認してください。",
        loopback_bind_keeps_direct_server:
          "ループバックバインドはサーバーへの直接到達をローカルに保ちます。",
        or_another_non_local_address_widens_the:
          "やその他の非ローカルアドレスに変えると信頼境界が広がります。",
        api_token: "API トークン",
        bearer_token_required_by_authenticated:
          "設定すると、認証済みリクエストにベアラートークンが必要になります。ダッシュボードはこの値を返さず、管理も行いません。",
        no_token_configured_set_one_through_the:
          "トークンが未設定です。CLI または設定ファイルで設定してください。",
        token_configured_manage_rotation:
          "トークンは設定済みです。ローテーションは CLI または設定ファイルで行ってください。現在の値がサーバーから返されることはありません。",
        pinchtab_config_token: "pinchtab config token",
        to_copy_it_to_your_clipboard:
          "を実行するとクリップボードにコピーできます。",
        no_api_token_is_set_anyone_who_can:
          "API トークンが設定されていません。このサーバーに到達できる人は誰でも公開されたエンドポイントにアクセスできます。信頼できるローカルネットワークでのみ使用するか、CLI または設定ファイルで強力なトークンを設定してください。アクセスの保護は利用者の責任です。",
        state_directory: "状態ディレクトリ",
        base_state_path_used_by_managed_child:
          "管理対象の子インスタンスが使用する基本状態パス。",
        trust_proxy_headers: "プロキシヘッダーを信頼",
        trust_x_forwarded_proto_x_forwarded:
          "オリジン検証で X-Forwarded-Proto、X-Forwarded-Host、Forwarded ヘッダーを信頼します。PinchTab が信頼できるリバースプロキシ（Caddy、nginx など）の背後で動作する場合にのみ有効にしてください。",
        enabled: "有効",
        disabled: "無効",
        cookie_secure_mode: "Cookie Secure モード",
        controls_whether_dashboard_session:
          "ダッシュボードのセッション Cookie に HTTPS を要求するかを制御します。Auto は HTTPS の場合のみ Secure を有効にします。TLS が PinchTab の前段にある場合は Force Secure が適切です。",
        auto: "自動",
        force_secure: "Secure を強制",
        force_insecure: "非 Secure を強制",
        force_secure_blocks_dashboard_login_on:
          "Secure を強制すると、平文 HTTP でのダッシュボードログインがブロックされます。PinchTab を直接 HTTPS で、または信頼できるプロキシの背後で提供する場合に使用します。TLS が PinchTab の前段で終端する場合は次を有効にしてください:",
        trustproxyheaders: "trustProxyHeaders",
        so_forwarded_https_requests_are:
          "これにより転送された HTTPS リクエストが認識されます。",
        persist_dashboard_sessions: "ダッシュボードセッションを永続化",
        keep_dashboard_login_sessions_across:
          "サーバー再起動後もダッシュボードのログインセッションを保持します。再起動のたびに再ログインを強制したい場合は無効にしてください。",
        session_idle_timeout: "セッションのアイドルタイムアウト",
        how_long_an_unused_dashboard_session:
          "未使用のダッシュボードセッションが有効であり続ける時間。設定では秒単位で保存されます。",
        session_max_lifetime: "セッションの最大有効期間",
        absolute_lifetime_for_a_dashboard:
          "アクティブであってもダッシュボードセッションを再作成する必要がある絶対的な有効期間。",
        require_elevation_for_config_saves: "設定保存時に昇格を要求",
        ask_for_api_token_re_entry_before:
          "バックエンド設定の変更を保存する前に API トークンの再入力を求めます。既定では無効です。",
        allow_attach: "接続を許可",
        permit_attaching_pinchtab_to_externally:
          "外部で管理されている Chrome セッションに PinchTab を接続できるようにします。",
        enable: "有効化",
        allowed_attach_hosts: "接続を許可するホスト",
        comma_separated_host_allowlist_for:
          '接続リクエストのホスト許可リスト（カンマ区切り）。管理下で信頼できるホストのみを含めてください。"*" を使うとホスト許可リストが無効になります。',
        allowhosts: 'allowHosts: ["*"]',
        is_a_documented_non_default_security:
          "は文書化された非既定のセキュリティ低下を伴う上書きです。ホスト許可リストを完全に無効化し、許可されたスキームの到達可能な任意のホストへのリモート接続を許可します。隔離された運用者管理のネットワークでのみ使用してください。",
        hosts_in_this_allowlist_may_be_used_for:
          "この許可リストのホストはリモート接続リクエストに使用される可能性があります。広範または信頼できない項目は信頼境界を広げ、外部の Chrome セッションやブラウザー内容を露出させます。",
        allowed_attach_schemes: "接続を許可するスキーム",
        comma_separated_scheme_allowlist:
          "スキームの許可リスト（カンマ区切り）。通常は ws と wss です。",
      },
      observabilitysettingssection: {
        observability: "可観測性",
        activity_logging_tracks_api_requests:
          "アクティビティログはデバッグと監査のために API リクエストを記録します。ログはローカルに保存され、[アクティビティ] ページで照会できます。",
        activity_logging: "アクティビティログ",
        enable_or_disable_activity_event:
          "アクティビティイベントの記録を有効または無効にします。",
        enabled: "有効",
        disabled: "無効",
        retention_days: "保存期間（日）",
        how_long_to_keep_activity_logs_before:
          "アクティビティログを自動削除まで保持する期間。長く保持するとディスク使用量は増えますが、監査履歴が充実します。",
        session_idle_timeout_seconds: "セッションのアイドルタイムアウト（秒）",
        time_before_an_inactive_agent_session:
          "活動のないエージェントセッションがアイドルと見なされるまでの時間。アクティビティをセッション別にまとめるために使われます。",
      },
      profilessettingssection: {
        profiles: "プロファイル",
        profile_storage_is_host_level_changing:
          "プロファイルストレージはホスト単位の設定です。起動時にプロファイルマネージャーとオーケストレーターがこのディレクトリで作成されるため、基本ディレクトリの変更には再起動が必要です。",
        profiles_base_directory: "プロファイルの基本ディレクトリ",
        root_directory_where_browser_profiles:
          "ブラウザープロファイルを保存するルートディレクトリ。",
        default_profile: "既定のプロファイル",
        profile_name_used_when_the_server_needs:
          "サーバーが暗黙の既定値を必要とするときに使うプロファイル名。",
      },
      defaultssettingssection: {
        instance_defaults: "インスタンスの既定値",
        these_values_are_written_to_config_and:
          "これらの値は設定に書き込まれ、新しい管理対象インスタンスに使用されます。既に実行中のインスタンスは現在の実行時設定を維持します。",
        mode: "モード",
        default_browser_mode_for_new_launches:
          "新規起動時の既定のブラウザーモード。",
        headless: "ヘッドレス",
        headed: "ヘッドあり",
        stealth_level: "ステルスレベル",
        bot_detection_evasion_profile_higher:
          "ボット検出回避のプロファイル。レベルが高いほどエラー監視や一部のブラウザー機能に影響する可能性があります。",
        light: "ライト",
        medium: "ミディアム",
        full: "フル",
        light_2: "ライト:",
        default_baseline_stealth_keeps_the:
          "既定のベースラインステルス。基本的な自動化の痕跡を隠しつつ、最もリスクの低い起動方法と JS の挙動を維持します。",
        default_product_security_baseline:
          "✓ 既定の製品セキュリティベースライン",
        no_intentional_api_realism_or_security:
          "✓ API の実在性や安全性を意図的に犠牲にしません",
        medium_2: "ミディアム:",
        non_default_risk_mode_adds_client_hints:
          "非既定のリスクモード。アンチボット互換性を高めるため、Client Hints、`chrome.runtime` シム、iframe 伝播、スタックフィルタリング、ネイティブ風の関数マスクを追加します。",
        alters_browser_visible_apis_and_error:
          "⚠ ブラウザーから見える API とエラー/スタックの挙動を変更します。監視やデバッグツールが異なる結果を示す場合があります。",
        permissions_and_compatibility_shims_can:
          "⚠ 権限や互換シムが意図的に変更された値を返すことがあります。これを既定の安全ベースラインとして使わないでください。",
        reports_that_require_explicitly:
          "⚠ ミディアムを明示的に有効にしないと再現しない報告は、既定経路の挙動ではなく、利用者が選択したリスク受容として扱うべきです。",
        full_2: "フル:",
        highest_risk_non_default_mode_adds:
          "最もリスクの高い非既定モード。ミディアムに加えてグラフィックス、canvas、オーディオ、システムカラー、WebRTC の改変を行います。",
        browser_output_is_intentionally_less:
          "⚠ ブラウザーの出力は意図的にネイティブさと安定性を下げます。レンダリング、メディア、ネットワークの挙動が壊れたり実際の Chrome からずれたりする可能性があります。",
        this_mode_is_not_an_acceptable_default:
          "⚠ このモードは既定のセキュリティ態勢として受け入れられるものではありません。トレードオフを明示的に受け入れる場合にのみ有効にしてください。",
        reports_that_depend_on_enabling_full:
          "⚠ フルの有効化に依存する報告は、既定経路での回避が示されない限り、非既定の運用者リスクとして扱ってください。",
        webrtc_webgl_canvas_and_audio_behavior:
          "⚠ WebRTC、WebGL、canvas、オーディオの挙動はすべてベースラインの Chrome からずれる可能性があります。",
        tab_eviction_policy: "タブの追い出しポリシー",
        how_pinchtab_behaves_when_a_managed:
          "管理対象インスタンスがタブ上限に達したときの PinchTab の挙動。",
        reject_new_tabs: "新しいタブを拒否",
        close_oldest: "最も古いものを閉じる",
        close_least_recently_used: "最も長く使われていないものを閉じる",
        tab_lifecycle: "タブのライフサイクル",
        close_idle_closes_a_tab_after_a_text:
          "[アイドルを閉じる] は /text、/snapshot、/action の応答後、遅延時間を過ぎたタブを閉じます。/navigate はこれを取り消します。[アイドルを凍結] は遅延時間のあいだどのリクエストも触れていないタブを凍結し、次のリクエストで解除します。",
        keep_never_auto_close: "保持（自動で閉じない）",
        close_idle: "アイドルを閉じる",
        freeze_idle: "アイドルを凍結",
        auto_close_delay: "自動クローズの遅延",
        seconds_of_idleness_before_an_idle_tab:
          "アイドルタブが閉じられるか凍結されるまでのアイドル秒数。ライフサイクルが [アイドルを閉じる] または [アイドルを凍結] の場合にのみ適用されます。",
        restore_tabs_on_startup: "起動時にタブを復元",
        when_enabled_tabs_open_at_shutdown_are:
          "有効にすると、終了時に開いていたタブが次回起動時に再び開きます。既定では無効 — 閉じたタブは再起動後も閉じたままです。",
        enable: "有効化",
        max_tabs: "最大タブ数",
        maximum_number_of_tabs_per_managed:
          "管理対象インスタンスごとのタブ数の上限。",
        max_parallel_tabs: "並列タブの上限",
        set_to_0_to_auto_detect_from_cpu_count:
          "0 にすると CPU 数から自動検出します。",
        timezone: "タイムゾーン",
        optional_timezone_override_for_launched:
          "起動するインスタンスのタイムゾーンを任意で上書きします。",
        europe_rome: "Europe/Rome",
        user_agent: "ユーザーエージェント",
        optional_override_applied_to_new:
          "新しい管理対象インスタンスに任意で適用する上書き値。",
        custom_user_agent: "カスタムユーザーエージェント",
        applies_to_newly_launched_managed:
          "新しく起動した管理対象インスタンスに適用されます。",
      },
      securityidpisettingssection: {
        security_idpi: "セキュリティ IDPI",
        indirect_prompt_injection_controls:
          "間接プロンプトインジェクション対策は、許可するウェブサイトを制限し、抽出したコンテンツが下流の自動化に渡る前に保護を加えます。",
        idpi_is_disabled_browser_content_is_not:
          "IDPI は無効です。ブラウザーコンテンツはウェブサイト許可リストやコンテンツ保護でフィルタリングされていません。",
        the_website_whitelist_is_not_set_to_a:
          "ウェブサイトの許可リストが制限されたドメイン一覧になっていません。これは IDPI の主要な防御であり、設定すべきです。",
        the_website_whitelist_contains_which:
          "ウェブサイトの許可リストに '*' が含まれており、実質的にドメイン制限が無効です。",
        idpi_is_enforcing_a_specific_website:
          "IDPI は特定のウェブサイト許可リストとコンテンツ保護を適用しています。",
        enable: "有効化",
        custom_patterns: "カスタムパターン",
        optional_comma_separated_phrases_to:
          "疑わしいプロンプトインジェクションとして扱うフレーズ（カンマ区切り、任意）。",
        ignore_previous_instructions_exfiltrate:
          "ignore previous instructions, exfiltrate data",
      },
      timeoutssettingssection: {
        timeouts: "タイムアウト",
        runtime_timing_defaults_written_into:
          "新しい子プロセスの設定に書き込まれる実行時の既定値。既に実行中のインスタンスは現在のタイムアウトを維持します。",
      },
      browsersettingssection: {
        browser_runtime: "ブラウザーランタイム",
        these_settings_are_written_into_the:
          "これらの設定は、新しい管理対象インスタンス用に生成される子プロセスの設定に書き込まれます。",
        provider: "プロバイダー",
        browser_backend_used_for_new_managed:
          "新しい管理対象インスタンスに使用するブラウザーバックエンド。",
        chrome: "Chrome",
        cloakbrowser: "CloakBrowser",
        ghost_chrome: "Ghost + Chrome",
        browser_version: "ブラウザーのバージョン",
        version_string_used_in_generated_ua:
          "生成される UA/フィンガープリントの既定値に使うバージョン文字列。",
        browser_binary: "ブラウザーの実行ファイル",
        optional_path_override_for_the_chrome:
          "Chrome または CloakBrowser の実行ファイルのパスを任意で上書きします。",
        fingerprint_seed: "フィンガープリントのシード",
        deterministic_cloakbrowser_identity:
          "決定論的な CloakBrowser の識別シード。空欄にすると起動ごとに新しい識別情報になります。",
        fingerprint_platform: "フィンガープリントのプラットフォーム",
        native_platform_fingerprint_reported_by:
          "CloakBrowser が報告するネイティブプラットフォームのフィンガープリント。",
        auto: "自動",
        windows: "Windows",
        macos: "macOS",
        linux: "Linux",
        cloak_locale: "Cloak のロケール",
        locale_passed_as_fingerprint_locale:
          "--fingerprint-locale として渡されるロケール。",
        cloak_timezone: "Cloak のタイムゾーン",
        timezone_passed_as_fingerprint_timezone:
          "--fingerprint-timezone として渡されるタイムゾーン。",
        webrtc_ip: "WebRTC IP",
        explicit_replacement_ip_or_auto_for:
          "明示的な置換 IP、または CloakBrowser のプロキシ出口 IP 解決に auto を指定します。",
        fonts_directory: "フォントディレクトリ",
        directory_containing_target_platform:
          "CloakBrowser の対象プラットフォーム用フォントを含むディレクトリ。",
        storage_quota: "ストレージ割り当て",
        storage_quota_in_mb_passed_as:
          "MB 単位で --fingerprint-storage-quota として渡されるストレージ割り当て。",
        native_stealth_only: "ネイティブステルスのみ",
        disable_pinchtab_js_stealth_overlays:
          "PinchTab の JS ステルス上書きと自動化を隠す起動フラグを無効にします。",
        use_cloakbrowser_native_patches:
          "CloakBrowser のネイティブパッチを使用",
        extra_flags: "追加フラグ",
        additional_chrome_flags_appended_when:
          "管理対象インスタンスの起動時に追加で付与する Chrome フラグ。",
        extension_paths: "拡張機能のパス",
        comma_separated_extension_directories:
          "読み込む拡張機能ディレクトリ（カンマ区切り）。既定では、PinchTab は状態/設定ディレクトリ配下のローカル extensions/ フォルダーを使用します。ここでカスタムパスを設定すると既定値を上書きでき、空欄にすると拡張機能の読み込みを無効にします。",
      },
      dashboardsettingssection: {
        dashboard_preferences: "ダッシュボードの環境設定",
        language: "言語",
        choose_the_language_of_the_dashboard:
          "ダッシュボードの表示言語を選択します。",
        these_controls_affect_this_dashboard_ui:
          "これらの設定はこのダッシュボード画面にのみ影響します。ブラウザー内にローカル保存され、バックエンドの再起動は不要です。",
        screencast_frame_rate: "スクリーンキャストのフレームレート",
        controls_how_often_live_previews:
          "ライブプレビューが新しいフレームを要求する頻度を制御します。",
        fps: "fps",
        screencast_quality: "スクリーンキャストの品質",
        jpeg_quality_for_tab_preview_streams:
          "タブプレビュー配信の JPEG 品質。",
        screencast_width: "スクリーンキャストの幅",
        maximum_preview_width_for_live_tiles:
          "ライブタイルの最大プレビュー幅。",
        px: "px",
        memory_metrics: "メモリ指標",
        poll_every_running_instance_for_browser:
          "監視のたびに実行中の全インスタンスへブラウザーメモリを問い合わせます。Chrome プロセスツリー全体の RSS に加え、CDP 経由で開いている各タブから読み取る JS ヒープと DOM カウンターです。実測コスト: インスタンスごと、1 ティックあたり、開いているタブ 1 つにつき約 1 ミリ秒と、プロセスツリーの走査に数十ミリ秒。",
        enable: "有効化",
        polling_interval: "ポーリング間隔",
        how_frequently_the_dashboard_asks_the:
          "ダッシュボードがバックエンドに最新の指標を問い合わせる頻度。",
        s: "s",
        reasoning_output: "推論出力",
        choose_whether_the_live_agent_feed:
          "ライブのエージェントフィードにツール呼び出し、進捗更新、またはその両方を表示するかを選択します。",
        tool_calls_only: "ツール呼び出しのみ",
        progress_only: "進捗のみ",
        both: "両方",
      },
      autosolversettingssection: {
        autosolver: "AutoSolver",
        these_settings_are_saved_into_the:
          "これらの設定は PinchTab の設定ファイルに保存されます。外部プロバイダーの API キーは書き込み専用で、設定ファイルに直接記述する必要があります。",
        config_file: "設定ファイル",
        dashboard_edits_are_written_back_to:
          "ダッシュボードでの変更はこのファイルに書き戻されます。外部プロバイダーのキーは同じ設定ファイルの autoSolver.external 以下に設定してください。",
        config_path_unavailable: "設定パスを利用できません",
        enable_autosolver: "AutoSolver を有効化",
        turns_on_the_autosolver_runtime:
          "対応するチャレンジフロー向けに autosolver の実行時設定を有効にします。",
        enabled: "有効",
        disabled: "無効",
        auto_trigger: "自動トリガー",
        automatically_run_autosolver_after:
          "対応するナビゲーションおよび操作リクエストの後に autosolver を自動実行します。",
        trigger_on_navigate: "ナビゲーション時に実行",
        run_autosolver_checks_after_successful:
          "ナビゲーション呼び出しが成功した後に autosolver のチェックを実行します。",
        trigger_on_action: "操作時に実行",
        run_autosolver_checks_after_successful_2:
          "操作呼び出しが成功した後に autosolver のチェックを実行します。",
        max_attempts: "最大試行回数",
        maximum_autosolver_retries_before_the:
          "パイプラインが諦めるまでの autosolver の最大再試行回数。",
        solver_timeout_sec: "ソルバーのタイムアウト（秒）",
        per_solver_timeout_for_each_attempt:
          "各試行におけるソルバーごとのタイムアウト。",
        retry_base_delay_ms: "再試行の基本遅延（ミリ秒）",
        base_retry_backoff_delay_between:
          "autosolver の試行間における再試行バックオフの基本遅延。",
        retry_max_delay_ms: "再試行の最大遅延（ミリ秒）",
        maximum_retry_backoff_delay_cap_between:
          "autosolver の試行間における再試行バックオフ遅延の上限。",
        solvers: "ソルバー",
        comma_separated_ordered_list_of_solver:
          "試行するソルバー名の順序付きリスト（カンマ区切り）。実行時に利用可能な名前は GET /solvers または GET /config/autosolver で確認できます。",
        llm_provider: "LLM プロバイダー",
        optional_provider_name_used_when_llm:
          "LLM フォールバックを有効にしたときに使う任意のプロバイダー名。",
        llm_fallback: "LLM フォールバック",
        use_an_llm_as_the_last_resort_after:
          "登録済みのソルバーがすべて失敗した後、最後の手段として LLM を使用します。",
        external_provider_keys: "外部プロバイダーのキー",
        capsolver_and_2captcha_credentials_are:
          "Capsolver と 2Captcha の認証情報はダッシュボードに表示されず、設定ファイルで管理する必要があります。これらのプロバイダーは、キーが設定されている場合にのみ実行時のソルバー一覧に現れます。",
        open_the_config_file_above_and_set:
          "上記の設定ファイルを開き、次を設定してください:",
        autosolver_external_capsolverkey: "autoSolver.external.capsolverKey",
        autosolver_external_twocaptchakey: "autoSolver.external.twoCaptchaKey",
        there_the_dashboard_does_not_display_or:
          "。ダッシュボードはこれらの値を表示も編集もせず、環境変数による上書きもありません。",
      },
    },
    monitoring: {
      monitoringemptystate: {
        starting_default_instance: "既定のインスタンスを起動しています…",
        start_default_instance: "既定のインスタンスを起動",
        open_default_profile: "既定のプロファイルを開く",
        no_active_instances: "アクティブなインスタンスはありません",
        pinchtab_expected_a_default_instance:
          "PinchTab は既定のインスタンスを想定していましたが、利用可能になりませんでした。手動で起動するか、プロファイルを確認してください。",
        start_the_default_instance_or_open:
          "既定のインスタンスを起動するか、[プロファイル] を開いて別のプロファイルを起動してください。",
        waiting_for_default_profile:
          "PinchTab は既定のプロファイルが起動するのを待っています。自動的に再確認します（残り {{count}} 回）。",
      },
      defaultinstancemodal: {
        start_default_instance: "既定のインスタンスを起動",
        cancel: "キャンセル",
        start_headed: "ヘッドありで起動",
        start_headless: "ヘッドレスで起動",
        choose_how_to_launch_the_default:
          "このセッションで既定のプロファイルを起動する方法を選択します。",
        configured_default_mode: "設定済みの既定モード:",
      },
    },
    profilespage: {
      loading_profiles: "プロファイルを読み込んでいます…",
      no_profiles_yet: "プロファイルはまだありません",
      click_new_profile_to_create_one:
        "[新しいプロファイル] をクリックして作成してください",
      new_profile: "新しいプロファイル",
      profiles: "プロファイル",
      total: "合計",
      no_account: "アカウントなし",
      profile_deleted: "プロファイル「{{name}}」を削除しました",
    },
    settingspage: {
      confirm_admin_action: "管理者操作の確認",
      cancel: "キャンセル",
      verifying: "確認しています…",
      continue: "続行",
      re_enter_the_api_token_to_save_backend:
        "バックエンド設定の変更を保存するには API トークンを再入力してください。昇格したセッションはしばらく有効なので、管理者操作のたびに繰り返す必要はありません。",
      api_token: "API トークン",
      paste_api_token: "API トークンを貼り付け",
      restart_required: "再起動が必要",
      reset: "リセット",
      saving: "保存しています…",
      save: "保存",
      restart_needed_for: "再起動が必要な項目:",
      loading_settings: "設定を読み込んでいます…",
      settings_eyebrow: "設定",
    },
  },
  activities: {
    activityexplorer: {
      agent: "エージェント",
      all: "すべて",
      session: "セッション",
      request_timeline: "リクエストのタイムライン",
      activity: "アクティビティ",
      failed_to_load_activity: "アクティビティの読み込みに失敗しました",
    },
    agentstreampanel: {
      no_matching_activity: "一致するアクティビティはありません",
      adjust_the_filters_or_generate_some:
        "フィルターを調整するか、CLI、MCP、ダッシュボードからトラフィックを発生させてください。",
    },
    streamrow: {
      ms: "ms",
      navigate_to_page: "ページへ移動",
      capture_page_snapshot: "ページスナップショットを取得",
      open_screencast_stream: "スクリーンキャスト配信を開く",
      extract_text_from_page: "ページからテキストを抽出",
      click_on_page: "ページ上でクリック",
      double_click_on_page: "ページ上でダブルクリック",
      type_into_page: "ページに入力",
      hover_on_page: "ページ上でホバー",
      fill_field: "フィールドを入力",
      select_option: "オプションを選択",
      scroll_page: "ページをスクロール",
      press_key: "キーを押す",
      wait_for_condition: "条件を待機",
      evaluate_javascript: "JavaScript を実行",
      upload_file: "ファイルをアップロード",
      download_file: "ファイルをダウンロード",
      on_tab: " （タブ: ",
      navigate_to_url: "{{url}} に移動",
      click_ref: "「{{ref}}」をクリック",
      double_click_ref: "「{{ref}}」をダブルクリック",
      type_into_ref: "「{{ref}}」に入力",
      hover_ref: "「{{ref}}」にホバー",
      fill_ref: "「{{ref}}」を入力",
      select_ref: "「{{ref}}」を選択",
      press_key_on_ref: "「{{ref}}」でキーを押す",
    },
    activityline: {
      progress: "進行中",
      agent_reported_progress: "エージェントが進捗を報告",
      ms: "ms",
    },
    activityitemline: {
      tab_paused_for_human_handoff: "タブは手動対応のため一時停止中",
      tab_is_paused_for_human_handoff: "タブは手動対応のため一時停止中",
      resume_automation_after_manual:
        "手動でチャレンジを解決した後に自動化を再開",
      resuming: "再開しています…",
      resolve_challenge: "チャレンジを解決",
      browser_was_escalated: "ブラウザーが昇格されました",
      escalated: "昇格済み",
      navigate_to_page: "ページへ移動",
      capture_page_snapshot: "ページスナップショットを取得",
      open_screencast_stream: "スクリーンキャスト配信を開く",
      extract_text_from_page: "ページからテキストを抽出",
      take_screenshot: "スクリーンショットを撮る",
      export_page_as_pdf: "ページを PDF として書き出す",
      click_on_page: "ページ上でクリック",
      double_click_on_page: "ページ上でダブルクリック",
      type_into_page: "ページに入力",
      hover_on_page: "ページ上でホバー",
      fill_field: "フィールドを入力",
      select_option: "オプションを選択",
      scroll_page: "ページをスクロール",
      press_key: "キーを押す",
      wait_for_condition: "条件を待機",
      evaluate_javascript: "JavaScript を実行",
      upload_file: "ファイルをアップロード",
      download_file: "ファイルをダウンロード",
      resume_failed: "再開に失敗しました",
      navigate_to_url: "{{url}} に移動",
      click_ref: "「{{ref}}」をクリック",
      double_click_ref: "「{{ref}}」をダブルクリック",
      type_into_ref: "「{{ref}}」に入力",
      hover_ref: "「{{ref}}」にホバー",
      fill_ref: "「{{ref}}」を入力",
      select_ref: "「{{ref}}」を選択",
      press_key_on_ref: "「{{ref}}」でキーを押す",
    },
    activitytimeline: {
      timeline: "タイムライン",
      recent_events: "最近のイベント",
      no_matching_activity: "一致するアクティビティはありません",
      adjust_the_filters_or_generate_some:
        "フィルターを調整するか、CLI、MCP、ダッシュボードからトラフィックを発生させてください。",
    },
    activefilterbar: {
      clear_filters: "フィルターを消去",
    },
    activityfiltermenu: {
      "200": "200",
      "3600": "3600",
      profile: "プロファイル",
      tab: "タブ",
      agent: "エージェント",
      action: "操作",
      advanced_filters: "詳細フィルター",
      hide: "非表示",
      show: "表示",
      instance: "インスタンス",
      path_prefix: "パスの前方一致",
      tabs_or_instances: "/tabs/ or /instances/",
      age_seconds: "経過時間（秒）",
      limit: "上限",
      clear: "消去",
      search: "検索",
      any_profile: "すべてのプロファイル",
      any_tab: "すべてのタブ",
      any_agent: "すべてのエージェント",
      any_action: "すべての操作",
      any_instance: "すべてのインスタンス",
    },
    agentworkspacesidebar: {
      agents: "エージェント",
      activities: "アクティビティ",
      no_agent_activity_observed_yet:
        "エージェントのアクティビティはまだ観測されていません",
      all_agents: "すべてのエージェント",
    },
    copyidpill: {
      copied: "コピーしました",
      copy_tab_id: "タブ ID {{id}} をコピー",
    },
    hooks: {
      useactivitydata: {
        failed_to_load_activity: "アクティビティの読み込みに失敗しました",
        failed_to_load_agent_activity:
          "エージェントのアクティビティの読み込みに失敗しました",
      },
    },
  },
  settings: {
    sections: {
      dashboard: {
        dashboard: "ダッシュボード",
        local_monitoring_and_screencast:
          "ローカルの監視とスクリーンキャストの設定。",
      },
      defaults: {
        instance_defaults: "インスタンスの既定値",
        how_new_managed_browser_instances_launch:
          "新しい管理対象ブラウザーインスタンスの起動方法。",
      },
      orchestration: {
        orchestration: "オーケストレーション",
        routing_strategy_port_range_and:
          "ルーティング戦略、ポート範囲、割り当てポリシー。",
      },
      security: {
        security: "セキュリティ",
        sensitive_endpoint_gates_and_access:
          "機密エンドポイントのゲートとアクセス制御。",
      },
      "security-idpi": {
        security_idpi: "セキュリティ IDPI",
        indirect_prompt_injection_website_and:
          "間接プロンプトインジェクションのウェブサイトとコンテンツの防御。",
      },
      profiles: {
        profiles: "プロファイル",
        shared_profile_storage_and_default:
          "共有プロファイルの保存と既定プロファイルの挙動。",
      },
      network: {
        network_attach: "ネットワークと接続",
        server_binding_auth_and_attach_policy:
          "サーバーのバインド、認証、接続ポリシー。",
      },
      browser: {
        browser_runtime: "ブラウザーランタイム",
        chrome_binary_version_flags_and:
          "Chrome の実行ファイル、バージョン、フラグ、拡張機能。",
      },
      timeouts: {
        timeouts: "タイムアウト",
        action_navigation_shutdown_and_wait:
          "操作、ナビゲーション、シャットダウン、待機のタイミング。",
      },
      autosolver: {
        autosolver: "AutoSolver",
        challenge_solving_behavior_and_config:
          "チャレンジ解決の挙動と、設定ファイルを基盤とするプロバイダー。",
      },
      observability: {
        observability: "可観測性",
        activity_logging_and_retention_settings:
          "アクティビティログと保存期間の設定。",
      },
    },
    security: {
      endpoints: {
        allowEvaluate: {
          allow_evaluate: "evaluate を許可",
        },
        allowMacro: {
          allow_macro: "macro を許可",
        },
        allowScreencast: {
          allow_screencast: "スクリーンキャストを許可",
        },
        allowDownload: {
          allow_download: "ダウンロードを許可",
        },
        allowCookies: {
          allow_cookies: "Cookie を許可",
        },
        allowUpload: {
          allow_upload: "アップロードを許可",
        },
        allowNetworkIntercept: {
          allow_network_interception: "ネットワーク傍受を許可",
          lets_agents_install_rules_to_abort_or:
            "エージェントがタブ上の HTTP リクエストを中止または満たす（モックする）ルールをインストールできるようにします。有効にすると、下の [許可するウェブサイト] にあるホストでは応答の偽造が禁止され、それ以外では許可されます。エージェントに使用を許可したホスト（例: あなたの銀行）で応答を偽造することは最もリスクの高い結果です — そのため、保護されるのは許可リストのホストであり、その逆ではありません。CORS を壊さないよう、OPTIONS プリフライトは既定でスキップされます。",
        },
        allowFileScheme: {
          allow_file_navigation: "file:// ナビゲーションを許可",
          lets_agents_open_local_file_urls_a_file:
            "エージェントがローカルの file:// URL を開けるようにします。file:// URL にはホストがないため、下の [許可するウェブサイト] の制限を受けず、SSRF/プライベート IP 保護も回避します — 有効にすると、サーバープロセスが読める任意のローカルファイルへの読み取り権限（スナップショット/スクリーンショット/スクレイプ経由）を与えることになります。厳格モードの許可リストが有効な間はブロックされたままです。信頼できるシングルテナントのマシンでのみ有効にしてください。",
        },
      },
      idpi: {
        enabled: {
          enable_idpi: "IDPI を有効化",
          turn_on_indirect_prompt_injection:
            "間接プロンプトインジェクションの防御を有効にします。",
        },
        strictMode: {
          strict_mode: "厳格モード",
          block_disallowed_domains_and_suspicious:
            "警告だけでなく、許可されていないドメインと疑わしいコンテンツをブロックします。",
        },
        scanContent: {
          scan_content: "コンテンツをスキャン",
          inspect_extracted_text_and_snapshots:
            "抽出したテキストとスナップショットにプロンプトインジェクションのパターンがないか検査します。",
        },
        wrapContent: {
          wrap_content: "コンテンツをラップ",
          mark_returned_page_text_as_untrusted:
            "返されたページテキストを、下流の利用者向けに信頼できないコンテンツとして印付けします。",
        },
      },
    },
    defaults: {
      booleans: {
        blockImages: {
          block_images: "画像をブロック",
        },
        blockMedia: {
          block_media: "メディアをブロック",
        },
        blockAds: {
          block_ads: "広告をブロック",
        },
        noAnimations: {
          disable_css_animations: "CSS アニメーションを無効化",
        },
        noRestore: {
          skip_session_restore: "セッションの復元をスキップ",
        },
      },
      timeouts: {
        actionSec: {
          action_timeout: "操作のタイムアウト",
          maximum_time_for_action_requests: "操作リクエストの最大時間。",
        },
        navigateSec: {
          navigate_timeout: "ナビゲーションのタイムアウト",
          maximum_time_for_navigation_requests:
            "ナビゲーションリクエストの最大時間。",
        },
        shutdownSec: {
          shutdown_timeout: "シャットダウンのタイムアウト",
          grace_period_before_force_closing_a:
            "子プロセスを強制終了するまでの猶予時間。",
        },
        waitNavMs: {
          wait_after_navigation_delay: "ナビゲーション後の待機遅延",
          post_navigation_stabilization_delay_in:
            "ナビゲーション後の安定化待機時間（ミリ秒）。",
        },
      },
    },
    notices: {
      backend_config_saved_dynamic_changes:
        "バックエンド設定を保存しました。動的な変更は可能な範囲で適用されました。",
      backend_config_saved_dynamic_changes_2:
        "バックエンド設定を保存しました。動的な変更は可能な範囲で適用されました。サーバー単位の変更には再起動を推奨します。",
      preferencesSaved: "ダッシュボードの設定をこのブラウザーに保存しました。",
    },
    errors: {
      loadFailed: "設定の読み込みに失敗しました",
      saveFailed: "設定の保存に失敗しました",
      tokenVerifyFailed: "API トークンの確認に失敗しました",
    },
  },
  monitoring: {
    errors: {
      startInstanceFailed: "インスタンスの起動に失敗しました",
    },
  },
  errors: {
    requestFailed: "リクエストに失敗しました",
  },
  auth: {
    insecureTransport:
      "ダッシュボードのセッションが安全でない HTTP で動作しています。より強固なセッション保護のために HTTPS または localhost を使用してください。",
  },
};

export default messages;
