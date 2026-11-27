function validateEvent(input, now = Date.now()) {
 if (!input || typeof input.title !== 'string' || !input.title.trim() || input.title.length > 120) throw new Error('Invalid title');
 if (typeof input.date !== 'string' || !Number.isFinite(Date.parse(input.date)) || Date.parse(input.date) <= now) throw new Error('Invalid date');
 return {title: input.title.trim(), description: typeof input.description === 'string' ? input.description.slice(0, 1000) : '', date: new Date(input.date).toISOString()};
}
async function createEvent(repo, input, now) { return repo.create(validateEvent(input, now)); }
module.exports = {validateEvent, createEvent};
