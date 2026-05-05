import os

df.to_csv('data_nilai.csv', index=False)

if 'data_nilai.csv' in os.listdir():
    print("File CSV sudah tersimpan")
else:
    print("File CSV belum ada")