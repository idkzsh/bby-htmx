/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	prefix: "",
	theme: {
	  container: {
		center: true,
		padding: "2rem",
		screens: {
			"sm": "350px",
			"md" : "600px",
			"lg" : "1000px",
			"2xl": "1400px",
		},
	  },
	  extend: {
		colors: {
		  border: "var(--border)",
		  input: "hsl(var(--input))",
		  ring: "hsl(var(--ring))",
		  background: "var(--background)",
		  headerbg: "var(--header-background)",
		  "btn-bg":"var(--btn-bg)",
		  "btn-txt":"var(--btn-txt)",

		  foreground: "hsl(var(--foreground))",
		  "list-hover" : "var(--list-hover)",
		  spinner:"var(--spinner)",
		  "bby-blue" : "var(--bby-blue)",
		  primary: {
			DEFAULT: "hsl(var(--primary))",
			foreground: "hsl(var(--primary-foreground))",
		  },
		  secondary: {
			DEFAULT: "var(--secondary)",
			foreground: "hsl(var(--secondary-foreground))",
		  },
		  destructive: {
			DEFAULT: "hsl(var(--destructive))",
			foreground: "hsl(var(--destructive-foreground))",
		  },
		  muted: {
			DEFAULT: "hsl(var(--muted))",
			foreground: "hsl(var(--muted-foreground))",
		  },
		  accent: {
			DEFAULT: "hsl(var(--accent))",
			foreground: "hsl(var(--accent-foreground))",
		  },
		  popover: {
			DEFAULT: "hsl(var(--popover))",
			foreground: "hsl(var(--popover-foreground))",
		  },
		  card: {
			DEFAULT: "var(--card)",
			foreground: "var(--card-foreground)",
		  },
		  table: {DEFAULT: "hsl(var(--table)"},
		},
		borderRadius: {
		  lg: "var(--radius)",
		  md: "calc(var(--radius) - 2px)",
		  sm: "calc(var(--radius) - 4px)",
		},
		keyframes: {
		  "accordion-down": {
			from: { height: "0" },
			to: { height: "var(--radix-accordion-content-height)" },
		  },
		  "accordion-up": {
			from: { height: "var(--radix-accordion-content-height)" },
			to: { height: "0" },
		  },
		},
		animation: {
		  "accordion-down": "accordion-down 0.2s ease-out",
		  "accordion-up": "accordion-up 0.2s ease-out",
		},
	  },
	}
}