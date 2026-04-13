#!/usr/bin/env python3
import struct
import sys
from collections import Counter

def extract_png_colors(filepath, num_colors=8):
    """Extrae colores dominantes de un archivo PNG"""
    try:
        with open(filepath, 'rb') as f:
            # Verificar firma PNG
            signature = f.read(8)
            if signature != b'\x89PNG\r\n\x1a\n':
                return {'error': 'No es un archivo PNG válido'}
            
            # Buscar chunk IHDR para obtener dimensiones
            ihdr_len = struct.unpack('>I', f.read(4))[0]
            ihdr_type = f.read(4)
            
            if ihdr_type == b'IHDR':
                width, height, bitdepth, colortype = struct.unpack('>IIBBB', f.read(13))
                
                # Para archivos PNG complejos, hacer análisis simple
                colors = analyze_raw_png(filepath)
                return colors
    except Exception as e:
        return {'error': str(e)}

def analyze_raw_png(filepath):
    """Análisis básico de bytes RGB del PNG"""
    try:
        with open(filepath, 'rb') as f:
            data = f.read()
        
        # Buscar patrones de color (simplificado)
        colors = {}
        step = 50  # muestreo cada 50 bytes
        
        for i in range(0, len(data) - 3, step):
            if data[i] < 255:  # evitar datos de compresión
                r, g, b = data[i], data[i+1], data[i+2]
                
                # Ignorar blanco y negro casi puros
                if not (r > 240 and g > 240 and b > 240) and not (r < 15 and g < 15 and b < 15):
                    hex_color = f'#{r:02X}{g:02X}{b:02X}'
                    colors[hex_color] = colors.get(hex_color, 0) + 1
        
        # Retornar top colores
        top_colors = sorted(colors.items(), key=lambda x: x[1], reverse=True)[:5]
        return {
            'colors': [c[0] for c in top_colors],
            'raw_found': True
        }
    except:
        return {'error': 'No se pudo analizar'}

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Uso: python script.py <ruta_logo.png>")
        sys.exit(1)
    
    result = extract_png_colors(sys.argv[1])
    print(result)
