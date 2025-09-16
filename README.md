Starter Auth API 🚀

NestJS + Prisma + PostgreSQL simple starter API with JWT-based authentication.
ネストジェーエス と ぷりずま + ぽすとぐれえすきゅーえる を りようした、ジェーダブリューティー にんしょうつきの しんぷるな すたーたー API。

------------------------------------------------------------
✨ Features / きのう
- Register new user (/auth/register)
  しんき ゆーざー とうろく
- Login returns JWT (/auth/login)
  ろぐいん で ジェーダブリューティー を かえす
- Protected route (/me)
  ジェーダブリューティー がーど つきの ほご るーと

------------------------------------------------------------
🛠️ Tech Stack / しようぎじゅつ
- NestJS – backend framework
- Prisma – ORM
- PostgreSQL – database
- Docker Compose – local DB setup
- JWT – authentication

------------------------------------------------------------
⚙️ Setup / せっとあっぷ

1. Clone & install / くろーん と いんすとーる
   git clone https://github.com/ryuken25/starter-auth-api.git
   cd starter-auth-api
   npm install

2. Copy environment file / かんきょう ふぁいる を こぴー
   cp .env.example .env

3. Run PostgreSQL with Docker / どっかー で ぽすとぐれえすきゅーえる を きどう
   docker compose up -d

4. Push Prisma schema / ぷりずま すきーま を はんえい
   npx prisma db push

5. Start API / API を きどう
   npm run start:dev

------------------------------------------------------------
📡 API Endpoints / API えんどぽいんと

Register / とうろく
  POST /auth/register
  {
    "email": "demo@example.com",
    "password": "password123"
  }

Login / ろぐいん
  POST /auth/login
  {
    "email": "demo@example.com",
    "password": "password123"
  }

  Response:
  {
    "access_token": "eyJhbGciOiJI..."
  }

Me (Protected) / じぶんのじょうほう
  GET /me
  Authorization: Bearer <access_token>

  Response:
  {
    "userId": "clxyz123",
    "email": "demo@example.com"
  }

------------------------------------------------------------
✅ Roadmap / よてい
- [x] JWT Register/Login
- [x] /me protected route
- [ ] Health check endpoint (/healthz)
- [ ] Unit & Integration tests
- [ ] CI with GitHub Actions
- [ ] Refresh token & logout

------------------------------------------------------------
📖 License / らいせんす
MIT License.

Updated: 2025-09-17
つぎの きのう を ついかしたときに、この README を こうしん していきます。
