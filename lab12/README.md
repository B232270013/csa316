# AI ашиглалтын тэмдэглэл
Энэ репозитори ChatGPT тусламжтай боловсруулагдсан. Доорх prompt-ууд нь санал болгосон харьцуулалтын жишээ; тусдаа AI туршилтын бодит transcript биш.
## Ерөнхий prompt
Write event validation.
## Контексттэй prompt
Node.js CommonJS дээр title 1–120 тэмдэгт, ирээдүйн хүчинтэй ISO огноо, description 1000 хүртэл, repository dependency injection бүхий validateEvent/createEvent бич. 2 normal, 2 edge, 1 mock test нэм.
## Review
Хоосон title, өнгөрсөн огноо, SQL injection эрсдэлийг авч үзсэн: trim, date validation, параметртэй SQL ашигласан. Гэхдээ authentication/authorization байхгүй, date parser хатуу ISO биш, description чимээгүй тайрагддаг. Бүрэн production-д тохирохгүй. Эцсийн код src/validation.js, test/event.test.js. Тестийн бодит үр дүнг CI-аас авна.
