headings = [ // {{{
    "Approximating Equations",
    "Strategy",
    "Schrodinger's Equation with a Twist",
    "Elemental Functions",
] // }}}

script = function(){ return [ // {{{
    // Change in equation {{{
    "",
    hireAndFadeInUseActors(0.5,
        "lvtw_title_1",
        "lvtw_lhs",
        "lvtw_rhs_1"
    ),
    "",
    hireAndFadeIn(0.5,"lvtw_approx_1"),
    "",
    fadeOutAndFire(0.25,"lvtw_title_1"),
    hireAndFadeIn(0.25,"lvtw_title_2"),
    "",
    fadeOutAndFire(0.25,"lvtw_rhs_1"),
    hireAndFadeIn(0.25,"lvtw_rhs_2"),
    "",
    fadeOutAndFire(0.25,"lvtw_approx_1"),
    hireAndFadeIn(0.25,"lvtw_approx_2"),
    "",
    fadeOutAndFire(0.5,
        "lvtw_lhs",
        "lvtw_rhs_2",
        "lvtw_approx_2"
    ),
    // }}}
    // What to do this week {{{
    parallel(
        sequence(
            wait(0.00),
            hireAndFadeIn(0.5,"tw_1")
        ),
        sequence(
            wait(0.25),
            hireAndFadeIn(0.5,"tw_2")
        ),
        sequence(
            wait(0.50),
            hireAndFadeIn(0.5,"tw_3")
        )
    ),
    "",
    fadeOutAndFire(0.5,
        "lvtw_title_2",
        "tw_1",
        "tw_2",
        "tw_3"
    ),
    // }}}
    // Strategy {{{
    rotateNextHeading(),
    parallel(
        sequence(
            wait(0.00),
            hireAndFadeIn(0.5,"s_1")
        ),
        sequence(
            wait(0.25),
            hireAndFadeIn(0.5,"s_2")
        )
    ),
    "",
    fadeOutAndFire(0.5,
        "s_1",
        "s_2"
    ),
    // }}}
    // NLSE {{{
    rotateNextHeading(),
    hireAndFadeIn(0.5,"nlse_schro"),
    "",
    hireAndFadeIn(0.5,"nlse_schro_complex"),
    "",
    hireAndFadeIn(0.5,"nlse_schro_V"),
    "",
    hireAndFadeIn(0.5,"nlse_schro_nonlinear"),
    "",
    hireAndFadeInUseActors(0.5,"nlse_what_next","nlse_what_next_bar"),
    "",
    hireAndFadeInUseActors(0.5,"nlse_what_next_1"),
    "",
    hireAndFadeInUseActors(0.5,"nlse_what_next_2"),
    "",
    hireAndFadeInUseActors(0.5,"nlse_what_next_3"),
    "",
    fadeOutAndFire(0.5,
        "nlse_what_next",
        "nlse_what_next_1",
        "nlse_what_next_2",
        "nlse_what_next_3"
    ),
    hireAndFadeIn(0.5,"nlse_next_1"),
    "",
    hireAndFadeIn(0.5,"nlse_next_2"),
    "",
    hireAndFadeIn(0.5,"nlse_next_3"),
    "",
    fadeOutAndFire(0.5,
        "nlse_schro",
        "nlse_schro_complex",
        "nlse_schro_V",
        "nlse_schro_nonlinear",
        "nlse_what_next_bar",
        "nlse_next_1",
        "nlse_next_2",
        "nlse_next_3"
    ),
    // }}}
    // Elemental {{{
    rotateNextHeading(),
    hireAndFadeInUseActors(0.5,"elemental_bar_1","elemental_bar_2"),
    "",
    hireAndFadeIn(0.5,"elemental_1"),
    "",
    hireAndFadeIn(0.5,"elemental_2"),
    "",
    hireAndFadeIn(0.5,"elemental_highlight"),
    "",
    hireAndFadeIn(0.5,"elemental_3"),
    "",
    fadeOutAndFire(0.5,
        "elemental_bar_1",
        "elemental_bar_2",
        "elemental_1",
        "elemental_2",
        "elemental_3",
        "elemental_highlight"
    ),
    hireAndFadeIn(0.5,"elemental2_bar"),
    "",
    hireAndFadeIn(0.5,"elemental2_1"),
    "",
    hireAndFadeIn(0.5,"elemental2_2"),
    "",
    hireAndFadeIn(0.5,"elemental2_3"),
    "",
    hireAndFadeIn(0.5,"elemental2_3_highlight"),
    // }}}
]} // }}}
