# Docker
`docker build -t social-event:1.0 .` ; `docker run --rm -p 3000:3000 social-event:1.0` ; localhost:3000. `docker compose up --build` нь PostgreSQL-тай ажиллуулна. Кодод жижиг өөрчлөлт хийж дахин build хийн CACHED мөрийг шалгана. Screenshot: app.png, caching.png. Бодит ажиллуулалт хүлээгдэж байна. Compose нууц үг зөвхөн локал демод.
