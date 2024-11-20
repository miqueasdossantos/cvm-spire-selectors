import sys
import json

seletor_id = sys.argv[1]
tipo_feedback = sys.argv[2]

with open(f'seletores/{seletor_id}.json', 'r+') as file:
    data = json.load(file)
    if tipo_feedback == "Positivo":
        data['pontuacao'] += 5
    elif tipo_feedback == "Negativo":
        data['pontuacao'] -= 10

    file.seek(0)
    json.dump(data, file, indent=4)
    file.truncate()