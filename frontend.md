<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>VOX-TERMINAL | NOCTURNAL-SYSTEMS</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "on-primary": "#002780",
                    "on-secondary": "#213145",
                    "surface-variant": "#32343f",
                    "secondary": "#b7c8e1",
                    "outline-variant": "#434656",
                    "primary": "#b6c4ff",
                    "error-container": "#93000a",
                    "surface-container-low": "#191b25",
                    "surface-container-highest": "#32343f",
                    "on-tertiary-fixed-variant": "#872100",
                    "surface-bright": "#373943",
                    "on-tertiary-container": "#ffe1d9",
                    "surface": "#11131c",
                    "surface-container-lowest": "#0c0e17",
                    "secondary-container": "#3a4a5f",
                    "on-primary-container": "#e3e6ff",
                    "on-tertiary-fixed": "#3b0900",
                    "tertiary": "#ffb5a0",
                    "primary-fixed-dim": "#b6c4ff",
                    "tertiary-fixed": "#ffdbd1",
                    "primary-fixed": "#dce1ff",
                    "tertiary-fixed-dim": "#ffb5a0",
                    "on-primary-fixed": "#001551",
                    "background": "#11131c",
                    "on-error": "#690005",
                    "surface-container-high": "#282933",
                    "on-primary-fixed-variant": "#0039b3",
                    "secondary-fixed": "#d3e4fe",
                    "inverse-on-surface": "#2e303a",
                    "primary-container": "#0055ff",
                    "on-secondary-fixed": "#0b1c30",
                    "inverse-surface": "#e1e1ef",
                    "surface-container": "#1d1f29",
                    "on-surface": "#e1e1ef",
                    "secondary-fixed-dim": "#b7c8e1",
                    "outline": "#8d90a2",
                    "on-surface-variant": "#c3c5d9",
                    "on-secondary-container": "#a9bad3",
                    "error": "#ffb4ab",
                    "tertiary-container": "#c13301",
                    "surface-dim": "#11131c",
                    "on-background": "#e1e1ef",
                    "inverse-primary": "#004dea",
                    "on-tertiary": "#601400",
                    "surface-tint": "#b6c4ff",
                    "on-secondary-fixed-variant": "#38485d",
                    "on-error-container": "#ffdad6"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "container-max": "1280px",
                    "margin": "32px",
                    "unit": "4px",
                    "gutter": "24px"
            },
            "fontFamily": {
                    "headline-md": ["Space Grotesk"],
                    "headline-lg": ["Space Grotesk"],
                    "body-md": ["Space Grotesk"],
                    "body-lg": ["Space Grotesk"],
                    "headline-xl": ["Space Grotesk"],
                    "label-sm": ["Space Grotesk"],
                    "label-md": ["Space Grotesk"]
            },
            "fontSize": {
                    "headline-md": ["24px", {"lineHeight": "1.3", "fontWeight": "600"}],
                    "headline-lg": ["32px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                    "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "headline-xl": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "label-sm": ["12px", {"lineHeight": "1.2", "letterSpacing": "0.1em", "fontWeight": "700"}],
                    "label-md": ["14px", {"lineHeight": "1.4", "letterSpacing": "0.05em", "fontWeight": "500"}]
            }
          },
        },
      }
    </script>
<style>
        body {
            background-color: #0A0A0B;
            color: #e1e1ef;
            font-family: 'Space Grotesk', sans-serif;
            overflow-x: hidden;
        }
        .retro-grid {
            background-image: 
                linear-gradient(to right, #1E1E22 1px, transparent 1px),
                linear-gradient(to bottom, #1E1E22 1px, transparent 1px);
            background-size: 40px 40px;
        }
        .glow-text {
            text-shadow: 0 0 15px rgba(0, 85, 255, 0.6);
        }
        .glow-border {
            box-shadow: inset 0 0 10px rgba(0, 85, 255, 0.1), 0 0 5px rgba(0, 85, 255, 0.1);
        }
        .scanline {
            background: linear-gradient(to bottom, transparent 50%, rgba(0, 85, 255, 0.02) 50%);
            background-size: 100% 4px;
            pointer-events: none;
        }
    </style>
</head>
<body class="selection:bg-primary-container selection:text-white">
<!-- TopAppBar -->
<nav class="fixed top-0 w-full z-50 flex justify-between items-center px-8 h-16 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
<div class="flex items-center gap-2">
<span class="text-2xl font-black tracking-tighter text-blue-600 italic">VOX-TERMINAL</span>
</div>
<div class="hidden md:flex items-center gap-8 font-['Space_Grotesk'] tracking-widest uppercase font-bold text-[12px]">
<a class="text-blue-500 border-b-2 border-blue-600 pb-1" href="#">TERMINAL</a>
<a class="text-zinc-500 hover:text-zinc-200 transition-colors" href="#">WAVEFORMS</a>
<a class="text-zinc-500 hover:text-zinc-200 transition-colors" href="#">FREQUENCIES</a>
<a class="text-zinc-500 hover:text-zinc-200 transition-colors" href="#">ARCHIVE</a>
</div>
<div class="flex items-center gap-4">
<div class="flex gap-2">
<span class="material-symbols-outlined text-zinc-400 hover:bg-zinc-900/50 p-2 cursor-pointer transition-all active:scale-95 duration-75" data-icon="settings_input_component">settings_input_component</span>
<span class="material-symbols-outlined text-zinc-400 hover:bg-zinc-900/50 p-2 cursor-pointer transition-all active:scale-95 duration-75" data-icon="sensors">sensors</span>
</div>
<button class="bg-primary-container text-on-primary-container px-6 py-2 text-sm font-bold tracking-widest uppercase hover:opacity-90 transition-all active:scale-95">
                INITIALIZE
            </button>
</div>
</nav>
<!-- Hero Section -->
<header class="relative min-h-screen flex items-center pt-16 overflow-hidden">
<div class="absolute inset-0 retro-grid opacity-20"></div>
<div class="absolute inset-0 scanline"></div>
<div class="container mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div class="lg:col-span-6 space-y-8">
<div class="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 bg-primary/5 text-primary text-[10px] tracking-[0.3em] font-bold uppercase">
<span class="relative flex h-2 w-2">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    System Online / v2.4.0
                </div>
<h1 class="font-headline-xl text-headline-xl text-white">
                    THE FUTURE <br/>
<span class="text-primary-container glow-text">HAS A VOICE</span>
</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                    Experience the precision of laboratory-grade synthesis merged with futuristic digital edge. VOX-TERMINAL delivers high-performance vocal orchestration for the nocturnal era.
                </p>
<div class="flex flex-wrap gap-4 pt-4">
<button class="px-8 py-4 bg-primary-container text-white font-label-md text-label-md tracking-widest uppercase hover:brightness-110 transition-all active:scale-95">
                        INITIALIZE PROTOCOL
                    </button>
<button class="px-8 py-4 border border-outline text-on-surface font-label-md text-label-md tracking-widest uppercase hover:bg-white/5 transition-all active:scale-95">
                        DOCUMENTATION
                    </button>
</div>
</div>
<div class="lg:col-span-6 relative">
<div class="relative w-full aspect-square flex items-center justify-center">
<!-- Glow effect behind the soundwave -->
<div class="absolute w-3/4 h-3/4 bg-primary/10 rounded-full blur-[100px]"></div>
<img alt="" class="w-full h-full object-contain relative z-10 drop-shadow-[0_0_30px_rgba(0,85,255,0.3)]" data-alt="High-fidelity 3D soundwave visualization with neon blue light pulses and holographic digital interference patterns on a black background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQItIBshpPepDuj4TUcjop71qrvStprXgCkgklJhvHh7Q9Wsv4iNjSeoxnOkLXUFTo_0lIR0a6hTLsqqwxDov80He20yKqslcs-KAamkVCDvxyaImY5JxswrttL7OOg5ctYIGyCj_viIIQOD650cNLG3Rox3N1UZyKmsrmx4FdO2jAuPojOviyNpPt3sZcjnx583B3K8X2xTaCkWYAZPOwDedfWGWDisDLJ0JK1DyE2ph1U7tLI599R52vaGFgu6rt3gCWiC5-BwQ"/>
<!-- Decorative technical elements -->
<div class="absolute top-0 right-0 border-t border-r border-primary/40 w-12 h-12"></div>
<div class="absolute bottom-0 left-0 border-b border-l border-primary/40 w-12 h-12"></div>
<div class="absolute top-1/2 -right-4 -translate-y-1/2 font-label-sm text-primary/40 rotate-90 tracking-[0.5em]">FREQ_ANALYSIS_ACTIVE</div>
</div>
</div>
</div>
</header>
<!-- Features Section -->
<section class="py-24 bg-surface-container-lowest relative border-y border-zinc-800">
<div class="container mx-auto px-8">
<div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
<div>
<h2 class="font-headline-lg text-headline-lg text-white mb-2 uppercase">Core Capabilities</h2>
<p class="font-body-md text-body-md text-on-surface-variant">Precision instruments for neural audio deployment.</p>
</div>
<div class="text-primary font-label-sm tracking-widest text-[10px]">TOTAL_MODULES: 06</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<!-- Feature 1 -->
<div class="bg-surface-container border border-outline-variant p-8 hover:border-primary transition-colors group">
<span class="material-symbols-outlined text-primary mb-6 text-4xl block transition-transform group-hover:scale-110" data-icon="neurology">neurology</span>
<h3 class="font-headline-md text-headline-md text-white mb-4 uppercase tracking-tighter">NEURAL SYNTHESIS</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Advanced deep-learning models capable of recreating the most subtle human vocal inflections with zero latency.</p>
</div>
<!-- Feature 2 -->
<div class="bg-surface-container border border-outline-variant p-8 hover:border-primary transition-colors group">
<span class="material-symbols-outlined text-primary mb-6 text-4xl block transition-transform group-hover:scale-110" data-icon="terminal">terminal</span>
<h3 class="font-headline-md text-headline-md text-white mb-4 uppercase tracking-tighter">COMMAND CORE</h3>
<p class="font-body-md text-body-md text-on-surface-variant">A robust, CLI-first interface for orchestrating massive vocal agent arrays through a unified low-level control plane.</p>
</div>
<!-- Feature 3 -->
<div class="bg-surface-container border border-outline-variant p-8 hover:border-primary transition-colors group">
<span class="material-symbols-outlined text-primary mb-6 text-4xl block transition-transform group-hover:scale-110" data-icon="encrypted">encrypted</span>
<h3 class="font-headline-md text-headline-md text-white mb-4 uppercase tracking-tighter">SECURE STREAM</h3>
<p class="font-body-md text-body-md text-on-surface-variant">End-to-end nocturnal encryption ensuring your voice protocols remain strictly within your local or cloud perimeter.</p>
</div>
<!-- Feature 4 -->
<div class="bg-surface-container border border-outline-variant p-8 hover:border-primary transition-colors group">
<span class="material-symbols-outlined text-primary mb-6 text-4xl block transition-transform group-hover:scale-110" data-icon="settings_input_hdmi">settings_input_hdmi</span>
<h3 class="font-headline-md text-headline-md text-white mb-4 uppercase tracking-tighter">HARDWARE LINK</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Direct integration with studio-grade audio hardware and embedded systems via specialized nocturnal drivers.</p>
</div>
<!-- Feature 5 -->
<div class="bg-surface-container border border-outline-variant p-8 hover:border-primary transition-colors group">
<span class="material-symbols-outlined text-primary mb-6 text-4xl block transition-transform group-hover:scale-110" data-icon="monitoring">monitoring</span>
<h3 class="font-headline-md text-headline-md text-white mb-4 uppercase tracking-tighter">LIVE ANALYSIS</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Real-time spectral visualization and diagnostic data streams for every active vocal pathway in the terminal.</p>
</div>
<!-- Feature 6 -->
<div class="bg-surface-container border border-outline-variant p-8 hover:border-primary transition-colors group">
<span class="material-symbols-outlined text-primary mb-6 text-4xl block transition-transform group-hover:scale-110" data-icon="hub">hub</span>
<h3 class="font-headline-md text-headline-md text-white mb-4 uppercase tracking-tighter">CLOUD LATTICE</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Decentralized compute distribution allowing for infinite scaling of voice processing across global edge nodes.</p>
</div>
</div>
</div>
</section>
<!-- Developer Section -->
<section class="py-24 bg-surface-container-low overflow-hidden">
<div class="container mx-auto px-8">
<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div class="space-y-6">
<div class="inline-block text-primary font-label-sm tracking-widest bg-primary/10 px-4 py-1 border-l-2 border-primary">DEVELOPER_ENVIRONMENT</div>
<h2 class="font-headline-lg text-headline-lg text-white uppercase">LOW-LEVEL INTEGRATION</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant">
                        Deploy complex vocal agents with just a few lines of code. Our REST API is built for high-performance nocturnal operations, offering granular control over every aspect of the synthesis engine.
                    </p>
<ul class="space-y-4 font-body-md text-on-surface">
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span>
                            Native SDKs for Rust, C++, and Python
                        </li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span>
                            Sub-10ms latency thresholds
                        </li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span>
                            Dynamic spectral tuning via JSON
                        </li>
</ul>
</div>
<div class="bg-zinc-950 rounded-lg border border-zinc-800 shadow-2xl relative">
<div class="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
<div class="flex gap-1.5">
<div class="w-3 h-3 rounded-full bg-zinc-800"></div>
<div class="w-3 h-3 rounded-full bg-zinc-800"></div>
<div class="w-3 h-3 rounded-full bg-zinc-800"></div>
</div>
<div class="font-label-sm text-[10px] text-zinc-500 tracking-widest uppercase">vox_init.sh</div>
</div>
<div class="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
<pre class="text-zinc-400"><span class="text-blue-500">import</span> vox_terminal <span class="text-blue-500">as</span> vox

<span class="text-zinc-600"># Initialize nocturnal link</span>
terminal = vox.<span class="text-blue-400">Terminal</span>(key=<span class="text-emerald-600">"NT-882-990"</span>)

<span class="text-zinc-600"># Configure neural agent</span>
agent = terminal.<span class="text-blue-400">create_agent</span>({
<span class="text-emerald-600">"profile"</span>: <span class="text-emerald-600">"laboratory_grade"</span>,
<span class="text-emerald-600">"fidelity"</span>: <span class="text-amber-500">1.0</span>,
<span class="text-emerald-600">"latency_mode"</span>: <span class="text-emerald-600">"ultra_low"</span>
})

<span class="text-zinc-600"># Execute synthesis</span>
agent.<span class="text-blue-400">speak</span>(<span class="text-emerald-600">"SYSTEM_OPERATIONAL. INITIALIZING_WAVEFORMS."</span>)

<span class="text-blue-500">print</span>(terminal.<span class="text-blue-400">get_status</span>()) <span class="text-zinc-600"># Output: READY</span></pre>

</div>
<!-- Terminal Scanline Overlay -->
<div class="absolute inset-0 scanline opacity-20 pointer-events-none"></div>
</div>
</div>
</div>
</section>
<!-- Final CTA Section -->
<section class="py-32 relative overflow-hidden bg-zinc-950 border-t border-zinc-800">
<div class="absolute inset-0 retro-grid opacity-10"></div>
<div class="container mx-auto px-8 relative z-10 text-center">
<h2 class="font-headline-xl text-headline-xl text-white mb-6 uppercase tracking-tighter">
                JOIN THE <span class="text-primary-container">SOUND REVOLUTION</span>
</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
                Become part of the clandestine network of sound designers and engineers building the auditory foundations of the future.
            </p>
<div class="flex flex-wrap justify-center gap-6">
<button class="px-10 py-5 bg-primary-container text-white font-label-md text-label-md tracking-[0.2em] uppercase hover:shadow-[0_0_30px_rgba(0,85,255,0.4)] transition-all active:scale-95">
                    GET ACCESS KEY
                </button>
<button class="px-10 py-5 border border-outline text-on-surface font-label-md text-label-md tracking-[0.2em] uppercase hover:bg-white/5 transition-all active:scale-95">
                    ENTER TERMINAL
                </button>
</div>
<div class="mt-20 flex justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
<div class="font-black text-xl italic tracking-tighter">TECH-CORP</div>
<div class="font-black text-xl italic tracking-tighter">WAVE-LOGIC</div>
<div class="font-black text-xl italic tracking-tighter">CORE-AUDIO</div>
<div class="font-black text-xl italic tracking-tighter">SIGNAL-MOD</div>
</div>
</div>
</section>
<!-- Footer -->
<footer class="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-6 bg-zinc-950 border-t border-zinc-800">
<div class="flex flex-col gap-2 items-center md:items-start">
<div class="text-blue-600 font-bold tracking-tighter text-lg uppercase">VOX-TERMINAL</div>
<p class="font-['Space_Grotesk'] text-[10px] tracking-[0.2em] uppercase text-zinc-600">
                ©2024 VOX-TERMINAL / NOCTURNAL-SYSTEMS-DIVISION
            </p>
</div>
<div class="flex gap-8">
<a class="font-['Space_Grotesk'] text-[10px] tracking-[0.2em] uppercase text-zinc-600 hover:text-blue-500 underline underline-offset-4 transition-all duration-300 ease-in-out" href="#">ENCRYPTION_PROTOCOLS</a>
<a class="font-['Space_Grotesk'] text-[10px] tracking-[0.2em] uppercase text-zinc-600 hover:text-blue-500 underline underline-offset-4 transition-all duration-300 ease-in-out" href="#">SYSTEM_STATUS</a>
<a class="font-['Space_Grotesk'] text-[10px] tracking-[0.2em] uppercase text-zinc-600 hover:text-blue-500 underline underline-offset-4 transition-all duration-300 ease-in-out" href="#">LEGAL_OPS</a>
</div>
<div class="flex gap-4">
<span class="material-symbols-outlined text-zinc-700 hover:text-primary transition-colors cursor-pointer" data-icon="terminal">terminal</span>
<span class="material-symbols-outlined text-zinc-700 hover:text-primary transition-colors cursor-pointer" data-icon="database">database</span>
<span class="material-symbols-outlined text-zinc-700 hover:text-primary transition-colors cursor-pointer" data-icon="podium">podium</span>
</div>
</footer>
</body></html>
