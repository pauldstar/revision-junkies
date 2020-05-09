<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tip extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function boards()
    {
        return $this->belongsToMany(Tip::class)->withTimestamps();
    }

    public function educationLevels()
    {
        return $this->belongsToMany(EducationLevel::class)->withTimestamps();
    }

    public function tools()
    {
        return $this->belongsToMany(Tool::class)->withTimestamps();
    }

    public function methods()
    {
        return $this->belongsToMany(Method::class)->withTimestamps();
    }
}
