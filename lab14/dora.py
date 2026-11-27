import csv, statistics
with open('lab14/deployments.csv') as f: rows=list(csv.DictReader(f))
failed=[r for r in rows if r['failed']=='1']
print('Deployments/week:',len(rows)/2)
print('Mean lead hours:',statistics.mean(float(r['lead_hours']) for r in rows))
print('Failure rate %:',100*len(failed)/len(rows))
print('Mean restore hours:',statistics.mean(float(r['restore_hours']) for r in failed) if failed else 'N/A')
