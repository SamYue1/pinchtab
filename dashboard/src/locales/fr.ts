import type { Messages } from "../i18n/messages";

const messages: Messages = {
  app: {
    name: "PinchTab",
    checking_server_authentication:
      "Vérification de l'authentification du serveur…",
    pinchtab_is_restarting_or_unreachable:
      "PinchTab redémarre ou est injoignable.",
    automatic_retries_stopped:
      " Les nouvelles tentatives automatiques sont arrêtées.",
    retry_now: "Réessayer maintenant",
    refresh: "Actualiser",
  },
  profiles: {
    profiletoolbarbuttons: {
      copy_id: "Copier l'ID",
      delete: "Supprimer",
      save: "Enregistrer",
      stop: "Arrêter",
      start: "Démarrer",
      delete_profile: "Supprimer le profil",
      cancel: "Annuler",
      delete_profile_2: "Supprimer le profil « ",
      every_cookie_login_and_session_stored:
        " » ? Tous les cookies, identifiants et sessions qu'il contient seront définitivement perdus. Cette action est irréversible.",
      copied: "Copié",
      failed: "Échec",
    },
    profilemetainfopanel: {
      profile_panel: "Panneau du profil",
      status: "État",
      port: "Port",
      browser: "Navigateur",
      size: "Taille",
      account: "Compte",
      identity: "Identité",
      connection: "Connexion",
      cdp_attached: "CDP attaché",
      cdp_url: "URL CDP",
      path: "Chemin",
      not_found: " (introuvable)",
      attached_via_cdp: "Attaché via CDP",
      headless: "Sans interface",
      headed: "Avec interface",
    },
    profilecard: {
      error: "erreur",
      stopped: "arrêté",
      size: "Taille",
      account: "Compte",
      use_when: "À utiliser quand",
      details: "Détails",
      stop: "Arrêter",
      start: "Démarrer",
    },
    profiledetailspanel: {
      select_a_profile_to_inspect_its:
        "Sélectionnez un profil pour examiner son instance, ses onglets en direct et ses journaux.",
      live: "En direct",
      tabs: "Onglets",
      logs: "Journaux",
      no_tabs_open: "Aucun onglet ouvert.",
      instance_not_running: "L'instance n'est pas en cours d'exécution.",
      profile_name: "Profil : {{name}}",
    },
    profilebasicinfopanel: {
      name: "Nom",
      use_this_profile_when: "Utiliser ce profil quand",
    },
    profileliveviewpanel: {
      no_tabs_open: "Aucun onglet ouvert",
      instance_not_running_start_the_profile:
        "L'instance n'est pas en cours d'exécution. Démarrez le profil pour voir la vue en direct.",
    },
    instancelogspanel: {
      loading_logs: "Chargement des journaux…",
      no_instance_logs_available: "Aucun journal d'instance disponible.",
    },
    groups: {
      user: "Profils",
      temporary: "Temporaires",
      quarantined: "En quarantaine",
    },
  },
  components: {
    atoms: {
      debugpanel: {
        debug: "🐛 Débogage",
        debug_panel: "Panneau de débogage",
        instances: "Instances :",
      },
      emptystate: {
        dashboard: "Tableau de bord",
      },
      modal: {
        dashboard: "Tableau de bord",
        close: "Fermer",
      },
      errorboundary: {
        something_went_wrong: "⚠️ Une erreur est survenue",
        unknown_error: "Erreur inconnue",
        try_again: "Réessayer",
      },
    },
    screencast: {
      screencaststatusbar: {
        decrease_fps: "Réduire les FPS",
        increase_fps: "Augmenter les FPS",
        take_full_quality_screenshot_png:
          "Prendre une capture d'écran en pleine qualité (PNG)",
        download_as_pdf: "Télécharger en PDF",
        fps: "FPS (",
      },
      screencasttile: {
        tab_preview: "Aperçu de l'onglet",
        connection_lost: "Connexion perdue",
        show_static_preview: "Afficher un aperçu statique",
        retry_connection: "Réessayer la connexion",
      },
      framedecode: {
        failed_to_decode_screencast_frame:
          "Échec du décodage de l'image de la diffusion",
      },
    },
    molecules: {
      createprofilemodal: {
        new_profile: "📁 Nouveau profil",
        cancel: "Annuler",
        create: "Créer",
        name: "Nom",
        e_g_personal_work_scraping: "ex. personnel, travail, scraping",
        use_this_profile_when_helps_agents_pick:
          "Utiliser ce profil quand (aide les agents à choisir le bon profil)",
        e_g_i_need_to_access_gmail_for_the_team:
          "ex. Je dois accéder à Gmail avec le compte de l'équipe",
        import_from_optional_chrome_user_data:
          "Importer depuis (facultatif — chemin des données utilisateur Chrome)",
        e_g_users_you_library_application:
          "ex. /Users/you/Library/Application Support/Google/Chrome",
      },
      navbar: {
        pinchtab: "PinchTab",
        logout: "Se déconnecter",
        refresh_r: "Actualiser (⌘R)",
        toggle_menu: "Basculer le menu",
        monitoring: "Surveillance",
        agents: "Agents",
        profiles: "Profils",
        settings: "Paramètres",
      },
      instancestats: {
        instance: "Instance",
        status: "État",
        uptime: "Durée de fonctionnement",
        port: "Port",
        crashes: "Plantages",
        browsing: "Navigation",
        tabs: "Onglets",
        domains: "Domaines",
        resources: "Ressources",
        memory: "Mémoire",
        renderers: "Processus de rendu",
        pages: "Pages",
        js_heap: "Tas JS",
        dom_nodes: "Nœuds DOM",
        listeners: "Écouteurs",
        frames: "Cadres",
        unreadable: "Illisibles",
        just_now: "à l'instant",
        tabs_open_before_it_were_lost:
          "les onglets ouverts auparavant ont été perdus",
        rss_across_the_browser_process_tree:
          "RSS sur l'ensemble de l'arborescence de processus du navigateur",
        tabs_that_did_not_answer_not_counted:
          "onglets qui n'ont pas répondu (non comptés)",
        last_crash:
          "dernier : {{reason}} à {{time}} · les onglets ouverts auparavant ont été perdus",
        heap_summary_one: "utilisé / total, cumulé sur {{count}} onglet",
        heap_summary_other: "utilisé / total, cumulé sur {{count}} onglets",
        document_count_one: "{{count}} document",
        document_count_other: "{{count}} documents",
      },
      agentitem: {
        tab_paused_for_human_handoff:
          "onglet en pause pour une reprise manuelle",
        just_now: "à l'instant",
        session_at: "Session {{time}}",
        session_range: "Session {{start}}–{{end}}",
      },
      startinstancemodal: {
        start_profile: "🖥️ Démarrer le profil",
        cancel: "Annuler",
        start: "Démarrer",
        port: "Port",
        auto_select_from_configured_range:
          "Sélection automatique dans la plage configurée",
        leave_blank_to_auto_select_a_free_port:
          "Laissez vide pour choisir automatiquement un port libre dans la plage configurée.",
        headless_best_for_docker_vps: "Sans interface (idéal pour Docker/VPS)",
        browser: "Navigateur",
        server_default: "Valeur par défaut du serveur",
        chrome: "Chrome",
        cloakbrowser: "CloakBrowser",
        ghost_chrome: "Ghost + Chrome",
        direct_launch_command_backup: "Commande de lancement directe (secours)",
        copy_command: "Copier la commande",
        replace: "Remplacer",
        pinchtab_config_token: "pinchtab config token",
        when_auth_is_enabled: "lorsque l'authentification est activée.",
        with_the_value_from: "avec la valeur de",
        port_must_be_a_whole_number_between_1:
          "Le port doit être un nombre entier compris entre 1 et 65535.",
        profile_id_missing: "ID de profil manquant",
        failed_to_launch_instance: "Échec du démarrage de l'instance",
        copied: "Copié !",
        failed_to_copy: "Échec de la copie",
      },
      handoffnotifications: {
        human_intervention_required: "Intervention humaine requise",
        dismiss_notification: "Ignorer la notification",
        reason: "Motif :",
        resume: "Reprendre",
      },
      serverstatusbadge: {
        expand_instance_list: "Développer la liste des instances",
        collapse_instance_list: "Réduire la liste des instances",
        tab: "onglet",
        restart_required: "Redémarrage requis",
        server_running: "Serveur en cours d'exécution",
        restart_required_2: "Redémarrage requis",
        running: "En cours d'exécution",
        server_running_no_instances:
          "Serveur en cours d'exécution, aucune instance",
      },
      serversummary: {
        settings: "Paramètres",
        server_information: "Informations sur le serveur",
        technical_details_for_current_session:
          "Détails techniques de la session en cours",
        version: "Version",
        uptime: "Durée de fonctionnement",
      },
      tabschart: {
        monitoring: "Surveillance",
        live_telemetry: "Télémétrie en direct",
        tabs: "Onglets",
        memory: "Mémoire",
        heap: "Tas",
        server_heap: "Tas du serveur",
        collecting_data: "Collecte des données…",
        waiting_for_more_data: "En attente de davantage de données…",
      },
      idbadge: {
        click_to_copy_full_id: "Cliquez pour copier l'ID complet : {{id}}",
      },
    },
  },
  tabs: {
    tabbar: {
      tab_paused_for_human_handoff: "onglet en pause pour une reprise manuelle",
      tab_is_paused_for_human_handoff:
        "L'onglet est en pause pour une reprise manuelle",
      untitled: "Sans titre",
      unpin_and_follow_the_focused_tab_again:
        "Détacher et suivre à nouveau l'onglet sélectionné",
      pin_this_tab_selection: "Épingler cette sélection d'onglet",
      tabs: "Onglets",
      monitoring: "Surveillance",
      pin_tab: "Épingler {{title}}",
      unpin_tab_and_follow_focus: "Détacher {{title}} et suivre le focus",
      close_tab: "Fermer {{title}}",
      tabs_new: "Onglets ({{count}} nouveaux)",
    },
    selectedtabtitle: {
      untitled: "Sans titre",
    },
    instancetabspanel: {
      chart_crashed_check_console:
        "Le graphique a planté — consultez la console",
      no_tabs_open: "Aucun onglet ouvert",
      unknown: "Inconnu",
    },
    tabitem: {
      untitled: "Sans titre",
    },
    consolepanel: {
      loading_console_logs: "Chargement des journaux de console…",
      no_console_logs_yet: "Aucun journal de console pour l'instant",
    },
    errorspanel: {
      loading_errors: "Chargement des erreurs…",
      no_errors_yet: "Aucune erreur pour l'instant",
    },
    selectedtabpanel: {
      select_a_tab_to_view_details:
        "Sélectionnez un onglet pour voir les détails",
      no_instance_id_provided_for_live_view:
        "Aucun ID d'instance fourni pour la vue en direct.",
      actions: "Actions",
      live: "En direct",
      console: "Console",
      errors: "Erreurs",
    },
  },
  instances: {
    instancelistitem: {
      tabs: "onglets",
      open_profile: "Ouvrir le profil",
      restart: "Redémarrer",
      stop: "Arrêter",
    },
    instancecard: {
      headless: "Sans interface",
      headed: "Avec interface",
      uptime: "Durée de fonctionnement",
      open_dashboard: "Ouvrir le tableau de bord",
      stop: "Arrêter",
    },
  },
  pages: {
    monitoringpage: {
      instances: "Instances",
      collapse_sidebar: "Réduire la barre latérale",
    },
    loginpage: {
      authentication: "Authentification",
      enter_api_token: "Saisir le jeton d'API",
      this_pinchtab_server_requires_a_bearer:
        "Ce serveur PinchTab exige un jeton de porteur avant que le tableau de bord puisse charger les routes et API protégées.",
      run: "Exécutez",
      pinchtab_config_token: "pinchtab config token",
      to_copy_the_token_to_your_clipboard:
        "pour copier le jeton dans le presse-papiers.",
      paste_bearer_token: "Coller le jeton de porteur",
      authorizing: "Autorisation…",
      continue: "Continuer",
      authentication_failed: "Échec de l'authentification",
    },
    settings: {
      orchestrationsettingssection: {
        orchestration: "Orchestration",
        port_range_and_allocation_policy_can_be:
          "La plage de ports et la politique d'attribution s'appliquent immédiatement aux prochains lancements. Les changements de stratégie et de politique de redémarrage nécessitent un redémarrage du tableau de bord, car les routes de stratégie et l'état du cycle de vie sont enregistrés au démarrage.",
        strategy: "Stratégie",
        controls_instance_lifecycle_and_how:
          "Contrôle le cycle de vie des instances et le routage des routes abrégées.",
        always_on: "Toujours actif",
        simple: "Simple",
        explicit: "Explicite",
        simple_autorestart: "Redémarrage automatique simple",
        no_instance_hub: "Aucune instance (concentrateur)",
        launches_a_default_instance_at_boot_and:
          "Démarre une instance par défaut au lancement et la relance en cas de plantage.",
        launches_one_instance_on_first_request:
          "Démarre une instance à la première requête. Aucun redémarrage automatique.",
        all_instances_managed_via_api_no:
          "Toutes les instances sont gérées via l'API. Aucun lancement automatique.",
        launches_on_first_request_and:
          "Démarre à la première requête et relance en cas de plantage.",
        no_local_chrome_processes_acts_as_a_hub:
          "Aucun processus Chrome local. Sert uniquement de concentrateur pour les ponts distants.",
        allocation_policy: "Politique d'attribution",
        determines_how_running_instances_are:
          "Détermine comment les instances en cours d'exécution sont choisies pour les requêtes abrégées.",
        first_available: "Première disponible",
        round_robin: "Tourniquet",
        random: "Aléatoire",
        instance_port_start: "Port de début d'instance",
        lower_bound_for_auto_allocated_instance:
          "Borne inférieure des ports d'instance attribués automatiquement.",
        instance_port_end: "Port de fin d'instance",
        upper_bound_for_auto_allocated_instance:
          "Borne supérieure des ports d'instance attribués automatiquement.",
        max_restarts: "Redémarrages max.",
        maximum_restart_attempts_use_1_for:
          "Nombre maximal de tentatives de redémarrage. -1 pour illimité, 0 pour aucun redémarrage.",
        initial_backoff: "Attente initiale",
        delay_in_seconds_before_the_first:
          "Délai en secondes avant la première tentative de redémarrage.",
        max_backoff: "Attente maximale",
        upper_bound_in_seconds_for_exponential:
          "Borne supérieure en secondes de l'attente exponentielle entre redémarrages.",
        stable_after: "Stable après",
        seconds_the_instance_must_stay_healthy:
          "Nombre de secondes pendant lesquelles l'instance doit rester saine avant que le compteur de redémarrages soit réinitialisé.",
      },
      securitysettingssection: {
        security: "Sécurité",
        these_controls_define_what_risky:
          "Ces réglages définissent les capacités à risque que PinchTab expose.",
        one_or_more_sensitive_endpoint_families:
          "Une ou plusieurs familles de points d'accès sensibles sont activées. Des fonctions comme l'exécution de scripts, les téléchargements, les envois et la capture en direct peuvent exposer des capacités à haut risque. Ne les activez que dans des environnements de confiance. Vous êtes responsable de la sécurisation de l'accès réseau, de l'authentification et de l'usage en aval.",
        these_endpoint_families_can_expose_high:
          "Ces familles de points d'accès peuvent exposer des capacités à haut risque une fois activées. Ne les activez que dans des environnements de confiance, et seulement si vous assumez la responsabilité de l'accès réseau, de l'authentification et de l'usage en aval.",
        controls_whether_the_corresponding:
          "Contrôle si la famille de points d'accès correspondante est activée.",
        enable: "Activer",
        allowed_websites: "Sites web autorisés",
        comma_separated_domain_allowlist_for:
          "Liste de domaines autorisés pour le contenu web, séparés par des virgules. Utilisez des hôtes exacts ou des motifs comme *.example.com.",
        "127_0_0_1_localhost_1": "127.0.0.1, localhost, ::1",
        keep_this_list_narrow_empty_or_wildcard:
          "Gardez cette liste restrictive. Les entrées vides ou avec joker affaiblissent la principale barrière de l'IDPI. Autoriser des sites non locaux ou non fiables élargit la surface d'attaque du navigateur, même lorsque l'IDPI est activé.",
        trusted_proxy_cidrs: "CIDR de proxy de confiance",
        comma_separated_cidrs_or_ips_whose:
          "CIDR ou IP séparés par des virgules dont l'IP distante signalée par le navigateur doit être approuvée pendant la navigation. À réserver aux proxys internes connus.",
        "10_1_2_3_10_0_0_0_8": "10.1.2.3, 10.0.0.0/8",
        this_weakens_navigation_ip_checks_for:
          "Cela affaiblit les contrôles d'IP lors de la navigation pour les IP distantes correspondantes. Préférez des adresses de proxy précises à de larges plages privées. Les entrées contenant seulement une IP sont traitées comme un hôte unique.",
        trusted_resolve_cidrs: "CIDR de résolution de confiance",
        comma_separated_cidrs_or_ips_that_a:
          "CIDR ou IP séparés par des virgules vers lesquels un nom d'hôte peut se résoudre lors de la vérification préalable de navigation. Destiné aux configurations DNS ou proxy internes.",
        "198_18_0_0_15_10_1_2_3": "198.18.0.0/15, 10.1.2.3",
        this_allows_hostnames_to_resolve_to_non:
          "Cela permet aux noms d'hôte de se résoudre vers des IP non publiques. Gardez la liste restrictive et n'incluez que l'infrastructure que vous contrôlez. Les entrées contenant seulement une IP sont traitées comme un hôte unique.",
      },
      settingssharedcomponents: {
        settings: "Paramètres",
      },
      networksettingssection: {
        network_attach: "Réseau et attachement",
        port_and_bind_changes_require_a_restart:
          "Les changements de port et d'adresse d'écoute nécessitent un redémarrage. La gestion du jeton d'API se fait en dehors du tableau de bord.",
        server_port: "Port du serveur",
        http_port_for_the_dashboard_process:
          "Port HTTP du processus du tableau de bord.",
        bind_address: "Adresse d'écoute",
        network_interface_the_dashboard_process:
          "Interface réseau sur laquelle le processus du tableau de bord se lie. Conserver 127.0.0.1 ou localhost limite l'accès direct à la machine locale.",
        a_non_loopback_bind_is_a_documented_non:
          "Une écoute sur une adresse autre que la boucle locale est un changement de configuration documenté, non par défaut et réduisant la sécurité. Il peut exposer le serveur au-delà de la machine locale, sauf si une autre frontière réseau restreint l'accès. Gardez un jeton configuré et vérifiez explicitement le comportement du proxy ou de la publication de ports.",
        loopback_bind_keeps_direct_server:
          "L'écoute sur la boucle locale garde l'accès direct au serveur local. Passer à",
        or_another_non_local_address_widens_the:
          "ou à une autre adresse non locale élargit la frontière de confiance.",
        api_token: "Jeton d'API",
        bearer_token_required_by_authenticated:
          "Jeton de porteur requis par les requêtes authentifiées lorsqu'il est défini. Le tableau de bord ne le renvoie jamais et ne le gère pas.",
        no_token_configured_set_one_through_the:
          "Aucun jeton configuré. Définissez-en un via la CLI ou le fichier de configuration.",
        token_configured_manage_rotation:
          "Jeton configuré. Gérez la rotation via la CLI ou le fichier de configuration ; le serveur ne renvoie jamais la valeur actuelle. Exécutez",
        pinchtab_config_token: "pinchtab config token",
        to_copy_it_to_your_clipboard: "pour le copier dans le presse-papiers.",
        no_api_token_is_set_anyone_who_can:
          "Aucun jeton d'API n'est défini. Toute personne pouvant atteindre ce serveur peut accéder aux points d'accès exposés. Réservez-le aux réseaux locaux de confiance, ou configurez un jeton robuste via la CLI ou le fichier de configuration. La protection de l'accès relève de votre responsabilité.",
        state_directory: "Répertoire d'état",
        base_state_path_used_by_managed_child:
          "Chemin d'état de base utilisé par les instances enfants gérées.",
        trust_proxy_headers: "Approuver les en-têtes de proxy",
        trust_x_forwarded_proto_x_forwarded:
          "Approuver les en-têtes X-Forwarded-Proto, X-Forwarded-Host et Forwarded pour les contrôles d'origine. À activer uniquement lorsque PinchTab s'exécute derrière un proxy inverse de confiance (ex. Caddy, nginx).",
        enabled: "Activé",
        disabled: "Désactivé",
        cookie_secure_mode: "Mode Secure des cookies",
        controls_whether_dashboard_session:
          "Contrôle si les cookies de session du tableau de bord exigent HTTPS. Auto active Secure uniquement en HTTPS. Forcer Secure convient lorsque TLS se trouve devant PinchTab.",
        auto: "Auto",
        force_secure: "Forcer Secure",
        force_insecure: "Forcer non sécurisé",
        force_secure_blocks_dashboard_login_on:
          "Forcer Secure bloque la connexion au tableau de bord en HTTP simple. À utiliser lorsque PinchTab est servi en HTTPS directement ou derrière un proxy de confiance. Si TLS se termine devant PinchTab, activez",
        trustproxyheaders: "trustProxyHeaders",
        so_forwarded_https_requests_are:
          "afin que les requêtes HTTPS transférées soient reconnues.",
        persist_dashboard_sessions: "Conserver les sessions du tableau de bord",
        keep_dashboard_login_sessions_across:
          "Conserve les sessions de connexion du tableau de bord entre les redémarrages du serveur. Désactivez-le si vous voulez qu'un redémarrage impose une nouvelle connexion.",
        session_idle_timeout: "Délai d'inactivité de session",
        how_long_an_unused_dashboard_session:
          "Durée pendant laquelle une session du tableau de bord inutilisée reste valide. Stockée en secondes dans la configuration.",
        session_max_lifetime: "Durée de vie maximale de session",
        absolute_lifetime_for_a_dashboard:
          "Durée de vie absolue d'une session du tableau de bord avant qu'elle doive être recréée, même si elle est active.",
        require_elevation_for_config_saves:
          "Exiger une élévation pour enregistrer la configuration",
        ask_for_api_token_re_entry_before:
          "Demande une nouvelle saisie du jeton d'API avant d'enregistrer les changements de configuration du backend. Désactivé par défaut.",
        allow_attach: "Autoriser l'attachement",
        permit_attaching_pinchtab_to_externally:
          "Autorise l'attachement de PinchTab à des sessions Chrome gérées en externe.",
        enable: "Activer",
        allowed_attach_hosts: "Hôtes d'attachement autorisés",
        comma_separated_host_allowlist_for:
          "Liste d'hôtes autorisés pour les requêtes d'attachement, séparés par des virgules. N'incluez que des hôtes que vous contrôlez et auxquels vous faites confiance. Utiliser \"*\" désactive la liste d'hôtes autorisés.",
        allowhosts: 'allowHosts: ["*"]',
        is_a_documented_non_default_security:
          "est un contournement documenté, non par défaut et réduisant la sécurité. Il désactive entièrement la liste d'hôtes autorisés et permet des requêtes d'attachement distant vers tout hôte joignable avec un schéma autorisé. À n'utiliser que sur des réseaux isolés et contrôlés par l'exploitant.",
        hosts_in_this_allowlist_may_be_used_for:
          "Les hôtes de cette liste peuvent servir aux requêtes d'attachement distant. Des entrées larges ou non fiables élargissent la frontière de confiance et peuvent exposer des sessions Chrome externes et le contenu du navigateur.",
        allowed_attach_schemes: "Schémas d'attachement autorisés",
        comma_separated_scheme_allowlist:
          "Liste de schémas autorisés séparés par des virgules, généralement ws et wss.",
      },
      observabilitysettingssection: {
        observability: "Observabilité",
        activity_logging_tracks_api_requests:
          " Le journal d'activité enregistre les requêtes d'API pour le débogage et l'audit. Les journaux sont stockés localement et consultables depuis la page Activité.",
        activity_logging: "Journal d'activité",
        enable_or_disable_activity_event:
          "Active ou désactive l'enregistrement des événements d'activité.",
        enabled: "Activé",
        disabled: "Désactivé",
        retention_days: "Conservation (jours)",
        how_long_to_keep_activity_logs_before:
          "Durée de conservation des journaux d'activité avant le nettoyage automatique. Une conservation plus longue occupe plus d'espace disque mais offre un meilleur historique d'audit.",
        session_idle_timeout_seconds:
          "Délai d'inactivité de session (secondes)",
        time_before_an_inactive_agent_session:
          "Délai avant qu'une session d'agent inactive soit considérée comme au repos. Sert à regrouper l'activité par session.",
      },
      profilessettingssection: {
        profiles: "Profils",
        profile_storage_is_host_level_changing:
          "Le stockage des profils est défini au niveau de l'hôte. Changer le répertoire de base nécessite un redémarrage, car le gestionnaire de profils et l'orchestrateur sont créés avec lui au démarrage.",
        profiles_base_directory: "Répertoire de base des profils",
        root_directory_where_browser_profiles:
          "Répertoire racine où sont stockés les profils de navigateur.",
        default_profile: "Profil par défaut",
        profile_name_used_when_the_server_needs:
          "Nom de profil utilisé lorsque le serveur a besoin d'un défaut implicite.",
      },
      defaultssettingssection: {
        instance_defaults: "Valeurs par défaut des instances",
        these_values_are_written_to_config_and:
          "Ces valeurs sont écrites dans la configuration et utilisées pour les nouvelles instances gérées. Les instances déjà en cours d'exécution conservent leur configuration actuelle.",
        mode: "Mode",
        default_browser_mode_for_new_launches:
          "Mode de navigateur par défaut pour les nouveaux lancements.",
        headless: "Sans interface",
        headed: "Avec interface",
        stealth_level: "Niveau de discrétion",
        bot_detection_evasion_profile_higher:
          "Profil d'évasion de la détection de robots. Les niveaux élevés peuvent affecter la surveillance des erreurs et certaines fonctions du navigateur.",
        light: "Léger",
        medium: "Moyen",
        full: "Complet",
        light_2: "Léger :",
        default_baseline_stealth_keeps_the:
          "Discrétion de référence par défaut. Conserve le lancement le moins risqué et le contrat JS tout en masquant les marqueurs d'automatisation de base.",
        default_product_security_baseline:
          "✓ Référence de sécurité produit par défaut",
        no_intentional_api_realism_or_security:
          "✓ Aucun compromis délibéré sur le réalisme de l'API ou la sécurité",
        medium_2: "Moyen :",
        non_default_risk_mode_adds_client_hints:
          "Mode à risque non par défaut. Ajoute des Client Hints, des substituts `chrome.runtime`, la propagation aux iframes, le filtrage des piles et le masquage de fonctions d'apparence native pour améliorer la compatibilité anti-robots.",
        alters_browser_visible_apis_and_error:
          "⚠ Modifie les API visibles par le navigateur ainsi que le comportement des erreurs et des piles. Les outils de surveillance et de débogage peuvent voir des résultats différents.",
        permissions_and_compatibility_shims_can:
          "⚠ Les permissions et les substituts de compatibilité peuvent renvoyer des valeurs volontairement modifiées. N'en faites pas votre référence de sécurité par défaut.",
        reports_that_require_explicitly:
          "⚠ Les signalements qui exigent d'activer explicitement Moyen doivent être traités comme une acceptation de risque volontaire, et non comme le comportement du chemin par défaut.",
        full_2: "Complet :",
        highest_risk_non_default_mode_adds:
          "Mode non par défaut le plus risqué. Ajoute des altérations graphiques, canvas, audio, de couleurs système et WebRTC par-dessus le mode Moyen.",
        browser_output_is_intentionally_less:
          "⚠ La sortie du navigateur est volontairement moins native et moins stable. Le rendu, les médias et le réseau peuvent se casser ou dériver par rapport à Chrome réel.",
        this_mode_is_not_an_acceptable_default:
          "⚠ Ce mode n'est pas une posture de sécurité par défaut acceptable. Ne l'activez que si vous acceptez explicitement sa surface de compromis.",
        reports_that_depend_on_enabling_full:
          "⚠ Les signalements qui dépendent de l'activation de Complet doivent être classés comme risque non par défaut de l'exploitant, sauf si un contournement du chemin par défaut est démontré.",
        webrtc_webgl_canvas_and_audio_behavior:
          "⚠ Le comportement de WebRTC, WebGL, canvas et audio peut tous diverger du Chrome de référence.",
        tab_eviction_policy: "Politique d'éviction des onglets",
        how_pinchtab_behaves_when_a_managed:
          "Comportement de PinchTab lorsqu'une instance gérée atteint sa limite d'onglets.",
        reject_new_tabs: "Refuser les nouveaux onglets",
        close_oldest: "Fermer le plus ancien",
        close_least_recently_used: "Fermer le moins récemment utilisé",
        tab_lifecycle: "Cycle de vie des onglets",
        close_idle_closes_a_tab_after_a_text:
          "« Fermer les inactifs » ferme un onglet après une réponse /text, /snapshot ou /action une fois le délai écoulé ; /navigate l'annule. « Geler les inactifs » gèle tout onglet qu'aucune requête n'a touché pendant le délai et le dégèle à sa requête suivante.",
        keep_never_auto_close: "Conserver (jamais de fermeture automatique)",
        close_idle: "Fermer les inactifs",
        freeze_idle: "Geler les inactifs",
        auto_close_delay: "Délai de fermeture automatique",
        seconds_of_idleness_before_an_idle_tab:
          "Secondes d'inactivité avant qu'un onglet inactif soit fermé ou gelé. Ne s'applique que si le cycle de vie est « Fermer les inactifs » ou « Geler les inactifs ».",
        restore_tabs_on_startup: "Restaurer les onglets au démarrage",
        when_enabled_tabs_open_at_shutdown_are:
          "Si activé, les onglets ouverts à l'arrêt sont réouverts au démarrage suivant. Désactivé par défaut — les onglets fermés le restent après redémarrage.",
        enable: "Activer",
        max_tabs: "Onglets max.",
        maximum_number_of_tabs_per_managed:
          "Nombre maximal d'onglets par instance gérée.",
        max_parallel_tabs: "Onglets parallèles max.",
        set_to_0_to_auto_detect_from_cpu_count:
          "Mettez 0 pour une détection automatique d'après le nombre de CPU.",
        timezone: "Fuseau horaire",
        optional_timezone_override_for_launched:
          "Remplacement facultatif du fuseau horaire des instances lancées.",
        europe_rome: "Europe/Rome",
        user_agent: "Agent utilisateur",
        optional_override_applied_to_new:
          "Remplacement facultatif appliqué aux nouvelles instances gérées.",
        custom_user_agent: "Agent utilisateur personnalisé",
        applies_to_newly_launched_managed:
          "S'applique aux instances gérées nouvellement lancées.",
      },
      securityidpisettingssection: {
        security_idpi: "Sécurité IDPI",
        indirect_prompt_injection_controls:
          "Les contrôles d'injection indirecte de consignes restreignent les sites web autorisés et ajoutent des protections autour du contenu extrait avant qu'il n'atteigne l'automatisation en aval.",
        idpi_is_disabled_browser_content_is_not:
          "L'IDPI est désactivé. Le contenu du navigateur n'est pas filtré par la liste de sites autorisés ni par les protections de contenu.",
        the_website_whitelist_is_not_set_to_a:
          "La liste blanche des sites web n'est pas définie comme une liste de domaines restreinte. C'est la principale défense de l'IDPI et elle devrait être configurée.",
        the_website_whitelist_contains_which:
          "La liste blanche des sites web contient '*', ce qui désactive de fait la restriction de domaine.",
        idpi_is_enforcing_a_specific_website:
          "L'IDPI applique une liste blanche de sites web précise et des protections de contenu.",
        enable: "Activer",
        custom_patterns: "Motifs personnalisés",
        optional_comma_separated_phrases_to:
          "Phrases séparées par des virgules (facultatif) à traiter comme du contenu suspect d'injection de consignes.",
        ignore_previous_instructions_exfiltrate:
          "ignore previous instructions, exfiltrate data",
      },
      timeoutssettingssection: {
        timeouts: "Délais d'expiration",
        runtime_timing_defaults_written_into:
          "Valeurs de temporisation par défaut écrites dans les nouvelles configurations des processus enfants. Les instances déjà en cours d'exécution conservent leurs délais actuels.",
      },
      browsersettingssection: {
        browser_runtime: "Environnement d'exécution du navigateur",
        these_settings_are_written_into_the:
          "Ces paramètres sont écrits dans la configuration du processus enfant générée pour les nouvelles instances gérées.",
        provider: "Fournisseur",
        browser_backend_used_for_new_managed:
          "Backend de navigateur utilisé pour les nouvelles instances gérées.",
        chrome: "Chrome",
        cloakbrowser: "CloakBrowser",
        ghost_chrome: "Ghost + Chrome",
        browser_version: "Version du navigateur",
        version_string_used_in_generated_ua:
          "Chaîne de version utilisée dans les valeurs par défaut générées d'agent utilisateur et d'empreinte.",
        browser_binary: "Binaire du navigateur",
        optional_path_override_for_the_chrome:
          "Remplacement facultatif du chemin de l'exécutable Chrome ou CloakBrowser.",
        fingerprint_seed: "Graine d'empreinte",
        deterministic_cloakbrowser_identity:
          "Graine d'identité déterministe de CloakBrowser. Laissez vide pour une identité neuve à chaque lancement.",
        fingerprint_platform: "Plateforme de l'empreinte",
        native_platform_fingerprint_reported_by:
          "Empreinte de plateforme native signalée par CloakBrowser.",
        auto: "Auto",
        windows: "Windows",
        macos: "macOS",
        linux: "Linux",
        cloak_locale: "Locale de Cloak",
        locale_passed_as_fingerprint_locale:
          "Locale transmise via --fingerprint-locale.",
        cloak_timezone: "Fuseau horaire de Cloak",
        timezone_passed_as_fingerprint_timezone:
          "Fuseau horaire transmis via --fingerprint-timezone.",
        webrtc_ip: "IP WebRTC",
        explicit_replacement_ip_or_auto_for:
          "IP de remplacement explicite, ou auto pour que CloakBrowser résolve l'IP de sortie du proxy.",
        fonts_directory: "Répertoire des polices",
        directory_containing_target_platform:
          "Répertoire contenant les polices de la plateforme cible pour CloakBrowser.",
        storage_quota: "Quota de stockage",
        storage_quota_in_mb_passed_as:
          "Quota de stockage en Mo transmis via --fingerprint-storage-quota.",
        native_stealth_only: "Discrétion native uniquement",
        disable_pinchtab_js_stealth_overlays:
          "Désactive les surcouches de discrétion JS de PinchTab et les options de lancement qui masquent l'automatisation.",
        use_cloakbrowser_native_patches:
          "Utiliser les correctifs natifs de CloakBrowser",
        extra_flags: "Options supplémentaires",
        additional_chrome_flags_appended_when:
          "Options Chrome supplémentaires ajoutées au lancement des instances gérées.",
        extension_paths: "Chemins des extensions",
        comma_separated_extension_directories:
          "Répertoires d'extensions à charger, séparés par des virgules. Par défaut, PinchTab utilise le dossier local extensions/ situé dans son répertoire d'état ou de configuration. Définissez des chemins personnalisés ici pour remplacer ce défaut, ou videz le champ pour désactiver le chargement des extensions.",
      },
      dashboardsettingssection: {
        dashboard_preferences: "Préférences du tableau de bord",
        language: "Langue",
        choose_the_language_of_the_dashboard:
          "Choisissez la langue de l'interface du tableau de bord.",
        these_controls_affect_this_dashboard_ui:
          "Ces réglages n'affectent que cette interface du tableau de bord. Ils sont stockés localement dans votre navigateur et ne nécessitent pas de redémarrer le backend.",
        screencast_frame_rate: "Fréquence de la diffusion",
        controls_how_often_live_previews:
          "Contrôle la fréquence à laquelle les aperçus en direct demandent de nouvelles images.",
        fps: "fps",
        screencast_quality: "Qualité de la diffusion",
        jpeg_quality_for_tab_preview_streams:
          "Qualité JPEG des flux d'aperçu des onglets.",
        screencast_width: "Largeur de la diffusion",
        maximum_preview_width_for_live_tiles:
          "Largeur maximale d'aperçu des vignettes en direct.",
        px: "px",
        memory_metrics: "Métriques de mémoire",
        poll_every_running_instance_for_browser:
          "Interroge chaque instance en cours d'exécution sur la mémoire du navigateur à chaque cycle de surveillance : RSS sur l'ensemble de l'arborescence de processus Chrome, plus le tas JS et les compteurs DOM lus dans chaque onglet ouvert via CDP. Coût mesuré : environ une milliseconde par onglet ouvert, plus quelques dizaines de millisecondes pour le parcours de l'arborescence, par instance et par cycle.",
        enable: "Activer",
        polling_interval: "Intervalle d'interrogation",
        how_frequently_the_dashboard_asks_the:
          "Fréquence à laquelle le tableau de bord demande des métriques à jour au backend.",
        s: "s",
        reasoning_output: "Sortie de raisonnement",
        choose_whether_the_live_agent_feed:
          "Choisissez si le flux de l'agent en direct affiche les appels d'outils, les mises à jour de progression, ou les deux.",
        tool_calls_only: "Appels d'outils uniquement",
        progress_only: "Progression uniquement",
        both: "Les deux",
      },
      autosolversettingssection: {
        autosolver: "AutoSolver",
        these_settings_are_saved_into_the:
          "Ces paramètres sont enregistrés dans le fichier de configuration de PinchTab. Les clés d'API des fournisseurs externes restent en écriture seule et doivent être définies directement dans ce fichier.",
        config_file: "Fichier de configuration",
        dashboard_edits_are_written_back_to:
          "Les modifications du tableau de bord sont réécrites dans ce fichier. Définissez les clés des fournisseurs externes sous autoSolver.external dans le même fichier de configuration.",
        config_path_unavailable: "Chemin de configuration indisponible",
        enable_autosolver: "Activer AutoSolver",
        turns_on_the_autosolver_runtime:
          "Active la configuration d'exécution d'AutoSolver pour les flux de défi pris en charge.",
        enabled: "Activé",
        disabled: "Désactivé",
        auto_trigger: "Déclenchement automatique",
        automatically_run_autosolver_after:
          "Exécute automatiquement AutoSolver après les requêtes de navigation et d'action prises en charge.",
        trigger_on_navigate: "Déclencher à la navigation",
        run_autosolver_checks_after_successful:
          "Exécute les vérifications d'AutoSolver après des appels de navigation réussis.",
        trigger_on_action: "Déclencher sur action",
        run_autosolver_checks_after_successful_2:
          "Exécute les vérifications d'AutoSolver après des appels d'action réussis.",
        max_attempts: "Tentatives max.",
        maximum_autosolver_retries_before_the:
          "Nombre maximal de nouvelles tentatives d'AutoSolver avant que le pipeline abandonne.",
        solver_timeout_sec: "Délai du solveur (s)",
        per_solver_timeout_for_each_attempt:
          "Délai par solveur pour chaque tentative.",
        retry_base_delay_ms: "Délai de base des tentatives (ms)",
        base_retry_backoff_delay_between:
          "Délai d'attente de base entre les tentatives d'AutoSolver.",
        retry_max_delay_ms: "Délai maximal des tentatives (ms)",
        maximum_retry_backoff_delay_cap_between:
          "Plafond du délai d'attente entre les tentatives d'AutoSolver.",
        solvers: "Solveurs",
        comma_separated_ordered_list_of_solver:
          "Liste ordonnée des noms de solveurs à essayer, séparés par des virgules. Utilisez GET /solvers ou GET /config/autosolver pour confirmer les noms disponibles à l'exécution.",
        llm_provider: "Fournisseur de LLM",
        optional_provider_name_used_when_llm:
          "Nom de fournisseur facultatif utilisé lorsque le repli sur un LLM est activé.",
        llm_fallback: "Repli sur un LLM",
        use_an_llm_as_the_last_resort_after:
          "Utiliser un LLM en dernier recours après l'échec des solveurs enregistrés.",
        external_provider_keys: "Clés des fournisseurs externes",
        capsolver_and_2captcha_credentials_are:
          "Les identifiants Capsolver et 2Captcha ne sont pas affichés dans le tableau de bord et doivent être gérés dans le fichier de configuration. Ces fournisseurs n'apparaissent dans les listes de solveurs à l'exécution que lorsque des clés sont configurées.",
        open_the_config_file_above_and_set:
          "Ouvrez le fichier de configuration ci-dessus et définissez",
        autosolver_external_capsolverkey: "autoSolver.external.capsolverKey",
        autosolver_external_twocaptchakey: "autoSolver.external.twoCaptchaKey",
        there_the_dashboard_does_not_display_or:
          "à cet endroit. Le tableau de bord n'affiche ni ne modifie ces valeurs, et aucune variable d'environnement ne les remplace.",
      },
    },
    monitoring: {
      monitoringemptystate: {
        starting_default_instance: "Démarrage de l'instance par défaut…",
        start_default_instance: "Démarrer l'instance par défaut",
        open_default_profile: "Ouvrir le profil par défaut",
        no_active_instances: "Aucune instance active",
        pinchtab_expected_a_default_instance:
          "PinchTab attendait une instance par défaut, mais elle n'est jamais devenue disponible. Démarrez-la manuellement ou inspectez le profil.",
        start_the_default_instance_or_open:
          "Démarrez l'instance par défaut ou ouvrez Profils pour en lancer une autre.",
        waiting_for_default_profile:
          "PinchTab attend que le profil par défaut soit en ligne. Nouvelle vérification automatique ({{count}} restantes).",
      },
      defaultinstancemodal: {
        start_default_instance: "Démarrer l'instance par défaut",
        cancel: "Annuler",
        start_headed: "Démarrer avec interface",
        start_headless: "Démarrer sans interface",
        choose_how_to_launch_the_default:
          "Choisissez comment lancer le profil par défaut pour cette session.",
        configured_default_mode: "Mode par défaut configuré :",
      },
    },
    profilespage: {
      loading_profiles: "Chargement des profils…",
      no_profiles_yet: "Aucun profil pour l'instant",
      click_new_profile_to_create_one:
        "Cliquez sur Nouveau profil pour en créer un",
      new_profile: "Nouveau profil",
      profiles: "Profils",
      total: "total",
      no_account: "Aucun compte",
      profile_deleted: "Profil « {{name}} » supprimé",
    },
    settingspage: {
      confirm_admin_action: "Confirmer l'action d'administration",
      cancel: "Annuler",
      verifying: "Vérification…",
      continue: "Continuer",
      re_enter_the_api_token_to_save_backend:
        "Saisissez à nouveau le jeton d'API pour enregistrer les changements de configuration du backend. La session élevée reste active brièvement, vous n'avez donc pas à répéter l'opération pour chaque action d'administration.",
      api_token: "Jeton d'API",
      paste_api_token: "Coller le jeton d'API",
      restart_required: "Redémarrage requis",
      reset: "Réinitialiser",
      saving: "Enregistrement…",
      save: "Enregistrer",
      restart_needed_for: "Redémarrage nécessaire pour :",
      loading_settings: "Chargement des paramètres…",
      settings_eyebrow: "Paramètres",
    },
  },
  activities: {
    activityexplorer: {
      agent: "Agent",
      all: "Tous",
      session: "Session",
      request_timeline: "Chronologie des requêtes",
      activity: "Activité",
      failed_to_load_activity: "Échec du chargement de l'activité",
    },
    agentstreampanel: {
      no_matching_activity: "Aucune activité correspondante",
      adjust_the_filters_or_generate_some:
        "Ajustez les filtres ou générez du trafic depuis la CLI, le MCP ou le tableau de bord.",
    },
    streamrow: {
      ms: "ms",
      navigate_to_page: "Naviguer vers la page",
      capture_page_snapshot: "Capturer un instantané de la page",
      open_screencast_stream: "Ouvrir le flux de diffusion",
      extract_text_from_page: "Extraire le texte de la page",
      click_on_page: "Cliquer sur la page",
      double_click_on_page: "Double-cliquer sur la page",
      type_into_page: "Saisir dans la page",
      hover_on_page: "Survoler la page",
      fill_field: "Remplir le champ",
      select_option: "Sélectionner une option",
      scroll_page: "Faire défiler la page",
      press_key: "Appuyer sur une touche",
      wait_for_condition: "Attendre une condition",
      evaluate_javascript: "Exécuter du JavaScript",
      upload_file: "Envoyer un fichier",
      download_file: "Télécharger un fichier",
      on_tab: " dans l'onglet ",
      navigate_to_url: "Aller à {{url}}",
      click_ref: "Cliquer sur « {{ref}} »",
      double_click_ref: "Double-cliquer sur « {{ref}} »",
      type_into_ref: "Saisir dans « {{ref}} »",
      hover_ref: "Survoler « {{ref}} »",
      fill_ref: "Remplir « {{ref}} »",
      select_ref: "Sélectionner « {{ref}} »",
      press_key_on_ref: "Appuyer sur une touche dans « {{ref}} »",
    },
    activityline: {
      progress: "PROGRESSION",
      agent_reported_progress: "L'agent a signalé une progression",
      ms: "ms",
    },
    activityitemline: {
      tab_paused_for_human_handoff: "onglet en pause pour une reprise manuelle",
      tab_is_paused_for_human_handoff:
        "L'onglet est en pause pour une reprise manuelle",
      resume_automation_after_manual:
        "Reprendre l'automatisation après résolution manuelle du défi",
      resuming: "Reprise…",
      resolve_challenge: "Résoudre le défi",
      browser_was_escalated: "Le navigateur a été élevé",
      escalated: "élevé",
      navigate_to_page: "Naviguer vers la page",
      capture_page_snapshot: "Capturer un instantané de la page",
      open_screencast_stream: "Ouvrir le flux de diffusion",
      extract_text_from_page: "Extraire le texte de la page",
      take_screenshot: "Prendre une capture d'écran",
      export_page_as_pdf: "Exporter la page en PDF",
      click_on_page: "Cliquer sur la page",
      double_click_on_page: "Double-cliquer sur la page",
      type_into_page: "Saisir dans la page",
      hover_on_page: "Survoler la page",
      fill_field: "Remplir le champ",
      select_option: "Sélectionner une option",
      scroll_page: "Faire défiler la page",
      press_key: "Appuyer sur une touche",
      wait_for_condition: "Attendre une condition",
      evaluate_javascript: "Exécuter du JavaScript",
      upload_file: "Envoyer un fichier",
      download_file: "Télécharger un fichier",
      resume_failed: "Échec de la reprise",
      navigate_to_url: "Aller à {{url}}",
      click_ref: "Cliquer sur « {{ref}} »",
      double_click_ref: "Double-cliquer sur « {{ref}} »",
      type_into_ref: "Saisir dans « {{ref}} »",
      hover_ref: "Survoler « {{ref}} »",
      fill_ref: "Remplir « {{ref}} »",
      select_ref: "Sélectionner « {{ref}} »",
      press_key_on_ref: "Appuyer sur une touche dans « {{ref}} »",
    },
    activitytimeline: {
      timeline: "Chronologie",
      recent_events: "Événements récents",
      no_matching_activity: "Aucune activité correspondante",
      adjust_the_filters_or_generate_some:
        "Ajustez les filtres ou générez du trafic depuis la CLI, le MCP ou le tableau de bord.",
    },
    activefilterbar: {
      clear_filters: "Effacer les filtres",
    },
    activityfiltermenu: {
      "200": "200",
      "3600": "3600",
      profile: "Profil",
      tab: "Onglet",
      agent: "Agent",
      action: "Action",
      advanced_filters: "Filtres avancés",
      hide: "Masquer",
      show: "Afficher",
      instance: "Instance",
      path_prefix: "Préfixe de chemin",
      tabs_or_instances: "/tabs/ or /instances/",
      age_seconds: "Âge (secondes)",
      limit: "Limite",
      clear: "Effacer",
      search: "Rechercher",
      any_profile: "Tous les profils",
      any_tab: "Tous les onglets",
      any_agent: "Tous les agents",
      any_action: "Toutes les actions",
      any_instance: "Toutes les instances",
    },
    agentworkspacesidebar: {
      agents: "Agents",
      activities: "Activités",
      no_agent_activity_observed_yet:
        "Aucune activité d'agent observée pour l'instant",
      all_agents: "Tous les agents",
    },
    copyidpill: {
      copied: "Copié",
      copy_tab_id: "Copier l'ID de l'onglet {{id}}",
    },
    hooks: {
      useactivitydata: {
        failed_to_load_activity: "Échec du chargement de l'activité",
        failed_to_load_agent_activity:
          "Échec du chargement de l'activité de l'agent",
      },
    },
  },
  settings: {
    sections: {
      dashboard: {
        dashboard: "Tableau de bord",
        local_monitoring_and_screencast:
          "Préférences locales de surveillance et de diffusion.",
      },
      defaults: {
        instance_defaults: "Valeurs par défaut des instances",
        how_new_managed_browser_instances_launch:
          "Mode de lancement des nouvelles instances de navigateur gérées.",
      },
      orchestration: {
        orchestration: "Orchestration",
        routing_strategy_port_range_and:
          "Stratégie de routage, plage de ports et politique d'attribution.",
      },
      security: {
        security: "Sécurité",
        sensitive_endpoint_gates_and_access:
          "Contrôles d'accès et verrous des points d'accès sensibles.",
      },
      "security-idpi": {
        security_idpi: "Sécurité IDPI",
        indirect_prompt_injection_website_and:
          "Défenses des sites web et du contenu contre l'injection indirecte de consignes.",
      },
      profiles: {
        profiles: "Profils",
        shared_profile_storage_and_default:
          "Stockage partagé des profils et comportement du profil par défaut.",
      },
      network: {
        network_attach: "Réseau et attachement",
        server_binding_auth_and_attach_policy:
          "Écoute du serveur, authentification et politique d'attachement.",
      },
      browser: {
        browser_runtime: "Environnement d'exécution du navigateur",
        chrome_binary_version_flags_and:
          "Binaire Chrome, version, options et extensions.",
      },
      timeouts: {
        timeouts: "Délais d'expiration",
        action_navigation_shutdown_and_wait:
          "Temporisation des actions, de la navigation, de l'arrêt et de l'attente.",
      },
      autosolver: {
        autosolver: "AutoSolver",
        challenge_solving_behavior_and_config:
          "Comportement de résolution des défis et fournisseurs adossés au fichier de configuration.",
      },
      observability: {
        observability: "Observabilité",
        activity_logging_and_retention_settings:
          "Paramètres du journal d'activité et de conservation.",
      },
    },
    security: {
      endpoints: {
        allowEvaluate: {
          allow_evaluate: "Autoriser evaluate",
        },
        allowMacro: {
          allow_macro: "Autoriser macro",
        },
        allowScreencast: {
          allow_screencast: "Autoriser la diffusion",
        },
        allowDownload: {
          allow_download: "Autoriser le téléchargement",
        },
        allowCookies: {
          allow_cookies: "Autoriser les cookies",
        },
        allowUpload: {
          allow_upload: "Autoriser l'envoi",
        },
        allowNetworkIntercept: {
          allow_network_interception: "Autoriser l'interception réseau",
          lets_agents_install_rules_to_abort_or:
            "Permet aux agents d'installer des règles pour interrompre ou satisfaire (simuler) des requêtes HTTP sur un onglet. Lorsque c'est actif, la falsification de réponses est INTERDITE sur les hôtes de la liste « Sites web autorisés » ci-dessous et PERMISE ailleurs. Falsifier des réponses sur des hôtes que vous avez autorisés à l'agent (par ex. votre banque) est le résultat le plus risqué — c'est pourquoi ce sont les hôtes de la liste autorisée qui sont protégés, et non l'inverse. Les vérifications préalables OPTIONS sont ignorées par défaut pour ne pas casser CORS.",
        },
        allowFileScheme: {
          allow_file_navigation: "Autoriser la navigation file://",
          lets_agents_open_local_file_urls_a_file:
            "Permet aux agents d'ouvrir des URL file:// locales. Une URL file:// n'a pas d'hôte : elle n'est donc PAS limitée par « Sites web autorisés » ci-dessous et contourne la protection contre les SSRF et les IP privées — l'activer accorde un accès en lecture (via instantané, capture d'écran ou scraping) à tout fichier local lisible par le processus du serveur. Elle reste bloquée tant qu'une liste autorisée en mode strict est active. À activer uniquement sur des machines de confiance à locataire unique.",
        },
      },
      idpi: {
        enabled: {
          enable_idpi: "Activer l'IDPI",
          turn_on_indirect_prompt_injection:
            "Active les défenses contre l'injection indirecte de consignes.",
        },
        strictMode: {
          strict_mode: "Mode strict",
          block_disallowed_domains_and_suspicious:
            "Bloque les domaines non autorisés et le contenu suspect au lieu de seulement avertir.",
        },
        scanContent: {
          scan_content: "Analyser le contenu",
          inspect_extracted_text_and_snapshots:
            "Inspecte le texte extrait et les instantanés à la recherche de motifs d'injection de consignes.",
        },
        wrapContent: {
          wrap_content: "Encapsuler le contenu",
          mark_returned_page_text_as_untrusted:
            "Marque le texte de page renvoyé comme contenu non fiable pour les consommateurs en aval.",
        },
      },
    },
    defaults: {
      booleans: {
        blockImages: {
          block_images: "Bloquer les images",
        },
        blockMedia: {
          block_media: "Bloquer les médias",
        },
        blockAds: {
          block_ads: "Bloquer les publicités",
        },
        noAnimations: {
          disable_css_animations: "Désactiver les animations CSS",
        },
        noRestore: {
          skip_session_restore: "Ignorer la restauration de session",
        },
      },
      timeouts: {
        actionSec: {
          action_timeout: "Délai d'expiration des actions",
          maximum_time_for_action_requests:
            "Durée maximale des requêtes d'action.",
        },
        navigateSec: {
          navigate_timeout: "Délai d'expiration de navigation",
          maximum_time_for_navigation_requests:
            "Durée maximale des requêtes de navigation.",
        },
        shutdownSec: {
          shutdown_timeout: "Délai d'expiration à l'arrêt",
          grace_period_before_force_closing_a:
            "Délai de grâce avant de fermer de force un processus enfant.",
        },
        waitNavMs: {
          wait_after_navigation_delay: "Délai après navigation",
          post_navigation_stabilization_delay_in:
            "Délai de stabilisation après navigation, en millisecondes.",
        },
      },
    },
    notices: {
      backend_config_saved_dynamic_changes:
        "Configuration du backend enregistrée. Les changements dynamiques ont été appliqués lorsque c'était possible.",
      backend_config_saved_dynamic_changes_2:
        "Configuration du backend enregistrée. Les changements dynamiques ont été appliqués lorsque c'était possible. Un redémarrage est conseillé pour les changements au niveau du serveur.",
      preferencesSaved:
        "Préférences du tableau de bord enregistrées dans ce navigateur.",
    },
    errors: {
      loadFailed: "Échec du chargement des paramètres",
      saveFailed: "Échec de l'enregistrement des paramètres",
      tokenVerifyFailed: "Échec de la vérification du jeton d'API",
    },
  },
  monitoring: {
    errors: {
      startInstanceFailed: "Échec du démarrage de l'instance",
    },
  },
  errors: {
    requestFailed: "Échec de la requête",
  },
  auth: {
    insecureTransport:
      "La session du tableau de bord fonctionne en HTTP non sécurisé ; utilisez HTTPS ou localhost pour une meilleure protection de session.",
  },
};

export default messages;
