import os
import json

# Diretório onde estão os seletores
SELECTORS_DIR = "../selectors"
OUTPUT_FILE = "../docs/data.js"

def generate_data_js():
    # Lista para armazenar os dados dos seletores
    selectors_data = []

    # Percorrer todos os arquivos no diretório de seletores
    for filename in os.listdir(SELECTORS_DIR):
        if filename.endswith(".json"):
            filepath = os.path.join(SELECTORS_DIR, filename)
            
            # Ler o arquivo JSON
            with open(filepath, "r") as file:
                selector = json.load(file)
                # Extrair os dados necessários
                selectors_data.append({
                    "id": selector.get("id", filename),  # Usar o filename se "id" não estiver no JSON
                    "description": selector.get("description", "Sem descrição"),
                    "score": selector.get("score", 0)  # Pontuação padrão caso não esteja definida
                })

    # Gerar o conteúdo do arquivo `data.js`
    data_js_content = f"const SELECTORS = {json.dumps(selectors_data, indent=2)};"

    # Escrever o conteúdo no arquivo
    with open(OUTPUT_FILE, "w") as output_file:
        output_file.write(data_js_content)

    print(f"Arquivo '{OUTPUT_FILE}' gerado com sucesso!")

if __name__ == "__main__":
    generate_data_js()
