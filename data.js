// Generated from the Framer CMS export (_framer_dump.json). Edit freely.
window.PROJECTS=[
 {
  "slug": "shopee-monee-unit-economics-sec-filings",
  "title": "Shopee & Monee Unit Economics from Sea's Filings",
  "summary": "From 30 quarters of Sea's own filings: Shopee's take from fees and ads roughly doubled to 11.1% of GMV, yet EBITDA is only 0.67% of GMV; Monee's falling NPL ratio partly reflects fast loan growth; plus a FY2026 nowcast and an interactive simulator for the US$1 billion goal.",
  "cover": "assets/projects/shopee-monee-cover.jpg",
  "category": "Data Analysis · Financial Analysis",
  "tools": "SEC EDGAR API, Python, Excel, Power BI",
  "client": "Personal project (SEC public filings)",
  "date": "2026-10-15",
  "content": "<h2 dir=\"auto\">Overview</h2><p dir=\"auto\">An independent look at Shopee and Monee built only from Sea Limited's own quarterly earnings releases on SEC EDGAR. It asks three questions: is Shopee's growth becoming more profitable, is Monee's fast loan growth staying healthy, and, before Sea reports the second half, how likely is the US$1 billion Shopee adjusted EBITDA for FY2026 that its CEO said he is optimistic about?</p><h2 dir=\"auto\">Data</h2><p dir=\"auto\">A Python script downloads all 36 quarterly earnings releases (Form 6-K, exhibit 99.1) from the SEC EDGAR API, and a parser extracts 30 quarters of Shopee and Monee figures from Q1 2019 to Q2 2026: gross orders, GMV, revenue split into fees and ads versus logistics, adjusted EBITDA, Monee revenue, loan book and 90-day NPL ratio. From Q1 2024, marketplace and Monee revenue come from Sea's exact segment tables (in US$ thousands) instead of the rounded bullet points. Every number links back to its filing.</p><h2 dir=\"auto\">Checking the data</h2><p dir=\"auto\">Sea's reported year-on-year growth matches growth computed from the extracted values in all 46 checks, and four quarters add up to Sea's full-year figures within 1.6%. Sea did not report GMV or orders for Q1 and Q2 2023, so those quarters are derived from the growth rates it reported a year later and flagged; the FY2023 totals confirm them within 0.7%. Monee changed how it measures its loan book twice in 2023, so growth is only computed within one measure, and the drop in its NPL ratio in Q4 2022 came mainly from a shorter write-off period, as Sea itself disclosed.</p><p dir=\"auto\">One check changed a finding. My first version said a higher take rate explained 11% of revenue growth a year earlier. Because Sea rounds revenue to US$0.1 billion, a rounding test showed that figure could be anywhere from about -3% to 23%. Switching to the exact segment tables gives about 15%.</p><h2 dir=\"auto\">Findings</h2><p dir=\"auto\">Shopee's take from fees and ads has roughly doubled: about 5% of GMV in Q3 2022 and 11.1% in Q2 2026, while logistics revenue fell to 1.8% of GMV. In Q2 2026, about 37% of marketplace revenue growth came from the higher take rate, up from about 15% a year earlier. Yet adjusted EBITDA was only about US$0.06 per order, or 0.67% of GMV, below its first profitable quarters (about 1.1% to 1.2% in Q4 2022 and Q1 2023), as sales and marketing grew 56.6% against 48.9% for marketplace revenue.</p><p dir=\"auto\">Monee's loan book grew from US$3.1 billion in Q4 2023 to US$11.1 billion in Q2 2026, while its adjusted EBITDA margin fell from 31% to 21%. Its reported NPL ratio fell from 1.6% to 1.0%. Divided by the smaller loan book of a year earlier, it held around 1.9% to 2.0% from Q4 2024 to Q1 2026 and eased to 1.6% in Q2 2026. Credit quality looks stable, but much of the drop in the headline ratio comes from growth rather than better loans.</p><h2 dir=\"auto\">FY2026 nowcast</h2><p dir=\"auto\">Made on 15 October 2026 from H1 2026 data, before Sea reports Q3 (mid-November 2026) and the full year (around March 2027). H1 delivered US$478.6 million, so H2 needs US$521.4 million. At H1's growth (29.5%) and margin (0.63% of GMV), Shopee reaches about US$1,043 million. If the H2 margin falls back to H2 2025's 0.56% and growth is 5 points slower, it reaches about US$962 million, and if H2 repeats 2025's H2-to-H1 ratio, about US$856 million. The break-even H2 margin is about 0.58% of GMV. The estimate will be checked against the actual results.</p><h2 dir=\"auto\">Model and dashboard</h2><p dir=\"auto\">An Excel model with live formulas holds the data, the unit-economics metrics, a growth decomposition, the Monee credit view and the FY2026 scenarios with editable assumptions. A three-page Power BI report presents it: a Shopee page where clicking a quarter cross-filters the other charts, a Monee and nowcast page, and a simulator where you set your own H2 2026 GMV growth and EBITDA margin and a gauge shows FY2026 against the US$1 billion goal. The report itself is written as code in the PBIR format, with the page designs drawn in Python. The video below shows the report in use.</p><video src=\"assets/projects/shopee-monee-demo.mp4\" controls muted loop playsinline preload=\"metadata\"></video><h2 dir=\"auto\">Limitations</h2><p dir=\"auto\">Sea prints GMV, orders and pre-2024 revenue rounded, so the 2022 to 2023 take rates are approximate, and it does not split Shopee by country, so this covers Shopee overall rather than Shopee Indonesia. The lagged NPL view uses NPL ratios printed to one decimal. The FY2026 scenarios are a simple driver model, not Sea's guidance. This is independent analysis of public filings and is not affiliated with Sea Limited.</p><h2 dir=\"auto\">Source code</h2><p dir=\"auto\"><a href=\"https://github.com/pedacitodecielo-lab/shopee-monee-unit-economics\" target=\"_blank\">github.com/pedacitodecielo-lab/shopee-monee-unit-economics</a></p>",
  "gallery": [
   "assets/projects/shopee-monee-page1.jpg",
   "assets/projects/shopee-monee-page2.jpg",
   "assets/projects/shopee-monee-page3.jpg"
  ],
  "link": "https://github.com/pedacitodecielo-lab/shopee-monee-unit-economics"
 },
 {
  "slug": "procurement-red-flag-monitor-power-bi",
  "title": "Procurement Red-Flag Monitor: Which Tenders to Audit First",
  "summary": "I scraped 4,165 completed 2025 tenders from the e-procurement portals of all 34 Indonesian provinces, built red-flag rules in DuckDB SQL and a risk-directed anomaly model, and turned them into a Power BI audit tool: 28% of tenders carry two or more red flags, and single-bidder tenders were won about 1% below the owner's estimate, against 5–7% when firms competed.",
  "cover": "https://framerusercontent.com/images/qfHDnrBQ4IJ2Eib8bwzAz0vCTo.png",
  "category": "Data Analysis · Audit Analytics",
  "tools": "Python, web scraping, DuckDB SQL, scikit-learn, Power BI, DAX, GitHub Actions",
  "client": "Personal project (SPSE public procurement data)",
  "date": "2026-10-01",
  "content": "<h2 dir=\"auto\">Overview</h2><p dir=\"auto\">A provincial inspectorate can review only a small share of its tenders. This project screens every completed 2025 tender of Indonesia’s 34 provincial governments for procurement red flags and ranks the ones an auditor should check first. Red flags are risk indicators for choosing what to review, not evidence of wrongdoing.</p><h2 dir=\"auto\">Data and scraping</h2><p dir=\"auto\">A Python scraper reads the public SPSE portals through spse.inaproc.id. The tender list comes from the JSON endpoint behind each portal’s search page, and for every completed tender it saves four public pages: announcement, participants, evaluation results and winner. It follows robots.txt (crawl-delay 1 second), waits 1.5 seconds between requests, names the project in its User-Agent, caches every page and logs every request: 16,956 requests in total. A parser turns the HTML into two tables: 4,867 tenders and 154,693 bids.</p><h2 dir=\"auto\">Method</h2><p dir=\"auto\">DuckDB SQL computes six red flags adapted from Open Contracting Partnership and World Bank indicators: single bidder, a winning bid at 99% or more of the owner’s estimate (HPS), the cheapest bid not winning, bids within 1% of each other, repeat winners in the same work unit, and possible package splitting. An Isolation Forest, trained separately for consultant selections and works tenders, finds tenders that are unusual on several risk dimensions at once. Only deviations in the risky direction count, and every flagged tender gets a plain-language reason. Without fraud labels, the model is checked for stability across five random seeds (Jaccard 0.80 to 0.85) and for agreement with the rules: 61% to 72% of anomalies carry two or more red flags, against 21% to 34% of all tenders.</p><p dir=\"auto\">Checking the data changed the work in three places. 1,056 tender names carried HTML status badges, one tender had two recorded winners, and 20 completed tenders turned out to have an empty winner page on SPSE. Each case is handled and logged. Data-quality checks run on every refresh, and a GitHub Actions workflow re-runs the pipeline weekly and stops before publishing if a critical check fails.</p><h2 dir=\"auto\">Findings</h2><p dir=\"auto\">28% of the 4,145 analysed tenders (1,155) carry two or more red flags, worth Rp 2,817 billion, or 14% of the contract value. Competition matters for price: single-bidder tenders were won about 1% below the owner’s estimate, against 5% to 7% when several firms bid. That is an indicative gap of about Rp 266 billion, not a measured loss. Risk is concentrated: in Sumatera Selatan 80% of tenders carry two or more flags and 82% had only one bidder, followed by Kalimantan Tengah (60%), Jambi (48%) and Lampung (47%). System-wide, the owner’s estimate equals the budget ceiling in 69% of tenders, which points to estimates copied from the budget rather than built from a price survey.</p><h2 dir=\"auto\">Dashboard</h2><p dir=\"auto\">Four Power BI pages with page navigation and cross-filtering. Overview shows the headline KPIs, provinces ranked by risk and a key-takeaway sentence that updates with every filter. Red flags explains each flag and how often it fires. Where shows a province heatmap, the work units with the most flagged contract value and repeat winners. Audit shortlist lists 209 priority tenders with the reason each one was selected, filterable by province and procurement type. The page backgrounds are drawn in Python and every number stays live. The video below shows the report in use.</p><video loop=\"\" playsinline=\"\" src=\"https://framerusercontent.com/images/kLcieZNvYUi1zeh0kIhslQj0MI.mp4\"></video><h2 dir=\"auto\">How the pipeline runs</h2><p dir=\"auto\">Real output from each stage, regenerated from the pipeline’s own files: scraping log, parsing, red flags, anomaly model, data-quality checks and the Power BI export.</p><img alt=\"Real output from each stage of the pipeline\" src=\"https://framerusercontent.com/images/dLWMZ8QYXJXNqqK76VW6nYs2dg.png\"><h2 dir=\"auto\">Limitations</h2><p dir=\"auto\">Red flags are screening signals, not findings, and one flag is common and often innocent. The price gap is indicative because single-bidder tenders can differ in size and location. Only the tender list is covered (no direct procurement or e-katalog purchases), and 20 tenders with empty winner pages are excluded. This is independent analysis of public data and is not affiliated with LKPP or any government body.</p><h2 dir=\"auto\">Source code</h2><p dir=\"auto\"><a href=\"https://github.com/pedacitodecielo-lab/procurement-red-flags\" target=\"_blank\">github.com/pedacitodecielo-lab/procurement-red-flags</a></p>",
  "gallery": [
   "https://framerusercontent.com/images/qfHDnrBQ4IJ2Eib8bwzAz0vCTo.png",
   "https://framerusercontent.com/images/gs7DXOfN61qroVD4fychmvKqMIg.png",
   "https://framerusercontent.com/images/uj1Juzw1zFqUDBhAiz1urJ2PQ40.png",
   "https://framerusercontent.com/images/EIfi4cCYehBsnpE3NWUzX7jpLS4.png",
   "https://framerusercontent.com/images/dLWMZ8QYXJXNqqK76VW6nYs2dg.png"
  ],
  "link": "https://github.com/pedacitodecielo-lab/procurement-red-flags"
 },
 {
  "slug": "indonesia-food-price-monitor-power-bi",
  "title": "Indonesia Food Price Monitor: Where and When Staple Prices Spike",
  "summary": "I scraped 864,000 daily prices of 21 staple foods across 34 provinces from Bank Indonesia’s PIHPS, modelled them in DuckDB SQL and built a Power BI monitor: chillies are up 92% in a year and cost up to 2.3x the national price in Maluku Utara, while shallots rise about 8% before Lebaran.",
  "cover": "https://framerusercontent.com/images/Ww3x1wkFHq6CC1qjyMlzpA8jPM4.png",
  "category": "Data Analysis · Web Scraping",
  "tools": "Python, web scraping, DuckDB SQL, Power BI, DAX, GitHub Actions",
  "client": "Personal project (Bank Indonesia PIHPS public data)",
  "date": "2026-09-27",
  "content": "<h2 dir=\"auto\">Overview</h2><p dir=\"auto\">Food prices drive Indonesian inflation and household budgets, and they can move fast. This project tracks the daily prices of 21 staple foods across 34 provinces from Bank Indonesia’s PIHPS Nasional. It asks three questions: which staples carry the most price risk right now, where they are most expensive, and whether prices rise before Lebaran.</p><h2 dir=\"auto\">Data and scraping</h2><p dir=\"auto\">A Python scraper calls the public JSON endpoint behind the PIHPS “Tabel Harga” page. It collects traditional-market prices for 21 commodities, at national level and for every province, from January 2022 to today: 864,235 rows. It requests one quarter at a time, waits 2 seconds between requests, caches every response and stops on HTTP 403, 429 or 503. A GitHub Actions workflow re-runs the pipeline every weekday and downloads only the current quarter.</p><h2 dir=\"auto\">Method</h2><p dir=\"auto\">DuckDB SQL turns the raw prices into a star schema (commodity, region and date dimensions, plus a price fact table) and KPI tables: latest price with week-on-week, month-on-month and year-on-year change, 90-day volatility, a weekly alert flag for moves above 10%, each province’s gap from the national price, and the pre-Lebaran price change. Data-quality checks found 0 duplicates and 0 non-positive prices, and flagged 130 daily jumps above 50% for review. The Power BI report uses DAX measures that match the SQL results.</p><p dir=\"auto\">Validation changed one result. A first version compared single days, but on the last working day before the 2022 holiday few markets reported and the national rice price spiked for one day (Rp 10,450 to 12,750, then back). That inflated the pre-Lebaran effect for rice and chicken, so the final measure compares 7-day averages.</p><h2 dir=\"auto\">Findings</h2><p dir=\"auto\">Chillies are the main price risk. The national price of cabai rawit merah is Rp 96,450/kg, up 30.3% in a month and 91.7% in a year, while every staple other than chillies moved less than 10% year on year. Chillies also cost much more in eastern Indonesia: in Maluku Utara, cabai merah besar costs 2.3 times the national average. Comparing the last week before Lebaran with a month earlier (2022 to 2026), shallots rose 7.9% on average and in 3 of 5 years, beef crept up about 3% every year, and chillies showed no pattern, swinging from −38% to +19%. All 20 active weekly price alerts are chillies.</p><h2 dir=\"auto\">Dashboard</h2><p dir=\"auto\">Three Power BI pages share a synced commodity slicer and page-navigation buttons, with a custom theme, colour-coded price changes and monthly sparklines. Executive Summary shows the latest price, WoW, MoM and YoY cards, the daily national trend and a table of all commodities with alerts. Regional Disparity ranks every province by its gap from the national price. Seasonality &amp; Lebaran compares the pre-Lebaran change across commodities and the monthly price pattern of each year.</p><h2 dir=\"auto\">Limitations</h2><p dir=\"auto\">Prices are PIHPS traditional-market averages. The Lebaran effect is an average of only five holidays, so it is a pattern, not a forecast. Chilli prices follow weather and harvest cycles, which this project does not model yet. Data © PIHPS Nasional, Bank Indonesia; only derived aggregates are published. This is independent analysis of public data, not affiliated with any company.</p><h2 dir=\"auto\">Source code</h2><p dir=\"auto\"><a href=\"https://github.com/pedacitodecielo-lab/indonesia-food-price-monitor\">github.com/pedacitodecielo-lab/indonesia-food-price-monitor</a></p>",
  "gallery": [
   "https://framerusercontent.com/images/Ww3x1wkFHq6CC1qjyMlzpA8jPM4.png",
   "https://framerusercontent.com/images/NorggwEAgvXVIavJm2jhsuu8EK8.png",
   "https://framerusercontent.com/images/lehJ128H39toph9g1HSke2yTAaw.png",
   "https://framerusercontent.com/images/VvTpoVko0RiIB6ycSU7Ghiq5SQ.png"
  ],
  "link": "https://github.com/pedacitodecielo-lab/indonesia-food-price-monitor"
 },
 {
  "slug": "ewallet-voice-of-customer-web-scraping",
  "title": "E-Wallet Voice of Customer: What Indonesian Users Complain About",
  "summary": "I scraped 3,157 App Store reviews of five Indonesian e-wallets plus Bank Indonesia e-money statistics, built a validated complaint classifier, and found that DANA's distinctive gap is Paylater, not the failed transfers that hurt its peers.",
  "cover": "https://framerusercontent.com/images/tEDUPSO2RrLklwjnftd4bAbnwTU.png",
  "category": "Data Analysis · Web Scraping",
  "tools": "Python, web scraping, text classification, pandas, Tableau Public",
  "client": "Personal project (App Store and Bank Indonesia public data)",
  "date": "2026-09-27",
  "content": "<h2 dir=\"auto\">Overview</h2><p dir=\"auto\">Indonesia’s e-money market is growing fast, so the e-wallet that users trust wins. This project asks what users of DANA, GoPay, OVO, ShopeePay and LinkAja actually complain about, and what DANA should fix first compared with its peers. It combines two scraped public sources: 3,157 App Store reviews and Bank Indonesia’s e-money statistics.</p><h2 dir=\"auto\">Data and scraping</h2><p dir=\"auto\">Reviews come from Apple’s official review feed: the latest 500 and the 500 most-helpful reviews per app, cached page by page with retries. Reviewer names are never stored, and phone numbers, e-mails, long digit strings and handles in the text are masked. Market figures come from Bank Indonesia’s payment-system statistics page: the scraper finds the “Tabel 5e” links, checks the file’s magic bytes (the Excel link returned an HTML 404 page, so it falls back to the PDF), parses a table that spans two page layouts with pdfplumber, and checks that December stocks equal the annual figures. Requests are spaced out, cached, and stop on HTTP 403, 429 or 503.</p><h2 dir=\"auto\">Method</h2><p dir=\"auto\">Each review is tagged with ten complaint themes by transparent regex rules written for Indonesian slang (for example “kesedot”, “blm masuk”, “tf”). I validated the rules blind on 100 hand-labelled reviews that were not used to write them: precision 0.80 and recall 0.64 before tuning, 0.83 and 0.83 after (optimistic, since the sample was then seen). Because the latest 500 reviews cover 25 days for DANA but 847 days for LinkAja, apps are compared as equal-size snapshots rather than time trends, with review velocity shown separately. A priority matrix plots how common each theme is against the share of its reviews that are 1 star, and a chi-square test checks the latest app version.</p><h2 dir=\"auto\">Findings</h2><p dir=\"auto\">E-money transaction value grew 4.3x from 2021 to 2025, to Rp 3,362 trillion. Satisfaction splits in two: GoPay, DANA and ShopeePay average 3.2 to 3.7 stars, while OVO and LinkAja sit below 1.6. Across the market, failed or pending transfers (17% of reviews, 86% of them 1 star), customer service and login/OTP problems drive most complaints.</p><p dir=\"auto\">DANA beats the peer average on failed transfers (−9.8 pp), customer service and login. Its distinctive gap is Paylater (DANA Cicil): 12.8% of its reviews versus 5.6% at peers, mostly users who see a credit limit they cannot use. Balance lost or auto-debit is also higher for DANA (+2.0 pp) and is the most severe theme, with 90% of those reviews at 1 star. Release 2.145.0 dipped to 3.05 stars from about 3.4, a warning sign that is not yet significant (p = 0.10).</p><h2 dir=\"auto\">Dashboard</h2><p dir=\"auto\">Three interactive views with global app and review-type filters. Market &amp; Scorecard shows Bank Indonesia KPIs, ratings, star mix and review velocity. Complaint Map is a theme × app heatmap: click any cell to filter the star ratings and read the actual reviews behind it. Priorities for DANA shows the priority matrix, DANA’s gap versus peers, ratings by app version and three recommendations. The Tableau workbook itself is generated from Python code, so every calculation and action is reproducible.</p><h2 dir=\"auto\">Limitations</h2><p dir=\"auto\">iOS reviews only, and reviewers skew towards strong opinions, so this is a directional signal rather than a satisfaction survey. The classifier undercounts some complaints, roughly equally across apps. Snapshot windows differ by app, so findings are cross-sectional. This is independent analysis of public data, not affiliated with any company.</p><h2 dir=\"auto\">Source code</h2><p dir=\"auto\"><a href=\"https://github.com/pedacitodecielo-lab/ewallet-review-insights\">github.com/pedacitodecielo-lab/ewallet-review-insights</a></p>",
  "gallery": [
   "https://framerusercontent.com/images/LHtG1bhQIYzUiWMVUSzjUh7tu4A.png",
   "https://framerusercontent.com/images/XJQEs4jCXmxW2oe7mdmWM28acCc.png",
   "https://framerusercontent.com/images/UOC7WtvKXQP0H6uuwatqqypJgI.png"
  ],
  "link": "https://public.tableau.com/app/profile/emelio.exaudi/viz/ewallet_review_insights/1MarketScorecard"
 },
 {
  "slug": "rupiah-vs-commodities-web-scraping",
  "title": "Rupiah vs Commodities: Scraping Bank Indonesia Data",
  "summary": "I scraped 2,592 daily USD/IDR rates from Bank Indonesia's HTML tables and combined them with eight commodity prices to show that prices swing far more than the rupiah, which adds only a slow tailwind.",
  "cover": "https://framerusercontent.com/images/bDgXtVI0cuSuChDZjajy61to5Ec.png",
  "category": "Data Analysis · Web Scraping",
  "tools": "Python, web scraping, pandas, Tableau Public",
  "client": "Personal project (Bank Indonesia and IMF public data)",
  "date": "2026-09-26",
  "content": "<h2 dir=\"auto\">Overview</h2><p dir=\"auto\">A commodity business that reports in rupiah sees its prices move for two reasons: the USD price of the commodity and the USD/IDR exchange rate. This project separates the two and asks whether a weaker rupiah cushions falling commodity prices. It uses only public data, and its core is a scraper for Bank Indonesia’s daily JISDOR rate.</p><h2 dir=\"auto\">Data and scraping</h2><p dir=\"auto\">Bank Indonesia publishes the historical JISDOR rate only as an HTML table behind a date-range form: 10 rows per page, ASP.NET postbacks, and no CSV or API on that page. My scraper reads the form state, queries one month at a time, follows the numeric pager links, and parses Indonesian dates and rate strings such as Rp16.796,00 into numbers. It caches every month, so re-runs never hit the site again.</p><p dir=\"auto\">I treated the scraping as an ethics question first. The site’s robots.txt allows the path, requests are spaced 1.5 to 2.5 seconds apart, the script stops immediately on HTTP 403, 429 or 503, and it identifies itself honestly as a personal research project. I ruled out another source, a gold-price page protected by a bot filter, rather than working around the protection. The result is 2,592 daily observations from 2016 to September 2026, validated for duplicates, monthly coverage, plausible ranges and agreement with known annual averages. Commodity prices (coal, nickel, copper, tin, aluminum, iron ore, palm oil and Brent) come from IMF data on FRED.</p><h2 dir=\"auto\">Method</h2><p dir=\"auto\">The price in rupiah is the USD price times the exchange rate, so in logs the change in the rupiah price is exactly the sum of a USD-price effect and a rate effect, with no residual. I also measured how often each risk moves more than 10% in 12 months, the correlation between rupiah moves and price moves with a significance test, and the worst 12-month price fall for each commodity with what the rupiah did in the same window. A first version of the exact split failed its own check because an average of monthly products is not the product of averages, so I redefined the annual price and measured the remaining gap (at most 0.85%).</p><h2 dir=\"auto\">Findings</h2><p dir=\"auto\">The rupiah weakened 23.8% between the 2016 and 2025 annual averages, which explains 23% to 34% of the rise in commodity prices measured in rupiah. It is a slow tailwind, not a swing factor: USD commodity prices moved more than 10% in 65% to 87% of 12-month windows, while the rupiah did so in only 3.5%.</p><p dir=\"auto\">The rupiah is a weak natural hedge. Monthly rupiah moves are negatively correlated with USD price moves (from -0.19 to -0.37, significant at 5% for 6 of 8 commodities), so it tends to weaken when prices fall. In each commodity’s worst 12-month fall it offset a median 8% of the drop, from about 0% for nickel to 34% for copper. The USD-price effect is larger than the rate effect in 89% of commodity-years.</p><h2 dir=\"auto\">Dashboard</h2><p dir=\"auto\">Two views. Where the money moves shows four KPIs, prices in rupiah versus USD as indexed lines (2016 = 100) for coal, copper, nickel and palm oil, and how often prices versus the rupiah move more than 10%. Does the rupiah cushion price falls shows the worst falls in USD versus rupiah terms, the correlations, and the yearly decomposition.</p><h2 dir=\"auto\">Limitations</h2><p dir=\"auto\">These are benchmark prices, not any company’s realised prices, and there are no company costs, volumes, contracts or hedges, so this is not an estimate of any company’s revenue. Gold is missing because FRED no longer publishes a public series. 2026 is partial. The offset statistics rest on eight windows, seven of them ending in 2022 or 2023. Correlation is not causation. This is independent analysis of public data, not investment advice.</p><h2 dir=\"auto\">Source code</h2><p dir=\"auto\"><a href=\"https://github.com/pedacitodecielo-lab/rupiah-commodity-sensitivity\">github.com/pedacitodecielo-lab/rupiah-commodity-sensitivity</a></p>",
  "gallery": [
   "https://framerusercontent.com/images/ECsJXpC5wuS43fDybqYiCphqfK8.png",
   "https://framerusercontent.com/images/NJnoIppk1MQiyXfxKswX6de3Q.png"
  ],
  "link": "https://public.tableau.com/app/profile/emelio.exaudi/viz/rupiah_commodity_sensitivity/Wherethemoneymoves"
 },
 {
  "slug": "auto-supplier-benchmark-sec-edgar",
  "title": "Auto Supplier Benchmark: Why Dana Trails Its Peers",
  "summary": "SEC filings for 10 US auto suppliers show Dana's EBIT margin is 3 points below its peers, with the gap in gross margin, plus a working-capital scenario worth about $749M.",
  "cover": "https://framerusercontent.com/images/u92i3BB2TnqzOoSJZPCTluU2c8.png",
  "category": "Data Analysis · Financial Benchmarking",
  "tools": "SEC EDGAR API, Python, pandas, Tableau Public",
  "client": "Personal project (SEC public filings)",
  "date": "2026-09-26",
  "content": "<h2 dir=\"auto\">Overview</h2><p dir=\"auto\">An independent benchmark of 10 US-listed auto suppliers built only from public SEC filings. It asks one question: Dana earns lower margins than most of its peers, so is the gap in production economics or in overhead, and what does it mean for cash and leverage? The output is a Tableau dashboard and a one-page memo written the way a consulting team would: issue, analysis, so what. It is not affiliated with any company named.</p><h2 dir=\"auto\">Data and method</h2><p dir=\"auto\">The data comes from the SEC EDGAR XBRL API (10-K annual filings, FY2016 to FY2024) for Dana, BorgWarner, Dauch (American Axle), Aptiv, Lear, Autoliv, Visteon, Adient, Cooper-Standard and Gentherm. All are US GAAP filers reporting in USD, so no currency conversion was needed. A Python pipeline downloads the filings, extracts each metric, computes ratios such as gross margin, EBIT margin, inventory days and net debt to EBITDA, and records the XBRL tag behind every value so any figure can be audited.</p><p dir=\"auto\">Several data traps needed handling. Figures are taken as originally reported, because a later 10-K restates history (Dana’s FY2025 filing moves Off-Highway to discontinued operations and would have shrunk FY2023 revenue from $10.6B to $7.6B). Companies change XBRL tags over time, so each year uses the first available tag. Placeholder zeros and wrong-signed values are treated as missing or corrected, and plausibility checks flag ratios outside the range expected for suppliers.</p><h2 dir=\"auto\">Findings</h2><p dir=\"auto\">Dana’s EBIT margin averaged 2.0% in FY2022 to FY2024 against 5.0% for the other nine peers, a gap of 3.0 points. Against the two closest drivetrain peers, BorgWarner and Dauch, the gap is 3.2 points, so the result does not depend on the peer set.</p><p dir=\"auto\">The gap sits in gross margin, not overhead. Dana’s gross margin was 8.2% against a 13.6% peer mean (5.4 points lower), while its overhead was lower than peers (6.2% of sales against 8.7%), which offsets 2.5 points. Gross margin fell from 14.3% in FY2016 to 8.5% in FY2024.</p><p dir=\"auto\">Working capital is lopsided. Dana collects fastest of the ten (about 46 days of receivables) but holds the second-longest inventory: 60 days in FY2024 against a peer median of 31. Net debt to EBITDA was 3.27 times against a peer median of 1.65 times, and R&amp;D was the lowest of the nine companies with data, at 2.2% of sales against a 4.6% median.</p><h2 dir=\"auto\">So what</h2><p dir=\"auto\">These are hypotheses to test, not conclusions. First, diagnose gross margin by splitting the 5.4-point gap into price and mix, material and labor cost, and freight, which needs segment and plant data the filings do not contain. Second, attack inventory: every 10 days is worth about $258 million of cash on FY2024 cost of goods, and reaching the peer median would free about $749 million and cut net debt to EBITDA from 3.27 to 2.11 times. Third, check whether low R&amp;D is a choice or a constraint before cutting further.</p><p dir=\"auto\">The inventory scenario is illustrative: cost of goods and EBITDA are held at FY2024 levels, one-off costs are ignored, and peers differ in product mix.</p><h2 dir=\"auto\">Dashboard</h2><p dir=\"auto\">Two views. Where Dana stands shows four KPIs, a ranking of EBIT margin across all ten companies with Dana highlighted, and Dana against the peer mean over time for EBIT margin, gross margin and inventory days. Why and what to do decomposes the margin gap, plots leverage against EBIT margin, and lists the three hypotheses.</p><h2 dir=\"auto\">Limitations</h2><p dir=\"auto\">Only US-listed peers are included so far; Indonesian peers listed on IDX are the planned next stage and need IFRS normalization. FY2025 is excluded from rankings because Dana’s continuing-operations figures are not comparable. The peers span drivetrain, electronics, seating and thermal products, and companies classify some costs differently, so part of a gross-margin gap can be presentation. EBIT for Adient and Visteon is a proxy, and Lear R&amp;D and Visteon capex are missing after FY2019. This is independent analysis of public data, not investment advice.</p><h2 dir=\"auto\">Source code</h2><p dir=\"auto\"><a href=\"https://github.com/pedacitodecielo-lab/auto-supplier-benchmark\">github.com/pedacitodecielo-lab/auto-supplier-benchmark</a></p>",
  "gallery": [
   "https://framerusercontent.com/images/blbyVGijVxlR16j6pAJL5UNZZg.png",
   "https://framerusercontent.com/images/a54BUCB0BBYJDD2JRNpzGytCmkA.png"
  ],
  "link": "https://public.tableau.com/app/profile/emelio.exaudi/viz/auto_supplier_benchmark/WhereDanastands"
 },
 {
  "slug": "us-gas-flaring-tableau-dashboard",
  "title": "Gas Flaring on US Federal and Native American Leases",
  "summary": "Interactive Tableau dashboard on 365K rows of ONRR data: flared gas fell 63% from 2019 to 2024 while gas leaving the lease rose 21%, with the remaining loss concentrated in four areas.",
  "cover": "https://framerusercontent.com/images/dbGHPAbUeg542QxoSGe2t6yRA.png",
  "category": "Data Analysis · Business Intelligence",
  "tools": "Tableau Public, Python, pandas",
  "client": "Personal project (ONRR public data)",
  "date": "2026-09-26",
  "content": "<h2 dir=\"auto\">Overview</h2><p dir=\"auto\">A portfolio project built around one question: are operators on US federal and Native American oil and gas leases getting better at capturing gas instead of flaring, venting, or losing it? I built an interactive Tableau Public dashboard on ONRR production and disposition data from January 2015 to May 2025 that answers it and shows where the remaining loss sits.</p><h2 dir=\"auto\">Data and method</h2><p dir=\"auto\">The source is ONRR’s monthly production and disposition reports, via a Kaggle mirror, cleaned to 365,748 rows. The Kaggle cleaned file labels Native American onshore rows as Offshore, so I rebuilt the cleaning from the raw file in Python with pandas and grouped the 35 raw disposition codes into 10 groups, dropped the two water codes that never carry volume, and kept 9 groups.</p><p dir=\"auto\">FVL is gas that is flared, vented, or spilled, lost, or stolen. Gas out of lease is sales plus gas transferred to a facility plus FVL, and FVL rate is FVL divided by gas out of lease. The denominator matters: using sales plus FVL alone inflates North Dakota to roughly 50% when the figure is about 12%. This is an approximate metric, not an official ONRR number. Every figure on the dashboard was checked against a direct calculation from the CSV.</p><h2 dir=\"auto\">Findings</h2><p dir=\"auto\">Flaring fell sharply after the 2019 peak while gas leaving the lease grew. Flared gas dropped 63% from 2019 to 2024, and total FVL fell from 96.5 million Mcf to 39.8 million Mcf (58.7%). Gas out of lease grew 21%, from 4.56 to 5.52 billion Mcf, so the FVL rate fell from 2.12% to 0.72%. Total FVL for 2015 to 2024 was 563.6 million Mcf.</p><p dir=\"auto\">The problem is concentrated. Four areas account for about 90% of FVL from 2015 to 2024: Native American leases (28.9%), New Mexico (24.3%), North Dakota (19.0%), and Offshore (17.7%). North Dakota’s rate is 12.2% and Native American leases sit at 5.17%, against 0.92% for federal leases overall.</p><p dir=\"auto\">Most areas improved a lot. North Dakota went from 23.9% in 2019 to 5.8% in 2024, Native American leases from 11.1% to 1.9%, and New Mexico from 3.09% in 2015 to 0.35%. Among the four largest areas, Offshore is the only one whose rate rose, from 0.86% to 1.49%, but its absolute FVL fell 13% while gas out of lease fell about 50%, so the increase mostly reflects a shrinking denominator rather than more gas being wasted.</p><h2 dir=\"auto\">Dashboard</h2><p dir=\"auto\">The dashboard has two views, with labels in Indonesian. The Executive Overview shows the headline KPIs, the yearly trend of FVL volume and rate, and FVL by area; clicking a state filters the trend. The second view maps FVL rate by state and compares the four largest areas over time, with independent axes so each area’s direction is visible. A Land Class filter applies across both views.</p><h2 dir=\"auto\">Recommendations</h2><p dir=\"auto\">Prioritize flaring reduction on North Dakota and Native American leases, whose rates are far above the federal average. Use New Mexico as the benchmark: the largest gas volume, a rate under 1%, and still falling. For Offshore, track absolute FVL together with the rate, since the rate alone is driven by the denominator. Finally, track FVL rate monthly by area with the denominator shown next to it.</p><h2 dir=\"auto\">Limitations</h2><p dir=\"auto\">Coverage is federal and Native American leases only, not total US production. 2025 covers January to May and is shown in grey, so it should not be compared directly with full years. Small areas give misleading rates (South Dakota shows 93% on a tiny volume), so the map only includes states with at least 500 million Mcf of gas out of lease. The data does not explain why flaring fell: the 2020 dip coincides with the pandemic, and the North Dakota and New Mexico declines fit gas-gathering buildout or flaring rules, but that is a hypothesis to verify with other sources.</p><h2 dir=\"auto\">Source code</h2><p dir=\"auto\"><a href=\"https://github.com/pedacitodecielo-lab/us-gas-flaring-tableau\">github.com/pedacitodecielo-lab/us-gas-flaring-tableau</a></p>",
  "gallery": [
   "https://framerusercontent.com/images/WcxkvG9coJfvpCk1MNKZK1OMJ9k.png",
   "https://framerusercontent.com/images/xb2Xou9miW7Flj8kWRJyUZSm8.png"
  ],
  "link": "https://public.tableau.com/app/profile/emelio.exaudi/viz/og_flaring_dashboard/ExecutiveOverview"
 },
 {
  "slug": "geotechnical-monitoring-pipeline",
  "title": "Geotechnical Monitoring Pipeline & Dashboard at PT Aneka Tambang Tbk. (ANTAM)",
  "summary": "End-to-end pipeline merging 20 years of satellite rainfall, IoT rain gauges, and extensometer data, with an interactive review dashboard.",
  "cover": "https://framerusercontent.com/images/FKa77Xuu3b2xJvfk1vZV4JPeqyM.jpg",
  "category": "Data Analysis · Data Engineering",
  "tools": "Python, pandas, xarray, Chart.js",
  "client": "PT Aneka Tambang Tbk. (ANTAM)",
  "date": "2026-02-27",
  "content": "<p dir=\"auto\">End-to-end pipeline merging 20 years of GPM satellite rainfall, IoT rain gauges, and extensometer data for a slope-stability monitoring program.</p><p dir=\"auto\">The analysis found 10 data-integrity issues and a 16-day gap in alert-level SOP coverage, then shipped a 9-panel interactive review dashboard built with Python, pandas, xarray, and Chart.js.</p>",
  "gallery": [
   "https://framerusercontent.com/images/aGmzgOSUBxtwRREzm4dbbSWpg.jpg",
   "https://framerusercontent.com/images/NtD7FYSEkxzVJW6tpIi0g5EH5TA.jpg",
   "https://framerusercontent.com/images/4LFU8Cq7mk1VvnCcbIQEGIKGCJo.jpg",
   "https://framerusercontent.com/images/ironaSGed7t6ehGnlfMZkcn4.jpg",
   "https://framerusercontent.com/images/1gQYkc4HnZ2CtJ19FcGUin7vnQ.jpg",
   "https://framerusercontent.com/images/gVvKPEMSi6gRHYJJCQTDF2PEY.jpg",
   "https://framerusercontent.com/images/MQpegeNnVDhy9Zp6eQGP42Sfhf4.jpg",
   "https://framerusercontent.com/images/QuB2khHPnMxU0ySQL0nx9d6Id8.jpg",
   "https://framerusercontent.com/images/eVZyhSJ4SVzzORlUvHScFCV0rE.jpg",
   "https://framerusercontent.com/images/Fj73ssx4FCGN67fPtcbY5HE9k.jpg",
   "https://framerusercontent.com/images/QtqMM8jH2oKfJAAvBcS9UpUvnc.jpg",
   "https://framerusercontent.com/images/xEWToHyKViaXim9zSp4o6xky5JQ.jpg"
  ],
  "link": "geotech-demo.html"
 },
 {
  "slug": "land-use-change-peak-river-discharge",
  "title": "Land-Use Change & Peak River Discharge in Ibu Kota Nusantara",
  "summary": "12 WRF-Hydro simulations for DAS Sepaku in the IKN region to inform flood-risk planning for Indonesia's new capital.",
  "cover": "https://framerusercontent.com/images/1jwrsA8DksuZSdKTjZbWTV55kBs.png",
  "category": "Data Analysis · Hydrological Modeling",
  "tools": "WRF-Hydro, Geospatial analysis, Satellite rainfall",
  "client": "Undergraduate Thesis, Bandung Institute of Technology",
  "date": "2026-01-30",
  "content": "<h2 dir=\"auto\">Overview</h2><p dir=\"auto\">This study simulates how land-use change in the IKN region (Indonesia's new capital) affects peak river discharge and flooding in the Sepaku watershed (DAS Sepaku). I ran 12 WRF-Hydro simulations: 6 rainfall return periods (2, 5, 10, 20, 50, and 100 years) under 2 land-use scenarios, the default land cover (noIKN) and the future IKN scenario.</p><h2 dir=\"auto\">Methodology</h2><p dir=\"auto\">Satellite rainfall (GPM and CHIRPS) was bias-corrected against rain-gauge data from the Indonesian Agency for Meteorology, Climatology, and Geophysics (BMKG) using Delta Quantile Mapping and evaluated with BIAS, MAE, RMSE, CC, PBIAS, CDF, and percentile checks. Areal rainfall, annual maximum series of 24-hour rainfall, and Gumbel distribution fits produced the design rainfall for each return period. The model was calibrated on the Upper Citarum watershed (30 parameter combinations) and validated on a separate event before being applied to Sepaku.</p><h2 dir=\"auto\">Figures</h2><p dir=\"auto\">Swipe through the gallery above: workflow, study areas, design rainfall, calibration, land-use and land-surface scenarios, simulated hydrographs, and flood inundation maps for the default and IKN scenarios.</p>",
  "gallery": [
   "https://framerusercontent.com/images/8zrjbLfECc6iThCFOH88ZZihI.jpg",
   "https://framerusercontent.com/images/Gqt2JnGP7C6T2DHjmzR8dLOEU6k.jpg",
   "https://framerusercontent.com/images/bX6or3ibRPKOEL6GMLS042Qoxug.jpg",
   "https://framerusercontent.com/images/B24HlNaLSLlgYxblMEPQbBc0.jpg",
   "https://framerusercontent.com/images/qen47aTaVh0WHok4tfzDLvRoELc.jpg",
   "https://framerusercontent.com/images/dl1XPieACJaVdH4KT7UqIZpvQo4.jpg",
   "https://framerusercontent.com/images/gDZ9Wx36N5gU5odDVvkbvn6xTDw.jpg",
   "https://framerusercontent.com/images/NVWpjFJMPvjeAAULuhN0V3Hv1Yw.jpg",
   "https://framerusercontent.com/images/QBnV9KC9jy6CK8njB1TcfNzUF2M.jpg",
   "https://framerusercontent.com/images/7juIQyWp9sUzD2rNn6OiNCauU.jpg",
   "https://framerusercontent.com/images/dR6s2VAm5sofJ4Cp04LjULlwLE.jpg",
   "https://framerusercontent.com/images/Q0wMwn453M3PpFpmjgqcCvE.jpg",
   "https://framerusercontent.com/images/8V9Tgj6n7Z7UZS8n1OWaNMcoRJ0.jpg",
   "https://framerusercontent.com/images/X405q6dvQkUWTgtrJuAIfwK4.jpg",
   "https://framerusercontent.com/images/woLFJjLMWWbTbgjf4PK4oD3zB0w.jpg",
   "https://framerusercontent.com/images/luV13Zidfhchn0DcPmeKbbNQBak.jpg",
   "https://framerusercontent.com/images/IaBAjgfH52mqVuneu3rMFqkok.jpg"
  ],
  "link": null
 },
 {
  "slug": "iot-water-level-rainfall-instrument",
  "title": "IoT Water-Level & Rainfall Instrument",
  "summary": "Led a 10-person team from hardware prototype and firmware to field deployment, with a real-time web dashboard.",
  "cover": "https://framerusercontent.com/images/rXrTFpDo5Y6boRCRj71xMiCThiQ.jpg",
  "category": "IoT · Data Engineering",
  "tools": "IoT, Firmware, Web dashboard",
  "client": "Atmosphaira, Bandung Institute of Technology",
  "date": "2026-02-15",
  "content": "<p dir=\"auto\">Led a 10-person team from hardware prototype and firmware to field deployment.</p><p dir=\"auto\">Built a real-time web dashboard combining live telemetry with WRF-Hydro river-discharge predictions.</p>",
  "gallery": [
   "https://framerusercontent.com/images/Znw1YMq4diP2V3wxmBYkueg7O8.jpg",
   "https://framerusercontent.com/images/DU9l0cduUIidNjXm4kHIA186Ic.jpg",
   "https://framerusercontent.com/images/Z9vwDorWfOfQLqipgdEOOX2CaAM.jpg",
   "https://framerusercontent.com/images/veJwR7VuY3tJ6yvogMQprTZSA.jpg",
   "https://framerusercontent.com/images/S2S1f1HrfLHikqpXhbiOFtNQi8.jpg"
  ],
  "link": null
 },
 {
  "slug": "cmip6-climate-downscaling",
  "title": "CMIP6 Climate Downscaling at the Indonesian Agency for Meteorology, Climatology, and Geophysics (BMKG)",
  "summary": "Statistical downscaling of CMIP6 rainfall projections with linear scaling, evaluated against CHIRPS and compared across SSP scenarios.",
  "cover": "https://framerusercontent.com/images/vp4iVXwcclV1LDX5oErGazJ9MA.jpg",
  "category": "Data Analysis · Climate Data",
  "tools": "Python, CMIP6, CHIRPS, Linear scaling",
  "client": "Indonesian Agency for Meteorology, Climatology, and Geophysics (BMKG)",
  "date": "2025-08-29",
  "content": "<h2 dir=\"auto\">Overview</h2><p dir=\"auto\">Internship project at Indonesian Agency for Meteorology, Climatology, and Geophysics (BMKG): analyzing projected changes in rainfall using statistical downscaling with the linear scaling method, with a mine site in West Java as the case study.</p><h2 dir=\"auto\">Data and method</h2><p dir=\"auto\">Global climate model outputs from CMIP6 (about 25 km resolution) were bias-corrected against CHIRPS v2.0 observations (about 10 km) for 1984-2014, using linear scaling in a Python workflow. The pipeline runs pre-processing, bias correction, future projection, an ensemble of models (including CanESM5, MIROC6, and MPI-ESM1-2-HR), and the calculation of climate indices with map visualizations.</p><h2 dir=\"auto\">Results</h2><p dir=\"auto\">Projections for 2015-2045 under SSP2-4.5, SSP3-7.0, and SSP5-8.5 were compared with the 1984-2014 baseline as seasonal totals, wet-day frequency, and extreme daily rainfall (Rx1day). Overall the projections point to wetter conditions, mainly in the wet season, with signs of more intense heavy-rain events.</p><h2 dir=\"auto\">Limitations and next steps</h2><p dir=\"auto\">Model evaluation against CHIRPS showed weak agreement (low correlation), so linear scaling alone did not produce a strong model. Next steps: try quantile mapping, add cross-validation, add indices such as consecutive wet and dry days, and use a longer data period.</p><h2 dir=\"auto\">Slides</h2><p dir=\"auto\">Swipe through the final internship presentation above.</p>",
  "gallery": [
   "https://framerusercontent.com/images/zmXYe9jwTvgp5apKue8mgNi5Jo.jpg",
   "https://framerusercontent.com/images/5m2uyAIBPBlMp2v8FP7YnVFW844.jpg",
   "https://framerusercontent.com/images/oiaNjMIX6SodwcJAuj4eMOB03M.jpg",
   "https://framerusercontent.com/images/TUHXQxTIu5zeoIwzbJJtCIsg2J0.jpg",
   "https://framerusercontent.com/images/j77gOO7x9dDKufzXOyf1VKrZKbw.jpg",
   "https://framerusercontent.com/images/rLBIJDxJAnrKxVCbOMPOpjd1Eg.jpg",
   "https://framerusercontent.com/images/DTkwiEsACZOxnVFGMPO9VQCNs.jpg",
   "https://framerusercontent.com/images/E9xhekjHQFhINZ3ycNVesLa9J8.jpg",
   "https://framerusercontent.com/images/Y1h4RlufnManxlfTCLyi1ffNeu4.jpg",
   "https://framerusercontent.com/images/jo81NKxqFlA1rH6nDMLqsGoW4CE.jpg",
   "https://framerusercontent.com/images/cRznmqACmWMneKOCLcDIynkII.jpg",
   "https://framerusercontent.com/images/1Sy2YC1sp52rTqhPC2iDHLIEKSU.jpg",
   "https://framerusercontent.com/images/x68GtGTTnLx6yTZqGWdAIdt8A5g.jpg",
   "https://framerusercontent.com/images/I5Wd03EfQycZ6lZMjwyDOtaFY4.jpg",
   "https://framerusercontent.com/images/OqpKG2ZH9dq5feiIxnhNfkdbKA.jpg",
   "https://framerusercontent.com/images/7qwpVHElhmHxBHczQplg8ges.jpg"
  ],
  "link": null
 },
 {
  "slug": "machine-learning-rainfall-prediction",
  "title": "Machine-Learning Rainfall Prediction",
  "summary": "Random Forest vs SVM classification of flood type (no flood, flash flood, river overflow) from antecedent rainfall and soil-saturation features.",
  "cover": "https://framerusercontent.com/images/SREupPoOptKU1xscsZ5zaw0uKQg.jpg",
  "category": "Data Analysis · Machine Learning",
  "tools": "scikit-learn, Random Forest, SVM, SMOTE, PCA",
  "client": "Meteorology, Bandung Institute of Technology (ME4064)",
  "date": "2025-12-15",
  "content": "<h2 dir=\"auto\">Overview</h2><p dir=\"auto\">Course project for ME4064 (AI Applications for Hydrometeorology) in Meteorology at Bandung Institute of Technology: a machine-learning system that classifies the type of flood, either no flood, flash flood (bandang), or river overflow (luapan), from antecedent hydrometeorological conditions such as accumulated rainfall and soil saturation.</p><h2 dir=\"auto\">Data and method</h2><p dir=\"auto\">The dataset is synthetic: 500 daily records for a hypothetical tropical-monsoon watershed, with 8 input features (1-day, 3-day, and 7-day rainfall, an antecedent precipitation index for soil saturation, the 1-day to 7-day ratio, temperature, humidity, and wind) and one flood-type label. No-flood days make up 62.2% of the data, so the minority classes were oversampled with SMOTE. Random Forest and SVM (RBF kernel) were compared fairly across three scenarios: default settings, hyperparameter tuning, and PCA.</p><h2 dir=\"auto\">Results</h2><p dir=\"auto\">Both models classify well above the random baseline of about 0.33 macro-F1. Random Forest scored 0.768 with default settings and did not benefit from tuning (0.749). SVM improved from 0.777 to 0.805 after tuning. PCA needed 6 components for 95% of the variance and did not help: it lowered Random Forest by 0.052 and left SVM unchanged.</p><p dir=\"auto\">Feature importance shows 7-day rainfall (about 0.193) and the antecedent precipitation index (about 0.178) as the strongest signals, with rainfall-related features contributing about 76% and supporting variables (humidity, temperature, wind) about 24%.</p><h2 dir=\"auto\">Hydrometeorological interpretation</h2><p dir=\"auto\">Flash floods are marked by very intense short rainfall on already moist soil (high 1-day rainfall and 1-day to 7-day ratio), while river overflow builds up gradually from long accumulation, with a high antecedent index and 7-day rainfall.</p><h2 dir=\"auto\">Limitations and next steps</h2><p dir=\"auto\">The terrain is constant and the basin is hypothetical, and only three flood types are covered. Next steps: add topography from a DEM (slope, drainage, land cover) and extend to tidal, urban, and upstream-driven floods.</p><h2 dir=\"auto\">Slides</h2><p dir=\"auto\">Swipe through the presentation above.</p>",
  "gallery": [
   "https://framerusercontent.com/images/ZifGGfX2FZKHOeIc2JOdtJQX9LE.jpg",
   "https://framerusercontent.com/images/BIH4Vym8yKKwJPJ93c6LIO3m5Xk.jpg",
   "https://framerusercontent.com/images/gzgPdoo2LB8KwXLgbxrOafeAM.jpg",
   "https://framerusercontent.com/images/dje4l10NAEeMc4n2zjuKi7UdYHc.jpg",
   "https://framerusercontent.com/images/6lcQUbESUSGGbg8TUoGM3zZa21E.jpg",
   "https://framerusercontent.com/images/6nYkIzfCrGXuiiwJO6cV7hNvXk.jpg",
   "https://framerusercontent.com/images/9eC8xrq9wluviq4dylYwQPp8fQ.jpg",
   "https://framerusercontent.com/images/WzAEVOwsJreOUtVapZbYFNZlStU.jpg",
   "https://framerusercontent.com/images/5Vy0HuefJHEgwirl0IO3oRt4uM.jpg",
   "https://framerusercontent.com/images/eoIHnVsay7ZBxelcvDsltxOzSYE.jpg",
   "https://framerusercontent.com/images/VE9NYKTCccJIxavtg0f4ygTxM7w.jpg",
   "https://framerusercontent.com/images/kstuk9hfZ4oaIfbGjTOezdCmG0.jpg",
   "https://framerusercontent.com/images/xEG9722lxVFQ9F910zxOid6Zw.jpg",
   "https://framerusercontent.com/images/HK7Gr7BCuuTpWDlqaekaehE12G4.jpg"
  ],
  "link": null
 },
 {
  "slug": "ecos-ev-battery-circular-ownership",
  "title": "ECOS: EV Battery Circular Ownership System",
  "summary": "Battery-as-a-service business case for EV batteries in Indonesia, with a 12-factor risk analysis and the final IEEEBIG pitch deck.",
  "cover": "https://framerusercontent.com/images/vqDTn90ptPqDRXrn0hHSaHruN4.jpg",
  "category": "Data Analysis · Risk Analysis",
  "tools": "Business case, Risk analysis, Python, matplotlib",
  "client": "IEEEBIG 2026",
  "date": "2026-03-01",
  "content": "<h2 dir=\"auto\">Overview</h2><p dir=\"auto\">ECOS (EcoBat Circular Ownership System) is a battery-as-a-service model for Indonesia's EV batteries. I built the business case for the IEEEBIG 2026 pitch: quantified 12 operational and financial risk factors in a risk heatmap, and co-authored the executive summary and financial-viability analysis behind the final pitch.</p><h2 dir=\"auto\">The model</h2><p dir=\"auto\">The proposal combines three pillars: BaaS + Deposit, an SPKLU partner-station network for collection, and a battery-grading facility that routes used cells to second-life use or material recovery. The pitch projects a net benefit of Rp 7.7 trillion over five years.</p><h2 dir=\"auto\">Pitch deck</h2><p dir=\"auto\">Swipe through the final pitch deck above: problem overview, root cause analysis, the three pillars, the financial case, risk management, the implementation road map, and appendices with the decision-support simulation.</p>",
  "gallery": [
   "https://framerusercontent.com/images/6g2X7Q2W3CVU25j66nS7pzAle5M.jpg",
   "https://framerusercontent.com/images/bZMGnGF1CXsVrLKxw1j61vefc.jpg",
   "https://framerusercontent.com/images/QDw8yCZyfceAqkD09ADu9SVG08I.jpg",
   "https://framerusercontent.com/images/s0cjRDTIeILFprP5U5PFw9k9Aw.jpg",
   "https://framerusercontent.com/images/HoHiXgpj7xvtxS61V3GT23uXMk.jpg",
   "https://framerusercontent.com/images/m79pDIpRjbRhZ6EAP6GP08c5ds8.jpg",
   "https://framerusercontent.com/images/IhyPXAJWo5kteVMkXs1RFB8nRY.jpg",
   "https://framerusercontent.com/images/AVipDBl7YstYunxtSp6chCLth4w.jpg",
   "https://framerusercontent.com/images/ybVSijEvRsbVVoa6ODOGDSRSP1s.jpg",
   "https://framerusercontent.com/images/RKNOazGhGaJgbKr0pGK9LKAg.jpg",
   "https://framerusercontent.com/images/33FecygAX98ZjVtFG1wFCJjUbWQ.jpg",
   "https://framerusercontent.com/images/DK2QuBHbqg6tb3CrfONwjnKkURA.jpg",
   "https://framerusercontent.com/images/YXasmKsOT56C5xb8MGvNVrLZkA.jpg",
   "https://framerusercontent.com/images/fuaWaslFxO2J4Mpj5KKnY2NTjU.jpg",
   "https://framerusercontent.com/images/N8Te9FoQCIShTc44VYh4jaIeI.jpg",
   "https://framerusercontent.com/images/QRB2KlaGSCIkypWBylHw01CAlg.jpg",
   "https://framerusercontent.com/images/wYLX5MlwQyAvIzub6q4qeQIbGU.jpg",
   "https://framerusercontent.com/images/EvbG2sbqZWBu64ZNON8phe3wVS4.jpg",
   "https://framerusercontent.com/images/zfdceXSCCwhBvDLoKrEcemkolvQ.jpg",
   "https://framerusercontent.com/images/MuNP0u7axGDral5MhnU6XR3kCrM.jpg",
   "https://framerusercontent.com/images/ehgD0TiHgpAIcBxeEdYGGiKEEeY.jpg",
   "https://framerusercontent.com/images/YicBoG5WSsi1hPALY9WJaLeJg.jpg",
   "https://framerusercontent.com/images/QGlc2rPg1HBIj3VyXzhBi8tXY.jpg",
   "https://framerusercontent.com/images/iiV1hzVRWzUY8ZXdeSqmSEh20U.jpg",
   "https://framerusercontent.com/images/6b14mfcplENDYUtZ029waFRBL2I.jpg"
  ],
  "link": null
 },
 {
  "slug": "jaring-embun-dew-harvesting",
  "title": "Jaring Embun: Dew Harvesting Instrument",
  "summary": "Team project at Bandung Institute of Technology: a fog and dew harvesting net tested in the Lembang highlands to collect clean water, featured by Tempo and Bandung Institute of Technology News.",
  "cover": "https://framerusercontent.com/images/PWOfxZiMbLQuBp9AnMWCmaUAy7s.jpg",
  "category": "Environmental Instrumentation",
  "tools": "Prototype design, Field testing, Data collection",
  "client": "Applied Meteorology Laboratory, Bandung Institute of Technology",
  "date": "2024-12-06",
  "content": "<h2 dir=\"auto\">Overview</h2><p dir=\"auto\">Jaring Embun (\"dew net\") is a fog and dew harvesting prototype built by a Bandung Institute of Technology team of Oceanography and Meteorology students with faculty advisors, to help address clean-water shortages in high-altitude, foggy areas.</p><h2 dir=\"auto\">How it works</h2><p dir=\"auto\">The prototype has two net types: a conventional 1 x 1 meter net, and an electronic version that adds a copper plate. Water condenses from moist air onto the surface and is collected as clean water.</p><h2 dir=\"auto\">Field test</h2><p dir=\"auto\">The team tested the prototype on 22-23 November 2024 in Lembang, West Bandung, a foggy highland where dew is abundant. In three-hour trials the electronic net produced about 30 ml of clean water. The team plans larger-scale versions with more advanced technology to raise water production for communities facing water crises.</p><h2 dir=\"auto\">In the news</h2><ul dir=\"auto\"><li data-preset-tag=\"p\"><p><a href=\"https://en.tempo.co/read/1949487/itb-develops-and-tests-dew-harvesting-tool-to-address-clean-water-crisis\" target=\"_blank\">Tempo: ITB develops and tests dew harvesting tool to address clean water crisis</a></p></li><li data-preset-tag=\"p\"><p><a href=\"https://itb.ac.id/berita/mahasiswa-itb-ciptakan-jaring-embun-solusi-inovatif-atasi-krisis-air/61776\" target=\"_blank\">ITB News: Mahasiswa ITB ciptakan Jaring Embun, solusi inovatif atasi krisis air</a></p></li></ul>",
  "gallery": [
   "https://framerusercontent.com/images/rN1f7ubgdjVLlon34jH5nF38.jpg",
   "https://framerusercontent.com/images/OoxbaQDvxeZoC2UgIDNWNcj5us.jpg",
   "https://framerusercontent.com/images/HnufDdff7kHIWQhdW3C9HsqShO8.jpg"
  ],
  "link": null
 }
];
window.CERTS=[{"title":"TOEFL ITP","issuer":"ETS","date":"2026-10-16","pdf":"assets/TOEFL_ITP_Emelio_Exaudi.pdf","logo":"","note":"Score 523 (Listening 54, Structure 47, Reading 56)"},
 {
  "title": "Microsoft Power BI Data Analyst Professional Certificate",
  "issuer": "Microsoft · Coursera",
  "date": "2026-10-12",
  "image": "https://framerusercontent.com/assets/yx8U3oz0HdIJZ54zVx9Flwl5d4.png",
  "pdf": "https://framerusercontent.com/assets/a3xI1a6ZfuERFIAp2y22cp6eo.pdf",
  "logo": "https://framerusercontent.com/images/4XK5Mdz7sUzwS15UNLhBgnVIE.png"
 },
 {
  "title": "Risk Management Based on SNI ISO 31000",
  "issuer": "BSN Indonesia",
  "date": "2026-10-07",
  "image": "https://framerusercontent.com/assets/hUuU1ddX015guVY6silJ3b7SWA.png",
  "pdf": "https://framerusercontent.com/assets/sE97ov1dPXglMLjXaZuOxPJCg8.pdf",
  "logo": "https://framerusercontent.com/images/uZiwgtdoH5Buj7dxm4ggCewYH0.png"
 },
 {
  "title": "Google Data Analytics Professional Certificate",
  "issuer": "Google · Coursera",
  "date": "2026-09-30",
  "image": "https://framerusercontent.com/assets/aB0SEczga6mUbgIsh5ESw0dGImw.png",
  "pdf": "https://framerusercontent.com/assets/WFRYGfUqwPDlY0rHCBsJoa8pd6M.pdf",
  "logo": "https://framerusercontent.com/images/cIrkDCvqH4mXd1qnwZc46e2yLCc.png"
 },
 {
  "title": "Data Analytics Job Simulation",
  "issuer": "Deloitte · Forage",
  "date": "2026-09-24",
  "image": "https://framerusercontent.com/assets/WlIGS9XCAN7EqZtVYtoA6n38MlE.png",
  "pdf": "https://framerusercontent.com/assets/Uv52XhlJ7AOrHgB5gwSNvpGL8Cc.pdf",
  "logo": "https://framerusercontent.com/images/FEpO6PcYaCt9Eg2CJrWP1yuiNU.png"
 },
 {
  "title": "EF SET English Certificate (C2 Proficient)",
  "issuer": "EF SET · EF Education First",
  "date": "2026-05-17",
  "image": "https://framerusercontent.com/assets/a9Cp7HlhUYu0FCJZJWQbhXhu5g.png",
  "pdf": "https://framerusercontent.com/assets/mYNu3byZdeyzKZFNe7mqeM8L3g.pdf",
  "logo": "https://framerusercontent.com/images/anwxjAXUTtOzxAjoXfahAo2mQk.png"
 },
 {
  "title": "Certificate of Appreciation: Field Practice",
  "issuer": "PT Aneka Tambang Tbk. (ANTAM)",
  "date": "2026-02-13",
  "image": "https://framerusercontent.com/assets/X4koLn2titxEvo8vZXtGUWlio.png",
  "pdf": null,
  "logo": "https://framerusercontent.com/images/33OEzNGbCg48GHmDeqwWP6ScozY.png"
 },
 {
  "title": "CARE for SEA and CORDEX-SEA Technical and Stakeholder Workshop",
  "issuer": "Indonesian Agency for Meteorology, Climatology, and Geophysics (BMKG) · CARE for SEA",
  "date": "2025-08-21",
  "image": "https://framerusercontent.com/assets/rkRI8POCGw7xVcTOiDkxXazYUeE.png",
  "pdf": null,
  "logo": "https://framerusercontent.com/images/bQntW3L6A6NEGYD2y59CPol9KMA.png"
 }
];
