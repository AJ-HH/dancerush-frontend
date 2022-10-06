import pandas as pd
import os

os.chdir(os.getcwd())
file_path_1 = 'C:\\Users\\Andrew\\projects\\dancerush-frontend\\public\\dancerush_songs.json'
file_path_2 = 'C:\\Users\\Andrew\\projects\\dancerush-frontend\\public\\botsjson.json'

df1 = pd.read_json(file_path_1)
df2 = pd.read_json(file_path_2)
df2 = df2.drop('artist', axis=1)
df2 = df2.drop('category', axis=1)
df2 = df2.drop('links', axis=1)
df2 = df2.drop('discount', axis=1)
df2 = df2.drop('discovery', axis=1)
df2 = df2.drop('record', axis=1)
df2 = df2.drop('folders', axis=1)
df2 = df2.drop('remyurl', axis=1)
df2 = df2.drop('easy', axis=1)
df2 = df2.drop('normal', axis=1)
df2 = df2.drop('notes', axis=1)
df2 = df2.drop('stars', axis=1)
df2 = df2.drop('label', axis=1)
df2 = df2.drop('length', axis=1)
df2 = df2.drop('shortname', axis=1)
df2 = df2.drop('mission', axis=1)
df2 = df2.drop('singlediscount', axis=1)
df2 = df2.drop('normalguide', axis=1)
df2 = df2.drop('group', axis=1)
df2 = df2.drop('unlock', axis=1)
df2 = df2.drop('easyguide', axis=1)
df2 = df2.drop('bpm', axis=1)

df = df1.merge(df2, left_on='song', right_on='title')
data = df.to_json('./final_songs.json', orient='records')


# Used to find if there are any songs that aren't merged correctly
# df = df1[~df1['song'].isin(df2['title'])]

