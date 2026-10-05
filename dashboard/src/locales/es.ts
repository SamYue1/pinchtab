import type { Messages } from "../i18n/messages";

const messages: Messages = {
  app: {
    name: "PinchTab",
    checking_server_authentication:
      "Comprobando la autenticación del servidor…",
    pinchtab_is_restarting_or_unreachable:
      "PinchTab se está reiniciando o no es accesible.",
    automatic_retries_stopped: " Se han detenido los reintentos automáticos.",
    retry_now: "Reintentar ahora",
    refresh: "Actualizar",
  },
  profiles: {
    profiletoolbarbuttons: {
      copy_id: "Copiar ID",
      delete: "Eliminar",
      save: "Guardar",
      stop: "Detener",
      start: "Iniciar",
      delete_profile: "Eliminar perfil",
      cancel: "Cancelar",
      delete_profile_2: '¿Eliminar el perfil "',
      every_cookie_login_and_session_stored:
        '"? Se perderán de forma permanente todas las cookies, inicios de sesión y sesiones que contiene. No se puede deshacer.',
      copied: "Copiado",
      failed: "Falló",
    },
    profilemetainfopanel: {
      profile_panel: "Panel del perfil",
      status: "Estado",
      port: "Puerto",
      browser: "Navegador",
      size: "Tamaño",
      account: "Cuenta",
      identity: "Identidad",
      connection: "Conexión",
      cdp_attached: "CDP adjunto",
      cdp_url: "URL de CDP",
      path: "Ruta",
      not_found: " (no encontrado)",
      attached_via_cdp: "Adjunto por CDP",
      headless: "Sin interfaz",
      headed: "Con interfaz",
    },
    profilecard: {
      error: "error",
      stopped: "detenido",
      size: "Tamaño",
      account: "Cuenta",
      use_when: "Usar cuando",
      details: "Detalles",
      stop: "Detener",
      start: "Iniciar",
    },
    profiledetailspanel: {
      select_a_profile_to_inspect_its:
        "Selecciona un perfil para inspeccionar su instancia, sus pestañas en vivo y sus registros.",
      live: "En vivo",
      tabs: "Pestañas",
      logs: "Registros",
      no_tabs_open: "No hay pestañas abiertas.",
      instance_not_running: "La instancia no está en ejecución.",
      profile_name: "Perfil: {{name}}",
    },
    profilebasicinfopanel: {
      name: "Nombre",
      use_this_profile_when: "Usar este perfil cuando",
    },
    profileliveviewpanel: {
      no_tabs_open: "No hay pestañas abiertas",
      instance_not_running_start_the_profile:
        "La instancia no está en ejecución. Inicia el perfil para ver la vista en vivo.",
    },
    instancelogspanel: {
      loading_logs: "Cargando registros…",
      no_instance_logs_available: "No hay registros de instancia disponibles.",
    },
    groups: {
      user: "Perfiles",
      temporary: "Temporales",
      quarantined: "En cuarentena",
    },
  },
  components: {
    atoms: {
      debugpanel: {
        debug: "🐛 Depuración",
        debug_panel: "Panel de depuración",
        instances: "Instancias:",
      },
      emptystate: {
        dashboard: "Panel",
      },
      modal: {
        dashboard: "Panel",
        close: "Cerrar",
      },
      errorboundary: {
        something_went_wrong: "⚠️ Algo ha salido mal",
        unknown_error: "Error desconocido",
        try_again: "Volver a intentarlo",
      },
    },
    screencast: {
      screencaststatusbar: {
        decrease_fps: "Reducir los FPS",
        increase_fps: "Aumentar los FPS",
        take_full_quality_screenshot_png:
          "Capturar pantalla a máxima calidad (PNG)",
        download_as_pdf: "Descargar como PDF",
        fps: "FPS (",
      },
      screencasttile: {
        tab_preview: "Vista previa de la pestaña",
        connection_lost: "Se perdió la conexión",
        show_static_preview: "Mostrar vista previa estática",
        retry_connection: "Reintentar conexión",
      },
      framedecode: {
        failed_to_decode_screencast_frame:
          "No se pudo decodificar el fotograma de la retransmisión",
      },
    },
    molecules: {
      createprofilemodal: {
        new_profile: "📁 Nuevo perfil",
        cancel: "Cancelar",
        create: "Crear",
        name: "Nombre",
        e_g_personal_work_scraping: "p. ej. personal, trabajo, scraping",
        use_this_profile_when_helps_agents_pick:
          "Usar este perfil cuando (ayuda a los agentes a elegir el perfil correcto)",
        e_g_i_need_to_access_gmail_for_the_team:
          "p. ej. Necesito acceder a Gmail con la cuenta del equipo",
        import_from_optional_chrome_user_data:
          "Importar desde (opcional — ruta de datos de usuario de Chrome)",
        e_g_users_you_library_application:
          "p. ej. /Users/you/Library/Application Support/Google/Chrome",
      },
      navbar: {
        pinchtab: "PinchTab",
        logout: "Cerrar sesión",
        refresh_r: "Actualizar (⌘R)",
        toggle_menu: "Alternar menú",
        monitoring: "Monitorización",
        agents: "Agentes",
        profiles: "Perfiles",
        settings: "Ajustes",
      },
      instancestats: {
        instance: "Instancia",
        status: "Estado",
        uptime: "Tiempo activo",
        port: "Puerto",
        crashes: "Fallos",
        browsing: "Navegación",
        tabs: "Pestañas",
        domains: "Dominios",
        resources: "Recursos",
        memory: "Memoria",
        renderers: "Procesos de renderizado",
        pages: "Páginas",
        js_heap: "Heap de JS",
        dom_nodes: "Nodos DOM",
        listeners: "Escuchadores",
        frames: "Marcos",
        unreadable: "Ilegibles",
        just_now: "ahora mismo",
        tabs_open_before_it_were_lost:
          "las pestañas abiertas antes se perdieron",
        rss_across_the_browser_process_tree:
          "RSS de todo el árbol de procesos del navegador",
        tabs_that_did_not_answer_not_counted:
          "pestañas que no respondieron (no contabilizadas)",
        last_crash:
          "último: {{reason}} a las {{time}} · las pestañas abiertas antes se perdieron",
        heap_summary_one: "usado / total, sumado en {{count}} pestaña",
        heap_summary_other: "usado / total, sumado en {{count}} pestañas",
        document_count_one: "{{count}} documento",
        document_count_other: "{{count}} documentos",
      },
      agentitem: {
        tab_paused_for_human_handoff:
          "pestaña en pausa para intervención humana",
        just_now: "ahora mismo",
        session_at: "Sesión {{time}}",
        session_range: "Sesión {{start}}–{{end}}",
      },
      startinstancemodal: {
        start_profile: "🖥️ Iniciar perfil",
        cancel: "Cancelar",
        start: "Iniciar",
        port: "Puerto",
        auto_select_from_configured_range:
          "Selección automática del rango configurado",
        leave_blank_to_auto_select_a_free_port:
          "Déjalo en blanco para elegir automáticamente un puerto libre del rango configurado.",
        headless_best_for_docker_vps: "Sin interfaz (mejor para Docker/VPS)",
        browser: "Navegador",
        server_default: "Valor predeterminado del servidor",
        chrome: "Chrome",
        cloakbrowser: "CloakBrowser",
        ghost_chrome: "Ghost + Chrome",
        direct_launch_command_backup: "Comando de inicio directo (respaldo)",
        copy_command: "Copiar comando",
        replace: "Reemplazar",
        pinchtab_config_token: "pinchtab config token",
        when_auth_is_enabled: "cuando la autenticación está activada.",
        with_the_value_from: "con el valor de",
        port_must_be_a_whole_number_between_1:
          "El puerto debe ser un número entero entre 1 y 65535.",
        profile_id_missing: "Falta el ID del perfil",
        failed_to_launch_instance: "No se pudo iniciar la instancia",
        copied: "¡Copiado!",
        failed_to_copy: "No se pudo copiar",
      },
      handoffnotifications: {
        human_intervention_required: "Se requiere intervención humana",
        dismiss_notification: "Descartar notificación",
        reason: "Motivo:",
        resume: "Reanudar",
      },
      serverstatusbadge: {
        expand_instance_list: "Expandir la lista de instancias",
        collapse_instance_list: "Contraer la lista de instancias",
        tab: "pestaña",
        restart_required: "Es necesario reiniciar",
        server_running: "Servidor en ejecución",
        restart_required_2: "Es necesario reiniciar",
        running: "En ejecución",
        server_running_no_instances: "Servidor en ejecución, sin instancias",
      },
      serversummary: {
        settings: "Ajustes",
        server_information: "Información del servidor",
        technical_details_for_current_session:
          "Detalles técnicos de la sesión actual",
        version: "Versión",
        uptime: "Tiempo activo",
      },
      tabschart: {
        monitoring: "Monitorización",
        live_telemetry: "Telemetría en vivo",
        tabs: "Pestañas",
        memory: "Memoria",
        heap: "Heap",
        server_heap: "Heap del servidor",
        collecting_data: "Recopilando datos…",
        waiting_for_more_data: "Esperando más datos…",
      },
      idbadge: {
        click_to_copy_full_id: "Haz clic para copiar el ID completo: {{id}}",
      },
    },
  },
  tabs: {
    tabbar: {
      tab_paused_for_human_handoff: "pestaña en pausa para intervención humana",
      tab_is_paused_for_human_handoff:
        "La pestaña está en pausa para intervención humana",
      untitled: "Sin título",
      unpin_and_follow_the_focused_tab_again:
        "Dejar de fijar y volver a seguir la pestaña enfocada",
      pin_this_tab_selection: "Fijar esta selección de pestaña",
      tabs: "Pestañas",
      monitoring: "Monitorización",
      pin_tab: "Fijar {{title}}",
      unpin_tab_and_follow_focus: "Dejar de fijar {{title}} y seguir el foco",
      close_tab: "Cerrar {{title}}",
      tabs_new: "Pestañas ({{count}} nuevas)",
    },
    selectedtabtitle: {
      untitled: "Sin título",
    },
    instancetabspanel: {
      chart_crashed_check_console: "El gráfico falló: revisa la consola",
      no_tabs_open: "No hay pestañas abiertas",
      unknown: "Desconocido",
    },
    tabitem: {
      untitled: "Sin título",
    },
    consolepanel: {
      loading_console_logs: "Cargando registros de consola…",
      no_console_logs_yet: "Todavía no hay registros de consola",
    },
    errorspanel: {
      loading_errors: "Cargando errores…",
      no_errors_yet: "Todavía no hay errores",
    },
    selectedtabpanel: {
      select_a_tab_to_view_details:
        "Selecciona una pestaña para ver los detalles",
      no_instance_id_provided_for_live_view:
        "No se proporcionó un ID de instancia para la vista en vivo.",
      actions: "Acciones",
      live: "En vivo",
      console: "Consola",
      errors: "Errores",
    },
  },
  instances: {
    instancelistitem: {
      tabs: "pestañas",
      open_profile: "Abrir perfil",
      restart: "Reiniciar",
      stop: "Detener",
    },
    instancecard: {
      headless: "Sin interfaz",
      headed: "Con interfaz",
      uptime: "Tiempo activo",
      open_dashboard: "Abrir panel",
      stop: "Detener",
    },
  },
  pages: {
    monitoringpage: {
      instances: "Instancias",
      collapse_sidebar: "Contraer la barra lateral",
    },
    loginpage: {
      authentication: "Autenticación",
      enter_api_token: "Introduce el token de API",
      this_pinchtab_server_requires_a_bearer:
        "Este servidor de PinchTab requiere un token de portador antes de que el panel pueda cargar las rutas y API protegidas.",
      run: "Ejecuta",
      pinchtab_config_token: "pinchtab config token",
      to_copy_the_token_to_your_clipboard:
        "para copiar el token al portapapeles.",
      paste_bearer_token: "Pega el token de portador",
      authorizing: "Autorizando…",
      continue: "Continuar",
      authentication_failed: "La autenticación falló",
    },
    settings: {
      orchestrationsettingssection: {
        orchestration: "Orquestación",
        port_range_and_allocation_policy_can_be:
          "El rango de puertos y la política de asignación se aplican de inmediato a los próximos inicios. Los cambios de estrategia y de política de reinicio requieren reiniciar el panel, porque las rutas de estrategia y el estado del ciclo de vida se registran al arrancar.",
        strategy: "Estrategia",
        controls_instance_lifecycle_and_how:
          "Controla el ciclo de vida de las instancias y cómo se enrutan las rutas abreviadas.",
        always_on: "Siempre activo",
        simple: "Simple",
        explicit: "Explícito",
        simple_autorestart: "Reinicio automático simple",
        no_instance_hub: "Sin instancia (concentrador)",
        launches_a_default_instance_at_boot_and:
          "Inicia una instancia predeterminada al arrancar y la relanza si falla.",
        launches_one_instance_on_first_request:
          "Inicia una instancia en la primera petición. Sin reinicio automático.",
        all_instances_managed_via_api_no:
          "Todas las instancias se gestionan por API. Sin inicios automáticos.",
        launches_on_first_request_and:
          "Se inicia en la primera petición y se relanza si falla.",
        no_local_chrome_processes_acts_as_a_hub:
          "No inicia procesos locales de Chrome. Actúa solo como concentrador de puentes remotos.",
        allocation_policy: "Política de asignación",
        determines_how_running_instances_are:
          "Determina cómo se eligen las instancias en ejecución para las peticiones abreviadas.",
        first_available: "Primera disponible",
        round_robin: "Por turnos",
        random: "Aleatoria",
        instance_port_start: "Puerto inicial de instancia",
        lower_bound_for_auto_allocated_instance:
          "Límite inferior de los puertos de instancia asignados automáticamente.",
        instance_port_end: "Puerto final de instancia",
        upper_bound_for_auto_allocated_instance:
          "Límite superior de los puertos de instancia asignados automáticamente.",
        max_restarts: "Reinicios máximos",
        maximum_restart_attempts_use_1_for:
          "Número máximo de reintentos de reinicio. Usa -1 para ilimitado y 0 para no reiniciar.",
        initial_backoff: "Espera inicial",
        delay_in_seconds_before_the_first:
          "Retardo en segundos antes del primer intento de reinicio.",
        max_backoff: "Espera máxima",
        upper_bound_in_seconds_for_exponential:
          "Límite superior en segundos para la espera exponencial entre reinicios.",
        stable_after: "Estable tras",
        seconds_the_instance_must_stay_healthy:
          "Segundos que la instancia debe mantenerse sana antes de que se reinicie el contador de reinicios.",
      },
      securitysettingssection: {
        security: "Seguridad",
        these_controls_define_what_risky:
          "Estos controles definen qué capacidades de riesgo expone PinchTab.",
        one_or_more_sensitive_endpoint_families:
          "Hay una o más familias de endpoints sensibles activadas. Funciones como la ejecución de scripts, las descargas, las subidas y la captura en vivo pueden exponer capacidades de alto riesgo. Actívalas solo en entornos de confianza. Eres responsable de proteger el acceso a la red, la autenticación y el uso posterior.",
        these_endpoint_families_can_expose_high:
          "Estas familias de endpoints pueden exponer capacidades de alto riesgo al activarse. Actívalas solo en entornos de confianza y solo si aceptas la responsabilidad sobre el acceso a la red, la autenticación y el uso posterior.",
        controls_whether_the_corresponding:
          "Controla si la familia de endpoints correspondiente está activada.",
        enable: "Activar",
        allowed_websites: "Sitios web permitidos",
        comma_separated_domain_allowlist_for:
          "Lista de dominios permitidos para contenido web, separada por comas. Usa hosts exactos o patrones como *.example.com.",
        "127_0_0_1_localhost_1": "127.0.0.1, localhost, ::1",
        keep_this_list_narrow_empty_or_wildcard:
          "Mantén esta lista reducida. Las entradas vacías o con comodines debilitan el límite principal de IDPI. Permitir sitios no locales o no fiables amplía la superficie de ataque del navegador aunque IDPI esté activado.",
        trusted_proxy_cidrs: "CIDR de proxy de confianza",
        comma_separated_cidrs_or_ips_whose:
          "CIDR o IP separados por comas cuya IP remota informada por el navegador debe considerarse fiable durante la navegación. Úsalo solo para proxies internos conocidos.",
        "10_1_2_3_10_0_0_0_8": "10.1.2.3, 10.0.0.0/8",
        this_weakens_navigation_ip_checks_for:
          "Esto debilita las comprobaciones de IP en la navegación para las IP remotas coincidentes. Prefiere direcciones de proxy concretas antes que rangos privados amplios. Las entradas con solo una IP se tratan como un único host.",
        trusted_resolve_cidrs: "CIDR de resolución de confianza",
        comma_separated_cidrs_or_ips_that_a:
          "CIDR o IP separados por comas a los que un nombre de host puede resolverse durante la comprobación previa de navegación. Está pensado para configuraciones internas de DNS o proxy.",
        "198_18_0_0_15_10_1_2_3": "198.18.0.0/15, 10.1.2.3",
        this_allows_hostnames_to_resolve_to_non:
          "Esto permite que los nombres de host se resuelvan a IP no públicas. Mantén la lista reducida e incluye solo infraestructura que controles. Las entradas con solo una IP se tratan como un único host.",
      },
      settingssharedcomponents: {
        settings: "Ajustes",
      },
      networksettingssection: {
        network_attach: "Red y adjunción",
        port_and_bind_changes_require_a_restart:
          "Los cambios de puerto y de dirección de enlace requieren reiniciar. La gestión del token de API se realiza fuera del panel.",
        server_port: "Puerto del servidor",
        http_port_for_the_dashboard_process:
          "Puerto HTTP del proceso del panel.",
        bind_address: "Dirección de enlace",
        network_interface_the_dashboard_process:
          "Interfaz de red a la que se enlaza el proceso del panel. Mantener 127.0.0.1 o localhost limita el acceso directo a la máquina local.",
        a_non_loopback_bind_is_a_documented_non:
          "Enlazar a una dirección que no sea de bucle local es un cambio de configuración documentado, no predeterminado y que reduce la seguridad. Puede exponer el servidor más allá de la máquina local salvo que otro límite de red restrinja el acceso. Mantén un token configurado y revisa de forma explícita el comportamiento del proxy o de publicación de puertos.",
        loopback_bind_keeps_direct_server:
          "El enlace de bucle local mantiene local el acceso directo al servidor. Pasar a",
        or_another_non_local_address_widens_the:
          "u otra dirección no local amplía el límite de confianza.",
        api_token: "Token de API",
        bearer_token_required_by_authenticated:
          "Token de portador que requieren las peticiones autenticadas cuando está configurado. El panel nunca lo devuelve ni lo gestiona.",
        no_token_configured_set_one_through_the:
          "No hay token configurado. Configura uno mediante la CLI o el archivo de configuración.",
        token_configured_manage_rotation:
          "Token configurado. Gestiona la rotación mediante la CLI o el archivo de configuración; el servidor nunca devuelve el valor actual. Ejecuta",
        pinchtab_config_token: "pinchtab config token",
        to_copy_it_to_your_clipboard: "para copiarlo al portapapeles.",
        no_api_token_is_set_anyone_who_can:
          "No hay ningún token de API configurado. Cualquiera que pueda alcanzar este servidor puede acceder a los endpoints expuestos. Úsalo solo en redes locales de confianza o configura un token robusto mediante la CLI o el archivo de configuración. Eres responsable de proteger el acceso.",
        state_directory: "Directorio de estado",
        base_state_path_used_by_managed_child:
          "Ruta base de estado que usan las instancias hijas gestionadas.",
        trust_proxy_headers: "Confiar en las cabeceras de proxy",
        trust_x_forwarded_proto_x_forwarded:
          "Confía en las cabeceras X-Forwarded-Proto, X-Forwarded-Host y Forwarded para las comprobaciones de origen. Actívalo solo si PinchTab se ejecuta detrás de un proxy inverso de confianza (p. ej. Caddy, nginx).",
        enabled: "Activado",
        disabled: "Desactivado",
        cookie_secure_mode: "Modo Secure de cookies",
        controls_whether_dashboard_session:
          "Controla si las cookies de sesión del panel requieren HTTPS. Auto activa Secure solo con HTTPS. Forzar Secure es adecuado cuando hay TLS delante de PinchTab.",
        auto: "Automático",
        force_secure: "Forzar Secure",
        force_insecure: "Forzar no seguro",
        force_secure_blocks_dashboard_login_on:
          "Forzar Secure bloquea el inicio de sesión del panel por HTTP sin cifrar. Úsalo cuando PinchTab se sirva por HTTPS directamente o detrás de un proxy de confianza. Si TLS termina delante de PinchTab, activa",
        trustproxyheaders: "trustProxyHeaders",
        so_forwarded_https_requests_are:
          "para que se reconozcan las peticiones HTTPS reenviadas.",
        persist_dashboard_sessions: "Mantener las sesiones del panel",
        keep_dashboard_login_sessions_across:
          "Mantiene las sesiones de inicio de sesión del panel entre reinicios del servidor. Desactívalo si quieres que cada reinicio obligue a iniciar sesión de nuevo.",
        session_idle_timeout: "Tiempo de inactividad de la sesión",
        how_long_an_unused_dashboard_session:
          "Cuánto tiempo sigue siendo válida una sesión del panel sin usar. Se guarda en segundos en la configuración.",
        session_max_lifetime: "Duración máxima de la sesión",
        absolute_lifetime_for_a_dashboard:
          "Duración absoluta de una sesión del panel antes de tener que recrearla, aunque esté activa.",
        require_elevation_for_config_saves:
          "Exigir elevación para guardar la configuración",
        ask_for_api_token_re_entry_before:
          "Pide volver a introducir el token de API antes de guardar cambios en la configuración del backend. Desactivado de forma predeterminada.",
        allow_attach: "Permitir adjuntar",
        permit_attaching_pinchtab_to_externally:
          "Permite adjuntar PinchTab a sesiones de Chrome gestionadas externamente.",
        enable: "Activar",
        allowed_attach_hosts: "Hosts permitidos para adjuntar",
        comma_separated_host_allowlist_for:
          'Lista de hosts permitidos para peticiones de adjunción, separada por comas. Incluye solo hosts que controles y en los que confíes. Usar "*" desactiva la lista de hosts permitidos.',
        allowhosts: 'allowHosts: ["*"]',
        is_a_documented_non_default_security:
          "es una anulación documentada, no predeterminada y que reduce la seguridad. Desactiva por completo la lista de hosts permitidos y permite peticiones de adjunción remota a cualquier host accesible con un esquema permitido. Úsala solo en redes aisladas y controladas por el operador.",
        hosts_in_this_allowlist_may_be_used_for:
          "Los hosts de esta lista pueden usarse para peticiones de adjunción remota. Las entradas amplias o no fiables amplían el límite de confianza y pueden exponer sesiones externas de Chrome y el contenido del navegador.",
        allowed_attach_schemes: "Esquemas permitidos para adjuntar",
        comma_separated_scheme_allowlist:
          "Lista de esquemas permitidos separada por comas; normalmente ws y wss.",
      },
      observabilitysettingssection: {
        observability: "Observabilidad",
        activity_logging_tracks_api_requests:
          "El registro de actividad guarda las peticiones de API para depuración y auditoría. Los registros se almacenan localmente y pueden consultarse en la página Actividad.",
        activity_logging: "Registro de actividad",
        enable_or_disable_activity_event:
          "Activa o desactiva el registro de eventos de actividad.",
        enabled: "Activado",
        disabled: "Desactivado",
        retention_days: "Retención (días)",
        how_long_to_keep_activity_logs_before:
          "Cuánto tiempo conservar los registros de actividad antes de la limpieza automática. Una retención mayor ocupa más disco, pero ofrece un mejor historial de auditoría.",
        session_idle_timeout_seconds:
          "Tiempo de inactividad de la sesión (segundos)",
        time_before_an_inactive_agent_session:
          "Tiempo antes de que una sesión de agente inactiva se considere inactiva. Se usa para agrupar la actividad por sesión.",
      },
      profilessettingssection: {
        profiles: "Perfiles",
        profile_storage_is_host_level_changing:
          "El almacenamiento de perfiles es a nivel de host. Cambiar el directorio base requiere reiniciar, porque el gestor de perfiles y el orquestador se crean con él al arrancar.",
        profiles_base_directory: "Directorio base de perfiles",
        root_directory_where_browser_profiles:
          "Directorio raíz donde se almacenan los perfiles de navegador.",
        default_profile: "Perfil predeterminado",
        profile_name_used_when_the_server_needs:
          "Nombre de perfil que se usa cuando el servidor necesita un valor predeterminado implícito.",
      },
      defaultssettingssection: {
        instance_defaults: "Valores predeterminados de instancia",
        these_values_are_written_to_config_and:
          "Estos valores se escriben en la configuración y se usan para las nuevas instancias gestionadas. Las instancias ya en ejecución mantienen su configuración actual.",
        mode: "Modo",
        default_browser_mode_for_new_launches:
          "Modo de navegador predeterminado para los nuevos inicios.",
        headless: "Sin interfaz",
        headed: "Con interfaz",
        stealth_level: "Nivel de sigilo",
        bot_detection_evasion_profile_higher:
          "Perfil de evasión de detección de bots. Los niveles más altos pueden afectar a la monitorización de errores y a ciertas funciones del navegador.",
        light: "Ligero",
        medium: "Medio",
        full: "Completo",
        light_2: "Ligero:",
        default_baseline_stealth_keeps_the:
          "Sigilo base predeterminado. Mantiene el inicio de menor riesgo y el contrato de JS ocultando los marcadores básicos de automatización.",
        default_product_security_baseline:
          "✓ Base de seguridad predeterminada del producto",
        no_intentional_api_realism_or_security:
          "✓ Sin sacrificar deliberadamente el realismo de la API ni la seguridad",
        medium_2: "Medio:",
        non_default_risk_mode_adds_client_hints:
          "Modo de riesgo no predeterminado. Añade Client Hints, sustitutos de `chrome.runtime`, propagación a iframes, filtrado de pilas y enmascaramiento de funciones con aspecto nativo para mejorar la compatibilidad antibots.",
        alters_browser_visible_apis_and_error:
          "⚠ Altera las API visibles para el navegador y el comportamiento de errores y pilas. Las herramientas de monitorización y depuración pueden ver resultados distintos.",
        permissions_and_compatibility_shims_can:
          "⚠ Los permisos y los sustitutos de compatibilidad pueden devolver valores alterados deliberadamente. No lo uses como base de seguridad predeterminada.",
        reports_that_require_explicitly:
          "⚠ Los informes que exigen activar Medio explícitamente deben tratarse como aceptación de riesgo opcional, no como comportamiento de la ruta predeterminada.",
        full_2: "Completo:",
        highest_risk_non_default_mode_adds:
          "Modo de mayor riesgo no predeterminado. Añade alteraciones de gráficos, canvas, audio, colores del sistema y WebRTC sobre el modo Medio.",
        browser_output_is_intentionally_less:
          "⚠ La salida del navegador es deliberadamente menos nativa y menos estable. El renderizado, los medios y la red pueden fallar o desviarse del Chrome real.",
        this_mode_is_not_an_acceptable_default:
          "⚠ Este modo no es una postura de seguridad predeterminada aceptable. Actívalo solo si aceptas explícitamente su superficie de compromiso.",
        reports_that_depend_on_enabling_full:
          "⚠ Los informes que dependen de activar Completo deben clasificarse como riesgo no predeterminado del operador, salvo que se demuestre un bypass en la ruta predeterminada.",
        webrtc_webgl_canvas_and_audio_behavior:
          "⚠ El comportamiento de WebRTC, WebGL, canvas y audio puede divergir del Chrome de referencia.",
        tab_eviction_policy: "Política de expulsión de pestañas",
        how_pinchtab_behaves_when_a_managed:
          "Cómo se comporta PinchTab cuando una instancia gestionada alcanza su límite de pestañas.",
        reject_new_tabs: "Rechazar pestañas nuevas",
        close_oldest: "Cerrar la más antigua",
        close_least_recently_used: "Cerrar la menos usada recientemente",
        tab_lifecycle: "Ciclo de vida de las pestañas",
        close_idle_closes_a_tab_after_a_text:
          "«Cerrar inactivas» cierra una pestaña tras una respuesta de /text, /snapshot o /action cuando pasa el retardo; /navigate lo cancela. «Congelar inactivas» congela cualquier pestaña que ninguna petición haya tocado durante el retardo y la descongela en su siguiente petición.",
        keep_never_auto_close: "Mantener (nunca cerrar automáticamente)",
        close_idle: "Cerrar inactivas",
        freeze_idle: "Congelar inactivas",
        auto_close_delay: "Retardo de cierre automático",
        seconds_of_idleness_before_an_idle_tab:
          "Segundos de inactividad antes de cerrar o congelar una pestaña inactiva. Solo se aplica cuando el ciclo de vida es «Cerrar inactivas» o «Congelar inactivas».",
        restore_tabs_on_startup: "Restaurar pestañas al arrancar",
        when_enabled_tabs_open_at_shutdown_are:
          "Cuando está activado, las pestañas abiertas al apagar se reabren en el siguiente arranque. Desactivado de forma predeterminada: las pestañas cerradas siguen cerradas tras reiniciar.",
        enable: "Activar",
        max_tabs: "Pestañas máximas",
        maximum_number_of_tabs_per_managed:
          "Número máximo de pestañas por instancia gestionada.",
        max_parallel_tabs: "Pestañas paralelas máximas",
        set_to_0_to_auto_detect_from_cpu_count:
          "Pon 0 para detectarlo automáticamente según el número de CPU.",
        timezone: "Zona horaria",
        optional_timezone_override_for_launched:
          "Anulación opcional de la zona horaria de las instancias iniciadas.",
        europe_rome: "Europe/Rome",
        user_agent: "Agente de usuario",
        optional_override_applied_to_new:
          "Anulación opcional que se aplica a las nuevas instancias gestionadas.",
        custom_user_agent: "Agente de usuario personalizado",
        applies_to_newly_launched_managed:
          "Se aplica a las instancias gestionadas recién iniciadas.",
      },
      securityidpisettingssection: {
        security_idpi: "Seguridad IDPI",
        indirect_prompt_injection_controls:
          "Los controles de inyección indirecta de prompts restringen qué sitios web se permiten y añaden protecciones al contenido extraído antes de que llegue a la automatización posterior.",
        idpi_is_disabled_browser_content_is_not:
          "IDPI está desactivado. El contenido del navegador no se filtra por la lista de sitios permitidos ni por las protecciones de contenido.",
        the_website_whitelist_is_not_set_to_a:
          "La lista blanca de sitios web no está configurada como una lista restringida de dominios. Es la defensa principal de IDPI y debería configurarse.",
        the_website_whitelist_contains_which:
          "La lista blanca de sitios web contiene '*', lo que desactiva de hecho la restricción de dominios.",
        idpi_is_enforcing_a_specific_website:
          "IDPI está aplicando una lista blanca concreta de sitios web y protecciones de contenido.",
        enable: "Activar",
        custom_patterns: "Patrones personalizados",
        optional_comma_separated_phrases_to:
          "Frases separadas por comas (opcional) que se tratarán como contenido sospechoso de inyección de prompts.",
        ignore_previous_instructions_exfiltrate:
          "ignore previous instructions, exfiltrate data",
      },
      timeoutssettingssection: {
        timeouts: "Tiempos de espera",
        runtime_timing_defaults_written_into:
          "Valores predeterminados de tiempos de ejecución que se escriben en las nuevas configuraciones de los procesos hijos. Las instancias ya en ejecución mantienen sus tiempos de espera actuales.",
      },
      browsersettingssection: {
        browser_runtime: "Entorno de ejecución del navegador",
        these_settings_are_written_into_the:
          "Estos ajustes se escriben en la configuración del proceso hijo generada para las nuevas instancias gestionadas.",
        provider: "Proveedor",
        browser_backend_used_for_new_managed:
          "Backend de navegador que se usa para las nuevas instancias gestionadas.",
        chrome: "Chrome",
        cloakbrowser: "CloakBrowser",
        ghost_chrome: "Ghost + Chrome",
        browser_version: "Versión del navegador",
        version_string_used_in_generated_ua:
          "Cadena de versión que se usa en los valores predeterminados generados de agente de usuario y huella.",
        browser_binary: "Binario del navegador",
        optional_path_override_for_the_chrome:
          "Anulación opcional de la ruta del ejecutable de Chrome o CloakBrowser.",
        fingerprint_seed: "Semilla de huella",
        deterministic_cloakbrowser_identity:
          "Semilla de identidad determinista de CloakBrowser. Déjalo en blanco para usar una identidad nueva en cada inicio.",
        fingerprint_platform: "Plataforma de la huella",
        native_platform_fingerprint_reported_by:
          "Huella de plataforma nativa que informa CloakBrowser.",
        auto: "Automático",
        windows: "Windows",
        macos: "macOS",
        linux: "Linux",
        cloak_locale: "Configuración regional de Cloak",
        locale_passed_as_fingerprint_locale:
          "Configuración regional que se pasa como --fingerprint-locale.",
        cloak_timezone: "Zona horaria de Cloak",
        timezone_passed_as_fingerprint_timezone:
          "Zona horaria que se pasa como --fingerprint-timezone.",
        webrtc_ip: "IP de WebRTC",
        explicit_replacement_ip_or_auto_for:
          "IP de reemplazo explícita o auto para que CloakBrowser resuelva la IP de salida del proxy.",
        fonts_directory: "Directorio de fuentes",
        directory_containing_target_platform:
          "Directorio que contiene las fuentes de la plataforma destino para CloakBrowser.",
        storage_quota: "Cuota de almacenamiento",
        storage_quota_in_mb_passed_as:
          "Cuota de almacenamiento en MB que se pasa como --fingerprint-storage-quota.",
        native_stealth_only: "Solo sigilo nativo",
        disable_pinchtab_js_stealth_overlays:
          "Desactiva las capas de sigilo JS de PinchTab y los indicadores de inicio que ocultan la automatización.",
        use_cloakbrowser_native_patches:
          "Usar los parches nativos de CloakBrowser",
        extra_flags: "Indicadores adicionales",
        additional_chrome_flags_appended_when:
          "Indicadores adicionales de Chrome que se añaden al iniciar instancias gestionadas.",
        extension_paths: "Rutas de extensiones",
        comma_separated_extension_directories:
          "Directorios de extensiones que se cargan, separados por comas. De forma predeterminada, PinchTab usa la carpeta local extensions/ dentro de su directorio de estado o configuración. Define rutas personalizadas aquí para anular ese valor predeterminado, o vacía el campo para desactivar la carga de extensiones.",
      },
      dashboardsettingssection: {
        dashboard_preferences: "Preferencias del panel",
        language: "Idioma",
        choose_the_language_of_the_dashboard:
          "Elige el idioma de la interfaz del panel.",
        these_controls_affect_this_dashboard_ui:
          "Estos controles solo afectan a esta interfaz del panel. Se guardan localmente en tu navegador y no requieren reiniciar el backend.",
        screencast_frame_rate: "Frecuencia de la retransmisión",
        controls_how_often_live_previews:
          "Controla con qué frecuencia las vistas previas en vivo solicitan fotogramas nuevos.",
        fps: "fps",
        screencast_quality: "Calidad de la retransmisión",
        jpeg_quality_for_tab_preview_streams:
          "Calidad JPEG de los flujos de vista previa de pestañas.",
        screencast_width: "Ancho de la retransmisión",
        maximum_preview_width_for_live_tiles:
          "Ancho máximo de vista previa de los mosaicos en vivo.",
        px: "px",
        memory_metrics: "Métricas de memoria",
        poll_every_running_instance_for_browser:
          "Consulta la memoria del navegador en cada instancia en ejecución en cada ciclo de monitorización: RSS de todo el árbol de procesos de Chrome, además del heap de JS y los contadores de DOM leídos de cada pestaña abierta por CDP. Coste medido: alrededor de un milisegundo por pestaña abierta más unas decenas de milisegundos por el recorrido del árbol de procesos, por instancia y por ciclo.",
        enable: "Activar",
        polling_interval: "Intervalo de sondeo",
        how_frequently_the_dashboard_asks_the:
          "Con qué frecuencia el panel pide métricas nuevas al backend.",
        s: "s",
        reasoning_output: "Salida de razonamiento",
        choose_whether_the_live_agent_feed:
          "Elige si el flujo del agente en vivo muestra llamadas a herramientas, actualizaciones de progreso o ambas.",
        tool_calls_only: "Solo llamadas a herramientas",
        progress_only: "Solo progreso",
        both: "Ambas",
      },
      autosolversettingssection: {
        autosolver: "AutoSolver",
        these_settings_are_saved_into_the:
          "Estos ajustes se guardan en el archivo de configuración de PinchTab. Las claves de API de proveedores externos son de solo escritura y deben definirse directamente en ese archivo.",
        config_file: "Archivo de configuración",
        dashboard_edits_are_written_back_to:
          "Los cambios del panel se escriben de vuelta en este archivo. Define las claves de proveedores externos en autoSolver.external del mismo archivo.",
        config_path_unavailable: "Ruta de configuración no disponible",
        enable_autosolver: "Activar AutoSolver",
        turns_on_the_autosolver_runtime:
          "Activa la configuración de ejecución de AutoSolver para los flujos de desafío compatibles.",
        enabled: "Activado",
        disabled: "Desactivado",
        auto_trigger: "Disparo automático",
        automatically_run_autosolver_after:
          "Ejecuta AutoSolver automáticamente tras las peticiones de navegación y acción compatibles.",
        trigger_on_navigate: "Disparar al navegar",
        run_autosolver_checks_after_successful:
          "Ejecuta las comprobaciones de AutoSolver tras llamadas de navegación correctas.",
        trigger_on_action: "Disparar en acciones",
        run_autosolver_checks_after_successful_2:
          "Ejecuta las comprobaciones de AutoSolver tras llamadas de acción correctas.",
        max_attempts: "Intentos máximos",
        maximum_autosolver_retries_before_the:
          "Número máximo de reintentos de AutoSolver antes de que la canalización se rinda.",
        solver_timeout_sec: "Tiempo de espera del solucionador (s)",
        per_solver_timeout_for_each_attempt:
          "Tiempo de espera por solucionador en cada intento.",
        retry_base_delay_ms: "Retardo base de reintento (ms)",
        base_retry_backoff_delay_between:
          "Retardo base de espera entre intentos de AutoSolver.",
        retry_max_delay_ms: "Retardo máximo de reintento (ms)",
        maximum_retry_backoff_delay_cap_between:
          "Límite máximo del retardo de espera entre intentos de AutoSolver.",
        solvers: "Solucionadores",
        comma_separated_ordered_list_of_solver:
          "Lista ordenada de nombres de solucionador que se probarán, separada por comas. Usa GET /solvers o GET /config/autosolver para confirmar los nombres disponibles en tiempo de ejecución.",
        llm_provider: "Proveedor de LLM",
        optional_provider_name_used_when_llm:
          "Nombre de proveedor opcional que se usa cuando el respaldo por LLM está activado.",
        llm_fallback: "Respaldo por LLM",
        use_an_llm_as_the_last_resort_after:
          "Usa un LLM como último recurso cuando fallan los solucionadores registrados.",
        external_provider_keys: "Claves de proveedores externos",
        capsolver_and_2captcha_credentials_are:
          "Las credenciales de Capsolver y 2Captcha no se muestran en el panel y deben gestionarse en el archivo de configuración. Estos proveedores aparecen en las listas de solucionadores en tiempo de ejecución solo cuando hay claves configuradas.",
        open_the_config_file_above_and_set:
          "Abre el archivo de configuración de arriba y define",
        autosolver_external_capsolverkey: "autoSolver.external.capsolverKey",
        autosolver_external_twocaptchakey: "autoSolver.external.twoCaptchaKey",
        there_the_dashboard_does_not_display_or:
          "allí. El panel no muestra ni edita esos valores, y no hay variables de entorno que los anulen.",
      },
    },
    monitoring: {
      monitoringemptystate: {
        starting_default_instance: "Iniciando la instancia predeterminada…",
        start_default_instance: "Iniciar instancia predeterminada",
        open_default_profile: "Abrir el perfil predeterminado",
        no_active_instances: "No hay instancias activas",
        pinchtab_expected_a_default_instance:
          "PinchTab esperaba una instancia predeterminada, pero nunca estuvo disponible. Iníciala manualmente o revisa el perfil.",
        start_the_default_instance_or_open:
          "Inicia la instancia predeterminada o abre Perfiles para lanzar otra.",
        waiting_for_default_profile:
          "PinchTab está esperando a que el perfil predeterminado se conecte. Se volverá a comprobar automáticamente (quedan {{count}} comprobaciones).",
      },
      defaultinstancemodal: {
        start_default_instance: "Iniciar instancia predeterminada",
        cancel: "Cancelar",
        start_headed: "Iniciar con interfaz",
        start_headless: "Iniciar sin interfaz",
        choose_how_to_launch_the_default:
          "Elige cómo iniciar el perfil predeterminado en esta sesión.",
        configured_default_mode: "Modo predeterminado configurado:",
      },
    },
    profilespage: {
      loading_profiles: "Cargando perfiles…",
      no_profiles_yet: "Todavía no hay perfiles",
      click_new_profile_to_create_one:
        "Haz clic en Nuevo perfil para crear uno",
      new_profile: "Nuevo perfil",
      profiles: "Perfiles",
      total: "total",
      no_account: "Sin cuenta",
      profile_deleted: "Perfil «{{name}}» eliminado",
    },
    settingspage: {
      confirm_admin_action: "Confirmar acción de administración",
      cancel: "Cancelar",
      verifying: "Verificando…",
      continue: "Continuar",
      re_enter_the_api_token_to_save_backend:
        "Vuelve a introducir el token de API para guardar cambios en la configuración del backend. La sesión elevada permanece activa brevemente, así que no necesitas repetirlo en cada acción de administración.",
      api_token: "Token de API",
      paste_api_token: "Pega el token de API",
      restart_required: "Es necesario reiniciar",
      reset: "Restablecer",
      saving: "Guardando…",
      save: "Guardar",
      restart_needed_for: "Es necesario reiniciar para:",
      loading_settings: "Cargando ajustes…",
      settings_eyebrow: "Ajustes",
    },
  },
  activities: {
    activityexplorer: {
      agent: "Agente",
      all: "Todos",
      session: "Sesión",
      request_timeline: "Cronología de peticiones",
      activity: "Actividad",
      failed_to_load_activity: "No se pudo cargar la actividad",
    },
    agentstreampanel: {
      no_matching_activity: "No hay actividad coincidente",
      adjust_the_filters_or_generate_some:
        "Ajusta los filtros o genera algo de tráfico desde la CLI, MCP o el panel.",
    },
    streamrow: {
      ms: "ms",
      navigate_to_page: "Navegar a la página",
      capture_page_snapshot: "Capturar instantánea de la página",
      open_screencast_stream: "Abrir la retransmisión de pantalla",
      extract_text_from_page: "Extraer texto de la página",
      click_on_page: "Hacer clic en la página",
      double_click_on_page: "Hacer doble clic en la página",
      type_into_page: "Escribir en la página",
      hover_on_page: "Pasar el cursor por la página",
      fill_field: "Rellenar campo",
      select_option: "Seleccionar opción",
      scroll_page: "Desplazar la página",
      press_key: "Pulsar tecla",
      wait_for_condition: "Esperar una condición",
      evaluate_javascript: "Ejecutar JavaScript",
      upload_file: "Subir archivo",
      download_file: "Descargar archivo",
      on_tab: " en la pestaña ",
      navigate_to_url: "Ir a {{url}}",
      click_ref: 'Hacer clic en "{{ref}}"',
      double_click_ref: 'Hacer doble clic en "{{ref}}"',
      type_into_ref: 'Escribir en "{{ref}}"',
      hover_ref: 'Pasar el cursor por "{{ref}}"',
      fill_ref: 'Rellenar "{{ref}}"',
      select_ref: 'Seleccionar "{{ref}}"',
      press_key_on_ref: 'Pulsar una tecla en "{{ref}}"',
    },
    activityline: {
      progress: "PROGRESO",
      agent_reported_progress: "El agente informó de progreso",
      ms: "ms",
    },
    activityitemline: {
      tab_paused_for_human_handoff: "pestaña en pausa para intervención humana",
      tab_is_paused_for_human_handoff:
        "La pestaña está en pausa para intervención humana",
      resume_automation_after_manual:
        "Reanudar la automatización tras resolver el desafío manualmente",
      resuming: "Reanudando…",
      resolve_challenge: "Resolver el desafío",
      browser_was_escalated: "El navegador se elevó",
      escalated: "elevado",
      navigate_to_page: "Navegar a la página",
      capture_page_snapshot: "Capturar instantánea de la página",
      open_screencast_stream: "Abrir la retransmisión de pantalla",
      extract_text_from_page: "Extraer texto de la página",
      take_screenshot: "Hacer captura de pantalla",
      export_page_as_pdf: "Exportar la página como PDF",
      click_on_page: "Hacer clic en la página",
      double_click_on_page: "Hacer doble clic en la página",
      type_into_page: "Escribir en la página",
      hover_on_page: "Pasar el cursor por la página",
      fill_field: "Rellenar campo",
      select_option: "Seleccionar opción",
      scroll_page: "Desplazar la página",
      press_key: "Pulsar tecla",
      wait_for_condition: "Esperar una condición",
      evaluate_javascript: "Ejecutar JavaScript",
      upload_file: "Subir archivo",
      download_file: "Descargar archivo",
      resume_failed: "No se pudo reanudar",
      navigate_to_url: "Ir a {{url}}",
      click_ref: 'Hacer clic en "{{ref}}"',
      double_click_ref: 'Hacer doble clic en "{{ref}}"',
      type_into_ref: 'Escribir en "{{ref}}"',
      hover_ref: 'Pasar el cursor por "{{ref}}"',
      fill_ref: 'Rellenar "{{ref}}"',
      select_ref: 'Seleccionar "{{ref}}"',
      press_key_on_ref: 'Pulsar una tecla en "{{ref}}"',
    },
    activitytimeline: {
      timeline: "Cronología",
      recent_events: "Eventos recientes",
      no_matching_activity: "No hay actividad coincidente",
      adjust_the_filters_or_generate_some:
        "Ajusta los filtros o genera algo de tráfico desde la CLI, MCP o el panel.",
    },
    activefilterbar: {
      clear_filters: "Borrar filtros",
    },
    activityfiltermenu: {
      "200": "200",
      "3600": "3600",
      profile: "Perfil",
      tab: "Pestaña",
      agent: "Agente",
      action: "Acción",
      advanced_filters: "Filtros avanzados",
      hide: "Ocultar",
      show: "Mostrar",
      instance: "Instancia",
      path_prefix: "Prefijo de ruta",
      tabs_or_instances: "/tabs/ or /instances/",
      age_seconds: "Antigüedad (segundos)",
      limit: "Límite",
      clear: "Borrar",
      search: "Buscar",
      any_profile: "Cualquier perfil",
      any_tab: "Cualquier pestaña",
      any_agent: "Cualquier agente",
      any_action: "Cualquier acción",
      any_instance: "Cualquier instancia",
    },
    agentworkspacesidebar: {
      agents: "Agentes",
      activities: "Actividades",
      no_agent_activity_observed_yet:
        "Todavía no se ha observado actividad de agentes",
      all_agents: "Todos los agentes",
    },
    copyidpill: {
      copied: "Copiado",
      copy_tab_id: "Copiar el ID de la pestaña {{id}}",
    },
    hooks: {
      useactivitydata: {
        failed_to_load_activity: "No se pudo cargar la actividad",
        failed_to_load_agent_activity:
          "No se pudo cargar la actividad del agente",
      },
    },
  },
  settings: {
    sections: {
      dashboard: {
        dashboard: "Panel",
        local_monitoring_and_screencast:
          "Preferencias locales de monitorización y retransmisión.",
      },
      defaults: {
        instance_defaults: "Valores predeterminados de instancia",
        how_new_managed_browser_instances_launch:
          "Cómo se inician las nuevas instancias gestionadas del navegador.",
      },
      orchestration: {
        orchestration: "Orquestación",
        routing_strategy_port_range_and:
          "Estrategia de enrutado, rango de puertos y política de asignación.",
      },
      security: {
        security: "Seguridad",
        sensitive_endpoint_gates_and_access:
          "Controles de acceso y puertas de endpoints sensibles.",
      },
      "security-idpi": {
        security_idpi: "Seguridad IDPI",
        indirect_prompt_injection_website_and:
          "Defensas de sitios web y contenido frente a la inyección indirecta de prompts.",
      },
      profiles: {
        profiles: "Perfiles",
        shared_profile_storage_and_default:
          "Almacenamiento compartido de perfiles y comportamiento del perfil predeterminado.",
      },
      network: {
        network_attach: "Red y adjunción",
        server_binding_auth_and_attach_policy:
          "Enlace del servidor, autenticación y política de adjunción.",
      },
      browser: {
        browser_runtime: "Entorno de ejecución del navegador",
        chrome_binary_version_flags_and:
          "Binario de Chrome, versión, indicadores y extensiones.",
      },
      timeouts: {
        timeouts: "Tiempos de espera",
        action_navigation_shutdown_and_wait:
          "Tiempos de acción, navegación, apagado y espera.",
      },
      autosolver: {
        autosolver: "AutoSolver",
        challenge_solving_behavior_and_config:
          "Comportamiento de resolución de desafíos y proveedores basados en el archivo de configuración.",
      },
      observability: {
        observability: "Observabilidad",
        activity_logging_and_retention_settings:
          "Ajustes de registro de actividad y retención.",
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
          allow_screencast: "Permitir retransmisión",
        },
        allowDownload: {
          allow_download: "Permitir descarga",
        },
        allowCookies: {
          allow_cookies: "Permitir cookies",
        },
        allowUpload: {
          allow_upload: "Permitir subida",
        },
        allowNetworkIntercept: {
          allow_network_interception: "Permitir intercepción de red",
          lets_agents_install_rules_to_abort_or:
            "Permite que los agentes instalen reglas para abortar o satisfacer (simular) peticiones HTTP en una pestaña. Cuando está activo, la falsificación de respuestas está PROHIBIDA en los hosts de «Sitios web permitidos» y PERMITIDA en el resto. Falsificar respuestas en hosts que has autorizado al agente a usar (p. ej. tu banco) es el resultado de mayor riesgo — por eso se protegen los hosts de la lista permitida, y no al contrario. Las comprobaciones previas OPTIONS se omiten de forma predeterminada para no romper CORS.",
        },
        allowFileScheme: {
          allow_file_navigation: "Permitir navegación file://",
          lets_agents_open_local_file_urls_a_file:
            "Permite que los agentes abran URL file:// locales. Una URL file:// no tiene host, así que NO está limitada por «Sitios web permitidos» y omite la protección frente a SSRF e IP privadas — activarlo concede acceso de lectura (mediante instantánea, captura de pantalla o scraping) a cualquier archivo local que el proceso del servidor pueda leer. Sigue bloqueado mientras haya una lista permitida en modo estricto. Actívalo solo en máquinas de confianza y de un solo inquilino.",
        },
      },
      idpi: {
        enabled: {
          enable_idpi: "Activar IDPI",
          turn_on_indirect_prompt_injection:
            "Activa las defensas frente a la inyección indirecta de prompts.",
        },
        strictMode: {
          strict_mode: "Modo estricto",
          block_disallowed_domains_and_suspicious:
            "Bloquea los dominios no permitidos y el contenido sospechoso en lugar de limitarse a avisar.",
        },
        scanContent: {
          scan_content: "Analizar contenido",
          inspect_extracted_text_and_snapshots:
            "Inspecciona el texto extraído y las instantáneas en busca de patrones de inyección de prompts.",
        },
        wrapContent: {
          wrap_content: "Envolver contenido",
          mark_returned_page_text_as_untrusted:
            "Marca el texto de página devuelto como contenido no fiable para los consumidores posteriores.",
        },
      },
    },
    defaults: {
      booleans: {
        blockImages: {
          block_images: "Bloquear imágenes",
        },
        blockMedia: {
          block_media: "Bloquear medios",
        },
        blockAds: {
          block_ads: "Bloquear anuncios",
        },
        noAnimations: {
          disable_css_animations: "Desactivar las animaciones CSS",
        },
        noRestore: {
          skip_session_restore: "Omitir la restauración de sesión",
        },
      },
      timeouts: {
        actionSec: {
          action_timeout: "Tiempo de espera de acciones",
          maximum_time_for_action_requests:
            "Tiempo máximo para las peticiones de acción.",
        },
        navigateSec: {
          navigate_timeout: "Tiempo de espera de navegación",
          maximum_time_for_navigation_requests:
            "Tiempo máximo para las peticiones de navegación.",
        },
        shutdownSec: {
          shutdown_timeout: "Tiempo de espera de apagado",
          grace_period_before_force_closing_a:
            "Periodo de gracia antes de cerrar a la fuerza un proceso hijo.",
        },
        waitNavMs: {
          wait_after_navigation_delay: "Retardo tras la navegación",
          post_navigation_stabilization_delay_in:
            "Retardo de estabilización tras la navegación, en milisegundos.",
        },
      },
    },
    notices: {
      backend_config_saved_dynamic_changes:
        "Configuración del backend guardada. Los cambios dinámicos se aplicaron cuando fue posible.",
      backend_config_saved_dynamic_changes_2:
        "Configuración del backend guardada. Los cambios dinámicos se aplicaron cuando fue posible. Se recomienda reiniciar para los cambios a nivel de servidor.",
      preferencesSaved: "Preferencias del panel guardadas en este navegador.",
    },
    errors: {
      loadFailed: "No se pudieron cargar los ajustes",
      saveFailed: "No se pudieron guardar los ajustes",
      tokenVerifyFailed: "No se pudo verificar el token de API",
    },
  },
  monitoring: {
    errors: {
      startInstanceFailed: "No se pudo iniciar la instancia",
    },
  },
  errors: {
    requestFailed: "La petición falló",
  },
  auth: {
    insecureTransport:
      "La sesión del panel funciona sobre HTTP no seguro; usa HTTPS o localhost para una protección de sesión más fuerte.",
  },
};

export default messages;
