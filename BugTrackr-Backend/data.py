bugs = []

def add_bug(title, description):
    bug = {
        'id': len(bugs) + 1,
        'title': title,
        'description': description,
        'status': 'open'
    }
    bugs.append(bug)
    return bug
