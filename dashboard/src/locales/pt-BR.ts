import type { Messages } from "../i18n/messages";

const messages: Messages = {
  app: {
    name: "PinchTab",
    checking_server_authentication: "Verificando a autenticação do servidor…",
    pinchtab_is_restarting_or_unreachable:
      "O PinchTab está reiniciando ou está inacessível.",
    automatic_retries_stopped:
      " As tentativas automáticas foram interrompidas.",
    retry_now: "Tentar novamente agora",
    refresh: "Atualizar",
  },
  profiles: {
    profiletoolbarbuttons: {
      copy_id: "Copiar ID",
      delete: "Excluir",
      save: "Salvar",
      stop: "Parar",
      start: "Iniciar",
      delete_profile: "Excluir perfil",
      cancel: "Cancelar",
      delete_profile_2: 'Excluir o perfil "',
      every_cookie_login_and_session_stored:
        '"? Todos os cookies, logins e sessões armazenados nele serão perdidos permanentemente. Não há como desfazer.',
      copied: "Copiado",
      failed: "Falhou",
    },
    profilemetainfopanel: {
      profile_panel: "Painel do perfil",
      status: "Status",
      port: "Porta",
      browser: "Navegador",
      size: "Tamanho",
      account: "Conta",
      identity: "Identidade",
      connection: "Conexão",
      cdp_attached: "CDP conectado",
      cdp_url: "URL do CDP",
      path: "Caminho",
      not_found: " (não encontrado)",
      attached_via_cdp: "Conectado via CDP",
      headless: "Sem interface",
      headed: "Com interface",
    },
    profilecard: {
      error: "erro",
      stopped: "parado",
      size: "Tamanho",
      account: "Conta",
      use_when: "Usar quando",
      details: "Detalhes",
      stop: "Parar",
      start: "Iniciar",
    },
    profiledetailspanel: {
      select_a_profile_to_inspect_its:
        "Selecione um perfil para inspecionar sua instância, abas ao vivo e registros.",
      live: "Ao vivo",
      tabs: "Abas",
      logs: "Registros",
      no_tabs_open: "Nenhuma aba aberta.",
      instance_not_running: "A instância não está em execução.",
      profile_name: "Perfil: {{name}}",
    },
    profilebasicinfopanel: {
      name: "Nome",
      use_this_profile_when: "Usar este perfil quando",
    },
    profileliveviewpanel: {
      no_tabs_open: "Nenhuma aba aberta",
      instance_not_running_start_the_profile:
        "A instância não está em execução. Inicie o perfil para ver a visualização ao vivo.",
    },
    instancelogspanel: {
      loading_logs: "Carregando registros…",
      no_instance_logs_available: "Nenhum registro de instância disponível.",
    },
    groups: {
      user: "Perfis",
      temporary: "Temporários",
      quarantined: "Em quarentena",
    },
  },
  components: {
    atoms: {
      debugpanel: {
        debug: "🐛 Depuração",
        debug_panel: "Painel de depuração",
        instances: "Instâncias:",
      },
      emptystate: {
        dashboard: "Painel",
      },
      modal: {
        dashboard: "Painel",
        close: "Fechar",
      },
      errorboundary: {
        something_went_wrong: "⚠️ Algo deu errado",
        unknown_error: "Erro desconhecido",
        try_again: "Tentar novamente",
      },
    },
    screencast: {
      screencaststatusbar: {
        decrease_fps: "Diminuir os FPS",
        increase_fps: "Aumentar os FPS",
        take_full_quality_screenshot_png:
          "Capturar tela na qualidade máxima (PNG)",
        download_as_pdf: "Baixar como PDF",
        fps: "FPS (",
      },
      screencasttile: {
        tab_preview: "Pré-visualização da aba",
        connection_lost: "Conexão perdida",
        show_static_preview: "Mostrar pré-visualização estática",
        retry_connection: "Tentar conexão novamente",
      },
      framedecode: {
        failed_to_decode_screencast_frame:
          "Falha ao decodificar o quadro da transmissão",
      },
    },
    molecules: {
      createprofilemodal: {
        new_profile: "📁 Novo perfil",
        cancel: "Cancelar",
        create: "Criar",
        name: "Nome",
        e_g_personal_work_scraping: "ex.: pessoal, trabalho, raspagem",
        use_this_profile_when_helps_agents_pick:
          "Usar este perfil quando (ajuda os agentes a escolher o perfil certo)",
        e_g_i_need_to_access_gmail_for_the_team:
          "ex.: Preciso acessar o Gmail com a conta da equipe",
        import_from_optional_chrome_user_data:
          "Importar de (opcional — caminho dos dados do usuário do Chrome)",
        e_g_users_you_library_application:
          "ex.: /Users/you/Library/Application Support/Google/Chrome",
      },
      navbar: {
        pinchtab: "PinchTab",
        logout: "Sair",
        refresh_r: "Atualizar (⌘R)",
        toggle_menu: "Alternar menu",
        monitoring: "Monitoramento",
        agents: "Agentes",
        profiles: "Perfis",
        settings: "Configurações",
      },
      instancestats: {
        instance: "Instância",
        status: "Status",
        uptime: "Tempo ativo",
        port: "Porta",
        crashes: "Falhas",
        browsing: "Navegação",
        tabs: "Abas",
        domains: "Domínios",
        resources: "Recursos",
        memory: "Memória",
        renderers: "Processos de renderização",
        pages: "Páginas",
        js_heap: "Heap de JS",
        dom_nodes: "Nós DOM",
        listeners: "Listeners",
        frames: "Frames",
        unreadable: "Ilegíveis",
        just_now: "agora mesmo",
        tabs_open_before_it_were_lost: "as abas abertas antes foram perdidas",
        rss_across_the_browser_process_tree:
          "RSS em toda a árvore de processos do navegador",
        tabs_that_did_not_answer_not_counted:
          "abas que não responderam (não contabilizadas)",
        last_crash:
          "última: {{reason}} às {{time}} · as abas abertas antes foram perdidas",
        heap_summary_one: "usado / total, somado em {{count}} aba",
        heap_summary_other: "usado / total, somado em {{count}} abas",
        document_count_one: "{{count}} documento",
        document_count_other: "{{count}} documentos",
      },
      agentitem: {
        tab_paused_for_human_handoff: "aba pausada para intervenção humana",
        just_now: "agora mesmo",
        session_at: "Sessão {{time}}",
        session_range: "Sessão {{start}}–{{end}}",
      },
      startinstancemodal: {
        start_profile: "🖥️ Iniciar perfil",
        cancel: "Cancelar",
        start: "Iniciar",
        port: "Porta",
        auto_select_from_configured_range:
          "Selecionar automaticamente do intervalo configurado",
        leave_blank_to_auto_select_a_free_port:
          "Deixe em branco para selecionar automaticamente uma porta livre do intervalo configurado.",
        headless_best_for_docker_vps: "Sem interface (melhor para Docker/VPS)",
        browser: "Navegador",
        server_default: "Padrão do servidor",
        chrome: "Chrome",
        cloakbrowser: "CloakBrowser",
        ghost_chrome: "Ghost + Chrome",
        direct_launch_command_backup:
          "Comando de inicialização direta (reserva)",
        copy_command: "Copiar comando",
        replace: "Substituir",
        pinchtab_config_token: "pinchtab config token",
        when_auth_is_enabled: "quando a autenticação está ativada.",
        with_the_value_from: "com o valor de",
        port_must_be_a_whole_number_between_1:
          "A porta deve ser um número inteiro entre 1 e 65535.",
        profile_id_missing: "ID do perfil ausente",
        failed_to_launch_instance: "Falha ao iniciar a instância",
        copied: "Copiado!",
        failed_to_copy: "Falha ao copiar",
      },
      handoffnotifications: {
        human_intervention_required: "Intervenção humana necessária",
        dismiss_notification: "Dispensar notificação",
        reason: "Motivo:",
        resume: "Retomar",
      },
      serverstatusbadge: {
        expand_instance_list: "Expandir a lista de instâncias",
        collapse_instance_list: "Recolher a lista de instâncias",
        tab: "aba",
        restart_required: "Reinicialização necessária",
        server_running: "Servidor em execução",
        restart_required_2: "Reinicialização necessária",
        running: "Em execução",
        server_running_no_instances: "Servidor em execução, sem instâncias",
      },
      serversummary: {
        settings: "Configurações",
        server_information: "Informações do servidor",
        technical_details_for_current_session:
          "Detalhes técnicos da sessão atual",
        version: "Versão",
        uptime: "Tempo ativo",
      },
      tabschart: {
        monitoring: "Monitoramento",
        live_telemetry: "Telemetria ao vivo",
        tabs: "Abas",
        memory: "Memória",
        heap: "Heap",
        server_heap: "Heap do servidor",
        collecting_data: "Coletando dados…",
        waiting_for_more_data: "Aguardando mais dados…",
      },
      idbadge: {
        click_to_copy_full_id: "Clique para copiar o ID completo: {{id}}",
      },
    },
  },
  tabs: {
    tabbar: {
      tab_paused_for_human_handoff: "aba pausada para intervenção humana",
      tab_is_paused_for_human_handoff:
        "A aba está pausada para intervenção humana",
      untitled: "Sem título",
      unpin_and_follow_the_focused_tab_again:
        "Desafixar e voltar a seguir a aba em foco",
      pin_this_tab_selection: "Fixar esta seleção de aba",
      tabs: "Abas",
      monitoring: "Monitoramento",
      pin_tab: "Fixar {{title}}",
      unpin_tab_and_follow_focus: "Desafixar {{title}} e seguir o foco",
      close_tab: "Fechar {{title}}",
      tabs_new: "Abas ({{count}} novas)",
    },
    selectedtabtitle: {
      untitled: "Sem título",
    },
    instancetabspanel: {
      chart_crashed_check_console: "O gráfico travou — verifique o console",
      no_tabs_open: "Nenhuma aba aberta",
      unknown: "Desconhecido",
    },
    tabitem: {
      untitled: "Sem título",
    },
    consolepanel: {
      loading_console_logs: "Carregando registros do console…",
      no_console_logs_yet: "Ainda não há registros do console",
    },
    errorspanel: {
      loading_errors: "Carregando erros…",
      no_errors_yet: "Ainda não há erros",
    },
    selectedtabpanel: {
      select_a_tab_to_view_details: "Selecione uma aba para ver os detalhes",
      no_instance_id_provided_for_live_view:
        "Nenhum ID de instância informado para a visualização ao vivo.",
      actions: "Ações",
      live: "Ao vivo",
      console: "Console",
      errors: "Erros",
    },
  },
  instances: {
    instancelistitem: {
      tabs: "abas",
      open_profile: "Abrir perfil",
      restart: "Reiniciar",
      stop: "Parar",
    },
    instancecard: {
      headless: "Sem interface",
      headed: "Com interface",
      uptime: "Tempo ativo",
      open_dashboard: "Abrir painel",
      stop: "Parar",
    },
  },
  pages: {
    monitoringpage: {
      instances: "Instâncias",
      collapse_sidebar: "Recolher a barra lateral",
    },
    loginpage: {
      authentication: "Autenticação",
      enter_api_token: "Insira o token de API",
      this_pinchtab_server_requires_a_bearer:
        "Este servidor PinchTab exige um token de portador antes que o painel possa carregar rotas e APIs protegidas.",
      run: "Execute",
      pinchtab_config_token: "pinchtab config token",
      to_copy_the_token_to_your_clipboard:
        "para copiar o token para a área de transferência.",
      paste_bearer_token: "Cole o token de portador",
      authorizing: "Autorizando…",
      continue: "Continuar",
      authentication_failed: "Falha na autenticação",
    },
    settings: {
      orchestrationsettingssection: {
        orchestration: "Orquestração",
        port_range_and_allocation_policy_can_be:
          "O intervalo de portas e a política de alocação são aplicados imediatamente às próximas inicializações. Mudanças de estratégia e de política de reinício exigem reiniciar o painel, porque as rotas de estratégia e o estado do ciclo de vida são registrados na inicialização.",
        strategy: "Estratégia",
        controls_instance_lifecycle_and_how:
          "Controla o ciclo de vida das instâncias e como as rotas abreviadas são encaminhadas.",
        always_on: "Sempre ativo",
        simple: "Simples",
        explicit: "Explícito",
        simple_autorestart: "Reinício automático simples",
        no_instance_hub: "Sem instância (hub)",
        launches_a_default_instance_at_boot_and:
          "Inicia uma instância padrão na inicialização e a relança em caso de falha.",
        launches_one_instance_on_first_request:
          "Inicia uma instância na primeira requisição. Sem reinício automático.",
        all_instances_managed_via_api_no:
          "Todas as instâncias são gerenciadas via API. Sem inicializações automáticas.",
        launches_on_first_request_and:
          "Inicia na primeira requisição e relança em caso de falha.",
        no_local_chrome_processes_acts_as_a_hub:
          "Nenhum processo local do Chrome. Atua apenas como hub para pontes remotas.",
        allocation_policy: "Política de alocação",
        determines_how_running_instances_are:
          "Determina como as instâncias em execução são escolhidas para requisições abreviadas.",
        first_available: "Primeira disponível",
        round_robin: "Rodízio",
        random: "Aleatória",
        instance_port_start: "Porta inicial da instância",
        lower_bound_for_auto_allocated_instance:
          "Limite inferior das portas de instância alocadas automaticamente.",
        instance_port_end: "Porta final da instância",
        upper_bound_for_auto_allocated_instance:
          "Limite superior das portas de instância alocadas automaticamente.",
        max_restarts: "Máximo de reinícios",
        maximum_restart_attempts_use_1_for:
          "Número máximo de tentativas de reinício. Use -1 para ilimitado e 0 para não reiniciar.",
        initial_backoff: "Espera inicial",
        delay_in_seconds_before_the_first:
          "Atraso em segundos antes da primeira tentativa de reinício.",
        max_backoff: "Espera máxima",
        upper_bound_in_seconds_for_exponential:
          "Limite superior em segundos para a espera exponencial entre reinícios.",
        stable_after: "Estável após",
        seconds_the_instance_must_stay_healthy:
          "Segundos que a instância precisa permanecer saudável antes de o contador de reinícios ser zerado.",
      },
      securitysettingssection: {
        security: "Segurança",
        these_controls_define_what_risky:
          "Estes controles definem quais recursos de risco o PinchTab expõe.",
        one_or_more_sensitive_endpoint_families:
          "Uma ou mais famílias de endpoints sensíveis estão ativadas. Recursos como execução de scripts, downloads, uploads e captura ao vivo podem expor capacidades de alto risco. Ative-os apenas em ambientes confiáveis. Você é responsável por proteger o acesso à rede, a autenticação e o uso posterior.",
        these_endpoint_families_can_expose_high:
          "Estas famílias de endpoints podem expor capacidades de alto risco quando ativadas. Ative-as apenas em ambientes confiáveis e somente se você assumir a responsabilidade pelo acesso à rede, pela autenticação e pelo uso posterior.",
        controls_whether_the_corresponding:
          "Controla se a família de endpoints correspondente está ativada.",
        enable: "Ativar",
        allowed_websites: "Sites permitidos",
        comma_separated_domain_allowlist_for:
          "Lista de domínios permitidos para conteúdo web, separados por vírgulas. Use hosts exatos ou padrões como *.example.com.",
        "127_0_0_1_localhost_1": "127.0.0.1, localhost, ::1",
        keep_this_list_narrow_empty_or_wildcard:
          "Mantenha esta lista restrita. Entradas vazias ou com curinga enfraquecem a principal barreira do IDPI. Permitir sites não locais ou não confiáveis amplia a superfície de ataque do navegador mesmo com o IDPI ativado.",
        trusted_proxy_cidrs: "CIDRs de proxy confiáveis",
        comma_separated_cidrs_or_ips_whose:
          "CIDRs ou IPs separados por vírgulas cujo IP remoto informado pelo navegador deve ser confiável durante a navegação. Use apenas para proxies internos conhecidos.",
        "10_1_2_3_10_0_0_0_8": "10.1.2.3, 10.0.0.0/8",
        this_weakens_navigation_ip_checks_for:
          "Isso enfraquece as verificações de IP na navegação para os IPs remotos correspondentes. Prefira endereços de proxy específicos a faixas privadas amplas. Entradas apenas com IP são tratadas como um único host.",
        trusted_resolve_cidrs: "CIDRs de resolução confiáveis",
        comma_separated_cidrs_or_ips_that_a:
          "CIDRs ou IPs separados por vírgulas para os quais um nome de host pode resolver durante a verificação prévia de navegação. Destinado a configurações internas de DNS ou proxy.",
        "198_18_0_0_15_10_1_2_3": "198.18.0.0/15, 10.1.2.3",
        this_allows_hostnames_to_resolve_to_non:
          "Isso permite que nomes de host resolvam para IPs não públicos. Mantenha a lista restrita e inclua apenas infraestrutura que você controla. Entradas apenas com IP são tratadas como um único host.",
      },
      settingssharedcomponents: {
        settings: "Configurações",
      },
      networksettingssection: {
        network_attach: "Rede e conexão",
        port_and_bind_changes_require_a_restart:
          "Mudanças de porta e de endereço de escuta exigem reinicialização. O gerenciamento do token de API é feito fora do painel.",
        server_port: "Porta do servidor",
        http_port_for_the_dashboard_process:
          "Porta HTTP do processo do painel.",
        bind_address: "Endereço de escuta",
        network_interface_the_dashboard_process:
          "Interface de rede à qual o processo do painel se vincula. Manter 127.0.0.1 ou localhost limita o acesso direto à máquina local.",
        a_non_loopback_bind_is_a_documented_non:
          "Vincular a um endereço que não seja de loopback é uma mudança de configuração documentada, não padrão e que reduz a segurança. Pode expor o servidor além da máquina local, a menos que outra fronteira de rede ainda restrinja o acesso. Mantenha um token configurado e revise explicitamente o comportamento do proxy ou da publicação de portas.",
        loopback_bind_keeps_direct_server:
          "A vinculação de loopback mantém o acesso direto ao servidor local. Mudar para",
        or_another_non_local_address_widens_the:
          "ou outro endereço não local amplia a fronteira de confiança.",
        api_token: "Token de API",
        bearer_token_required_by_authenticated:
          "Token de portador exigido por requisições autenticadas quando definido. O painel nunca o retorna nem o gerencia.",
        no_token_configured_set_one_through_the:
          "Nenhum token configurado. Defina um pela CLI ou pelo arquivo de configuração.",
        token_configured_manage_rotation:
          "Token configurado. Gerencie a rotação pela CLI ou pelo arquivo de configuração; o servidor nunca retorna o valor atual. Execute",
        pinchtab_config_token: "pinchtab config token",
        to_copy_it_to_your_clipboard:
          "para copiá-lo para a área de transferência.",
        no_api_token_is_set_anyone_who_can:
          "Nenhum token de API está definido. Qualquer pessoa que consiga alcançar este servidor pode acessar os endpoints expostos. Mantenha-o apenas em redes locais confiáveis ou configure um token forte pela CLI ou pelo arquivo de configuração. Proteger o acesso é sua responsabilidade.",
        state_directory: "Diretório de estado",
        base_state_path_used_by_managed_child:
          "Caminho base de estado usado pelas instâncias filhas gerenciadas.",
        trust_proxy_headers: "Confiar nos cabeçalhos de proxy",
        trust_x_forwarded_proto_x_forwarded:
          "Confiar nos cabeçalhos X-Forwarded-Proto, X-Forwarded-Host e Forwarded nas verificações de origem. Ative apenas quando o PinchTab rodar atrás de um proxy reverso confiável (ex.: Caddy, nginx).",
        enabled: "Ativado",
        disabled: "Desativado",
        cookie_secure_mode: "Modo Secure dos cookies",
        controls_whether_dashboard_session:
          "Controla se os cookies de sessão do painel exigem HTTPS. Auto ativa o Secure apenas em HTTPS. Forçar Secure é adequado quando o TLS está na frente do PinchTab.",
        auto: "Automático",
        force_secure: "Forçar Secure",
        force_insecure: "Forçar sem segurança",
        force_secure_blocks_dashboard_login_on:
          "Forçar Secure bloqueia o login no painel em HTTP simples. Use quando o PinchTab for servido por HTTPS diretamente ou atrás de um proxy confiável. Se o TLS terminar na frente do PinchTab, ative",
        trustproxyheaders: "trustProxyHeaders",
        so_forwarded_https_requests_are:
          "para que requisições HTTPS encaminhadas sejam reconhecidas.",
        persist_dashboard_sessions: "Persistir sessões do painel",
        keep_dashboard_login_sessions_across:
          "Mantém as sessões de login do painel entre reinicializações do servidor. Desative se quiser que cada reinicialização force um novo login.",
        session_idle_timeout: "Tempo limite de inatividade da sessão",
        how_long_an_unused_dashboard_session:
          "Por quanto tempo uma sessão do painel sem uso continua válida. Armazenado em segundos na configuração.",
        session_max_lifetime: "Duração máxima da sessão",
        absolute_lifetime_for_a_dashboard:
          "Duração absoluta de uma sessão do painel antes de precisar ser recriada, mesmo que esteja ativa.",
        require_elevation_for_config_saves:
          "Exigir elevação para salvar a configuração",
        ask_for_api_token_re_entry_before:
          "Pede a redigitação do token de API antes de salvar mudanças na configuração do backend. Desativado por padrão.",
        allow_attach: "Permitir conexão",
        permit_attaching_pinchtab_to_externally:
          "Permite conectar o PinchTab a sessões do Chrome gerenciadas externamente.",
        enable: "Ativar",
        allowed_attach_hosts: "Hosts de conexão permitidos",
        comma_separated_host_allowlist_for:
          'Lista de hosts permitidos para requisições de conexão, separados por vírgulas. Inclua apenas hosts que você controla e confia. Usar "*" desativa a lista de hosts permitidos.',
        allowhosts: 'allowHosts: ["*"]',
        is_a_documented_non_default_security:
          "é uma substituição documentada, não padrão e que reduz a segurança. Desativa totalmente a lista de hosts permitidos e permite requisições de conexão remota para qualquer host alcançável com um esquema permitido. Use apenas em redes isoladas e controladas pelo operador.",
        hosts_in_this_allowlist_may_be_used_for:
          "Os hosts desta lista podem ser usados para requisições de conexão remota. Entradas amplas ou não confiáveis ampliam a fronteira de confiança e podem expor sessões externas do Chrome e o conteúdo do navegador.",
        allowed_attach_schemes: "Esquemas de conexão permitidos",
        comma_separated_scheme_allowlist:
          "Lista de esquemas permitidos separados por vírgulas, geralmente ws e wss.",
      },
      observabilitysettingssection: {
        observability: "Observabilidade",
        activity_logging_tracks_api_requests:
          "O registro de atividades acompanha as requisições de API para depuração e auditoria. Os registros são armazenados localmente e podem ser consultados na página Atividade.",
        activity_logging: "Registro de atividades",
        enable_or_disable_activity_event:
          "Ativa ou desativa a gravação de eventos de atividade.",
        enabled: "Ativado",
        disabled: "Desativado",
        retention_days: "Retenção (dias)",
        how_long_to_keep_activity_logs_before:
          "Por quanto tempo manter os registros de atividade antes da limpeza automática. Reter por mais tempo usa mais disco, mas oferece um histórico de auditoria melhor.",
        session_idle_timeout_seconds:
          "Tempo limite de inatividade da sessão (segundos)",
        time_before_an_inactive_agent_session:
          "Tempo antes de uma sessão de agente inativa ser considerada ociosa. Usado para agrupar a atividade por sessão.",
      },
      profilessettingssection: {
        profiles: "Perfis",
        profile_storage_is_host_level_changing:
          "O armazenamento de perfis é definido no nível do host. Alterar o diretório base exige reinicialização, porque o gerenciador de perfis e o orquestrador são criados com ele na inicialização.",
        profiles_base_directory: "Diretório base dos perfis",
        root_directory_where_browser_profiles:
          "Diretório raiz onde os perfis de navegador são armazenados.",
        default_profile: "Perfil padrão",
        profile_name_used_when_the_server_needs:
          "Nome de perfil usado quando o servidor precisa de um padrão implícito.",
      },
      defaultssettingssection: {
        instance_defaults: "Padrões de instância",
        these_values_are_written_to_config_and:
          "Estes valores são gravados na configuração e usados em novas instâncias gerenciadas. Instâncias já em execução mantêm a configuração atual.",
        mode: "Modo",
        default_browser_mode_for_new_launches:
          "Modo de navegador padrão para novas inicializações.",
        headless: "Sem interface",
        headed: "Com interface",
        stealth_level: "Nível de discrição",
        bot_detection_evasion_profile_higher:
          "Perfil de evasão de detecção de bots. Níveis mais altos podem afetar o monitoramento de erros e certos recursos do navegador.",
        light: "Leve",
        medium: "Médio",
        full: "Completo",
        light_2: "Leve:",
        default_baseline_stealth_keeps_the:
          "Discrição de base padrão. Mantém a inicialização de menor risco e o contrato de JS enquanto oculta marcadores básicos de automação.",
        default_product_security_baseline:
          "✓ Linha de base de segurança padrão do produto",
        no_intentional_api_realism_or_security:
          "✓ Sem sacrificar de propósito o realismo da API ou a segurança",
        medium_2: "Médio:",
        non_default_risk_mode_adds_client_hints:
          "Modo de risco não padrão. Adiciona Client Hints, substitutos de `chrome.runtime`, propagação para iframes, filtragem de pilha e mascaramento de funções com aparência nativa para melhorar a compatibilidade antibot.",
        alters_browser_visible_apis_and_error:
          "⚠ Altera APIs visíveis ao navegador e o comportamento de erros e pilhas. Ferramentas de monitoramento e depuração podem ver resultados diferentes.",
        permissions_and_compatibility_shims_can:
          "⚠ Permissões e substitutos de compatibilidade podem retornar valores alterados de propósito. Não use isto como linha de base de segurança padrão.",
        reports_that_require_explicitly:
          "⚠ Relatos que exigem ativar o Médio explicitamente devem ser tratados como aceitação opcional de risco, não como comportamento do caminho padrão.",
        full_2: "Completo:",
        highest_risk_non_default_mode_adds:
          "Modo não padrão de maior risco. Adiciona alterações de gráficos, canvas, áudio, cores do sistema e WebRTC além do Médio.",
        browser_output_is_intentionally_less:
          "⚠ A saída do navegador é propositalmente menos nativa e menos estável. Renderização, mídia e rede podem quebrar ou divergir do Chrome real.",
        this_mode_is_not_an_acceptable_default:
          "⚠ Este modo não é uma postura de segurança padrão aceitável. Ative-o apenas se aceitar explicitamente essa superfície de trocas.",
        reports_that_depend_on_enabling_full:
          "⚠ Relatos que dependem de ativar o Completo devem ser classificados como risco não padrão do operador, a menos que se demonstre um bypass no caminho padrão.",
        webrtc_webgl_canvas_and_audio_behavior:
          "⚠ O comportamento de WebRTC, WebGL, canvas e áudio pode divergir do Chrome de referência.",
        tab_eviction_policy: "Política de descarte de abas",
        how_pinchtab_behaves_when_a_managed:
          "Como o PinchTab se comporta quando uma instância gerenciada atinge o limite de abas.",
        reject_new_tabs: "Rejeitar novas abas",
        close_oldest: "Fechar a mais antiga",
        close_least_recently_used: "Fechar a menos usada recentemente",
        tab_lifecycle: "Ciclo de vida das abas",
        close_idle_closes_a_tab_after_a_text:
          "“Fechar ociosas” fecha uma aba após uma resposta de /text, /snapshot ou /action quando o atraso passa; /navigate cancela. “Congelar ociosas” congela qualquer aba que nenhuma requisição tenha tocado durante o atraso e a descongela na próxima requisição.",
        keep_never_auto_close: "Manter (nunca fechar automaticamente)",
        close_idle: "Fechar ociosas",
        freeze_idle: "Congelar ociosas",
        auto_close_delay: "Atraso de fechamento automático",
        seconds_of_idleness_before_an_idle_tab:
          "Segundos de ociosidade antes de uma aba ociosa ser fechada ou congelada. Aplica-se apenas quando o ciclo de vida é “Fechar ociosas” ou “Congelar ociosas”.",
        restore_tabs_on_startup: "Restaurar abas na inicialização",
        when_enabled_tabs_open_at_shutdown_are:
          "Quando ativado, as abas abertas no desligamento são reabertas na próxima inicialização. Desativado por padrão — abas fechadas continuam fechadas após reiniciar.",
        enable: "Ativar",
        max_tabs: "Máximo de abas",
        maximum_number_of_tabs_per_managed:
          "Número máximo de abas por instância gerenciada.",
        max_parallel_tabs: "Máximo de abas paralelas",
        set_to_0_to_auto_detect_from_cpu_count:
          "Defina 0 para detectar automaticamente pela contagem de CPUs.",
        timezone: "Fuso horário",
        optional_timezone_override_for_launched:
          "Substituição opcional do fuso horário das instâncias iniciadas.",
        europe_rome: "Europe/Rome",
        user_agent: "User agent",
        optional_override_applied_to_new:
          "Substituição opcional aplicada a novas instâncias gerenciadas.",
        custom_user_agent: "User agent personalizado",
        applies_to_newly_launched_managed:
          "Aplica-se a instâncias gerenciadas recém-iniciadas.",
      },
      securityidpisettingssection: {
        security_idpi: "Segurança IDPI",
        indirect_prompt_injection_controls:
          "Os controles de injeção indireta de prompt restringem quais sites são permitidos e adicionam proteções ao conteúdo extraído antes que ele chegue à automação posterior.",
        idpi_is_disabled_browser_content_is_not:
          "O IDPI está desativado. O conteúdo do navegador não está sendo filtrado pela lista de sites permitidos nem pelas proteções de conteúdo.",
        the_website_whitelist_is_not_set_to_a:
          "A lista de sites permitidos não está definida como uma lista restrita de domínios. Essa é a principal defesa do IDPI e deve ser configurada.",
        the_website_whitelist_contains_which:
          "A lista de sites permitidos contém '*', o que na prática desativa a restrição de domínios.",
        idpi_is_enforcing_a_specific_website:
          "O IDPI está aplicando uma lista específica de sites permitidos e proteções de conteúdo.",
        enable: "Ativar",
        custom_patterns: "Padrões personalizados",
        optional_comma_separated_phrases_to:
          "Frases separadas por vírgulas (opcional) a tratar como conteúdo suspeito de injeção de prompt.",
        ignore_previous_instructions_exfiltrate:
          "ignore previous instructions, exfiltrate data",
      },
      timeoutssettingssection: {
        timeouts: "Tempos limite",
        runtime_timing_defaults_written_into:
          "Valores padrão de temporização de execução gravados nas novas configurações dos processos filhos. Instâncias já em execução mantêm os tempos limite atuais.",
      },
      browsersettingssection: {
        browser_runtime: "Ambiente de execução do navegador",
        these_settings_are_written_into_the:
          "Estas configurações são gravadas na configuração do processo filho gerada para novas instâncias gerenciadas.",
        provider: "Provedor",
        browser_backend_used_for_new_managed:
          "Backend de navegador usado em novas instâncias gerenciadas.",
        chrome: "Chrome",
        cloakbrowser: "CloakBrowser",
        ghost_chrome: "Ghost + Chrome",
        browser_version: "Versão do navegador",
        version_string_used_in_generated_ua:
          "String de versão usada nos padrões gerados de user agent e impressão digital.",
        browser_binary: "Binário do navegador",
        optional_path_override_for_the_chrome:
          "Substituição opcional do caminho do executável do Chrome ou do CloakBrowser.",
        fingerprint_seed: "Semente de impressão digital",
        deterministic_cloakbrowser_identity:
          "Semente de identidade determinística do CloakBrowser. Deixe em branco para uma identidade nova a cada inicialização.",
        fingerprint_platform: "Plataforma da impressão digital",
        native_platform_fingerprint_reported_by:
          "Impressão digital de plataforma nativa informada pelo CloakBrowser.",
        auto: "Automático",
        windows: "Windows",
        macos: "macOS",
        linux: "Linux",
        cloak_locale: "Localidade do Cloak",
        locale_passed_as_fingerprint_locale:
          "Localidade passada como --fingerprint-locale.",
        cloak_timezone: "Fuso horário do Cloak",
        timezone_passed_as_fingerprint_timezone:
          "Fuso horário passado como --fingerprint-timezone.",
        webrtc_ip: "IP de WebRTC",
        explicit_replacement_ip_or_auto_for:
          "IP de substituição explícito, ou auto para o CloakBrowser resolver o IP de saída do proxy.",
        fonts_directory: "Diretório de fontes",
        directory_containing_target_platform:
          "Diretório que contém as fontes da plataforma de destino para o CloakBrowser.",
        storage_quota: "Cota de armazenamento",
        storage_quota_in_mb_passed_as:
          "Cota de armazenamento em MB passada como --fingerprint-storage-quota.",
        native_stealth_only: "Somente discrição nativa",
        disable_pinchtab_js_stealth_overlays:
          "Desativa as camadas de discrição em JS do PinchTab e os sinalizadores de inicialização que ocultam a automação.",
        use_cloakbrowser_native_patches:
          "Usar os patches nativos do CloakBrowser",
        extra_flags: "Sinalizadores extras",
        additional_chrome_flags_appended_when:
          "Sinalizadores adicionais do Chrome acrescentados ao iniciar instâncias gerenciadas.",
        extension_paths: "Caminhos das extensões",
        comma_separated_extension_directories:
          "Diretórios de extensões a carregar, separados por vírgulas. Por padrão, o PinchTab usa a pasta local extensions/ dentro do seu diretório de estado ou configuração. Defina caminhos personalizados aqui para substituir esse padrão, ou limpe o campo para desativar o carregamento de extensões.",
      },
      dashboardsettingssection: {
        dashboard_preferences: "Preferências do painel",
        language: "Idioma",
        choose_the_language_of_the_dashboard:
          "Escolha o idioma da interface do painel.",
        these_controls_affect_this_dashboard_ui:
          "Estes controles afetam apenas esta interface do painel. Eles são armazenados localmente no seu navegador e não exigem reiniciar o backend.",
        screencast_frame_rate: "Taxa de quadros da transmissão",
        controls_how_often_live_previews:
          "Controla com que frequência as pré-visualizações ao vivo pedem novos quadros.",
        fps: "fps",
        screencast_quality: "Qualidade da transmissão",
        jpeg_quality_for_tab_preview_streams:
          "Qualidade JPEG dos fluxos de pré-visualização de abas.",
        screencast_width: "Largura da transmissão",
        maximum_preview_width_for_live_tiles:
          "Largura máxima de pré-visualização dos blocos ao vivo.",
        px: "px",
        memory_metrics: "Métricas de memória",
        poll_every_running_instance_for_browser:
          "Consulta a memória do navegador em cada instância em execução a cada ciclo de monitoramento: RSS de toda a árvore de processos do Chrome, além do heap de JS e dos contadores de DOM lidos de cada aba aberta via CDP. Custo medido: cerca de um milissegundo por aba aberta, mais algumas dezenas de milissegundos pela varredura da árvore de processos, por instância e por ciclo.",
        enable: "Ativar",
        polling_interval: "Intervalo de consulta",
        how_frequently_the_dashboard_asks_the:
          "Com que frequência o painel pede métricas atualizadas ao backend.",
        s: "s",
        reasoning_output: "Saída de raciocínio",
        choose_whether_the_live_agent_feed:
          "Escolha se o feed do agente ao vivo mostra chamadas de ferramentas, atualizações de progresso ou ambos.",
        tool_calls_only: "Somente chamadas de ferramentas",
        progress_only: "Somente progresso",
        both: "Ambos",
      },
      autosolversettingssection: {
        autosolver: "AutoSolver",
        these_settings_are_saved_into_the:
          "Estas configurações são salvas no arquivo de configuração do PinchTab. As chaves de API de provedores externos são somente gravação e precisam ser definidas diretamente nesse arquivo.",
        config_file: "Arquivo de configuração",
        dashboard_edits_are_written_back_to:
          "As edições feitas no painel são gravadas de volta nesse arquivo. Defina as chaves de provedores externos em autoSolver.external no mesmo arquivo de configuração.",
        config_path_unavailable: "Caminho de configuração indisponível",
        enable_autosolver: "Ativar o AutoSolver",
        turns_on_the_autosolver_runtime:
          "Ativa a configuração de execução do AutoSolver para fluxos de desafio compatíveis.",
        enabled: "Ativado",
        disabled: "Desativado",
        auto_trigger: "Disparo automático",
        automatically_run_autosolver_after:
          "Executa o AutoSolver automaticamente após requisições de navegação e ação compatíveis.",
        trigger_on_navigate: "Disparar ao navegar",
        run_autosolver_checks_after_successful:
          "Executa as verificações do AutoSolver depois de chamadas de navegação bem-sucedidas.",
        trigger_on_action: "Disparar em ações",
        run_autosolver_checks_after_successful_2:
          "Executa as verificações do AutoSolver depois de chamadas de ação bem-sucedidas.",
        max_attempts: "Máximo de tentativas",
        maximum_autosolver_retries_before_the:
          "Número máximo de novas tentativas do AutoSolver antes de o pipeline desistir.",
        solver_timeout_sec: "Tempo limite do solucionador (s)",
        per_solver_timeout_for_each_attempt:
          "Tempo limite por solucionador em cada tentativa.",
        retry_base_delay_ms: "Atraso base das tentativas (ms)",
        base_retry_backoff_delay_between:
          "Atraso base de espera entre as tentativas do AutoSolver.",
        retry_max_delay_ms: "Atraso máximo das tentativas (ms)",
        maximum_retry_backoff_delay_cap_between:
          "Limite máximo do atraso de espera entre as tentativas do AutoSolver.",
        solvers: "Solucionadores",
        comma_separated_ordered_list_of_solver:
          "Lista ordenada de nomes de solucionadores a tentar, separados por vírgulas. Use GET /solvers ou GET /config/autosolver para confirmar os nomes disponíveis em tempo de execução.",
        llm_provider: "Provedor de LLM",
        optional_provider_name_used_when_llm:
          "Nome de provedor opcional usado quando o fallback por LLM está ativado.",
        llm_fallback: "Fallback por LLM",
        use_an_llm_as_the_last_resort_after:
          "Usa um LLM como último recurso depois que os solucionadores registrados falham.",
        external_provider_keys: "Chaves de provedores externos",
        capsolver_and_2captcha_credentials_are:
          "As credenciais do Capsolver e do 2Captcha não aparecem no painel e precisam ser gerenciadas no arquivo de configuração. Esses provedores só aparecem nas listas de solucionadores em tempo de execução quando há chaves configuradas.",
        open_the_config_file_above_and_set:
          "Abra o arquivo de configuração acima e defina",
        autosolver_external_capsolverkey: "autoSolver.external.capsolverKey",
        autosolver_external_twocaptchakey: "autoSolver.external.twoCaptchaKey",
        there_the_dashboard_does_not_display_or:
          "ali. O painel não exibe nem edita esses valores, e não há variáveis de ambiente que os substituam.",
      },
    },
    monitoring: {
      monitoringemptystate: {
        starting_default_instance: "Iniciando a instância padrão…",
        start_default_instance: "Iniciar instância padrão",
        open_default_profile: "Abrir o perfil padrão",
        no_active_instances: "Nenhuma instância ativa",
        pinchtab_expected_a_default_instance:
          "O PinchTab esperava uma instância padrão, mas ela nunca ficou disponível. Inicie-a manualmente ou inspecione o perfil.",
        start_the_default_instance_or_open:
          "Inicie a instância padrão ou abra Perfis para iniciar outra.",
        waiting_for_default_profile:
          "O PinchTab está aguardando o perfil padrão ficar disponível. Vai tentar de novo automaticamente (faltam {{count}} verificações).",
      },
      defaultinstancemodal: {
        start_default_instance: "Iniciar instância padrão",
        cancel: "Cancelar",
        start_headed: "Iniciar com interface",
        start_headless: "Iniciar sem interface",
        choose_how_to_launch_the_default:
          "Escolha como iniciar o perfil padrão nesta sessão.",
        configured_default_mode: "Modo padrão configurado:",
      },
    },
    profilespage: {
      loading_profiles: "Carregando perfis…",
      no_profiles_yet: "Ainda não há perfis",
      click_new_profile_to_create_one: "Clique em Novo perfil para criar um",
      new_profile: "Novo perfil",
      profiles: "Perfis",
      total: "total",
      no_account: "Sem conta",
      profile_deleted: 'Perfil "{{name}}" excluído',
    },
    settingspage: {
      confirm_admin_action: "Confirmar ação administrativa",
      cancel: "Cancelar",
      verifying: "Verificando…",
      continue: "Continuar",
      re_enter_the_api_token_to_save_backend:
        "Digite o token de API novamente para salvar mudanças na configuração do backend. A sessão elevada permanece ativa por pouco tempo, então você não precisa repetir isso a cada ação administrativa.",
      api_token: "Token de API",
      paste_api_token: "Cole o token de API",
      restart_required: "Reinicialização necessária",
      reset: "Redefinir",
      saving: "Salvando…",
      save: "Salvar",
      restart_needed_for: "Reinicialização necessária para:",
      loading_settings: "Carregando configurações…",
      settings_eyebrow: "Configurações",
    },
  },
  activities: {
    activityexplorer: {
      agent: "Agente",
      all: "Todos",
      session: "Sessão",
      request_timeline: "Linha do tempo das requisições",
      activity: "Atividade",
      failed_to_load_activity: "Falha ao carregar a atividade",
    },
    agentstreampanel: {
      no_matching_activity: "Nenhuma atividade correspondente",
      adjust_the_filters_or_generate_some:
        "Ajuste os filtros ou gere algum tráfego pela CLI, pelo MCP ou pelo painel.",
    },
    streamrow: {
      ms: "ms",
      navigate_to_page: "Navegar até a página",
      capture_page_snapshot: "Capturar instantâneo da página",
      open_screencast_stream: "Abrir a transmissão da tela",
      extract_text_from_page: "Extrair texto da página",
      click_on_page: "Clicar na página",
      double_click_on_page: "Clicar duas vezes na página",
      type_into_page: "Digitar na página",
      hover_on_page: "Passar o mouse sobre a página",
      fill_field: "Preencher campo",
      select_option: "Selecionar opção",
      scroll_page: "Rolar a página",
      press_key: "Pressionar tecla",
      wait_for_condition: "Aguardar uma condição",
      evaluate_javascript: "Executar JavaScript",
      upload_file: "Enviar arquivo",
      download_file: "Baixar arquivo",
      on_tab: " na aba ",
      navigate_to_url: "Ir para {{url}}",
      click_ref: 'Clicar em "{{ref}}"',
      double_click_ref: 'Clicar duas vezes em "{{ref}}"',
      type_into_ref: 'Digitar em "{{ref}}"',
      hover_ref: 'Passar o cursor sobre "{{ref}}"',
      fill_ref: 'Preencher "{{ref}}"',
      select_ref: 'Selecionar "{{ref}}"',
      press_key_on_ref: 'Pressionar tecla em "{{ref}}"',
    },
    activityline: {
      progress: "PROGRESSO",
      agent_reported_progress: "O agente informou progresso",
      ms: "ms",
    },
    activityitemline: {
      tab_paused_for_human_handoff: "aba pausada para intervenção humana",
      tab_is_paused_for_human_handoff:
        "A aba está pausada para intervenção humana",
      resume_automation_after_manual:
        "Retomar a automação após resolver o desafio manualmente",
      resuming: "Retomando…",
      resolve_challenge: "Resolver o desafio",
      browser_was_escalated: "O navegador foi elevado",
      escalated: "elevado",
      navigate_to_page: "Navegar até a página",
      capture_page_snapshot: "Capturar instantâneo da página",
      open_screencast_stream: "Abrir a transmissão da tela",
      extract_text_from_page: "Extrair texto da página",
      take_screenshot: "Capturar tela",
      export_page_as_pdf: "Exportar a página como PDF",
      click_on_page: "Clicar na página",
      double_click_on_page: "Clicar duas vezes na página",
      type_into_page: "Digitar na página",
      hover_on_page: "Passar o mouse sobre a página",
      fill_field: "Preencher campo",
      select_option: "Selecionar opção",
      scroll_page: "Rolar a página",
      press_key: "Pressionar tecla",
      wait_for_condition: "Aguardar uma condição",
      evaluate_javascript: "Executar JavaScript",
      upload_file: "Enviar arquivo",
      download_file: "Baixar arquivo",
      resume_failed: "Falha ao retomar",
      navigate_to_url: "Ir para {{url}}",
      click_ref: 'Clicar em "{{ref}}"',
      double_click_ref: 'Clicar duas vezes em "{{ref}}"',
      type_into_ref: 'Digitar em "{{ref}}"',
      hover_ref: 'Passar o cursor sobre "{{ref}}"',
      fill_ref: 'Preencher "{{ref}}"',
      select_ref: 'Selecionar "{{ref}}"',
      press_key_on_ref: 'Pressionar tecla em "{{ref}}"',
    },
    activitytimeline: {
      timeline: "Linha do tempo",
      recent_events: "Eventos recentes",
      no_matching_activity: "Nenhuma atividade correspondente",
      adjust_the_filters_or_generate_some:
        "Ajuste os filtros ou gere algum tráfego pela CLI, pelo MCP ou pelo painel.",
    },
    activefilterbar: {
      clear_filters: "Limpar filtros",
    },
    activityfiltermenu: {
      "200": "200",
      "3600": "3600",
      profile: "Perfil",
      tab: "Aba",
      agent: "Agente",
      action: "Ação",
      advanced_filters: "Filtros avançados",
      hide: "Ocultar",
      show: "Mostrar",
      instance: "Instância",
      path_prefix: "Prefixo do caminho",
      tabs_or_instances: "/tabs/ or /instances/",
      age_seconds: "Idade (segundos)",
      limit: "Limite",
      clear: "Limpar",
      search: "Pesquisar",
      any_profile: "Qualquer perfil",
      any_tab: "Qualquer aba",
      any_agent: "Qualquer agente",
      any_action: "Qualquer ação",
      any_instance: "Qualquer instância",
    },
    agentworkspacesidebar: {
      agents: "Agentes",
      activities: "Atividades",
      no_agent_activity_observed_yet:
        "Nenhuma atividade de agente observada ainda",
      all_agents: "Todos os agentes",
    },
    copyidpill: {
      copied: "Copiado",
      copy_tab_id: "Copiar o ID da aba {{id}}",
    },
    hooks: {
      useactivitydata: {
        failed_to_load_activity: "Falha ao carregar a atividade",
        failed_to_load_agent_activity:
          "Falha ao carregar a atividade do agente",
      },
    },
  },
  settings: {
    sections: {
      dashboard: {
        dashboard: "Painel",
        local_monitoring_and_screencast:
          "Preferências locais de monitoramento e transmissão.",
      },
      defaults: {
        instance_defaults: "Padrões de instância",
        how_new_managed_browser_instances_launch:
          "Como novas instâncias de navegador gerenciadas são iniciadas.",
      },
      orchestration: {
        orchestration: "Orquestração",
        routing_strategy_port_range_and:
          "Estratégia de roteamento, intervalo de portas e política de alocação.",
      },
      security: {
        security: "Segurança",
        sensitive_endpoint_gates_and_access:
          "Bloqueios de endpoints sensíveis e controles de acesso.",
      },
      "security-idpi": {
        security_idpi: "Segurança IDPI",
        indirect_prompt_injection_website_and:
          "Defesas de sites e conteúdo contra injeção indireta de prompt.",
      },
      profiles: {
        profiles: "Perfis",
        shared_profile_storage_and_default:
          "Armazenamento compartilhado de perfis e comportamento do perfil padrão.",
      },
      network: {
        network_attach: "Rede e conexão",
        server_binding_auth_and_attach_policy:
          "Vinculação do servidor, autenticação e política de conexão.",
      },
      browser: {
        browser_runtime: "Ambiente de execução do navegador",
        chrome_binary_version_flags_and:
          "Binário do Chrome, versão, sinalizadores e extensões.",
      },
      timeouts: {
        timeouts: "Tempos limite",
        action_navigation_shutdown_and_wait:
          "Tempos de ação, navegação, desligamento e espera.",
      },
      autosolver: {
        autosolver: "AutoSolver",
        challenge_solving_behavior_and_config:
          "Comportamento de resolução de desafios e provedores baseados no arquivo de configuração.",
      },
      observability: {
        observability: "Observabilidade",
        activity_logging_and_retention_settings:
          "Configurações de registro de atividades e retenção.",
      },
    },
    security: {
      endpoints: {
        allowEvaluate: {
          allow_evaluate: "Permitir evaluate",
        },
        allowMacro: {
          allow_macro: "Permitir macro",
        },
        allowScreencast: {
          allow_screencast: "Permitir transmissão",
        },
        allowDownload: {
          allow_download: "Permitir download",
        },
        allowCookies: {
          allow_cookies: "Permitir cookies",
        },
        allowUpload: {
          allow_upload: "Permitir upload",
        },
        allowNetworkIntercept: {
          allow_network_interception: "Permitir interceptação de rede",
          lets_agents_install_rules_to_abort_or:
            "Permite que os agentes instalem regras para abortar ou atender (simular) requisições HTTP em uma aba. Quando ativado, a falsificação de respostas é PROIBIDA nos hosts de “Sites permitidos” abaixo e PERMITIDA nos demais. Falsificar respostas em hosts que você autorizou o agente a usar (por exemplo, seu banco) é o resultado de maior risco — por isso os hosts da lista permitida é que são protegidos, e não o contrário. As verificações prévias OPTIONS são ignoradas por padrão para não quebrar o CORS.",
        },
        allowFileScheme: {
          allow_file_navigation: "Permitir navegação file://",
          lets_agents_open_local_file_urls_a_file:
            "Permite que os agentes abram URLs file:// locais. Uma URL file:// não tem host, portanto NÃO é limitada por “Sites permitidos” abaixo e ignora a proteção contra SSRF e IPs privados — ativar isso concede acesso de leitura (via instantâneo, captura de tela ou raspagem) a qualquer arquivo local que o processo do servidor possa ler. Continua bloqueado enquanto houver uma lista permitida em modo estrito. Ative apenas em máquinas confiáveis de locatário único.",
        },
      },
      idpi: {
        enabled: {
          enable_idpi: "Ativar o IDPI",
          turn_on_indirect_prompt_injection:
            "Ativa as defesas contra injeção indireta de prompt.",
        },
        strictMode: {
          strict_mode: "Modo estrito",
          block_disallowed_domains_and_suspicious:
            "Bloqueia domínios não permitidos e conteúdo suspeito em vez de apenas avisar.",
        },
        scanContent: {
          scan_content: "Analisar conteúdo",
          inspect_extracted_text_and_snapshots:
            "Inspeciona o texto extraído e os instantâneos em busca de padrões de injeção de prompt.",
        },
        wrapContent: {
          wrap_content: "Encapsular conteúdo",
          mark_returned_page_text_as_untrusted:
            "Marca o texto da página retornado como conteúdo não confiável para os consumidores posteriores.",
        },
      },
    },
    defaults: {
      booleans: {
        blockImages: {
          block_images: "Bloquear imagens",
        },
        blockMedia: {
          block_media: "Bloquear mídia",
        },
        blockAds: {
          block_ads: "Bloquear anúncios",
        },
        noAnimations: {
          disable_css_animations: "Desativar animações CSS",
        },
        noRestore: {
          skip_session_restore: "Pular a restauração de sessão",
        },
      },
      timeouts: {
        actionSec: {
          action_timeout: "Tempo limite de ações",
          maximum_time_for_action_requests:
            "Tempo máximo para requisições de ação.",
        },
        navigateSec: {
          navigate_timeout: "Tempo limite de navegação",
          maximum_time_for_navigation_requests:
            "Tempo máximo para requisições de navegação.",
        },
        shutdownSec: {
          shutdown_timeout: "Tempo limite de desligamento",
          grace_period_before_force_closing_a:
            "Período de carência antes de forçar o fechamento de um processo filho.",
        },
        waitNavMs: {
          wait_after_navigation_delay: "Atraso após a navegação",
          post_navigation_stabilization_delay_in:
            "Atraso de estabilização após a navegação, em milissegundos.",
        },
      },
    },
    notices: {
      backend_config_saved_dynamic_changes:
        "Configuração do backend salva. As mudanças dinâmicas foram aplicadas quando possível.",
      backend_config_saved_dynamic_changes_2:
        "Configuração do backend salva. As mudanças dinâmicas foram aplicadas quando possível. Recomenda-se reiniciar para mudanças no nível do servidor.",
      preferencesSaved: "Preferências do painel salvas neste navegador.",
    },
    errors: {
      loadFailed: "Falha ao carregar as configurações",
      saveFailed: "Falha ao salvar as configurações",
      tokenVerifyFailed: "Falha ao verificar o token de API",
    },
  },
  monitoring: {
    errors: {
      startInstanceFailed: "Falha ao iniciar a instância",
    },
  },
  errors: {
    requestFailed: "A requisição falhou",
  },
  auth: {
    insecureTransport:
      "A sessão do painel está em HTTP não seguro; use HTTPS ou localhost para uma proteção de sessão mais forte.",
  },
};

export default messages;
