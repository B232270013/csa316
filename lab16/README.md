# 5–7 минутын хамгаалалтын script
0:00–1:00 асуудал/шийдэл; 1:00–2:00 UML ба layered client-server; 2:00–3:00 event create/list demo; 3:00–4:30 CI, Docker, 3 replica self-healing; 4:30–5:30 AI review, тест; 5:30–6:30 monitoring, DORA жишиг ба дүгнэлт.
## Демо
npm test → docker compose up → event үүсгэх → Actions run → minikube pods → Grafana dashboard. Бодит ажиллуулах, амжилтыг баталгаажуулах шаардлагатай.
## Асуулт
Яагаад layered? Жижиг багт тусгаарласан логик. AI? Validation ба кодын ноорог, review ба тестээр баталгаажуулна. Kubernetes? Replica/self-healing демо, shared DB шаардлагатай.
