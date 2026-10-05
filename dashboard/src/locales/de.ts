import type { Messages } from "../i18n/messages";

const messages: Messages = {
  app: {
    name: "PinchTab",
    checking_server_authentication: "Server-Authentifizierung wird geprüft…",
    pinchtab_is_restarting_or_unreachable:
      "PinchTab startet neu oder ist nicht erreichbar.",
    automatic_retries_stopped: " Automatische Wiederholungen wurden beendet.",
    retry_now: "Jetzt wiederholen",
    refresh: "Aktualisieren",
  },
  profiles: {
    profiletoolbarbuttons: {
      copy_id: "ID kopieren",
      delete: "Löschen",
      save: "Speichern",
      stop: "Stoppen",
      start: "Starten",
      delete_profile: "Profil löschen",
      cancel: "Abbrechen",
      delete_profile_2: 'Profil "',
      every_cookie_login_and_session_stored:
        '" löschen? Alle darin gespeicherten Cookies, Anmeldungen und Sitzungen gehen dauerhaft verloren. Das lässt sich nicht rückgängig machen.',
      copied: "Kopiert",
      failed: "Fehlgeschlagen",
    },
    profilemetainfopanel: {
      profile_panel: "Profilbereich",
      status: "Status",
      port: "Port",
      browser: "Browser",
      size: "Größe",
      account: "Konto",
      identity: "Identität",
      connection: "Verbindung",
      cdp_attached: "CDP verbunden",
      cdp_url: "CDP-URL",
      path: "Pfad",
      not_found: " (nicht gefunden)",
      attached_via_cdp: "Über CDP verbunden",
      headless: "Ohne Oberfläche",
      headed: "Mit Oberfläche",
    },
    profilecard: {
      error: "Fehler",
      stopped: "gestoppt",
      size: "Größe",
      account: "Konto",
      use_when: "Verwenden wenn",
      details: "Details",
      stop: "Stoppen",
      start: "Starten",
    },
    profiledetailspanel: {
      select_a_profile_to_inspect_its:
        "Wähle ein Profil, um Instanz, Live-Tabs und Protokolle zu prüfen.",
      live: "Live",
      tabs: "Tabs",
      logs: "Protokolle",
      no_tabs_open: "Keine Tabs geöffnet.",
      instance_not_running: "Instanz läuft nicht.",
      profile_name: "Profil: {{name}}",
    },
    profilebasicinfopanel: {
      name: "Name",
      use_this_profile_when: "Dieses Profil verwenden wenn",
    },
    profileliveviewpanel: {
      no_tabs_open: "Keine Tabs geöffnet",
      instance_not_running_start_the_profile:
        "Instanz läuft nicht. Starte das Profil, um die Live-Ansicht zu sehen.",
    },
    instancelogspanel: {
      loading_logs: "Protokolle werden geladen…",
      no_instance_logs_available: "Keine Instanzprotokolle verfügbar.",
    },
    groups: {
      user: "Profile",
      temporary: "Temporär",
      quarantined: "Unter Quarantäne",
    },
  },
  components: {
    atoms: {
      debugpanel: {
        debug: "🐛 Debug",
        debug_panel: "Debug-Bereich",
        instances: "Instanzen:",
      },
      emptystate: {
        dashboard: "Übersicht",
      },
      modal: {
        dashboard: "Übersicht",
        close: "Schließen",
      },
      errorboundary: {
        something_went_wrong: "⚠️ Etwas ist schiefgelaufen",
        unknown_error: "Unbekannter Fehler",
        try_again: "Erneut versuchen",
      },
    },
    screencast: {
      screencaststatusbar: {
        decrease_fps: "FPS verringern",
        increase_fps: "FPS erhöhen",
        take_full_quality_screenshot_png:
          "Screenshot in voller Qualität aufnehmen (PNG)",
        download_as_pdf: "Als PDF herunterladen",
        fps: "FPS (",
      },
      screencasttile: {
        tab_preview: "Tab-Vorschau",
        connection_lost: "Verbindung verloren",
        show_static_preview: "Statische Vorschau anzeigen",
        retry_connection: "Verbindung erneut versuchen",
      },
      framedecode: {
        failed_to_decode_screencast_frame:
          "Screencast-Bild konnte nicht dekodiert werden",
      },
    },
    molecules: {
      createprofilemodal: {
        new_profile: "📁 Neues Profil",
        cancel: "Abbrechen",
        create: "Erstellen",
        name: "Name",
        e_g_personal_work_scraping: "z. B. privat, Arbeit, Scraping",
        use_this_profile_when_helps_agents_pick:
          "Dieses Profil verwenden wenn (hilft Agenten, das richtige Profil zu wählen)",
        e_g_i_need_to_access_gmail_for_the_team:
          "z. B. Ich muss mit dem Teamkonto auf Gmail zugreifen",
        import_from_optional_chrome_user_data:
          "Importieren aus (optional — Pfad der Chrome-Benutzerdaten)",
        e_g_users_you_library_application:
          "z. B. /Users/you/Library/Application Support/Google/Chrome",
      },
      navbar: {
        pinchtab: "PinchTab",
        logout: "Abmelden",
        refresh_r: "Aktualisieren (⌘R)",
        toggle_menu: "Menü umschalten",
        monitoring: "Überwachung",
        agents: "Agenten",
        profiles: "Profile",
        settings: "Einstellungen",
      },
      instancestats: {
        instance: "Instanz",
        status: "Status",
        uptime: "Laufzeit",
        port: "Port",
        crashes: "Abstürze",
        browsing: "Surfen",
        tabs: "Tabs",
        domains: "Domains",
        resources: "Ressourcen",
        memory: "Speicher",
        renderers: "Renderer-Prozesse",
        pages: "Seiten",
        js_heap: "JS-Heap",
        dom_nodes: "DOM-Knoten",
        listeners: "Listener",
        frames: "Frames",
        unreadable: "Nicht lesbar",
        just_now: "gerade eben",
        tabs_open_before_it_were_lost: "zuvor geöffnete Tabs gingen verloren",
        rss_across_the_browser_process_tree:
          "RSS über den gesamten Browser-Prozessbaum",
        tabs_that_did_not_answer_not_counted:
          "Tabs ohne Antwort (nicht gezählt)",
        last_crash:
          "zuletzt: {{reason}} um {{time}} · zuvor geöffnete Tabs gingen verloren",
        heap_summary_one: "belegt / gesamt, summiert über {{count}} Tab",
        heap_summary_other: "belegt / gesamt, summiert über {{count}} Tabs",
        document_count_one: "{{count}} Dokument",
        document_count_other: "{{count}} Dokumente",
      },
      agentitem: {
        tab_paused_for_human_handoff: "Tab für manuelle Übernahme pausiert",
        just_now: "gerade eben",
        session_at: "Sitzung {{time}}",
        session_range: "Sitzung {{start}}–{{end}}",
      },
      startinstancemodal: {
        start_profile: "🖥️ Profil starten",
        cancel: "Abbrechen",
        start: "Starten",
        port: "Port",
        auto_select_from_configured_range:
          "Automatisch aus dem konfigurierten Bereich wählen",
        leave_blank_to_auto_select_a_free_port:
          "Leer lassen, um automatisch einen freien Port aus dem konfigurierten Bereich zu wählen.",
        headless_best_for_docker_vps: "Ohne Oberfläche (ideal für Docker/VPS)",
        browser: "Browser",
        server_default: "Server-Standard",
        chrome: "Chrome",
        cloakbrowser: "CloakBrowser",
        ghost_chrome: "Ghost + Chrome",
        direct_launch_command_backup: "Direkter Startbefehl (Ersatz)",
        copy_command: "Befehl kopieren",
        replace: "Ersetzen",
        pinchtab_config_token: "pinchtab config token",
        when_auth_is_enabled: "wenn die Authentifizierung aktiviert ist.",
        with_the_value_from: "mit dem Wert aus",
        port_must_be_a_whole_number_between_1:
          "Der Port muss eine ganze Zahl zwischen 1 und 65535 sein.",
        profile_id_missing: "Profil-ID fehlt",
        failed_to_launch_instance: "Instanz konnte nicht gestartet werden",
        copied: "Kopiert!",
        failed_to_copy: "Kopieren fehlgeschlagen",
      },
      handoffnotifications: {
        human_intervention_required: "Manueller Eingriff erforderlich",
        dismiss_notification: "Benachrichtigung verwerfen",
        reason: "Grund:",
        resume: "Fortsetzen",
      },
      serverstatusbadge: {
        expand_instance_list: "Instanzliste ausklappen",
        collapse_instance_list: "Instanzliste einklappen",
        tab: "Tab",
        restart_required: "Neustart erforderlich",
        server_running: "Server läuft",
        restart_required_2: "Neustart erforderlich",
        running: "Läuft",
        server_running_no_instances: "Server läuft, keine Instanzen",
      },
      serversummary: {
        settings: "Einstellungen",
        server_information: "Serverinformationen",
        technical_details_for_current_session:
          "Technische Details zur aktuellen Sitzung",
        version: "Version",
        uptime: "Laufzeit",
      },
      tabschart: {
        monitoring: "Überwachung",
        live_telemetry: "Live-Telemetrie",
        tabs: "Tabs",
        memory: "Speicher",
        heap: "Heap",
        server_heap: "Server-Heap",
        collecting_data: "Daten werden gesammelt…",
        waiting_for_more_data: "Warte auf weitere Daten…",
      },
      idbadge: {
        click_to_copy_full_id:
          "Klicken, um die vollständige ID zu kopieren: {{id}}",
      },
    },
  },
  tabs: {
    tabbar: {
      tab_paused_for_human_handoff: "Tab für manuelle Übernahme pausiert",
      tab_is_paused_for_human_handoff:
        "Tab ist für die manuelle Übernahme pausiert",
      untitled: "Ohne Titel",
      unpin_and_follow_the_focused_tab_again:
        "Loslösen und dem fokussierten Tab wieder folgen",
      pin_this_tab_selection: "Diese Tab-Auswahl anheften",
      tabs: "Tabs",
      monitoring: "Überwachung",
      pin_tab: "{{title}} anheften",
      unpin_tab_and_follow_focus: "{{title}} loslösen und dem Fokus folgen",
      close_tab: "{{title}} schließen",
      tabs_new: "Tabs ({{count}} neue)",
    },
    selectedtabtitle: {
      untitled: "Ohne Titel",
    },
    instancetabspanel: {
      chart_crashed_check_console: "Diagramm abgestürzt — Konsole prüfen",
      no_tabs_open: "Keine Tabs geöffnet",
      unknown: "Unbekannt",
    },
    tabitem: {
      untitled: "Ohne Titel",
    },
    consolepanel: {
      loading_console_logs: "Konsolenprotokolle werden geladen…",
      no_console_logs_yet: "Noch keine Konsolenprotokolle",
    },
    errorspanel: {
      loading_errors: "Fehler werden geladen…",
      no_errors_yet: "Noch keine Fehler",
    },
    selectedtabpanel: {
      select_a_tab_to_view_details: "Wähle einen Tab, um Details zu sehen",
      no_instance_id_provided_for_live_view:
        "Keine Instanz-ID für die Live-Ansicht angegeben.",
      actions: "Aktionen",
      live: "Live",
      console: "Konsole",
      errors: "Fehler",
    },
  },
  instances: {
    instancelistitem: {
      tabs: "Tabs",
      open_profile: "Profil öffnen",
      restart: "Neu starten",
      stop: "Stoppen",
    },
    instancecard: {
      headless: "Ohne Oberfläche",
      headed: "Mit Oberfläche",
      uptime: "Laufzeit",
      open_dashboard: "Übersicht öffnen",
      stop: "Stoppen",
    },
  },
  pages: {
    monitoringpage: {
      instances: "Instanzen",
      collapse_sidebar: "Seitenleiste einklappen",
    },
    loginpage: {
      authentication: "Authentifizierung",
      enter_api_token: "API-Token eingeben",
      this_pinchtab_server_requires_a_bearer:
        "Dieser PinchTab-Server verlangt ein Bearer-Token, bevor die Übersicht geschützte Routen und APIs laden kann.",
      run: "Führe",
      pinchtab_config_token: "pinchtab config token",
      to_copy_the_token_to_your_clipboard:
        "aus, um das Token in die Zwischenablage zu kopieren.",
      paste_bearer_token: "Bearer-Token einfügen",
      authorizing: "Autorisierung…",
      continue: "Weiter",
      authentication_failed: "Authentifizierung fehlgeschlagen",
    },
    settings: {
      orchestrationsettingssection: {
        orchestration: "Orchestrierung",
        port_range_and_allocation_policy_can_be:
          "Portbereich und Zuteilungsrichtlinie gelten sofort für künftige Starts. Änderungen an Strategie und Neustartrichtlinie erfordern einen Neustart der Übersicht, da Strategierouten und Lebenszykluszustand beim Start registriert werden.",
        strategy: "Strategie",
        controls_instance_lifecycle_and_how:
          "Steuert den Lebenszyklus von Instanzen und wie Kurzrouten weitergeleitet werden.",
        always_on: "Immer aktiv",
        simple: "Einfach",
        explicit: "Explizit",
        simple_autorestart: "Einfacher Auto-Neustart",
        no_instance_hub: "Keine Instanz (Hub)",
        launches_a_default_instance_at_boot_and:
          "Startet beim Hochfahren eine Standardinstanz und startet sie nach einem Absturz neu.",
        launches_one_instance_on_first_request:
          "Startet eine Instanz bei der ersten Anfrage. Kein Auto-Neustart.",
        all_instances_managed_via_api_no:
          "Alle Instanzen werden über die API verwaltet. Keine automatischen Starts.",
        launches_on_first_request_and:
          "Startet bei der ersten Anfrage und startet nach einem Absturz neu.",
        no_local_chrome_processes_acts_as_a_hub:
          "Keine lokalen Chrome-Prozesse. Dient nur als Hub für entfernte Bridges.",
        allocation_policy: "Zuteilungsrichtlinie",
        determines_how_running_instances_are:
          "Legt fest, wie laufende Instanzen für Kurzanfragen ausgewählt werden.",
        first_available: "Erste verfügbare",
        round_robin: "Reihum",
        random: "Zufällig",
        instance_port_start: "Startport der Instanz",
        lower_bound_for_auto_allocated_instance:
          "Untergrenze für automatisch vergebene Instanzports.",
        instance_port_end: "Endport der Instanz",
        upper_bound_for_auto_allocated_instance:
          "Obergrenze für automatisch vergebene Instanzports.",
        max_restarts: "Max. Neustarts",
        maximum_restart_attempts_use_1_for:
          "Maximale Neustartversuche. -1 für unbegrenzt, 0 für keine Neustarts.",
        initial_backoff: "Anfängliche Wartezeit",
        delay_in_seconds_before_the_first:
          "Verzögerung in Sekunden vor dem ersten Neustartversuch.",
        max_backoff: "Maximale Wartezeit",
        upper_bound_in_seconds_for_exponential:
          "Obergrenze in Sekunden für die exponentielle Wartezeit zwischen Neustarts.",
        stable_after: "Stabil nach",
        seconds_the_instance_must_stay_healthy:
          "Sekunden, die die Instanz stabil bleiben muss, bevor der Neustartzähler zurückgesetzt wird.",
      },
      securitysettingssection: {
        security: "Sicherheit",
        these_controls_define_what_risky:
          "Diese Einstellungen legen fest, welche riskanten Fähigkeiten PinchTab bereitstellt.",
        one_or_more_sensitive_endpoint_families:
          "Eine oder mehrere sensible Endpunkt-Familien sind aktiviert. Funktionen wie Skriptausführung, Downloads, Uploads und Live-Aufzeichnung können Risikofähigkeiten bereitstellen. Aktiviere sie nur in vertrauenswürdigen Umgebungen. Für die Absicherung von Netzwerkzugriff, Authentifizierung und nachgelagerter Nutzung bist du selbst verantwortlich.",
        these_endpoint_families_can_expose_high:
          "Diese Endpunkt-Familien können bei Aktivierung Risikofähigkeiten bereitstellen. Schalte sie nur in vertrauenswürdigen Umgebungen ein und nur, wenn du die Verantwortung für Netzwerkzugriff, Authentifizierung und nachgelagerte Nutzung übernimmst.",
        controls_whether_the_corresponding:
          "Steuert, ob die entsprechende Endpunkt-Familie aktiviert ist.",
        enable: "Aktivieren",
        allowed_websites: "Erlaubte Websites",
        comma_separated_domain_allowlist_for:
          "Kommagetrennte Domain-Erlaubnisliste für Webinhalte. Verwende exakte Hosts oder Muster wie *.example.com.",
        "127_0_0_1_localhost_1": "127.0.0.1, localhost, ::1",
        keep_this_list_narrow_empty_or_wildcard:
          "Halte diese Liste eng. Leere Einträge oder Platzhalter schwächen die wichtigste IDPI-Grenze. Das Zulassen nicht lokaler oder nicht vertrauenswürdiger Websites vergrößert die Angriffsfläche des Browsers, auch wenn IDPI aktiv ist.",
        trusted_proxy_cidrs: "Vertrauenswürdige Proxy-CIDRs",
        comma_separated_cidrs_or_ips_whose:
          "Kommagetrennte CIDRs oder IPs, deren vom Browser gemeldete Remote-IP bei der Navigation vertraut werden soll. Nur für bekannte interne Proxys verwenden.",
        "10_1_2_3_10_0_0_0_8": "10.1.2.3, 10.0.0.0/8",
        this_weakens_navigation_ip_checks_for:
          "Dies schwächt die IP-Prüfungen bei der Navigation für passende Remote-IPs ab. Bevorzuge konkrete Proxy-Adressen statt breiter privater Bereiche. Einträge mit nur einer IP gelten als einzelner Host.",
        trusted_resolve_cidrs: "Vertrauenswürdige Auflösungs-CIDRs",
        comma_separated_cidrs_or_ips_that_a:
          "Kommagetrennte CIDRs oder IPs, zu denen ein Hostname bei der Vorprüfung der Navigation aufgelöst werden darf. Gedacht für interne DNS- oder Proxy-Setups.",
        "198_18_0_0_15_10_1_2_3": "198.18.0.0/15, 10.1.2.3",
        this_allows_hostnames_to_resolve_to_non:
          "Dadurch können Hostnamen zu nicht öffentlichen IPs aufgelöst werden. Halte die Liste eng und nimm nur Infrastruktur auf, die du kontrollierst. Einträge mit nur einer IP gelten als einzelner Host.",
      },
      settingssharedcomponents: {
        settings: "Einstellungen",
      },
      networksettingssection: {
        network_attach: "Netzwerk und Anbindung",
        port_and_bind_changes_require_a_restart:
          "Änderungen an Port und Bindeadresse erfordern einen Neustart. Die Verwaltung des API-Tokens erfolgt außerhalb der Übersicht.",
        server_port: "Server-Port",
        http_port_for_the_dashboard_process:
          "HTTP-Port des Übersichtsprozesses.",
        bind_address: "Bindeadresse",
        network_interface_the_dashboard_process:
          "Netzwerkschnittstelle, an die sich der Übersichtsprozess bindet. 127.0.0.1 oder localhost beschränkt die direkte Erreichbarkeit auf den lokalen Rechner.",
        a_non_loopback_bind_is_a_documented_non:
          "Ein Binden an eine Nicht-Loopback-Adresse ist eine dokumentierte, nicht standardmäßige und sicherheitsmindernde Konfigurationsänderung. Sie kann den Server über den lokalen Rechner hinaus verfügbar machen, sofern nicht eine andere Netzwerkgrenze den Zugriff weiterhin einschränkt. Halte ein Token gesetzt und prüfe Proxy- oder Portfreigabeverhalten ausdrücklich.",
        loopback_bind_keeps_direct_server:
          "Das Binden an Loopback hält die direkte Erreichbarkeit des Servers lokal. Der Wechsel zu",
        or_another_non_local_address_widens_the:
          "oder einer anderen nicht lokalen Adresse erweitert die Vertrauensgrenze.",
        api_token: "API-Token",
        bearer_token_required_by_authenticated:
          "Bearer-Token, das authentifizierte Anfragen verlangen, sobald es gesetzt ist. Die Übersicht gibt es nie zurück und verwaltet es nicht.",
        no_token_configured_set_one_through_the:
          "Kein Token konfiguriert. Setze eines über die CLI oder die Konfigurationsdatei.",
        token_configured_manage_rotation:
          "Token konfiguriert. Verwalte die Rotation über die CLI oder die Konfigurationsdatei; der Server gibt den aktuellen Wert nie zurück. Führe",
        pinchtab_config_token: "pinchtab config token",
        to_copy_it_to_your_clipboard:
          "aus, um es in die Zwischenablage zu kopieren.",
        no_api_token_is_set_anyone_who_can:
          "Es ist kein API-Token gesetzt. Jeder, der diesen Server erreichen kann, kann auf freigegebene Endpunkte zugreifen. Nutze ihn nur in vertrauenswürdigen lokalen Netzwerken oder konfiguriere ein starkes Token über die CLI oder die Konfigurationsdatei. Der Schutz des Zugriffs liegt in deiner Verantwortung.",
        state_directory: "Statusverzeichnis",
        base_state_path_used_by_managed_child:
          "Basis-Statuspfad, den verwaltete Kindinstanzen nutzen.",
        trust_proxy_headers: "Proxy-Headern vertrauen",
        trust_x_forwarded_proto_x_forwarded:
          "X-Forwarded-Proto-, X-Forwarded-Host- und Forwarded-Header bei Herkunftsprüfungen vertrauen. Nur aktivieren, wenn PinchTab hinter einem vertrauenswürdigen Reverse-Proxy läuft (z. B. Caddy, nginx).",
        enabled: "Aktiviert",
        disabled: "Deaktiviert",
        cookie_secure_mode: "Cookie-Secure-Modus",
        controls_whether_dashboard_session:
          "Steuert, ob Sitzungscookies der Übersicht HTTPS erfordern. Auto aktiviert Secure nur bei HTTPS. Secure erzwingen ist sinnvoll, wenn TLS vor PinchTab liegt.",
        auto: "Automatisch",
        force_secure: "Secure erzwingen",
        force_insecure: "Unsicher erzwingen",
        force_secure_blocks_dashboard_login_on:
          "Secure erzwingen blockiert die Anmeldung an der Übersicht über einfaches HTTP. Nutze es, wenn PinchTab direkt über HTTPS oder hinter einem vertrauenswürdigen Proxy bereitgestellt wird. Wenn TLS vor PinchTab endet, aktiviere",
        trustproxyheaders: "trustProxyHeaders",
        so_forwarded_https_requests_are:
          ", damit weitergeleitete HTTPS-Anfragen erkannt werden.",
        persist_dashboard_sessions:
          "Sitzungen der Übersicht dauerhaft speichern",
        keep_dashboard_login_sessions_across:
          "Behält Anmeldesitzungen der Übersicht über Serverneustarts hinweg. Deaktivieren, wenn jeder Neustart eine neue Anmeldung erzwingen soll.",
        session_idle_timeout: "Inaktivitätszeitlimit der Sitzung",
        how_long_an_unused_dashboard_session:
          "Wie lange eine ungenutzte Sitzung der Übersicht gültig bleibt. Wird in der Konfiguration in Sekunden gespeichert.",
        session_max_lifetime: "Maximale Lebensdauer der Sitzung",
        absolute_lifetime_for_a_dashboard:
          "Absolute Lebensdauer einer Sitzung der Übersicht, bevor sie neu erstellt werden muss, auch wenn sie aktiv ist.",
        require_elevation_for_config_saves:
          "Erhöhung für Konfigurationsspeicherungen verlangen",
        ask_for_api_token_re_entry_before:
          "Verlangt die erneute Eingabe des API-Tokens, bevor Backend-Konfigurationsänderungen gespeichert werden. Standardmäßig deaktiviert.",
        allow_attach: "Anbindung erlauben",
        permit_attaching_pinchtab_to_externally:
          "Erlaubt das Anbinden von PinchTab an extern verwaltete Chrome-Sitzungen.",
        enable: "Aktivieren",
        allowed_attach_hosts: "Erlaubte Hosts für Anbindung",
        comma_separated_host_allowlist_for:
          'Kommagetrennte Host-Erlaubnisliste für Anbindungsanfragen. Nimm nur Hosts auf, die du kontrollierst und denen du vertraust. "*" deaktiviert die Host-Erlaubnisliste.',
        allowhosts: 'allowHosts: ["*"]',
        is_a_documented_non_default_security:
          "ist eine dokumentierte, nicht standardmäßige und sicherheitsmindernde Übersteuerung. Sie deaktiviert die Host-Erlaubnisliste vollständig und erlaubt entfernte Anbindungsanfragen an jeden erreichbaren Host mit erlaubtem Schema. Nutze sie nur in isolierten, vom Betreiber kontrollierten Netzwerken.",
        hosts_in_this_allowlist_may_be_used_for:
          "Hosts in dieser Erlaubnisliste können für entfernte Anbindungsanfragen genutzt werden. Breite oder nicht vertrauenswürdige Einträge erweitern die Vertrauensgrenze und können externe Chrome-Sitzungen und Browserinhalte offenlegen.",
        allowed_attach_schemes: "Erlaubte Schemata für Anbindung",
        comma_separated_scheme_allowlist:
          "Kommagetrennte Schema-Erlaubnisliste, üblicherweise ws und wss.",
      },
      observabilitysettingssection: {
        observability: "Beobachtbarkeit",
        activity_logging_tracks_api_requests:
          "Das Aktivitätsprotokoll zeichnet API-Anfragen für Debugging und Audits auf. Die Protokolle werden lokal gespeichert und können auf der Seite Aktivität abgefragt werden.",
        activity_logging: "Aktivitätsprotokoll",
        enable_or_disable_activity_event:
          "Aktiviert oder deaktiviert die Aufzeichnung von Aktivitätsereignissen.",
        enabled: "Aktiviert",
        disabled: "Deaktiviert",
        retention_days: "Aufbewahrung (Tage)",
        how_long_to_keep_activity_logs_before:
          "Wie lange Aktivitätsprotokolle vor der automatischen Bereinigung aufbewahrt werden. Längere Aufbewahrung braucht mehr Speicherplatz, liefert aber eine bessere Audit-Historie.",
        session_idle_timeout_seconds:
          "Inaktivitätszeitlimit der Sitzung (Sekunden)",
        time_before_an_inactive_agent_session:
          "Zeit, bevor eine inaktive Agentensitzung als ruhend gilt. Wird verwendet, um Aktivität nach Sitzung zu gruppieren.",
      },
      profilessettingssection: {
        profiles: "Profile",
        profile_storage_is_host_level_changing:
          "Der Profilspeicher ist hostweit. Das Ändern des Basisverzeichnisses erfordert einen Neustart, da Profilmanager und Orchestrator beim Start damit erstellt werden.",
        profiles_base_directory: "Basisverzeichnis der Profile",
        root_directory_where_browser_profiles:
          "Wurzelverzeichnis, in dem Browserprofile gespeichert werden.",
        default_profile: "Standardprofil",
        profile_name_used_when_the_server_needs:
          "Profilname, der verwendet wird, wenn der Server einen impliziten Standard benötigt.",
      },
      defaultssettingssection: {
        instance_defaults: "Instanz-Standardwerte",
        these_values_are_written_to_config_and:
          "Diese Werte werden in die Konfiguration geschrieben und für neue verwaltete Instanzen verwendet. Bereits laufende Instanzen behalten ihre aktuelle Laufzeitkonfiguration.",
        mode: "Modus",
        default_browser_mode_for_new_launches:
          "Standard-Browsermodus für neue Starts.",
        headless: "Ohne Oberfläche",
        headed: "Mit Oberfläche",
        stealth_level: "Tarnstufe",
        bot_detection_evasion_profile_higher:
          "Profil zur Umgehung der Bot-Erkennung. Höhere Stufen können die Fehlerüberwachung und bestimmte Browserfunktionen beeinflussen.",
        light: "Leicht",
        medium: "Mittel",
        full: "Vollständig",
        light_2: "Leicht:",
        default_baseline_stealth_keeps_the:
          "Standard-Basistarnung. Behält den risikofreisten Start und den JS-Vertrag bei und verbirgt grundlegende Automatisierungsmerkmale.",
        default_product_security_baseline:
          "✓ Standard-Sicherheitsbasis des Produkts",
        no_intentional_api_realism_or_security:
          "✓ Kein bewusster Verzicht auf API-Realismus oder Sicherheit",
        medium_2: "Mittel:",
        non_default_risk_mode_adds_client_hints:
          "Nicht standardmäßiger Risikomodus. Ergänzt Client Hints, `chrome.runtime`-Shims, Iframe-Weiterleitung, Stack-Filterung und native wirkende Funktionsmaskierung für bessere Anti-Bot-Kompatibilität.",
        alters_browser_visible_apis_and_error:
          "⚠ Verändert browsersichtbare APIs sowie Fehler- und Stackverhalten. Überwachungs- und Debugging-Werkzeuge können andere Ergebnisse sehen.",
        permissions_and_compatibility_shims_can:
          "⚠ Berechtigungen und Kompatibilitäts-Shims können absichtlich veränderte Werte zurückgeben. Nutze dies nicht als Standard-Sicherheitsbasis.",
        reports_that_require_explicitly:
          "⚠ Berichte, die das ausdrückliche Aktivieren von Mittel erfordern, gelten als bewusste Risikoakzeptanz und nicht als Verhalten des Standardpfads.",
        full_2: "Vollständig:",
        highest_risk_non_default_mode_adds:
          "Nicht standardmäßiger Modus mit dem höchsten Risiko. Ergänzt Grafik-, Canvas-, Audio-, Systemfarb- und WebRTC-Änderungen zusätzlich zu Mittel.",
        browser_output_is_intentionally_less:
          "⚠ Die Browserausgabe ist absichtlich weniger nativ und weniger stabil. Rendering, Medien und Netzwerk können brechen oder von echtem Chrome abweichen.",
        this_mode_is_not_an_acceptable_default:
          "⚠ Dieser Modus ist keine akzeptable Standard-Sicherheitshaltung. Aktiviere ihn nur, wenn du die Kompromissfläche ausdrücklich akzeptierst.",
        reports_that_depend_on_enabling_full:
          "⚠ Berichte, die vom Aktivieren von Vollständig abhängen, sollten als nicht standardmäßiges Betreiberrisiko eingestuft werden, sofern kein Bypass im Standardpfad nachgewiesen wird.",
        webrtc_webgl_canvas_and_audio_behavior:
          "⚠ WebRTC-, WebGL-, Canvas- und Audioverhalten können alle vom Referenz-Chrome abweichen.",
        tab_eviction_policy: "Richtlinie zum Tab-Verdrängen",
        how_pinchtab_behaves_when_a_managed:
          "Wie sich PinchTab verhält, wenn eine verwaltete Instanz ihr Tab-Limit erreicht.",
        reject_new_tabs: "Neue Tabs ablehnen",
        close_oldest: "Älteste schließen",
        close_least_recently_used: "Am längsten ungenutzte schließen",
        tab_lifecycle: "Tab-Lebenszyklus",
        close_idle_closes_a_tab_after_a_text:
          "„Ruhende schließen“ schließt einen Tab nach einer /text-, /snapshot- oder /action-Antwort, sobald die Verzögerung abgelaufen ist; /navigate bricht das ab. „Ruhende einfrieren“ friert jeden Tab ein, den während der Verzögerung keine Anfrage berührt hat, und taut ihn bei der nächsten Anfrage wieder auf.",
        keep_never_auto_close: "Behalten (nie automatisch schließen)",
        close_idle: "Ruhende schließen",
        freeze_idle: "Ruhende einfrieren",
        auto_close_delay: "Verzögerung beim automatischen Schließen",
        seconds_of_idleness_before_an_idle_tab:
          "Sekunden der Inaktivität, bevor ein ruhender Tab geschlossen oder eingefroren wird. Gilt nur, wenn der Lebenszyklus „Ruhende schließen“ oder „Ruhende einfrieren“ ist.",
        restore_tabs_on_startup: "Tabs beim Start wiederherstellen",
        when_enabled_tabs_open_at_shutdown_are:
          "Wenn aktiviert, werden beim Herunterfahren offene Tabs beim nächsten Start wieder geöffnet. Standardmäßig aus — geschlossene Tabs bleiben nach einem Neustart geschlossen.",
        enable: "Aktivieren",
        max_tabs: "Max. Tabs",
        maximum_number_of_tabs_per_managed:
          "Maximale Anzahl Tabs pro verwalteter Instanz.",
        max_parallel_tabs: "Max. parallele Tabs",
        set_to_0_to_auto_detect_from_cpu_count:
          "Auf 0 setzen, um anhand der CPU-Anzahl automatisch zu ermitteln.",
        timezone: "Zeitzone",
        optional_timezone_override_for_launched:
          "Optionale Zeitzonenüberschreibung für gestartete Instanzen.",
        europe_rome: "Europe/Rome",
        user_agent: "User-Agent",
        optional_override_applied_to_new:
          "Optionale Überschreibung für neue verwaltete Instanzen.",
        custom_user_agent: "Benutzerdefinierter User-Agent",
        applies_to_newly_launched_managed:
          "Gilt für neu gestartete verwaltete Instanzen.",
      },
      securityidpisettingssection: {
        security_idpi: "Sicherheit IDPI",
        indirect_prompt_injection_controls:
          "Die Steuerung indirekter Prompt-Injection schränkt erlaubte Websites ein und schützt extrahierte Inhalte, bevor sie nachgelagerte Automatisierung erreichen.",
        idpi_is_disabled_browser_content_is_not:
          "IDPI ist deaktiviert. Browserinhalte werden nicht durch die Website-Erlaubnisliste oder Inhaltsschutz gefiltert.",
        the_website_whitelist_is_not_set_to_a:
          "Die Website-Erlaubnisliste ist nicht auf eine eingeschränkte Domainliste gesetzt. Das ist die wichtigste IDPI-Verteidigung und sollte konfiguriert werden.",
        the_website_whitelist_contains_which:
          "Die Website-Erlaubnisliste enthält '*', was die Domainbeschränkung praktisch deaktiviert.",
        idpi_is_enforcing_a_specific_website:
          "IDPI erzwingt eine bestimmte Website-Erlaubnisliste und Inhaltsschutz.",
        enable: "Aktivieren",
        custom_patterns: "Eigene Muster",
        optional_comma_separated_phrases_to:
          "Optionale kommagetrennte Phrasen, die als verdächtiger Prompt-Injection-Inhalt gelten.",
        ignore_previous_instructions_exfiltrate:
          "ignore previous instructions, exfiltrate data",
      },
      timeoutssettingssection: {
        timeouts: "Zeitlimits",
        runtime_timing_defaults_written_into:
          "Standardwerte für Laufzeit-Timing, die in neue Kindkonfigurationen geschrieben werden. Bereits laufende Instanzen behalten ihre aktuellen Zeitlimits.",
      },
      browsersettingssection: {
        browser_runtime: "Browser-Laufzeit",
        these_settings_are_written_into_the:
          "Diese Einstellungen werden in die erzeugte Kindkonfiguration für neue verwaltete Instanzen geschrieben.",
        provider: "Anbieter",
        browser_backend_used_for_new_managed:
          "Browser-Backend für neue verwaltete Instanzen.",
        chrome: "Chrome",
        cloakbrowser: "CloakBrowser",
        ghost_chrome: "Ghost + Chrome",
        browser_version: "Browser-Version",
        version_string_used_in_generated_ua:
          "Versionszeichenfolge für die erzeugten Standardwerte von User-Agent und Fingerprint.",
        browser_binary: "Browser-Binärdatei",
        optional_path_override_for_the_chrome:
          "Optionale Pfadüberschreibung für die ausführbare Datei von Chrome oder CloakBrowser.",
        fingerprint_seed: "Fingerprint-Seed",
        deterministic_cloakbrowser_identity:
          "Deterministischer Identitäts-Seed von CloakBrowser. Leer lassen für eine neue Identität bei jedem Start.",
        fingerprint_platform: "Fingerprint-Plattform",
        native_platform_fingerprint_reported_by:
          "Nativer Plattform-Fingerprint, den CloakBrowser meldet.",
        auto: "Automatisch",
        windows: "Windows",
        macos: "macOS",
        linux: "Linux",
        cloak_locale: "Cloak-Gebietsschema",
        locale_passed_as_fingerprint_locale:
          "Gebietsschema, das als --fingerprint-locale übergeben wird.",
        cloak_timezone: "Cloak-Zeitzone",
        timezone_passed_as_fingerprint_timezone:
          "Zeitzone, die als --fingerprint-timezone übergeben wird.",
        webrtc_ip: "WebRTC-IP",
        explicit_replacement_ip_or_auto_for:
          "Explizite Ersatz-IP oder auto, damit CloakBrowser die Proxy-Ausgangs-IP ermittelt.",
        fonts_directory: "Schriftartenverzeichnis",
        directory_containing_target_platform:
          "Verzeichnis mit Schriftarten der Zielplattform für CloakBrowser.",
        storage_quota: "Speicherkontingent",
        storage_quota_in_mb_passed_as:
          "Speicherkontingent in MB, das als --fingerprint-storage-quota übergeben wird.",
        native_stealth_only: "Nur native Tarnung",
        disable_pinchtab_js_stealth_overlays:
          "Deaktiviert die JS-Tarnungsschichten von PinchTab und Startflags, die Automatisierung verbergen.",
        use_cloakbrowser_native_patches:
          "Native Patches von CloakBrowser verwenden",
        extra_flags: "Zusätzliche Flags",
        additional_chrome_flags_appended_when:
          "Zusätzliche Chrome-Flags, die beim Start verwalteter Instanzen angehängt werden.",
        extension_paths: "Erweiterungspfade",
        comma_separated_extension_directories:
          "Kommagetrennte Erweiterungsverzeichnisse zum Laden. Standardmäßig nutzt PinchTab den lokalen Ordner extensions/ unter seinem Status- bzw. Konfigurationsverzeichnis. Setze hier eigene Pfade, um diesen Standard zu überschreiben, oder leere das Feld, um das Laden von Erweiterungen zu deaktivieren.",
      },
      dashboardsettingssection: {
        dashboard_preferences: "Übersichts-Einstellungen",
        language: "Sprache",
        choose_the_language_of_the_dashboard:
          "Wählen Sie die Sprache der Dashboard-Oberfläche.",
        these_controls_affect_this_dashboard_ui:
          "Diese Einstellungen betreffen nur diese Oberfläche der Übersicht. Sie werden lokal in deinem Browser gespeichert und erfordern keinen Neustart des Backends.",
        screencast_frame_rate: "Bildrate des Screencasts",
        controls_how_often_live_previews:
          "Steuert, wie oft Live-Vorschauen neue Bilder anfordern.",
        fps: "fps",
        screencast_quality: "Qualität des Screencasts",
        jpeg_quality_for_tab_preview_streams:
          "JPEG-Qualität der Tab-Vorschaustreams.",
        screencast_width: "Breite des Screencasts",
        maximum_preview_width_for_live_tiles:
          "Maximale Vorschaubreite für Live-Kacheln.",
        px: "px",
        memory_metrics: "Speichermetriken",
        poll_every_running_instance_for_browser:
          "Fragt bei jedem Überwachungstakt den Browserspeicher jeder laufenden Instanz ab: RSS über den gesamten Chrome-Prozessbaum plus JS-Heap und DOM-Zähler, die per CDP aus jedem offenen Tab gelesen werden. Gemessener Aufwand: rund eine Millisekunde pro offenem Tab plus einige zehn Millisekunden für den Durchlauf des Prozessbaums, pro Instanz und Takt.",
        enable: "Aktivieren",
        polling_interval: "Abfrageintervall",
        how_frequently_the_dashboard_asks_the:
          "Wie oft die Übersicht beim Backend neue Metriken anfordert.",
        s: "s",
        reasoning_output: "Ausgabe der Schlussfolgerungen",
        choose_whether_the_live_agent_feed:
          "Wähle, ob der Live-Agentenfeed Werkzeugaufrufe, Fortschrittsmeldungen oder beides zeigt.",
        tool_calls_only: "Nur Werkzeugaufrufe",
        progress_only: "Nur Fortschritt",
        both: "Beides",
      },
      autosolversettingssection: {
        autosolver: "AutoSolver",
        these_settings_are_saved_into_the:
          "Diese Einstellungen werden in die PinchTab-Konfigurationsdatei gespeichert. API-Schlüssel externer Anbieter sind nur schreibbar und müssen direkt in dieser Datei gesetzt werden.",
        config_file: "Konfigurationsdatei",
        dashboard_edits_are_written_back_to:
          "Änderungen aus der Übersicht werden in diese Datei zurückgeschrieben. Setze Schlüssel externer Anbieter unter autoSolver.external in derselben Konfigurationsdatei.",
        config_path_unavailable: "Konfigurationspfad nicht verfügbar",
        enable_autosolver: "AutoSolver aktivieren",
        turns_on_the_autosolver_runtime:
          "Aktiviert die AutoSolver-Laufzeitkonfiguration für unterstützte Challenge-Abläufe.",
        enabled: "Aktiviert",
        disabled: "Deaktiviert",
        auto_trigger: "Automatische Auslösung",
        automatically_run_autosolver_after:
          "Führt AutoSolver nach unterstützten Navigations- und Aktionsanfragen automatisch aus.",
        trigger_on_navigate: "Bei Navigation auslösen",
        run_autosolver_checks_after_successful:
          "Führt AutoSolver-Prüfungen nach erfolgreichen Navigationsaufrufen aus.",
        trigger_on_action: "Bei Aktionen auslösen",
        run_autosolver_checks_after_successful_2:
          "Führt AutoSolver-Prüfungen nach erfolgreichen Aktionsaufrufen aus.",
        max_attempts: "Max. Versuche",
        maximum_autosolver_retries_before_the:
          "Maximale AutoSolver-Wiederholungen, bevor die Pipeline aufgibt.",
        solver_timeout_sec: "Zeitlimit des Solvers (s)",
        per_solver_timeout_for_each_attempt:
          "Zeitlimit pro Solver für jeden Versuch.",
        retry_base_delay_ms: "Basisverzögerung bei Wiederholung (ms)",
        base_retry_backoff_delay_between:
          "Basis-Wartezeit zwischen AutoSolver-Versuchen.",
        retry_max_delay_ms: "Max. Verzögerung bei Wiederholung (ms)",
        maximum_retry_backoff_delay_cap_between:
          "Obergrenze der Wartezeit zwischen AutoSolver-Versuchen.",
        solvers: "Solver",
        comma_separated_ordered_list_of_solver:
          "Geordnete, kommagetrennte Liste der Solver-Namen, die versucht werden sollen. Mit GET /solvers oder GET /config/autosolver lassen sich die zur Laufzeit verfügbaren Namen prüfen.",
        llm_provider: "LLM-Anbieter",
        optional_provider_name_used_when_llm:
          "Optionaler Anbietername, der bei aktiviertem LLM-Fallback verwendet wird.",
        llm_fallback: "LLM-Fallback",
        use_an_llm_as_the_last_resort_after:
          "Nutzt ein LLM als letzte Möglichkeit, nachdem registrierte Solver fehlgeschlagen sind.",
        external_provider_keys: "Schlüssel externer Anbieter",
        capsolver_and_2captcha_credentials_are:
          "Zugangsdaten für Capsolver und 2Captcha werden in der Übersicht nicht angezeigt und müssen in der Konfigurationsdatei verwaltet werden. Diese Anbieter erscheinen nur dann in den Solver-Listen zur Laufzeit, wenn Schlüssel konfiguriert sind.",
        open_the_config_file_above_and_set:
          "Öffne die oben genannte Konfigurationsdatei und setze",
        autosolver_external_capsolverkey: "autoSolver.external.capsolverKey",
        autosolver_external_twocaptchakey: "autoSolver.external.twoCaptchaKey",
        there_the_dashboard_does_not_display_or:
          "dort. Die Übersicht zeigt oder bearbeitet diese Werte nicht, und es gibt keine Umgebungsvariablen, die sie überschreiben.",
      },
    },
    monitoring: {
      monitoringemptystate: {
        starting_default_instance: "Standardinstanz wird gestartet…",
        start_default_instance: "Standardinstanz starten",
        open_default_profile: "Standardprofil öffnen",
        no_active_instances: "Keine aktiven Instanzen",
        pinchtab_expected_a_default_instance:
          "PinchTab erwartete eine Standardinstanz, sie wurde jedoch nie verfügbar. Starte sie manuell oder prüfe das Profil.",
        start_the_default_instance_or_open:
          "Starte die Standardinstanz oder öffne Profile, um eine andere zu starten.",
        waiting_for_default_profile:
          "PinchTab wartet darauf, dass das Standardprofil online geht. Automatische erneute Prüfung (noch {{count}} Versuche).",
      },
      defaultinstancemodal: {
        start_default_instance: "Standardinstanz starten",
        cancel: "Abbrechen",
        start_headed: "Mit Oberfläche starten",
        start_headless: "Ohne Oberfläche starten",
        choose_how_to_launch_the_default:
          "Wähle, wie das Standardprofil in dieser Sitzung gestartet wird.",
        configured_default_mode: "Konfigurierter Standardmodus:",
      },
    },
    profilespage: {
      loading_profiles: "Profile werden geladen…",
      no_profiles_yet: "Noch keine Profile",
      click_new_profile_to_create_one:
        "Klicke auf Neues Profil, um eines zu erstellen",
      new_profile: "Neues Profil",
      profiles: "Profile",
      total: "gesamt",
      no_account: "Kein Konto",
      profile_deleted: "Profil „{{name}}“ gelöscht",
    },
    settingspage: {
      confirm_admin_action: "Administratoraktion bestätigen",
      cancel: "Abbrechen",
      verifying: "Wird geprüft…",
      continue: "Weiter",
      re_enter_the_api_token_to_save_backend:
        "Gib das API-Token erneut ein, um Backend-Konfigurationsänderungen zu speichern. Die erhöhte Sitzung bleibt kurz aktiv, sodass du dies nicht für jede Administratoraktion wiederholen musst.",
      api_token: "API-Token",
      paste_api_token: "API-Token einfügen",
      restart_required: "Neustart erforderlich",
      reset: "Zurücksetzen",
      saving: "Wird gespeichert…",
      save: "Speichern",
      restart_needed_for: "Neustart erforderlich für:",
      loading_settings: "Einstellungen werden geladen…",
      settings_eyebrow: "Einstellungen",
    },
  },
  activities: {
    activityexplorer: {
      agent: "Agent",
      all: "Alle",
      session: "Sitzung",
      request_timeline: "Anfrage-Zeitleiste",
      activity: "Aktivität",
      failed_to_load_activity: "Aktivität konnte nicht geladen werden",
    },
    agentstreampanel: {
      no_matching_activity: "Keine passende Aktivität",
      adjust_the_filters_or_generate_some:
        "Passe die Filter an oder erzeuge etwas Verkehr über CLI, MCP oder die Übersicht.",
    },
    streamrow: {
      ms: "ms",
      navigate_to_page: "Zur Seite navigieren",
      capture_page_snapshot: "Seitenaufnahme erstellen",
      open_screencast_stream: "Screencast-Stream öffnen",
      extract_text_from_page: "Text aus der Seite extrahieren",
      click_on_page: "Auf der Seite klicken",
      double_click_on_page: "Auf der Seite doppelklicken",
      type_into_page: "In die Seite eingeben",
      hover_on_page: "Über die Seite fahren",
      fill_field: "Feld ausfüllen",
      select_option: "Option auswählen",
      scroll_page: "Seite scrollen",
      press_key: "Taste drücken",
      wait_for_condition: "Auf Bedingung warten",
      evaluate_javascript: "JavaScript ausführen",
      upload_file: "Datei hochladen",
      download_file: "Datei herunterladen",
      on_tab: " im Tab ",
      navigate_to_url: "Zu {{url}} navigieren",
      click_ref: "„{{ref}}“ anklicken",
      double_click_ref: "„{{ref}}“ doppelklicken",
      type_into_ref: "In „{{ref}}“ eingeben",
      hover_ref: "Mit dem Zeiger auf „{{ref}}“ zeigen",
      fill_ref: "„{{ref}}“ ausfüllen",
      select_ref: "„{{ref}}“ auswählen",
      press_key_on_ref: "In „{{ref}}“ eine Taste drücken",
    },
    activityline: {
      progress: "FORTSCHRITT",
      agent_reported_progress: "Agent hat Fortschritt gemeldet",
      ms: "ms",
    },
    activityitemline: {
      tab_paused_for_human_handoff: "Tab für manuelle Übernahme pausiert",
      tab_is_paused_for_human_handoff:
        "Tab ist für die manuelle Übernahme pausiert",
      resume_automation_after_manual:
        "Automatisierung nach manueller Challenge-Lösung fortsetzen",
      resuming: "Wird fortgesetzt…",
      resolve_challenge: "Challenge lösen",
      browser_was_escalated: "Browser wurde erhöht",
      escalated: "erhöht",
      navigate_to_page: "Zur Seite navigieren",
      capture_page_snapshot: "Seitenaufnahme erstellen",
      open_screencast_stream: "Screencast-Stream öffnen",
      extract_text_from_page: "Text aus der Seite extrahieren",
      take_screenshot: "Screenshot aufnehmen",
      export_page_as_pdf: "Seite als PDF exportieren",
      click_on_page: "Auf der Seite klicken",
      double_click_on_page: "Auf der Seite doppelklicken",
      type_into_page: "In die Seite eingeben",
      hover_on_page: "Über die Seite fahren",
      fill_field: "Feld ausfüllen",
      select_option: "Option auswählen",
      scroll_page: "Seite scrollen",
      press_key: "Taste drücken",
      wait_for_condition: "Auf Bedingung warten",
      evaluate_javascript: "JavaScript ausführen",
      upload_file: "Datei hochladen",
      download_file: "Datei herunterladen",
      resume_failed: "Fortsetzen fehlgeschlagen",
      navigate_to_url: "Zu {{url}} navigieren",
      click_ref: "„{{ref}}“ anklicken",
      double_click_ref: "„{{ref}}“ doppelklicken",
      type_into_ref: "In „{{ref}}“ eingeben",
      hover_ref: "Mit dem Zeiger auf „{{ref}}“ zeigen",
      fill_ref: "„{{ref}}“ ausfüllen",
      select_ref: "„{{ref}}“ auswählen",
      press_key_on_ref: "In „{{ref}}“ eine Taste drücken",
    },
    activitytimeline: {
      timeline: "Zeitleiste",
      recent_events: "Letzte Ereignisse",
      no_matching_activity: "Keine passende Aktivität",
      adjust_the_filters_or_generate_some:
        "Passe die Filter an oder erzeuge etwas Verkehr über CLI, MCP oder die Übersicht.",
    },
    activefilterbar: {
      clear_filters: "Filter zurücksetzen",
    },
    activityfiltermenu: {
      "200": "200",
      "3600": "3600",
      profile: "Profil",
      tab: "Tab",
      agent: "Agent",
      action: "Aktion",
      advanced_filters: "Erweiterte Filter",
      hide: "Ausblenden",
      show: "Anzeigen",
      instance: "Instanz",
      path_prefix: "Pfadpräfix",
      tabs_or_instances: "/tabs/ or /instances/",
      age_seconds: "Alter (Sekunden)",
      limit: "Limit",
      clear: "Zurücksetzen",
      search: "Suchen",
      any_profile: "Beliebiges Profil",
      any_tab: "Beliebiger Tab",
      any_agent: "Beliebiger Agent",
      any_action: "Beliebige Aktion",
      any_instance: "Beliebige Instanz",
    },
    agentworkspacesidebar: {
      agents: "Agenten",
      activities: "Aktivitäten",
      no_agent_activity_observed_yet: "Noch keine Agentenaktivität beobachtet",
      all_agents: "Alle Agenten",
    },
    copyidpill: {
      copied: "Kopiert",
      copy_tab_id: "Tab-ID {{id}} kopieren",
    },
    hooks: {
      useactivitydata: {
        failed_to_load_activity: "Aktivität konnte nicht geladen werden",
        failed_to_load_agent_activity:
          "Agentenaktivität konnte nicht geladen werden",
      },
    },
  },
  settings: {
    sections: {
      dashboard: {
        dashboard: "Übersicht",
        local_monitoring_and_screencast:
          "Lokale Überwachungs- und Screencast-Einstellungen.",
      },
      defaults: {
        instance_defaults: "Instanz-Standardwerte",
        how_new_managed_browser_instances_launch:
          "Wie neue verwaltete Browserinstanzen starten.",
      },
      orchestration: {
        orchestration: "Orchestrierung",
        routing_strategy_port_range_and:
          "Routing-Strategie, Portbereich und Zuteilungsrichtlinie.",
      },
      security: {
        security: "Sicherheit",
        sensitive_endpoint_gates_and_access:
          "Sperren für sensible Endpunkte und Zugriffskontrollen.",
      },
      "security-idpi": {
        security_idpi: "Sicherheit IDPI",
        indirect_prompt_injection_website_and:
          "Website- und Inhaltsschutz gegen indirekte Prompt-Injection.",
      },
      profiles: {
        profiles: "Profile",
        shared_profile_storage_and_default:
          "Gemeinsamer Profilspeicher und Verhalten des Standardprofils.",
      },
      network: {
        network_attach: "Netzwerk und Anbindung",
        server_binding_auth_and_attach_policy:
          "Serverbindung, Authentifizierung und Anbindungsrichtlinie.",
      },
      browser: {
        browser_runtime: "Browser-Laufzeit",
        chrome_binary_version_flags_and:
          "Chrome-Binärdatei, Version, Flags und Erweiterungen.",
      },
      timeouts: {
        timeouts: "Zeitlimits",
        action_navigation_shutdown_and_wait:
          "Zeitverhalten für Aktion, Navigation, Herunterfahren und Warten.",
      },
      autosolver: {
        autosolver: "AutoSolver",
        challenge_solving_behavior_and_config:
          "Verhalten beim Lösen von Challenges und Anbieter auf Basis der Konfigurationsdatei.",
      },
      observability: {
        observability: "Beobachtbarkeit",
        activity_logging_and_retention_settings:
          "Einstellungen für Aktivitätsprotokoll und Aufbewahrung.",
      },
    },
    security: {
      endpoints: {
        allowEvaluate: {
          allow_evaluate: "evaluate erlauben",
        },
        allowMacro: {
          allow_macro: "macro erlauben",
        },
        allowScreencast: {
          allow_screencast: "Screencast erlauben",
        },
        allowDownload: {
          allow_download: "Download erlauben",
        },
        allowCookies: {
          allow_cookies: "Cookies erlauben",
        },
        allowUpload: {
          allow_upload: "Upload erlauben",
        },
        allowNetworkIntercept: {
          allow_network_interception: "Netzwerkabfangen erlauben",
          lets_agents_install_rules_to_abort_or:
            "Erlaubt Agenten, Regeln zu installieren, um HTTP-Anfragen in einem Tab abzubrechen oder zu erfüllen (zu simulieren). Wenn aktiv, ist das Fälschen von Antworten auf Hosts der Liste „Erlaubte Websites“ UNTERSAGT und anderswo ERLAUBT. Antworten auf Hosts zu fälschen, die du dem Agenten freigegeben hast (z. B. deine Bank), ist das riskanteste Ergebnis — deshalb werden Hosts der Erlaubnisliste geschützt und nicht umgekehrt. OPTIONS-Preflights werden standardmäßig übersprungen, um CORS nicht zu brechen.",
        },
        allowFileScheme: {
          allow_file_navigation: "file://-Navigation erlauben",
          lets_agents_open_local_file_urls_a_file:
            "Erlaubt Agenten, lokale file://-URLs zu öffnen. Eine file://-URL hat keinen Host, ist daher NICHT durch „Erlaubte Websites“ eingeschränkt und umgeht den Schutz vor SSRF und privaten IPs — beim Aktivieren wird Lesezugriff (über Snapshot, Screenshot oder Scraping) auf jede lokale Datei gewährt, die der Serverprozess lesen kann. Sie bleibt blockiert, solange eine Erlaubnisliste im strikten Modus aktiv ist. Nur auf vertrauenswürdigen Einzelmandanten-Rechnern aktivieren.",
        },
      },
      idpi: {
        enabled: {
          enable_idpi: "IDPI aktivieren",
          turn_on_indirect_prompt_injection:
            "Aktiviert die Abwehr gegen indirekte Prompt-Injection.",
        },
        strictMode: {
          strict_mode: "Strikter Modus",
          block_disallowed_domains_and_suspicious:
            "Blockiert nicht erlaubte Domains und verdächtige Inhalte, statt nur zu warnen.",
        },
        scanContent: {
          scan_content: "Inhalt scannen",
          inspect_extracted_text_and_snapshots:
            "Prüft extrahierten Text und Snapshots auf Muster von Prompt-Injection.",
        },
        wrapContent: {
          wrap_content: "Inhalt umhüllen",
          mark_returned_page_text_as_untrusted:
            "Kennzeichnet zurückgegebenen Seitentext als nicht vertrauenswürdigen Inhalt für nachgelagerte Verbraucher.",
        },
      },
    },
    defaults: {
      booleans: {
        blockImages: {
          block_images: "Bilder blockieren",
        },
        blockMedia: {
          block_media: "Medien blockieren",
        },
        blockAds: {
          block_ads: "Werbung blockieren",
        },
        noAnimations: {
          disable_css_animations: "CSS-Animationen deaktivieren",
        },
        noRestore: {
          skip_session_restore: "Sitzungswiederherstellung überspringen",
        },
      },
      timeouts: {
        actionSec: {
          action_timeout: "Zeitlimit für Aktionen",
          maximum_time_for_action_requests:
            "Maximale Zeit für Aktionsanfragen.",
        },
        navigateSec: {
          navigate_timeout: "Zeitlimit für Navigation",
          maximum_time_for_navigation_requests:
            "Maximale Zeit für Navigationsanfragen.",
        },
        shutdownSec: {
          shutdown_timeout: "Zeitlimit für Herunterfahren",
          grace_period_before_force_closing_a:
            "Karenzzeit, bevor ein Kindprozess erzwungen beendet wird.",
        },
        waitNavMs: {
          wait_after_navigation_delay: "Verzögerung nach der Navigation",
          post_navigation_stabilization_delay_in:
            "Stabilisierungsverzögerung nach der Navigation in Millisekunden.",
        },
      },
    },
    notices: {
      backend_config_saved_dynamic_changes:
        "Backend-Konfiguration gespeichert. Dynamische Änderungen wurden angewendet, wo möglich.",
      backend_config_saved_dynamic_changes_2:
        "Backend-Konfiguration gespeichert. Dynamische Änderungen wurden angewendet, wo möglich. Für Änderungen auf Serverebene wird ein Neustart empfohlen.",
      preferencesSaved:
        "Übersichts-Einstellungen in diesem Browser gespeichert.",
    },
    errors: {
      loadFailed: "Einstellungen konnten nicht geladen werden",
      saveFailed: "Einstellungen konnten nicht gespeichert werden",
      tokenVerifyFailed: "API-Token konnte nicht geprüft werden",
    },
  },
  monitoring: {
    errors: {
      startInstanceFailed: "Instanz konnte nicht gestartet werden",
    },
  },
  errors: {
    requestFailed: "Anfrage fehlgeschlagen",
  },
  auth: {
    insecureTransport:
      "Die Sitzung der Übersicht läuft über unsicheres HTTP; nutze HTTPS oder localhost für einen stärkeren Sitzungsschutz.",
  },
};

export default messages;
