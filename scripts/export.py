import json
import pandas as pd
import numpy as np

def load_language_map(lang_file):
    with open(lang_file, "r", encoding="utf-8") as f:
        langs = json.load(f)

    lang_map = {}
    for item in langs:
        name = item["name"].strip().lower()
        code = item["code"].strip().lower()

        lang_map[name] = code
        lang_map[name[:2]] = code
        lang_map[name[:3]] = code

    return lang_map


def normalize_language(value, lang_map):
    if value is None:
        return None

    v = str(value).strip().lower()

    if v in lang_map:
        return lang_map[v]

    return v


def excel_to_json(excel_path, lang_file, output_path):
    xls = pd.ExcelFile(excel_path)
    lang_map = load_language_map(lang_file)

    data = {}

    for sheet_name in xls.sheet_names:
        df = pd.read_excel(xls, sheet_name=sheet_name)

        # Reemplazar NaN → None (método recomendado en pandas 2.x)
        df = df.replace({np.nan: None})

        # Normalizar idioma si existe la columna
        for col in df.columns:
            if col.lower() == "idioma":
                df[col] = df[col].apply(lambda x: normalize_language(x, lang_map))

        data[sheet_name.lower()] = df.to_dict(orient="records")

    # Guardar JSON final sin permitir NaN
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(
            data,
            f,
            indent=2,
            ensure_ascii=False,
            allow_nan=False
        )

    print(f"JSON generado correctamente en: {output_path}")


if __name__ == "__main__":
    excel_to_json("./export_files/Biblioteca.xlsx", "./export_files/languages.json", "./export_files/biblioteca.json")
