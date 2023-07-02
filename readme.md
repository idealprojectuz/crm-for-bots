Assalomu alaykum infinity jamoasining loyihasiga xush kelibsiz ko'rib turganingiz backend qismi backend 2 qismga bo'lingan birinchisi
Web server ikkinchisi esa telegram bot hisoblanadi ularni ishga tushurish uchun

loyihaning backend documentatsiyasini quyigai postman documentatsiyasidan topasiz
https://documenter.getpostman.com/view/22823127/2s93z6eQ8h#7eb33937-e30f-4931-8251-f75b0869e7c2

loyihada tizimga kirish uchun 2 user uchun demo login va parollar quyidagicha

role administrator
{
"phone": "900860011",
"password": "demo"
}
role assistants
{
"phone": "991234567",
"password": "demo"
}

birinchi hamma o'rnatilgan packeglarni o'rnatib olishingiz kerak bo'ladi buning uchun

npm i

komandasi yoki
yarn kamandasidan foydalanishingiz mumkin

ushbu dastur 2 qismga bo'lingan shu sababli ishga tushurish ham

hamma paketlarni o'rnatib bo'lganingizdan kegin

npm run start buyug'i yordamida web serverni ishga tushurasiz
yoki yarn run start

telegram botni esa

npm run bot yoki yarn run bot
buyruqlaridan foydalanishingiz mumkin

deploy qilish uchun esa birinchi komyuteringizga pm2 ni o'rnatib olishingiz kerak buni quyidagicha o'rnatishingiz mumkin

npm install pm2 -g
yoki yarn orqali o'rnating

web server uchun

npm run deploy:backend yoki yarn run deploy:backend

telegram bot esa

npm run deploy:bot yoki yarn run deploy:bot
