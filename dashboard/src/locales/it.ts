import type { Messages } from "../i18n/messages";

const messages: Messages = {
  app: {
    name: "PinchTab",
    checking_server_authentication: "Verifica dell'autenticazione del server…",
    pinchtab_is_restarting_or_unreachable:
      "PinchTab si sta riavviando o non è raggiungibile.",
    automatic_retries_stopped: " I tentativi automatici sono stati interrotti.",
    retry_now: "Riprova ora",
    refresh: "Aggiorna",
  },
  profiles: {
    profiletoolbarbuttons: {
      copy_id: "Copia ID",
      delete: "Elimina",
      save: "Salva",
      stop: "Arresta",
      start: "Avvia",
      delete_profile: "Elimina profilo",
      cancel: "Annulla",
      delete_profile_2: 'Eliminare il profilo "',
      every_cookie_login_and_session_stored:
        '"? Tutti i cookie, gli accessi e le sessioni in esso contenuti andranno persi definitivamente. Non è possibile annullare.',
      copied: "Copiato",
      failed: "Non riuscito",
    },
    profilemetainfopanel: {
      profile_panel: "Pannello del profilo",
      status: "Stato",
      port: "Porta",
      browser: "Browser",
      size: "Dimensione",
      account: "Account",
      identity: "Identità",
      connection: "Connessione",
      cdp_attached: "CDP collegato",
      cdp_url: "URL CDP",
      path: "Percorso",
      not_found: " (non trovato)",
      attached_via_cdp: "Collegato tramite CDP",
      headless: "Senza interfaccia",
      headed: "Con interfaccia",
    },
    profilecard: {
      error: "errore",
      stopped: "arrestato",
      size: "Dimensione",
      account: "Account",
      use_when: "Usa quando",
      details: "Dettagli",
      stop: "Arresta",
      start: "Avvia",
    },
    profiledetailspanel: {
      select_a_profile_to_inspect_its:
        "Seleziona un profilo per esaminarne l'istanza, le schede in tempo reale e i log.",
      live: "In tempo reale",
      tabs: "Schede",
      logs: "Log",
      no_tabs_open: "Nessuna scheda aperta.",
      instance_not_running: "L'istanza non è in esecuzione.",
      profile_name: "Profilo: {{name}}",
    },
    profilebasicinfopanel: {
      name: "Nome",
      use_this_profile_when: "Usa questo profilo quando",
    },
    profileliveviewpanel: {
      no_tabs_open: "Nessuna scheda aperta",
      instance_not_running_start_the_profile:
        "L'istanza non è in esecuzione. Avvia il profilo per vedere la vista in tempo reale.",
    },
    instancelogspanel: {
      loading_logs: "Caricamento dei log…",
      no_instance_logs_available: "Nessun log dell'istanza disponibile.",
    },
    groups: {
      user: "Profili",
      temporary: "Temporanei",
      quarantined: "In quarantena",
    },
  },
  components: {
    atoms: {
      debugpanel: {
        debug: "🐛 Debug",
        debug_panel: "Pannello di debug",
        instances: "Istanze:",
      },
      emptystate: {
        dashboard: "Pannello",
      },
      modal: {
        dashboard: "Pannello",
        close: "Chiudi",
      },
      errorboundary: {
        something_went_wrong: "⚠️ Si è verificato un problema",
        unknown_error: "Errore sconosciuto",
        try_again: "Riprova",
      },
    },
    screencast: {
      screencaststatusbar: {
        decrease_fps: "Riduci gli FPS",
        increase_fps: "Aumenta gli FPS",
        take_full_quality_screenshot_png:
          "Cattura uno screenshot a qualità piena (PNG)",
        download_as_pdf: "Scarica come PDF",
        fps: "FPS (",
      },
      screencasttile: {
        tab_preview: "Anteprima della scheda",
        connection_lost: "Connessione persa",
        show_static_preview: "Mostra anteprima statica",
        retry_connection: "Riprova la connessione",
      },
      framedecode: {
        failed_to_decode_screencast_frame:
          "Impossibile decodificare il fotogramma dello screencast",
      },
    },
    molecules: {
      createprofilemodal: {
        new_profile: "📁 Nuovo profilo",
        cancel: "Annulla",
        create: "Crea",
        name: "Nome",
        e_g_personal_work_scraping: "es. personale, lavoro, scraping",
        use_this_profile_when_helps_agents_pick:
          "Usa questo profilo quando (aiuta gli agenti a scegliere il profilo giusto)",
        e_g_i_need_to_access_gmail_for_the_team:
          "es. Devo accedere a Gmail con l'account del team",
        import_from_optional_chrome_user_data:
          "Importa da (facoltativo — percorso dati utente di Chrome)",
        e_g_users_you_library_application:
          "es. /Users/you/Library/Application Support/Google/Chrome",
      },
      navbar: {
        pinchtab: "PinchTab",
        logout: "Esci",
        refresh_r: "Aggiorna (⌘R)",
        toggle_menu: "Attiva/disattiva il menu",
        monitoring: "Monitoraggio",
        agents: "Agenti",
        profiles: "Profili",
        settings: "Impostazioni",
      },
      instancestats: {
        instance: "Istanza",
        status: "Stato",
        uptime: "Tempo di attività",
        port: "Porta",
        crashes: "Arresti anomali",
        browsing: "Navigazione",
        tabs: "Schede",
        domains: "Domini",
        resources: "Risorse",
        memory: "Memoria",
        renderers: "Processi di rendering",
        pages: "Pagine",
        js_heap: "Heap JS",
        dom_nodes: "Nodi DOM",
        listeners: "Listener",
        frames: "Frame",
        unreadable: "Non leggibili",
        just_now: "proprio ora",
        tabs_open_before_it_were_lost:
          "le schede aperte prima sono andate perse",
        rss_across_the_browser_process_tree:
          "RSS sull'intero albero dei processi del browser",
        tabs_that_did_not_answer_not_counted:
          "schede che non hanno risposto (non conteggiate)",
        last_crash:
          "ultimo: {{reason}} alle {{time}} · le schede aperte prima sono andate perse",
        heap_summary_one: "usato / totale, sommato su {{count}} scheda",
        heap_summary_other: "usato / totale, sommato su {{count}} schede",
        document_count_one: "{{count}} documento",
        document_count_other: "{{count}} documenti",
      },
      agentitem: {
        tab_paused_for_human_handoff: "scheda in pausa per intervento manuale",
        just_now: "proprio ora",
        session_at: "Sessione {{time}}",
        session_range: "Sessione {{start}}–{{end}}",
      },
      startinstancemodal: {
        start_profile: "🖥️ Avvia profilo",
        cancel: "Annulla",
        start: "Avvia",
        port: "Porta",
        auto_select_from_configured_range:
          "Selezione automatica dall'intervallo configurato",
        leave_blank_to_auto_select_a_free_port:
          "Lascia vuoto per selezionare automaticamente una porta libera dall'intervallo configurato.",
        headless_best_for_docker_vps:
          "Senza interfaccia (ideale per Docker/VPS)",
        browser: "Browser",
        server_default: "Valore predefinito del server",
        chrome: "Chrome",
        cloakbrowser: "CloakBrowser",
        ghost_chrome: "Ghost + Chrome",
        direct_launch_command_backup: "Comando di avvio diretto (riserva)",
        copy_command: "Copia comando",
        replace: "Sostituisci",
        pinchtab_config_token: "pinchtab config token",
        when_auth_is_enabled: "quando l'autenticazione è attiva.",
        with_the_value_from: "con il valore di",
        port_must_be_a_whole_number_between_1:
          "La porta deve essere un numero intero compreso tra 1 e 65535.",
        profile_id_missing: "ID del profilo mancante",
        failed_to_launch_instance: "Avvio dell'istanza non riuscito",
        copied: "Copiato!",
        failed_to_copy: "Copia non riuscita",
      },
      handoffnotifications: {
        human_intervention_required: "È richiesto un intervento manuale",
        dismiss_notification: "Ignora notifica",
        reason: "Motivo:",
        resume: "Riprendi",
      },
      serverstatusbadge: {
        expand_instance_list: "Espandi l'elenco delle istanze",
        collapse_instance_list: "Comprimi l'elenco delle istanze",
        tab: "scheda",
        restart_required: "Riavvio necessario",
        server_running: "Server in esecuzione",
        restart_required_2: "Riavvio necessario",
        running: "In esecuzione",
        server_running_no_instances: "Server in esecuzione, nessuna istanza",
      },
      serversummary: {
        settings: "Impostazioni",
        server_information: "Informazioni sul server",
        technical_details_for_current_session:
          "Dettagli tecnici della sessione corrente",
        version: "Versione",
        uptime: "Tempo di attività",
      },
      tabschart: {
        monitoring: "Monitoraggio",
        live_telemetry: "Telemetria in tempo reale",
        tabs: "Schede",
        memory: "Memoria",
        heap: "Heap",
        server_heap: "Heap del server",
        collecting_data: "Raccolta dei dati…",
        waiting_for_more_data: "In attesa di altri dati…",
      },
      idbadge: {
        click_to_copy_full_id: "Fai clic per copiare l'ID completo: {{id}}",
      },
    },
  },
  tabs: {
    tabbar: {
      tab_paused_for_human_handoff: "scheda in pausa per intervento manuale",
      tab_is_paused_for_human_handoff:
        "La scheda è in pausa per l'intervento manuale",
      untitled: "Senza titolo",
      unpin_and_follow_the_focused_tab_again:
        "Sblocca e segui di nuovo la scheda attiva",
      pin_this_tab_selection: "Blocca questa selezione di scheda",
      tabs: "Schede",
      monitoring: "Monitoraggio",
      pin_tab: "Blocca {{title}}",
      unpin_tab_and_follow_focus: "Sblocca {{title}} e segui il focus",
      close_tab: "Chiudi {{title}}",
      tabs_new: "Schede ({{count}} nuove)",
    },
    selectedtabtitle: {
      untitled: "Senza titolo",
    },
    instancetabspanel: {
      chart_crashed_check_console:
        "Il grafico si è bloccato — controlla la console",
      no_tabs_open: "Nessuna scheda aperta",
      unknown: "Sconosciuto",
    },
    tabitem: {
      untitled: "Senza titolo",
    },
    consolepanel: {
      loading_console_logs: "Caricamento dei log della console…",
      no_console_logs_yet: "Ancora nessun log della console",
    },
    errorspanel: {
      loading_errors: "Caricamento degli errori…",
      no_errors_yet: "Ancora nessun errore",
    },
    selectedtabpanel: {
      select_a_tab_to_view_details:
        "Seleziona una scheda per vedere i dettagli",
      no_instance_id_provided_for_live_view:
        "Nessun ID istanza fornito per la vista in tempo reale.",
      actions: "Azioni",
      live: "In tempo reale",
      console: "Console",
      errors: "Errori",
    },
  },
  instances: {
    instancelistitem: {
      tabs: "schede",
      open_profile: "Apri profilo",
      restart: "Riavvia",
      stop: "Arresta",
    },
    instancecard: {
      headless: "Senza interfaccia",
      headed: "Con interfaccia",
      uptime: "Tempo di attività",
      open_dashboard: "Apri pannello",
      stop: "Arresta",
    },
  },
  pages: {
    monitoringpage: {
      instances: "Istanze",
      collapse_sidebar: "Comprimi la barra laterale",
    },
    loginpage: {
      authentication: "Autenticazione",
      enter_api_token: "Inserisci il token API",
      this_pinchtab_server_requires_a_bearer:
        "Questo server PinchTab richiede un token bearer prima che il pannello possa caricare rotte e API protette.",
      run: "Esegui",
      pinchtab_config_token: "pinchtab config token",
      to_copy_the_token_to_your_clipboard:
        "per copiare il token negli appunti.",
      paste_bearer_token: "Incolla il token bearer",
      authorizing: "Autorizzazione…",
      continue: "Continua",
      authentication_failed: "Autenticazione non riuscita",
    },
    settings: {
      orchestrationsettingssection: {
        orchestration: "Orchestrazione",
        port_range_and_allocation_policy_can_be:
          "L'intervallo di porte e la politica di allocazione si applicano subito ai prossimi avvii. Le modifiche a strategia e politica di riavvio richiedono il riavvio del pannello, perché le rotte della strategia e lo stato del ciclo di vita vengono registrati all'avvio.",
        strategy: "Strategia",
        controls_instance_lifecycle_and_how:
          "Controlla il ciclo di vita delle istanze e come vengono instradate le rotte abbreviate.",
        always_on: "Sempre attivo",
        simple: "Semplice",
        explicit: "Esplicito",
        simple_autorestart: "Riavvio automatico semplice",
        no_instance_hub: "Nessuna istanza (hub)",
        launches_a_default_instance_at_boot_and:
          "Avvia un'istanza predefinita all'accensione e la riavvia in caso di arresto anomalo.",
        launches_one_instance_on_first_request:
          "Avvia un'istanza alla prima richiesta. Nessun riavvio automatico.",
        all_instances_managed_via_api_no:
          "Tutte le istanze sono gestite tramite API. Nessun avvio automatico.",
        launches_on_first_request_and:
          "Avvia alla prima richiesta e riavvia in caso di arresto anomalo.",
        no_local_chrome_processes_acts_as_a_hub:
          "Nessun processo Chrome locale. Funge solo da hub per i bridge remoti.",
        allocation_policy: "Politica di allocazione",
        determines_how_running_instances_are:
          "Determina come vengono scelte le istanze in esecuzione per le richieste abbreviate.",
        first_available: "Prima disponibile",
        round_robin: "A rotazione",
        random: "Casuale",
        instance_port_start: "Porta iniziale delle istanze",
        lower_bound_for_auto_allocated_instance:
          "Limite inferiore per le porte delle istanze allocate automaticamente.",
        instance_port_end: "Porta finale delle istanze",
        upper_bound_for_auto_allocated_instance:
          "Limite superiore per le porte delle istanze allocate automaticamente.",
        max_restarts: "Riavvii massimi",
        maximum_restart_attempts_use_1_for:
          "Numero massimo di tentativi di riavvio. Usa -1 per illimitato, 0 per nessun riavvio.",
        initial_backoff: "Attesa iniziale",
        delay_in_seconds_before_the_first:
          "Ritardo in secondi prima del primo tentativo di riavvio.",
        max_backoff: "Attesa massima",
        upper_bound_in_seconds_for_exponential:
          "Limite superiore in secondi per l'attesa esponenziale tra i riavvii.",
        stable_after: "Stabile dopo",
        seconds_the_instance_must_stay_healthy:
          "Secondi in cui l'istanza deve restare integra prima che il contatore dei riavvii venga azzerato.",
      },
      securitysettingssection: {
        security: "Sicurezza",
        these_controls_define_what_risky:
          "Queste impostazioni definiscono quali capacità rischiose espone PinchTab.",
        one_or_more_sensitive_endpoint_families:
          "Una o più famiglie di endpoint sensibili sono attive. Funzioni come l'esecuzione di script, i download, gli upload e la cattura dal vivo possono esporre capacità ad alto rischio. Attivale solo in ambienti fidati. La protezione dell'accesso di rete, dell'autenticazione e dell'uso a valle è tua responsabilità.",
        these_endpoint_families_can_expose_high:
          "Queste famiglie di endpoint possono esporre capacità ad alto rischio quando attivate. Attivale solo in ambienti fidati e solo se accetti la responsabilità per l'accesso di rete, l'autenticazione e l'uso a valle.",
        controls_whether_the_corresponding:
          "Controlla se la famiglia di endpoint corrispondente è attiva.",
        enable: "Attiva",
        allowed_websites: "Siti web consentiti",
        comma_separated_domain_allowlist_for:
          "Elenco di domini consentiti per i contenuti web, separati da virgole. Usa host esatti o pattern come *.example.com.",
        "127_0_0_1_localhost_1": "127.0.0.1, localhost, ::1",
        keep_this_list_narrow_empty_or_wildcard:
          "Mantieni questo elenco ristretto. Voci vuote o con caratteri jolly indeboliscono il confine principale dell'IDPI. Consentire siti non locali o non fidati amplia la superficie di attacco del browser anche con l'IDPI attivo.",
        trusted_proxy_cidrs: "CIDR dei proxy fidati",
        comma_separated_cidrs_or_ips_whose:
          "CIDR o IP separati da virgole la cui IP remota riportata dal browser deve essere considerata fidata durante la navigazione. Usalo solo per proxy interni noti.",
        "10_1_2_3_10_0_0_0_8": "10.1.2.3, 10.0.0.0/8",
        this_weakens_navigation_ip_checks_for:
          "Questo indebolisce i controlli IP in navigazione per le IP remote corrispondenti. Preferisci indirizzi di proxy specifici a intervalli privati ampi. Le voci con solo un IP sono trattate come un singolo host.",
        trusted_resolve_cidrs: "CIDR di risoluzione fidati",
        comma_separated_cidrs_or_ips_that_a:
          "CIDR o IP separati da virgole a cui un nome host può risolversi durante la verifica preliminare di navigazione. Pensato per configurazioni DNS o proxy interne.",
        "198_18_0_0_15_10_1_2_3": "198.18.0.0/15, 10.1.2.3",
        this_allows_hostnames_to_resolve_to_non:
          "Questo consente ai nomi host di risolversi verso IP non pubblici. Mantieni l'elenco ristretto e includi solo infrastrutture che controlli. Le voci con solo un IP sono trattate come un singolo host.",
      },
      settingssharedcomponents: {
        settings: "Impostazioni",
      },
      networksettingssection: {
        network_attach: "Rete e collegamento",
        port_and_bind_changes_require_a_restart:
          "Le modifiche a porta e indirizzo di ascolto richiedono un riavvio. La gestione del token API avviene fuori dal pannello.",
        server_port: "Porta del server",
        http_port_for_the_dashboard_process:
          "Porta HTTP del processo del pannello.",
        bind_address: "Indirizzo di ascolto",
        network_interface_the_dashboard_process:
          "Interfaccia di rete a cui si collega il processo del pannello. Mantenere 127.0.0.1 o localhost limita la raggiungibilità diretta alla macchina locale.",
        a_non_loopback_bind_is_a_documented_non:
          "Il collegamento a un indirizzo non di loopback è una modifica di configurazione documentata, non predefinita e che riduce la sicurezza. Può esporre il server oltre la macchina locale, a meno che un altro confine di rete non limiti ancora l'accesso. Mantieni un token configurato e verifica esplicitamente il comportamento del proxy o della pubblicazione delle porte.",
        loopback_bind_keeps_direct_server:
          "Il collegamento in loopback mantiene locale la raggiungibilità diretta del server. Passare a",
        or_another_non_local_address_widens_the:
          "o a un altro indirizzo non locale amplia il confine di fiducia.",
        api_token: "Token API",
        bearer_token_required_by_authenticated:
          "Token bearer richiesto dalle richieste autenticate quando è impostato. Il pannello non lo restituisce mai e non lo gestisce.",
        no_token_configured_set_one_through_the:
          "Nessun token configurato. Impostane uno tramite la CLI o il file di configurazione.",
        token_configured_manage_rotation:
          "Token configurato. Gestisci la rotazione tramite la CLI o il file di configurazione; il server non restituisce mai il valore corrente. Esegui",
        pinchtab_config_token: "pinchtab config token",
        to_copy_it_to_your_clipboard: "per copiarlo negli appunti.",
        no_api_token_is_set_anyone_who_can:
          "Non è impostato alcun token API. Chiunque possa raggiungere questo server può accedere agli endpoint esposti. Usalo solo su reti locali fidate oppure configura un token robusto tramite la CLI o il file di configurazione. Proteggere l'accesso è tua responsabilità.",
        state_directory: "Directory di stato",
        base_state_path_used_by_managed_child:
          "Percorso di stato di base usato dalle istanze figlie gestite.",
        trust_proxy_headers: "Considera fidati gli header dei proxy",
        trust_x_forwarded_proto_x_forwarded:
          "Considera fidati gli header X-Forwarded-Proto, X-Forwarded-Host e Forwarded per i controlli di origine. Attiva solo quando PinchTab gira dietro un reverse proxy fidato (ad es. Caddy, nginx).",
        enabled: "Attivato",
        disabled: "Disattivato",
        cookie_secure_mode: "Modalità Secure dei cookie",
        controls_whether_dashboard_session:
          "Controlla se i cookie di sessione del pannello richiedono HTTPS. Auto attiva Secure solo su HTTPS. Forza Secure è adatto quando TLS è davanti a PinchTab.",
        auto: "Automatico",
        force_secure: "Forza Secure",
        force_insecure: "Forza non sicuro",
        force_secure_blocks_dashboard_login_on:
          "Forza Secure blocca l'accesso al pannello su HTTP semplice. Usalo quando PinchTab è servito direttamente su HTTPS o dietro un proxy fidato. Se TLS termina davanti a PinchTab, attiva",
        trustproxyheaders: "trustProxyHeaders",
        so_forwarded_https_requests_are:
          "così le richieste HTTPS inoltrate vengono riconosciute.",
        persist_dashboard_sessions: "Mantieni le sessioni del pannello",
        keep_dashboard_login_sessions_across:
          "Mantiene le sessioni di accesso al pannello tra i riavvii del server. Disattivalo se vuoi che ogni riavvio imponga un nuovo accesso.",
        session_idle_timeout: "Timeout di inattività della sessione",
        how_long_an_unused_dashboard_session:
          "Per quanto tempo una sessione del pannello inutilizzata resta valida. Nella configurazione è memorizzato in secondi.",
        session_max_lifetime: "Durata massima della sessione",
        absolute_lifetime_for_a_dashboard:
          "Durata assoluta di una sessione del pannello prima che debba essere ricreata, anche se attiva.",
        require_elevation_for_config_saves:
          "Richiedi elevazione per salvare la configurazione",
        ask_for_api_token_re_entry_before:
          "Chiede di reinserire il token API prima di salvare le modifiche alla configurazione del backend. Disattivato per impostazione predefinita.",
        allow_attach: "Consenti il collegamento",
        permit_attaching_pinchtab_to_externally:
          "Consente di collegare PinchTab a sessioni Chrome gestite esternamente.",
        enable: "Attiva",
        allowed_attach_hosts: "Host consentiti per il collegamento",
        comma_separated_host_allowlist_for:
          'Elenco di host consentiti per le richieste di collegamento, separati da virgole. Includi solo host che controlli e di cui ti fidi. Usare "*" disattiva l\'elenco degli host consentiti.',
        allowhosts: 'allowHosts: ["*"]',
        is_a_documented_non_default_security:
          "è un'override documentato, non predefinito e che riduce la sicurezza. Disattiva completamente l'elenco degli host consentiti e permette richieste di collegamento remoto verso qualsiasi host raggiungibile con uno schema consentito. Usalo solo su reti isolate e controllate dall'operatore.",
        hosts_in_this_allowlist_may_be_used_for:
          "Gli host in questo elenco possono essere usati per richieste di collegamento remoto. Voci ampie o non fidate ampliano il confine di fiducia e possono esporre sessioni Chrome esterne e contenuti del browser.",
        allowed_attach_schemes: "Schemi consentiti per il collegamento",
        comma_separated_scheme_allowlist:
          "Elenco di schemi consentiti separati da virgole, di solito ws e wss.",
      },
      observabilitysettingssection: {
        observability: "Osservabilità",
        activity_logging_tracks_api_requests:
          "Il registro delle attività traccia le richieste API per il debug e l'audit. I log sono memorizzati localmente e consultabili dalla pagina Attività.",
        activity_logging: "Registro delle attività",
        enable_or_disable_activity_event:
          "Attiva o disattiva la registrazione degli eventi di attività.",
        enabled: "Attivato",
        disabled: "Disattivato",
        retention_days: "Conservazione (giorni)",
        how_long_to_keep_activity_logs_before:
          "Per quanto tempo conservare i log delle attività prima della pulizia automatica. Una conservazione più lunga occupa più spazio su disco ma offre uno storico di audit migliore.",
        session_idle_timeout_seconds:
          "Timeout di inattività della sessione (secondi)",
        time_before_an_inactive_agent_session:
          "Tempo prima che una sessione agente inattiva sia considerata inattiva. Serve a raggruppare l'attività per sessione.",
      },
      profilessettingssection: {
        profiles: "Profili",
        profile_storage_is_host_level_changing:
          "L'archivio dei profili è a livello di host. Cambiare la directory di base richiede un riavvio, perché il gestore dei profili e l'orchestratore vengono creati con essa all'avvio.",
        profiles_base_directory: "Directory di base dei profili",
        root_directory_where_browser_profiles:
          "Directory radice in cui sono memorizzati i profili del browser.",
        default_profile: "Profilo predefinito",
        profile_name_used_when_the_server_needs:
          "Nome del profilo usato quando il server necessita di un valore predefinito implicito.",
      },
      defaultssettingssection: {
        instance_defaults: "Valori predefiniti delle istanze",
        these_values_are_written_to_config_and:
          "Questi valori vengono scritti nella configurazione e usati per le nuove istanze gestite. Le istanze già in esecuzione mantengono la configurazione attuale.",
        mode: "Modalità",
        default_browser_mode_for_new_launches:
          "Modalità browser predefinita per i nuovi avvii.",
        headless: "Senza interfaccia",
        headed: "Con interfaccia",
        stealth_level: "Livello di occultamento",
        bot_detection_evasion_profile_higher:
          "Profilo di elusione del rilevamento bot. I livelli più alti possono influire sul monitoraggio degli errori e su alcune funzioni del browser.",
        light: "Leggero",
        medium: "Medio",
        full: "Completo",
        light_2: "Leggero:",
        default_baseline_stealth_keeps_the:
          "Occultamento di base predefinito. Mantiene l'avvio a rischio più basso e il contratto JS nascondendo i marcatori di automazione di base.",
        default_product_security_baseline:
          "✓ Base di sicurezza predefinita del prodotto",
        no_intentional_api_realism_or_security:
          "✓ Nessun compromesso intenzionale su realismo delle API o sicurezza",
        medium_2: "Medio:",
        non_default_risk_mode_adds_client_hints:
          "Modalità a rischio non predefinita. Aggiunge Client Hints, shim di `chrome.runtime`, propagazione agli iframe, filtraggio dello stack e mascheramento di funzioni dall'aspetto nativo per migliorare la compatibilità anti-bot.",
        alters_browser_visible_apis_and_error:
          "⚠ Modifica le API visibili al browser e il comportamento di errori e stack. Gli strumenti di monitoraggio e debug possono vedere risultati diversi.",
        permissions_and_compatibility_shims_can:
          "⚠ Permessi e shim di compatibilità possono restituire valori alterati di proposito. Non usarlo come base di sicurezza predefinita.",
        reports_that_require_explicitly:
          "⚠ Le segnalazioni che richiedono di attivare esplicitamente Medio vanno trattate come accettazione volontaria del rischio, non come comportamento del percorso predefinito.",
        full_2: "Completo:",
        highest_risk_non_default_mode_adds:
          "Modalità non predefinita a rischio più alto. Aggiunge alterazioni di grafica, canvas, audio, colori di sistema e WebRTC oltre a Medio.",
        browser_output_is_intentionally_less:
          "⚠ L'output del browser è volutamente meno nativo e meno stabile. Rendering, media e rete possono rompersi o divergere dal Chrome reale.",
        this_mode_is_not_an_acceptable_default:
          "⚠ Questa modalità non è una postura di sicurezza predefinita accettabile. Attivala solo se accetti esplicitamente la superficie di compromesso.",
        reports_that_depend_on_enabling_full:
          "⚠ Le segnalazioni che dipendono dall'attivazione di Completo vanno classificate come rischio non predefinito dell'operatore, a meno che non sia dimostrato un bypass nel percorso predefinito.",
        webrtc_webgl_canvas_and_audio_behavior:
          "⚠ Il comportamento di WebRTC, WebGL, canvas e audio può divergere dal Chrome di riferimento.",
        tab_eviction_policy: "Politica di rimozione delle schede",
        how_pinchtab_behaves_when_a_managed:
          "Come si comporta PinchTab quando un'istanza gestita raggiunge il limite di schede.",
        reject_new_tabs: "Rifiuta nuove schede",
        close_oldest: "Chiudi la più vecchia",
        close_least_recently_used: "Chiudi la meno usata di recente",
        tab_lifecycle: "Ciclo di vita delle schede",
        close_idle_closes_a_tab_after_a_text:
          "«Chiudi inattive» chiude una scheda dopo una risposta /text, /snapshot o /action una volta trascorso il ritardo; /navigate lo annulla. «Congela inattive» congela qualsiasi scheda che nessuna richiesta ha toccato durante il ritardo e la scongela alla richiesta successiva.",
        keep_never_auto_close: "Mantieni (mai chiudere automaticamente)",
        close_idle: "Chiudi inattive",
        freeze_idle: "Congela inattive",
        auto_close_delay: "Ritardo di chiusura automatica",
        seconds_of_idleness_before_an_idle_tab:
          "Secondi di inattività prima che una scheda inattiva venga chiusa o congelata. Si applica solo quando il ciclo di vita è «Chiudi inattive» o «Congela inattive».",
        restore_tabs_on_startup: "Ripristina le schede all'avvio",
        when_enabled_tabs_open_at_shutdown_are:
          "Se attivo, le schede aperte allo spegnimento vengono riaperte all'avvio successivo. Disattivato per impostazione predefinita — le schede chiuse restano chiuse dopo il riavvio.",
        enable: "Attiva",
        max_tabs: "Schede massime",
        maximum_number_of_tabs_per_managed:
          "Numero massimo di schede per istanza gestita.",
        max_parallel_tabs: "Schede parallele massime",
        set_to_0_to_auto_detect_from_cpu_count:
          "Imposta 0 per il rilevamento automatico dal numero di CPU.",
        timezone: "Fuso orario",
        optional_timezone_override_for_launched:
          "Sostituzione facoltativa del fuso orario per le istanze avviate.",
        europe_rome: "Europe/Rome",
        user_agent: "User agent",
        optional_override_applied_to_new:
          "Sostituzione facoltativa applicata alle nuove istanze gestite.",
        custom_user_agent: "User agent personalizzato",
        applies_to_newly_launched_managed:
          "Si applica alle istanze gestite appena avviate.",
      },
      securityidpisettingssection: {
        security_idpi: "Sicurezza IDPI",
        indirect_prompt_injection_controls:
          "I controlli sull'iniezione indiretta di prompt limitano i siti web consentiti e aggiungono protezioni al contenuto estratto prima che raggiunga l'automazione a valle.",
        idpi_is_disabled_browser_content_is_not:
          "L'IDPI è disattivato. Il contenuto del browser non viene filtrato dall'elenco dei siti consentiti né dalle protezioni dei contenuti.",
        the_website_whitelist_is_not_set_to_a:
          "L'elenco dei siti consentiti non è impostato su una lista di domini ristretta. È la principale difesa dell'IDPI e andrebbe configurata.",
        the_website_whitelist_contains_which:
          "L'elenco dei siti consentiti contiene '*', il che di fatto disattiva la restrizione dei domini.",
        idpi_is_enforcing_a_specific_website:
          "L'IDPI sta applicando un elenco specifico di siti consentiti e protezioni dei contenuti.",
        enable: "Attiva",
        custom_patterns: "Pattern personalizzati",
        optional_comma_separated_phrases_to:
          "Frasi facoltative separate da virgole da trattare come contenuto sospetto di iniezione di prompt.",
        ignore_previous_instructions_exfiltrate:
          "ignore previous instructions, exfiltrate data",
      },
      timeoutssettingssection: {
        timeouts: "Timeout",
        runtime_timing_defaults_written_into:
          "Valori predefiniti di temporizzazione scritti nelle nuove configurazioni dei processi figli. Le istanze già in esecuzione mantengono i timeout attuali.",
      },
      browsersettingssection: {
        browser_runtime: "Runtime del browser",
        these_settings_are_written_into_the:
          "Queste impostazioni vengono scritte nella configurazione del processo figlio generata per le nuove istanze gestite.",
        provider: "Provider",
        browser_backend_used_for_new_managed:
          "Backend del browser usato per le nuove istanze gestite.",
        chrome: "Chrome",
        cloakbrowser: "CloakBrowser",
        ghost_chrome: "Ghost + Chrome",
        browser_version: "Versione del browser",
        version_string_used_in_generated_ua:
          "Stringa di versione usata nei valori predefiniti generati di user agent e fingerprint.",
        browser_binary: "Binario del browser",
        optional_path_override_for_the_chrome:
          "Sostituzione facoltativa del percorso dell'eseguibile di Chrome o CloakBrowser.",
        fingerprint_seed: "Seme del fingerprint",
        deterministic_cloakbrowser_identity:
          "Seme di identità deterministico di CloakBrowser. Lascia vuoto per un'identità nuova a ogni avvio.",
        fingerprint_platform: "Piattaforma del fingerprint",
        native_platform_fingerprint_reported_by:
          "Fingerprint della piattaforma nativa riportato da CloakBrowser.",
        auto: "Automatico",
        windows: "Windows",
        macos: "macOS",
        linux: "Linux",
        cloak_locale: "Locale di Cloak",
        locale_passed_as_fingerprint_locale:
          "Locale passato come --fingerprint-locale.",
        cloak_timezone: "Fuso orario di Cloak",
        timezone_passed_as_fingerprint_timezone:
          "Fuso orario passato come --fingerprint-timezone.",
        webrtc_ip: "IP WebRTC",
        explicit_replacement_ip_or_auto_for:
          "IP di sostituzione esplicito, oppure auto per far risolvere a CloakBrowser l'IP di uscita del proxy.",
        fonts_directory: "Directory dei font",
        directory_containing_target_platform:
          "Directory contenente i font della piattaforma di destinazione per CloakBrowser.",
        storage_quota: "Quota di archiviazione",
        storage_quota_in_mb_passed_as:
          "Quota di archiviazione in MB passata come --fingerprint-storage-quota.",
        native_stealth_only: "Solo occultamento nativo",
        disable_pinchtab_js_stealth_overlays:
          "Disattiva le sovrapposizioni di occultamento JS di PinchTab e i flag di avvio che nascondono l'automazione.",
        use_cloakbrowser_native_patches: "Usa le patch native di CloakBrowser",
        extra_flags: "Flag aggiuntivi",
        additional_chrome_flags_appended_when:
          "Flag Chrome aggiuntivi accodati all'avvio delle istanze gestite.",
        extension_paths: "Percorsi delle estensioni",
        comma_separated_extension_directories:
          "Directory delle estensioni da caricare, separate da virgole. Per impostazione predefinita PinchTab usa la cartella locale extensions/ all'interno della sua directory di stato o configurazione. Imposta qui percorsi personalizzati per sostituire quel valore predefinito, oppure svuota il campo per disattivare il caricamento delle estensioni.",
      },
      dashboardsettingssection: {
        dashboard_preferences: "Preferenze del pannello",
        language: "Lingua",
        choose_the_language_of_the_dashboard:
          "Scegli la lingua dell'interfaccia della dashboard.",
        these_controls_affect_this_dashboard_ui:
          "Queste impostazioni riguardano solo questa interfaccia del pannello. Sono memorizzate localmente nel browser e non richiedono il riavvio del backend.",
        screencast_frame_rate: "Frequenza dello screencast",
        controls_how_often_live_previews:
          "Controlla con quale frequenza le anteprime in tempo reale richiedono nuovi fotogrammi.",
        fps: "fps",
        screencast_quality: "Qualità dello screencast",
        jpeg_quality_for_tab_preview_streams:
          "Qualità JPEG dei flussi di anteprima delle schede.",
        screencast_width: "Larghezza dello screencast",
        maximum_preview_width_for_live_tiles:
          "Larghezza massima dell'anteprima per i riquadri in tempo reale.",
        px: "px",
        memory_metrics: "Metriche di memoria",
        poll_every_running_instance_for_browser:
          "Interroga ogni istanza in esecuzione sulla memoria del browser a ogni ciclo di monitoraggio: RSS sull'intero albero dei processi di Chrome, più heap JS e contatori DOM letti da ogni scheda aperta via CDP. Costo misurato: circa un millisecondo per scheda aperta più qualche decina di millisecondi per la scansione dell'albero dei processi, per istanza e per ciclo.",
        enable: "Attiva",
        polling_interval: "Intervallo di polling",
        how_frequently_the_dashboard_asks_the:
          "Con quale frequenza il pannello chiede al backend metriche aggiornate.",
        s: "s",
        reasoning_output: "Output del ragionamento",
        choose_whether_the_live_agent_feed:
          "Scegli se il flusso dell'agente in tempo reale mostra chiamate agli strumenti, aggiornamenti di avanzamento o entrambi.",
        tool_calls_only: "Solo chiamate agli strumenti",
        progress_only: "Solo avanzamento",
        both: "Entrambi",
      },
      autosolversettingssection: {
        autosolver: "AutoSolver",
        these_settings_are_saved_into_the:
          "Queste impostazioni vengono salvate nel file di configurazione di PinchTab. Le chiavi API dei provider esterni sono di sola scrittura e vanno impostate direttamente in quel file.",
        config_file: "File di configurazione",
        dashboard_edits_are_written_back_to:
          "Le modifiche fatte dal pannello vengono riscritte in questo file. Imposta le chiavi dei provider esterni sotto autoSolver.external nello stesso file di configurazione.",
        config_path_unavailable: "Percorso di configurazione non disponibile",
        enable_autosolver: "Attiva AutoSolver",
        turns_on_the_autosolver_runtime:
          "Attiva la configurazione di runtime di AutoSolver per i flussi di challenge supportati.",
        enabled: "Attivato",
        disabled: "Disattivato",
        auto_trigger: "Attivazione automatica",
        automatically_run_autosolver_after:
          "Esegue AutoSolver automaticamente dopo richieste di navigazione e azione supportate.",
        trigger_on_navigate: "Attiva alla navigazione",
        run_autosolver_checks_after_successful:
          "Esegue i controlli di AutoSolver dopo chiamate di navigazione riuscite.",
        trigger_on_action: "Attiva sulle azioni",
        run_autosolver_checks_after_successful_2:
          "Esegue i controlli di AutoSolver dopo chiamate di azione riuscite.",
        max_attempts: "Tentativi massimi",
        maximum_autosolver_retries_before_the:
          "Numero massimo di tentativi di AutoSolver prima che la pipeline desista.",
        solver_timeout_sec: "Timeout del solver (sec)",
        per_solver_timeout_for_each_attempt:
          "Timeout per singolo solver a ogni tentativo.",
        retry_base_delay_ms: "Ritardo base dei tentativi (ms)",
        base_retry_backoff_delay_between:
          "Ritardo di attesa base tra i tentativi di AutoSolver.",
        retry_max_delay_ms: "Ritardo massimo dei tentativi (ms)",
        maximum_retry_backoff_delay_cap_between:
          "Limite massimo del ritardo di attesa tra i tentativi di AutoSolver.",
        solvers: "Solver",
        comma_separated_ordered_list_of_solver:
          "Elenco ordinato dei nomi dei solver da provare, separati da virgole. Usa GET /solvers o GET /config/autosolver per confermare i nomi disponibili a runtime.",
        llm_provider: "Provider LLM",
        optional_provider_name_used_when_llm:
          "Nome del provider facoltativo usato quando il fallback LLM è attivo.",
        llm_fallback: "Fallback LLM",
        use_an_llm_as_the_last_resort_after:
          "Usa un LLM come ultima risorsa dopo il fallimento dei solver registrati.",
        external_provider_keys: "Chiavi dei provider esterni",
        capsolver_and_2captcha_credentials_are:
          "Le credenziali di Capsolver e 2Captcha non sono mostrate nel pannello e vanno gestite nel file di configurazione. Questi provider compaiono negli elenchi dei solver a runtime solo quando sono configurate le chiavi.",
        open_the_config_file_above_and_set:
          "Apri il file di configurazione qui sopra e imposta",
        autosolver_external_capsolverkey: "autoSolver.external.capsolverKey",
        autosolver_external_twocaptchakey: "autoSolver.external.twoCaptchaKey",
        there_the_dashboard_does_not_display_or:
          "lì. Il pannello non mostra né modifica quei valori, e non esistono variabili d'ambiente che li sostituiscano.",
      },
    },
    monitoring: {
      monitoringemptystate: {
        starting_default_instance: "Avvio dell'istanza predefinita…",
        start_default_instance: "Avvia l'istanza predefinita",
        open_default_profile: "Apri il profilo predefinito",
        no_active_instances: "Nessuna istanza attiva",
        pinchtab_expected_a_default_instance:
          "PinchTab si aspettava un'istanza predefinita, ma non è mai diventata disponibile. Avviala manualmente o controlla il profilo.",
        start_the_default_instance_or_open:
          "Avvia l'istanza predefinita oppure apri Profili per avviarne un'altra.",
        waiting_for_default_profile:
          "PinchTab sta aspettando che il profilo predefinito sia online. Nuovo controllo automatico ({{count}} rimasti).",
      },
      defaultinstancemodal: {
        start_default_instance: "Avvia l'istanza predefinita",
        cancel: "Annulla",
        start_headed: "Avvia con interfaccia",
        start_headless: "Avvia senza interfaccia",
        choose_how_to_launch_the_default:
          "Scegli come avviare il profilo predefinito per questa sessione.",
        configured_default_mode: "Modalità predefinita configurata:",
      },
    },
    profilespage: {
      loading_profiles: "Caricamento dei profili…",
      no_profiles_yet: "Ancora nessun profilo",
      click_new_profile_to_create_one:
        "Fai clic su Nuovo profilo per crearne uno",
      new_profile: "Nuovo profilo",
      profiles: "Profili",
      total: "totale",
      no_account: "Nessun account",
      profile_deleted: "Profilo «{{name}}» eliminato",
    },
    settingspage: {
      confirm_admin_action: "Conferma l'azione di amministrazione",
      cancel: "Annulla",
      verifying: "Verifica in corso…",
      continue: "Continua",
      re_enter_the_api_token_to_save_backend:
        "Reinserisci il token API per salvare le modifiche alla configurazione del backend. La sessione elevata resta attiva per poco, quindi non devi ripetere l'operazione per ogni azione di amministrazione.",
      api_token: "Token API",
      paste_api_token: "Incolla il token API",
      restart_required: "Riavvio necessario",
      reset: "Reimposta",
      saving: "Salvataggio…",
      save: "Salva",
      restart_needed_for: "Riavvio necessario per:",
      loading_settings: "Caricamento delle impostazioni…",
      settings_eyebrow: "Impostazioni",
    },
  },
  activities: {
    activityexplorer: {
      agent: "Agente",
      all: "Tutti",
      session: "Sessione",
      request_timeline: "Cronologia delle richieste",
      activity: "Attività",
      failed_to_load_activity: "Caricamento dell'attività non riuscito",
    },
    agentstreampanel: {
      no_matching_activity: "Nessuna attività corrispondente",
      adjust_the_filters_or_generate_some:
        "Modifica i filtri o genera traffico dalla CLI, dal MCP o dal pannello.",
    },
    streamrow: {
      ms: "ms",
      navigate_to_page: "Naviga alla pagina",
      capture_page_snapshot: "Cattura un'istantanea della pagina",
      open_screencast_stream: "Apri il flusso dello screencast",
      extract_text_from_page: "Estrai il testo dalla pagina",
      click_on_page: "Fai clic sulla pagina",
      double_click_on_page: "Fai doppio clic sulla pagina",
      type_into_page: "Digita nella pagina",
      hover_on_page: "Passa sopra la pagina",
      fill_field: "Compila il campo",
      select_option: "Seleziona un'opzione",
      scroll_page: "Scorri la pagina",
      press_key: "Premi un tasto",
      wait_for_condition: "Attendi una condizione",
      evaluate_javascript: "Esegui JavaScript",
      upload_file: "Carica file",
      download_file: "Scarica file",
      on_tab: " nella scheda ",
      navigate_to_url: "Vai a {{url}}",
      click_ref: 'Fai clic su "{{ref}}"',
      double_click_ref: 'Doppio clic su "{{ref}}"',
      type_into_ref: 'Digita in "{{ref}}"',
      hover_ref: 'Passa il cursore su "{{ref}}"',
      fill_ref: 'Compila "{{ref}}"',
      select_ref: 'Seleziona "{{ref}}"',
      press_key_on_ref: 'Premi un tasto su "{{ref}}"',
    },
    activityline: {
      progress: "AVANZAMENTO",
      agent_reported_progress: "L'agente ha segnalato un avanzamento",
      ms: "ms",
    },
    activityitemline: {
      tab_paused_for_human_handoff: "scheda in pausa per intervento manuale",
      tab_is_paused_for_human_handoff:
        "La scheda è in pausa per l'intervento manuale",
      resume_automation_after_manual:
        "Riprendi l'automazione dopo aver risolto manualmente la challenge",
      resuming: "Ripresa in corso…",
      resolve_challenge: "Risolvi la challenge",
      browser_was_escalated: "Il browser è stato elevato",
      escalated: "elevato",
      navigate_to_page: "Naviga alla pagina",
      capture_page_snapshot: "Cattura un'istantanea della pagina",
      open_screencast_stream: "Apri il flusso dello screencast",
      extract_text_from_page: "Estrai il testo dalla pagina",
      take_screenshot: "Cattura uno screenshot",
      export_page_as_pdf: "Esporta la pagina come PDF",
      click_on_page: "Fai clic sulla pagina",
      double_click_on_page: "Fai doppio clic sulla pagina",
      type_into_page: "Digita nella pagina",
      hover_on_page: "Passa sopra la pagina",
      fill_field: "Compila il campo",
      select_option: "Seleziona un'opzione",
      scroll_page: "Scorri la pagina",
      press_key: "Premi un tasto",
      wait_for_condition: "Attendi una condizione",
      evaluate_javascript: "Esegui JavaScript",
      upload_file: "Carica file",
      download_file: "Scarica file",
      resume_failed: "Ripresa non riuscita",
      navigate_to_url: "Vai a {{url}}",
      click_ref: 'Fai clic su "{{ref}}"',
      double_click_ref: 'Doppio clic su "{{ref}}"',
      type_into_ref: 'Digita in "{{ref}}"',
      hover_ref: 'Passa il cursore su "{{ref}}"',
      fill_ref: 'Compila "{{ref}}"',
      select_ref: 'Seleziona "{{ref}}"',
      press_key_on_ref: 'Premi un tasto su "{{ref}}"',
    },
    activitytimeline: {
      timeline: "Cronologia",
      recent_events: "Eventi recenti",
      no_matching_activity: "Nessuna attività corrispondente",
      adjust_the_filters_or_generate_some:
        "Modifica i filtri o genera traffico dalla CLI, dal MCP o dal pannello.",
    },
    activefilterbar: {
      clear_filters: "Cancella i filtri",
    },
    activityfiltermenu: {
      "200": "200",
      "3600": "3600",
      profile: "Profilo",
      tab: "Scheda",
      agent: "Agente",
      action: "Azione",
      advanced_filters: "Filtri avanzati",
      hide: "Nascondi",
      show: "Mostra",
      instance: "Istanza",
      path_prefix: "Prefisso del percorso",
      tabs_or_instances: "/tabs/ or /instances/",
      age_seconds: "Età (secondi)",
      limit: "Limite",
      clear: "Cancella",
      search: "Cerca",
      any_profile: "Qualsiasi profilo",
      any_tab: "Qualsiasi scheda",
      any_agent: "Qualsiasi agente",
      any_action: "Qualsiasi azione",
      any_instance: "Qualsiasi istanza",
    },
    agentworkspacesidebar: {
      agents: "Agenti",
      activities: "Attività",
      no_agent_activity_observed_yet:
        "Nessuna attività dell'agente osservata finora",
      all_agents: "Tutti gli agenti",
    },
    copyidpill: {
      copied: "Copiato",
      copy_tab_id: "Copia l'ID della scheda {{id}}",
    },
    hooks: {
      useactivitydata: {
        failed_to_load_activity: "Caricamento dell'attività non riuscito",
        failed_to_load_agent_activity:
          "Caricamento dell'attività dell'agente non riuscito",
      },
    },
  },
  settings: {
    sections: {
      dashboard: {
        dashboard: "Pannello",
        local_monitoring_and_screencast:
          "Preferenze locali di monitoraggio e screencast.",
      },
      defaults: {
        instance_defaults: "Valori predefiniti delle istanze",
        how_new_managed_browser_instances_launch:
          "Come vengono avviate le nuove istanze browser gestite.",
      },
      orchestration: {
        orchestration: "Orchestrazione",
        routing_strategy_port_range_and:
          "Strategia di routing, intervallo di porte e politica di allocazione.",
      },
      security: {
        security: "Sicurezza",
        sensitive_endpoint_gates_and_access:
          "Blocchi degli endpoint sensibili e controlli di accesso.",
      },
      "security-idpi": {
        security_idpi: "Sicurezza IDPI",
        indirect_prompt_injection_website_and:
          "Difese di siti web e contenuti contro l'iniezione indiretta di prompt.",
      },
      profiles: {
        profiles: "Profili",
        shared_profile_storage_and_default:
          "Archivio condiviso dei profili e comportamento del profilo predefinito.",
      },
      network: {
        network_attach: "Rete e collegamento",
        server_binding_auth_and_attach_policy:
          "Binding del server, autenticazione e politica di collegamento.",
      },
      browser: {
        browser_runtime: "Runtime del browser",
        chrome_binary_version_flags_and:
          "Binario di Chrome, versione, flag ed estensioni.",
      },
      timeouts: {
        timeouts: "Timeout",
        action_navigation_shutdown_and_wait:
          "Temporizzazione di azioni, navigazione, spegnimento e attesa.",
      },
      autosolver: {
        autosolver: "AutoSolver",
        challenge_solving_behavior_and_config:
          "Comportamento di risoluzione delle challenge e provider basati sul file di configurazione.",
      },
      observability: {
        observability: "Osservabilità",
        activity_logging_and_retention_settings:
          "Impostazioni di registro attività e conservazione.",
      },
    },
    security: {
      endpoints: {
        allowEvaluate: {
          allow_evaluate: "Consenti evaluate",
        },
        allowMacro: {
          allow_macro: "Consenti macro",
        },
        allowScreencast: {
          allow_screencast: "Consenti screencast",
        },
        allowDownload: {
          allow_download: "Consenti download",
        },
        allowCookies: {
          allow_cookies: "Consenti cookie",
        },
        allowUpload: {
          allow_upload: "Consenti upload",
        },
        allowNetworkIntercept: {
          allow_network_interception: "Consenti intercettazione di rete",
          lets_agents_install_rules_to_abort_or:
            "Consente agli agenti di installare regole per annullare o soddisfare (simulare) richieste HTTP su una scheda. Quando è attivo, la falsificazione delle risposte è VIETATA sugli host in «Siti web consentiti» qui sotto e CONSENTITA altrove. Falsificare le risposte su host che hai autorizzato l'agente a usare (ad es. la tua banca) è il risultato a rischio più alto — ecco perché sono protetti gli host dell'elenco consentiti e non il contrario. Le preflight OPTIONS sono saltate per impostazione predefinita per non rompere CORS.",
        },
        allowFileScheme: {
          allow_file_navigation: "Consenti la navigazione file://",
          lets_agents_open_local_file_urls_a_file:
            "Consente agli agenti di aprire URL file:// locali. Un URL file:// non ha host, quindi NON è limitato da «Siti web consentiti» qui sotto e aggira la protezione da SSRF e IP privati — attivarlo concede accesso in lettura (tramite istantanea, screenshot o scraping) a qualsiasi file locale che il processo del server possa leggere. Resta bloccato finché è attivo un elenco consentiti in modalità rigorosa. Attivalo solo su macchine fidate a tenant singolo.",
        },
      },
      idpi: {
        enabled: {
          enable_idpi: "Attiva IDPI",
          turn_on_indirect_prompt_injection:
            "Attiva le difese contro l'iniezione indiretta di prompt.",
        },
        strictMode: {
          strict_mode: "Modalità rigorosa",
          block_disallowed_domains_and_suspicious:
            "Blocca domini non consentiti e contenuti sospetti invece di limitarsi ad avvisare.",
        },
        scanContent: {
          scan_content: "Analizza i contenuti",
          inspect_extracted_text_and_snapshots:
            "Esamina il testo estratto e le istantanee alla ricerca di pattern di iniezione di prompt.",
        },
        wrapContent: {
          wrap_content: "Avvolgi i contenuti",
          mark_returned_page_text_as_untrusted:
            "Contrassegna il testo della pagina restituito come contenuto non attendibile per i consumatori a valle.",
        },
      },
    },
    defaults: {
      booleans: {
        blockImages: {
          block_images: "Blocca immagini",
        },
        blockMedia: {
          block_media: "Blocca contenuti multimediali",
        },
        blockAds: {
          block_ads: "Blocca annunci",
        },
        noAnimations: {
          disable_css_animations: "Disattiva le animazioni CSS",
        },
        noRestore: {
          skip_session_restore: "Salta il ripristino della sessione",
        },
      },
      timeouts: {
        actionSec: {
          action_timeout: "Timeout delle azioni",
          maximum_time_for_action_requests:
            "Tempo massimo per le richieste di azione.",
        },
        navigateSec: {
          navigate_timeout: "Timeout di navigazione",
          maximum_time_for_navigation_requests:
            "Tempo massimo per le richieste di navigazione.",
        },
        shutdownSec: {
          shutdown_timeout: "Timeout di spegnimento",
          grace_period_before_force_closing_a:
            "Periodo di tolleranza prima di chiudere forzatamente un processo figlio.",
        },
        waitNavMs: {
          wait_after_navigation_delay: "Ritardo dopo la navigazione",
          post_navigation_stabilization_delay_in:
            "Ritardo di stabilizzazione dopo la navigazione, in millisecondi.",
        },
      },
    },
    notices: {
      backend_config_saved_dynamic_changes:
        "Configurazione del backend salvata. Le modifiche dinamiche sono state applicate dove possibile.",
      backend_config_saved_dynamic_changes_2:
        "Configurazione del backend salvata. Le modifiche dinamiche sono state applicate dove possibile. Per le modifiche a livello di server è consigliato un riavvio.",
      preferencesSaved: "Preferenze del pannello salvate in questo browser.",
    },
    errors: {
      loadFailed: "Caricamento delle impostazioni non riuscito",
      saveFailed: "Salvataggio delle impostazioni non riuscito",
      tokenVerifyFailed: "Verifica del token API non riuscita",
    },
  },
  monitoring: {
    errors: {
      startInstanceFailed: "Avvio dell'istanza non riuscito",
    },
  },
  errors: {
    requestFailed: "Richiesta non riuscita",
  },
  auth: {
    insecureTransport:
      "La sessione del pannello è su HTTP non sicuro; usa HTTPS o localhost per una protezione di sessione più forte.",
  },
};

export default messages;
