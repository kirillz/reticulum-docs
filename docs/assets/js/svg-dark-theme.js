/**
 * SVG Dark Theme Handler
 * Автоматически загружает SVG инлайн и применяет цвета для темной темы
 */

(function() {
  'use strict';

  // Цвета для темной темы
  const DARK_THEME_COLORS = {
    // Замены для fill
    fill: {
      '#ffffff': '#37474f',
      '#e3f2fd': '#263238',
      '#fce4ec': '#263238',
      '#e0f7fa': '#263238',
      '#e8f5e9': '#263238',
      '#fff3e0': '#263238',
      '#f3e5f5': '#263238',
      '#eceff1': '#263238',
      '#f5f5f5': '#263238',
      '#bbdefb': '#42a5f5',
      '#e1bee7': '#ab47bc',
      '#c5cae9': '#5c6bc0',
      '#c8e6c9': '#66bb6a',
      '#ffe0b2': '#ffa726',
      '#b2ebf2': '#26c6da',
      '#4dd0e1': '#00acc1',
      '#42a5f5': '#64b5f5',
      '#64b5f6': '#42a5f5',
      '#81c784': '#43a047',
      '#66bb6a': '#43a047',
      '#ffb74d': '#ffa726',
      '#ba68c8': '#8e24aa',
      '#f06292': '#e91e63',
      '#26c6da': '#00bcd4',
      '#00acc1': '#00bcd4',
      '#e57373': '#ef5350',
      '#42a5f5': '#2196f3',
      '#ab47bc': '#9c27b0',
      '#d81b60': '#ad1457',
      '#8e24aa': '#7b1fa2',
      '#7b1fa2': '#4a148c',
      '#5c6bc0': '#3949ab',
      '#26a69a': '#00897b',
      '#ff7043': '#bf360c',
      '#ffa726': '#f57c00',
      '#ff9800': '#e65100',
      '#43a047': '#2e7d32',
      '#ad1457': '#880e4f',
      '#1c2528': '#263238',
      '#1e2933': '#263238',
      // Dark text colors → light
      '#880e4f': '#ad1457',
      '#006064': '#00838f',
      '#4a148c': '#7b1fa2',
      '#6a1b9a': '#8e24aa',
      '#0d47a1': '#42a5f5',
      '#1565c0': '#42a5f5',
      '#1b5e20': '#43a047',
      '#2e7d32': '#43a047',
      '#ef6c00': '#ff9800',
      '#e65100': '#f57c00',
      '#bf360c': '#ff7043',
      '#00838f': '#00acc1',
      '#004d40': '#00695c',
      '#1a237e': '#5c6bc0',
      '#283593': '#5c6bc0',
      '#37474f': '#546e7a',
      '#00796b': '#00897b',
      '#00695c': '#00897b',
      '#00897b': '#26a69a',
      '#555555': '#90a4ae',
      '#666666': '#90a4ae',
      '#333333': '#cfd8dc',
      '#212121': '#cfd8dc',
      '#42a5f5': '#64b5f6',
      '#4caf50': '#81c784',
      '#9c27b0': '#ab47bc',
      '#e91e63': '#f06292',
      '#00bcd4': '#26c6da',
      '#00e676': '#81c784',
      '#ef5350': '#e57373',
      '#1976d2': '#64b5f6'
    },
    // Замены для stroke
    stroke: {
      '#f57c00': '#ff9800',
      '#2196f3': '#64b5f6',
      '#4caf50': '#81c784',
      '#9c27b0': '#ab47bc',
      '#e91e63': '#f06292',
      '#00bcd4': '#26c6da',
      '#006064': '#00838f',
      '#2e7d32': '#43a047',
      '#1b5e20': '#43a047',
      '#1565c0': '#42a5f5',
      '#880e4f': '#ad1457',
      '#4a148c': '#7b1fa2',
      '#3949ab': '#5c6bc0',
      '#8e24aa': '#ab47bc',
      '#00acc1': '#26c6da',
      '#43a047': '#66bb6a',
      '#1976d2': '#64b5f6',
      '#0d47a1': '#64b5f6',
      '#6a1b9a': '#8e24aa',
      '#00695c': '#26a69a',
      '#004d40': '#26a69a',
      '#bf360c': '#ff7043',
      '#1c2528': '#263238',
      '#7b1fa2': '#8e24aa',
      '#ad1457': '#d81b60',
      '#42a5f5': '#64b5f5'
    },
    // Замены для stop-color в градиентах
    stopColor: {
      '#4caf50': '#66bb6a',
      '#2e7d32': '#43a047',
      '#2196f3': '#42a5f5',
      '#1565c0': '#42a5f5',
      '#ff9800': '#ffa726',
      '#e65100': '#f57c00',
      '#9c27b0': '#ab47bc',
      '#4a148c': '#7b1fa2',
      '#607d8b': '#78909c',
      '#37474f': '#546e7a',
      '#e91e63': '#ec407a',
      '#880e4f': '#ad1457',
      '#00bcd4': '#26c6da',
      '#006064': '#00838f',
      '#004d40': '#00695c',
      '#26a69a': '#26a69a',
      '#00695c': '#00897b',
      '#4db6ac': '#4db6ac',
      '#667eea': '#7986cb',
      '#764ba2': '#8e24aa',
      '#7b1fa2': '#8e24aa',
      '#ab47bc': '#ab47bc',
      '#ce93d8': '#ba68c8',
      '#42a5f5': '#42a5f5',
      '#66bb6a': '#66bb6a',
      '#ffa726': '#ffa726',
      '#ef6c00': '#f57c00',
      '#7986cb': '#7986cb',
      '#3949ab': '#5c6bc0',
      '#1976d2': '#42a5f5',
      '#0d47a1': '#2196f3',
      '#bbdefb': '#42a5f5',
      '#ffe0b2': '#ffa726',
      '#ffb74d': '#ffa726',
      '#c8e6c9': '#66bb6a',
      '#81c784': '#43a047',
      '#b2ebf2': '#26c6da',
      '#4dd0e1': '#00acc1',
      '#c5cae9': '#5c6bc0',
      '#e1bee7': '#ab47bc',
      '#ba68c8': '#8e24aa',
      '#1976d2': '#64b5f5',
      '#0d47a1': '#42a5f5'
    }
  };

  /**
   * Применяет цвета темной темы к SVG элементу
   */
  function applyDarkThemeColors(svg) {
    // Применяем ко всем элементам с fill
    svg.querySelectorAll('[fill]').forEach(function(el) {
      var fill = el.getAttribute('fill');
      if (fill && fill.startsWith('url(')) {
        // Это градиент, обрабатываем отдельно
        var gradientId = fill.match(/url\(#(.+?)\)/)[1];
        var gradient = svg.querySelector('#' + gradientId);
        if (gradient) {
          gradient.querySelectorAll('stop').forEach(function(stop) {
            var style = stop.getAttribute('style');
            if (style) {
              var match = style.match(/stop-color:?\s*#?([0-9a-fA-F]{6})/i);
              if (match) {
                var color = '#' + match[1].toLowerCase();
                if (DARK_THEME_COLORS.stopColor[color]) {
                  stop.setAttribute('style', style.replace(color, DARK_THEME_COLORS.stopColor[color]));
                }
              }
            }
          });
        }
      } else if (fill && fill.startsWith('#')) {
        // Нормализуем цвет до 6 символов
        var normalizedFill = fill.length === 4 ? '#' + fill[1] + fill[1] + fill[2] + fill[2] + fill[3] + fill[3] : fill;
        if (DARK_THEME_COLORS.fill[normalizedFill.toLowerCase()]) {
          el.setAttribute('fill', DARK_THEME_COLORS.fill[normalizedFill.toLowerCase()]);
        }
      }
    });

    // Применяем ко всем элементам с stroke
    svg.querySelectorAll('[stroke]').forEach(function(el) {
      var stroke = el.getAttribute('stroke');
      if (stroke && stroke.startsWith('#')) {
        var normalizedStroke = stroke.length === 4 ? '#' + stroke[1] + stroke[1] + stroke[2] + stroke[2] + stroke[3] + stroke[3] : stroke;
        if (DARK_THEME_COLORS.stroke[normalizedStroke.toLowerCase()]) {
          el.setAttribute('stroke', DARK_THEME_COLORS.stroke[normalizedStroke.toLowerCase()]);
        }
      }
    });
  }

  /**
   * Загружает SVG файл и вставляет его инлайн
   */
  function loadSvgInline(img, callback) {
    var src = img.getAttribute('src');
    if (!src) return;

    fetch(src)
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(function(svgText) {
        var parser = new DOMParser();
        var svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
        var svg = svgDoc.querySelector('svg');
        
        if (!svg) return;

        // Сохраняем классы и атрибуты
        svg.setAttribute('class', img.getAttribute('class') || '');
        svg.setAttribute('data-original-src', src);
        
        // Сохраняем размеры
        if (img.width) svg.setAttribute('width', img.width);
        if (img.height) svg.setAttribute('height', img.height);
        
        // Удаляем viewBox если есть проблемы
        if (img.getAttribute('viewBox')) {
          svg.setAttribute('viewBox', img.getAttribute('viewBox'));
        }

        // Применяем темную тему если нужно
        if (document.documentElement.getAttribute('data-md-color-scheme') === 'slate') {
          applyDarkThemeColors(svg);
        }

        // Заменяем img на svg
        img.parentNode.replaceChild(svg, img);
        
        if (callback) callback(svg);
      })
      .catch(function(error) {
        console.error('Error loading SVG:', src, error);
      });
  }

  /**
   * Обновляет цвета SVG при переключении темы
   */
  function updateSvgColors() {
    var isDark = document.documentElement.getAttribute('data-md-color-scheme') === 'slate';
    
    // Находим все инлайн SVG
    document.querySelectorAll('svg.diagram-svg').forEach(function(svg) {
      if (isDark) {
        applyDarkThemeColors(svg);
      } else {
        // Для светлой темы перезагружаем оригинальный SVG
        var originalSrc = svg.getAttribute('data-original-src');
        if (originalSrc) {
          loadSvgInline(svg, function(newSvg) {
            // SVG уже загружен с правильными цветами
          });
        }
      }
    });
  }

  /**
   * Обработка SVG в GLightbox
   */
  function initGlightboxSvgHandler() {
    // Слушаем события GLightbox
    document.addEventListener('glightbox-open', function(event) {
      setTimeout(function() {
        var img = document.querySelector('.glightbox-container .gslide-image img');
        if (img && img.src && img.src.endsWith('.svg')) {
          // Заменяем изображение в glightbox на инлайн SVG
          var svgContainer = document.querySelector('.glightbox-container .gslide-inner');
          if (svgContainer && svgContainer.querySelector('img')) {
            var imgElement = svgContainer.querySelector('img');
            loadSvgInline(imgElement, function(svg) {
              // Увеличиваем SVG для лучшего просмотра
              svg.style.maxWidth = '90vw';
              svg.style.maxHeight = '90vh';
              svg.style.width = 'auto';
              svg.style.height = 'auto';
            });
          }
        }
      }, 100);
    });
  }

  /**
   * Инициализация
   */
  function init() {
    // Находим все изображения с SVG диаграммами (включая обёрнутые в glightbox)
    document.querySelectorAll('img.diagram-svg, .diagram-center img[src$=".svg"], .glightbox img[src$=".svg"]').forEach(function(img) {
      loadSvgInline(img);
    });

    // Инициализируем обработчик GLightbox
    initGlightboxSvgHandler();

    // Слушаем переключение темы
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-md-color-scheme') {
          updateSvgColors();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-md-color-scheme']
    });
  }

  // Запускаем после загрузки DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
