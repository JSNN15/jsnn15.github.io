PROMPT = ('You are a safety inspector reviewing a photo from an industrial worksite. '
          'Count every person whose head is visible, even if small or partly occluded. '
          'For each, decide if they wear a hard hat (safety helmet). Caps, hoods or hair do not count as a hard hat. '
          'Answer ONLY with JSON: {"with_helmet": <int>, "without_helmet": <int>}')
