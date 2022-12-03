<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    protected $table = 'categories';
    protected $guarded = ['id'];

    public function books()
    {
        return $this->hasMany(Books::class);
    }

    use HasFactory;
}
