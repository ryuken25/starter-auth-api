<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Starter Auth API</title>
  <style>
    body {
      font-family: Arial, "Hiragino Kaku Gothic ProN", "Yu Gothic", Meiryo, sans-serif;
      line-height: 1.6;
      margin: 2rem auto;
      max-width: 800px;
      color: #333;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    code, pre {
      background: #f4f4f4;
      padding: 4px 6px;
      border-radius: 4px;
    }
    pre {
      padding: 10px;
      overflow-x: auto;
    }
    .section {
      margin-bottom: 2rem;
    }
    .jp {
      color: #555;
      font-style: italic;
    }
    ul {
      list-style: "✨ ";
      padding-left: 1.2em;
    }
    footer {
      margin-top: 3rem;
      font-size: 0.9em;
      text-align: center;
      color: #777;
    }
  </style>
</head>
<body>
  <h1>Starter Auth API 🚀</h1>
  <p>
    <strong>NestJS + Prisma + PostgreSQL</strong> simple starter API with JWT-based authentication.<br />
    <span class="jp">ネストジェーエス と ぷりずま + ぽすとぐれえすきゅーえる を りようした、ジェーダブリューティー にんしょうつきの しんぷるな すたーたー API。</span>
  </p>

  <div class="section">
    <h2>✨ Features / <span class="jp">きのう</span></h2>
    <ul>
      <li>Register new user (<code>/auth/register</code>)<br /><span class="jp">しんき ゆーざー とうろく</span></li>
      <li>Login returns JWT (<code>/auth/login</code>)<br /><span class="jp">ろぐいん で ジェーダブリューティー を かえす</span></li>
      <li>Protected route (<code>/me</code>)<br /><span class="jp">ジェーダブリューティー がーど つきの ほご るーと</span></li>
    </ul>
  </div>

  <div class="section">
    <h2>🛠️ Tech Stack / <span class="jp">しようぎじゅつ</span></h2>
    <ul>
      <li>NestJS – backend framework</li>
      <li>Prisma – ORM</li>
      <li>PostgreSQL – database</li>
      <li>Docker Compose – local DB setup</li>
      <li>JWT – authentication</li>
    </ul>
  </div>

  <div class="section">
    <h2>⚙️ Setup / <span class="jp">せっとあっぷ</span></h2>
    <pre><code># 1. Clone & install
git clone https://github.com/ryuken25/starter-auth-api.git
cd starter-auth-api
npm install

# 2. Copy environment file
cp .env.example .env

# 3. Run PostgreSQL with Docker
docker compose up -d

# 4. Push Prisma schema
npx prisma db push

# 5. Start API
npm run start:dev
</code></pre>
  </div>

  <div class="section">
    <h2>📡 API Endpoints / <span class="jp">API えんどぽいんと</span></h2>

    <h3>Register / <span class="jp">とうろく</span></h3>
    <pre><code>POST /auth/register
{
  "email": "demo@example.com",
  "password": "password123"
}</code></pre>

    <h3>Login / <span class="jp">ろぐいん</span></h3>
    <pre><code>POST /auth/login
{
  "email": "demo@example.com",
  "password": "password123"
}

Response:
{
  "access_token": "eyJhbGciOiJI..."
}</code></pre>

    <h3>Me (Protected) / <span class="jp">じぶんのじょうほう</span></h3>
    <pre><code>GET /me
Header: Authorization: Bearer &lt;access_token&gt;

Response:
{
  "userId": "clxyz123",
  "email": "demo@example.com"
}</code></pre>
  </div>

  <div class="section">
    <h2>✅ Roadmap / <span class="jp">よてい</span></h2>
    <ul>
      <li>[x] JWT Register/Login</li>
      <li>[x] /me protected route</li>
      <li>[ ] Health check endpoint (/healthz)</li>
      <li>[ ] Unit & Integration tests</li>
      <li>[ ] CI with GitHub Actions</li>
      <li>[ ] Refresh token & logout</li>
    </ul>
  </div>

  <footer>
    📖 License: MIT License<br />
    <em>Updated: 2025-09-17</em><br />
    <span class="jp">つぎの きのう を ついかしたときに、この README を こうしん していきます。</span>
  </footer>
</body>
</html>
