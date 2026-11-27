import csv
with open('lab4/flow.csv') as f: rows=list(csv.DictReader(f))
print('day,todo,in_progress,review,done')
for d in range(11):
 c=[0]*4
 for r in rows:
  s,v,e=[int(r[k]) for k in ('start_day','review_day','done_day')];c[0 if d<s else 1 if d<v else 2 if d<e else 3]+=1
 print(d,*c,sep=',')
